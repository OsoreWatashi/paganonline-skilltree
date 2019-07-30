<template>
  <div class="node" :class="parentNode == null ? 'root' : ''">
    <div v-for="child in (parentNode != null ? parentNode.children : rootNodes)" :key="child.id" :class="states(child)">
      <div class="content" @mouseenter="showTooltip(true, $event)" @mouseleave="showTooltip(false, $event)">
        <span v-if="child.maximumPoints > 1" class="points-spent">{{child.pointsSpent}}</span>
        <img :src="nodeIcon(child)" @click="spendPoints(child, 1, $event)" @contextmenu="spendPoints(child, -1, $event)" />
        <div class="tooltip">Tooltip for {{child.name}}</div>
      </div>
      <node-viewer v-if="child.children != null && child.children.length > 0" :parentNode="child" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import { IViewNode } from '@/types';
import NodeFactory from '@/model/node-factory';

@Component({
  name: 'node-viewer',
  computed: {
    ...mapState('SkillTree', ['character', 'rootNodes'])
  }
})
export default class NodeViewer extends Vue {
  @Prop()
  private parentNode?: IViewNode;

  private nodeIcon(node: IViewNode): string {
    const states = this.states(node).split(' ');
    const isAvailable = states.some((x) => x === 'available');
    const isActive = states.some((x) => x === 'active');
    const folderName = this.$store.state.SkillTree.character.name.toLowerCase();

    const state = isActive
      ? 'active'
      : isAvailable
        ? 'available'
        : 'inactive';
    if (node.iconName === 'minor' || node.iconName === 'major') {
      return require('@/assets/' + node.iconName + '-' + state + '.png');
    } else {
      return require('@/assets/' + folderName + '/' + node.iconName + '-' + state + '.png');
    }
  }

  private states(node: IViewNode): string {
    const result: string[] = [];

    if (node.pointsSpent > 0) {
      result.push('active');
    }
    if (this.$store.getters['SkillTree/pointAvailable'] &&
      (node.parent == null || node.parent.pointsSpent > 0) &&
      node.levelRequirement <= this.$store.state.SkillTree.level) {
      result.push('available');
    }

    return result.join(' ');
  }

  private showTooltip(show: boolean, event: Event): void {
    if (show) {
      (event.target as Element).classList.add('show-tooltip');
    } else {
      (event.target as Element).classList.remove('show-tooltip');
    }
  }

  private spendPoints(node: IViewNode, amount: number, event: Event): boolean {
    this.$store.dispatch('SkillTree/spendPoints', {node, amount});
    event.preventDefault();
    return false;
  }
}
</script>

<style lang="scss" scoped>
.node {
  color: grey;

  > .active {
    color: black;
  }

  > .available:not(.active) {
    color: blue;
  }

  &.root {
    > div {
      display: flex;
      flex-direction: row;
    }
  }

  div > div.content {
    align-self: center;
    position: relative;

    .points-spent {
      color: gold;
      font-size: 24px;
      line-height: 1.5em;
      background: black;
      border: 2px solid gold;
      border-radius: 50%;

      display: inline-block;
      width: 1.5em;
      height: 1.5em;
      text-align: center;

      position: absolute;
      top: calc(1.5em / -2);
      left: calc(1.5em / -2);
    }

    img {
      align-self: center;
    }

    .tooltip {
      display: none;
    }
    &.show-tooltip .tooltip {
      display: inline;
    }
  }

  .node > div:not(.content) {
    display: flex;
    flex-direction: row;
  }
}
</style>
