<template>
  <div>
    <character-selector />
    <node-viewer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterSelector from '@/components/character-selector.vue';
import NodeViewer from '@/components/node-viewer.vue';

@Component({components: {
  'character-selector': CharacterSelector,
  'node-viewer': NodeViewer
}})
export default class Appr extends Vue {}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
