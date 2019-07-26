import { ICharacter } from '@/types';

export default class CharacterFactory {
  private static availableCharacters: ICharacter[];

  public static getAvailableCharacters(): ICharacter[] {
    if (this.availableCharacters == null) {
      let id = 0;
      this.availableCharacters = [{ id: ++id, name: 'Anya' },
      { id: ++id, name: 'Dameer' },
      { id: ++id, name: 'Istok' },
      { id: ++id, name: 'Kingewitch' },
      { id: ++id, name: 'Lukian' },
      { id: ++id, name: 'Masha' },
      { id: ++id, name: 'Marokh' },
      { id: ++id, name: 'Valeria' }];
    }

    return this.availableCharacters;
  }

  public static getCharacter(id: number): ICharacter | null {
    const matchedCharacters = this.availableCharacters.filter((x) => x.id === id);
    return matchedCharacters.length === 1
      ? matchedCharacters[0]
      : null;
  }
}
