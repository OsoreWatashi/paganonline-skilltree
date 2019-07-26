export type CharacterName = 'Select a character' | 'Anya' | 'Dameer' | 'Istok' | 'Kingewitch' | 'Lukian' | 'Masha' | 'Marokh' | 'Valeria';

export interface ICharacter {
  id: number;
  name: CharacterName;
}

export interface ISkillTree {
  character: ICharacter;
  level: number;
  totalPointsSpent: number;
  rootNodes: INode[];
}

export interface INode {
  id: number;
  parentid?: number;
  name: string;
  levelRequirement: number;
  minimumPoints: number;
  maximumPoints: number;

  pointsSpent?: number;
  parent?: INode;
  children?: INode[];
}
