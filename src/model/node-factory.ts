import { ICharacter, INode, IViewNode, CharacterName } from '@/types';
import NodesAnya from './skilltrees/anya';


export default class NodeFactory {
  private static loadedNodes: Map<CharacterName, IViewNode[]> = new Map<CharacterName, IViewNode[]>();

  public static getNodes(character: ICharacter): IViewNode[] {
    if (this.loadedNodes.has(character.name)) {
      return this.loadedNodes.get(character.name)!;
    }

    let nodes: IViewNode[];
    switch (character.name) {
      case 'Anya': nodes = this.getAnyaNodes(); break;
      case 'Dameer': nodes = this.getDameerNodes(); break;
      case 'Istok': nodes = this.getIstokNodes(); break;
      case 'Kingewitch': nodes = this.getKingeWitchNodes(); break;
      case 'Lukian': nodes = this.getLukianNodes(); break;
      case 'Masha': nodes = this.getMashaNodes(); break;
      case 'Marokh': nodes = this.getMarokhNodes(); break;
      case 'Valeria': nodes = this.getValeriaNodes(); break;

      default: return [];
    }

    this.loadedNodes.set(character.name, nodes);
    return nodes;
  }

  private static getAnyaNodes(): IViewNode[] {
    const nodes = NodesAnya;
    const result = this.convertToViewNodes(nodes);
    return result.nodes;
  }

  private static getDameerNodes(): IViewNode[] {
    return [];
  }

  private static getIstokNodes(): IViewNode[] {
    return [];
  }

  private static getKingeWitchNodes(): IViewNode[] {
    return [];
  }

  private static getLukianNodes(): IViewNode[] {
    return [];
  }

  private static getMashaNodes(): IViewNode[] {
    return [];
  }

  private static getMarokhNodes(): IViewNode[] {
    return [];
  }

  private static getValeriaNodes(): IViewNode[] {
    return [];
  }

  private static convertToViewNodes(nodes: INode[], id?: number, parent?: IViewNode): { nodes: IViewNode[], lastId: number } {
    if (id == null) {
      id = 0;
    }

    const result: IViewNode[] = new Array(nodes.length);
    for (let index = 0, length = nodes.length; index < length; ++index) {
      const node = nodes[index];
      const viewNode: IViewNode = {
        id: ++id,
        pointsSpent: node.minimumPoints,
        parent: parent != null ? parent : null,
        iconName: node.iconName,
        description: node.description,
        effects: node.effects || [],
        children: [],

        name: node.name,
        levelRequirement: node.levelRequirement,
        minimumPoints: node.minimumPoints,
        maximumPoints: node.maximumPoints
      };
      if (node.children != null) {
        const nestedResult = this.convertToViewNodes(node.children, id, viewNode);
        viewNode.children = nestedResult.nodes;
        id = nestedResult.lastId;
      }
      result[index] = viewNode;
    }

    return { nodes: result, lastId: id };
  }
}
