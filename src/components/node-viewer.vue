<template>
  <div class="node" :class="parentNode == null ? 'root' : ''">
    <div
      v-for="child in (parentNode != null ? parentNode.children : rootNodes)"
      :key="child.id"
      :class="states(child)"
    >
      <img :src="nodeIcon(child)" />
      <span>{{child.name}} lvl{{child.levelRequirement}} - {{child.pointsSpent || 0}}/{{child.maximumPoints}}</span>
      <button
        :disabled="child.pointsSpent <= child.minimumPoints"
        @click="spendPoints({node: child, amount: -1})"
      >-</button>
      <button
        :disabled="child.pointsSpent >= child.maximumPoints"
        @click="spendPoints({node: child, amount: 1})"
      >+</button>
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
  computed: {
    ...mapState('SkillTree', ['character', 'rootNodes'])
  }, methods: {
    ...mapActions('SkillTree', ['spendPoints'])
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

  > div > img {
    align-self: center;
  }

  > div > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.root {
    > div {
      display: flex;
      flex-direction: row;
    }
  }

  .node > div {
    display: flex;
    flex-direction: row;
  }
}
</style>
