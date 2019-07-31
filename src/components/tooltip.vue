<template>
  <div class="tooltip">
    <span class="title">{{node.name}}</span>
    <span class="description">{{node.description}}</span>
    <div v-if="node.effects.length > 0" class="effects">
      <span v-for="effect in node.effects" :key="1">{{effect}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IViewNode } from '../types';

@Component({
  name: 'tooltip'
})
export default class Tooltip extends Vue {
  @Prop()
  private node?: IViewNode;
}
</script>

<style lang="scss" scoped>
  .tooltip {
    border: 1px solid gold;
    background: black;
    color: gold;
    width: 250px;
    padding: 10px;

    display: flex;
    flex-direction: column;
  }

  .description {
    border-top: 1px solid gold;
    padding-top: 10px;
    margin-top: 10px;
  }

  .effects {
    display: flex;
    flex-direction: column;
    border-top: 1px solid gold;
    padding-top: 10px;
    margin-top: 10px;
  }
</style>
