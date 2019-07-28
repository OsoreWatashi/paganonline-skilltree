<template>
  <div>
    <select v-model="character">
      <option disabled value="0">Select a character</option>  
      <option v-for="character in characters" :key="character.id" :value="character.id">{{character.name}}</option>
    </select>
    <span>Level: </span><input type="range" :min="totalPointsSpent" max="30" placeholder="Level" v-model="level"/>
    <span>Spent: {{totalPointsSpent}} / {{level}}</span>
    <label>Hash:</label><input type="text" v-model="hash" style="width:600px"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ICharacter } from '@/types';
import CharacterFactory from '@/model/character-factory';
import { mapState, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapState('SkillTree', ['level', 'totalPointsSpent'])
  }
})
export default class CharacterSelector extends Vue {
  get character(): number {
    return this.$store.state.SkillTree.character.id;
  }
  set character(value: number) {
    this.$store.dispatch('SkillTree/selectCharacter', value);
  }

  get level(): number {
    return this.$store.state.SkillTree.level;
  }
  set level(value: number) {
    this.$store.dispatch('SkillTree/setLevel', value);
  }

  get characters(): ICharacter[] {
    return CharacterFactory.getAvailableCharacters();
  }

  get hash(): string {
    return this.$store.getters['SkillTree/hash'];
  }
  set hash(value: string) {

  }
}
</script>
