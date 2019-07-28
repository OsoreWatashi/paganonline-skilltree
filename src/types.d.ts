export type CharacterName = 'Select a character' | 'Anya' | 'Dameer' | 'Istok' | 'Kingewitch' | 'Lukian' | 'Masha' | 'Marokh' | 'Valeria';

export interface ICharacter {
  id: number;
  name: CharacterName;
}

export interface ISkillTree {
  character: ICharacter;
  rootNodes: INode[];
}

export interface IViewSkillTree extends ISkillTree {
  level: number;
  totalPointsSpent: number;
}

export interface INode {
  name: string;
  levelRequirement: number;
  minimumPoints: number;
  maximumPoints: number;
  iconName: string;

  children?: INode[]
}

export interface IViewNode extends INode {
  id: number;
  pointsSpent: number;
  parent: IViewNode | null;
  children: IViewNode[];
}
