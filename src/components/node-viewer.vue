<template>
  <div class="node" :class="parentNode == null ? 'root' : ''">
    <div v-for="child in (parentNode != null ? parentNode.children : rootNodes)" :key="child.id" :class="states(child)">
      <span>{{child.name}} lvl{{child.levelRequirement}} - {{child.pointsSpent || 0}}/{{child.maximumPoints}}</span>
      <button :disabled="child.pointsSpent <= child.minimumPoints" @click="spendPoints({node: child, amount: -1})">-</button>
      <button :disabled="child.pointsSpent >= child.maximumPoints" @click="spendPoints({node: child, amount: 1})">+</button>
      <node-viewer v-if="child.children != null && child.children.length > 0" :parentNode="child" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';
import { INode } from '@/types';
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
  private parentNode?: INode;

  private states(node: INode): string {
    const result: string[] = [];

    if (node.pointsSpent! > 0) {
      result.push('active');
    }
    if (node.parent != null && node.parent.pointsSpent! > 0) {
      result.push('available');
    }

    return result.join(' ');
  }
}
</script>

<style lang="scss" scoped>
  .node {
    color: grey;

    & > .active {
      color: black;
    }

    & > .available, &.root {
      &:not(.active) {
        color: blue;
      }
    }

    &.root {
      display: flex;
      flex-direction: column;

      .node {
        display: inline-block;
      }
    }
  }
</style>
