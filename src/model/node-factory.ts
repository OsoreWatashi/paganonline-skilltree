import { ICharacter, INode, CharacterName } from '@/types';

export default class NodeFactory {
  private static loadedNodes: Map<CharacterName, INode[]> = new Map<CharacterName, INode[]>();

  public static getNodes(character: ICharacter): INode[] {
    if (this.loadedNodes.has(character.name)) {
      return this.loadedNodes.get(character.name)!;
    }

    let nodes: INode[];
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

  private static getAnyaNodes(): INode[] {
    let id: number = 0;
    const nodes = [
      { id: ++id, name: 'Whiplash', levelRequirement: 1, minimumPoints: 1, maximumPoints: 1, children: [
        { id: ++id, name: 'Blood Clot', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1 },
        { id: ++id, name: 'Quick Fix', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1 },
        { id: ++id, name: 'Bloodboil Explosion', levelRequirement: 1, minimumPoints: 0, maximumPoints: 1 }
      ] },
      { id: ++id, name: 'Bloodsucker', levelRequirement: 2, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Infusion I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Infusion II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Infusion III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Blood Force', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Animalistic Speed I', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Animalistic Speed II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Animalistic Speed III', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Panic', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'A bite from beyond I', levelRequirement: 2, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'A bite from beyond II', levelRequirement: 4, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'A bite from beyond III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Extreme Gore', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] }
      ] },
      { id: ++id, name: 'Swarm', levelRequirement: 6, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Decay I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Decay III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Spawn of Darkness', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'For the Swarm I', levelRequirement: 7, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'For the Swarm I', levelRequirement: 8, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'For the Swarm II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Vortex', levelRequirement: 11 , minimumPoints: 0, maximumPoints: 1}
            ] }
          ] }
        ] },
        { id: ++id, name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Protection of Flesh I', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Protection of Flesh II', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Protection of Flesh III', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1, children: [
                { id: ++id, name: 'Rejuvenation', levelRequirement: 6, minimumPoints: 0, maximumPoints: 1 }
              ] }
            ] }
          ] }
        ] }
      ] },
      { id: ++id, name: 'Bloodbolt', levelRequirement: 9, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Sticky Blood I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Sticky Blood II', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Sticky Blood III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Piercer', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Fountain of Youth I', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Fountain of Youth II', levelRequirement: 10, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Fountain of Youth III', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Bloodchill Explosion', levelRequirement: 13, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Longevity I', levelRequirement: 9, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Longevity II', levelRequirement: 11, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Longevity III', levelRequirement: 15, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Carnage', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] }
      ] },
      { id: ++id, name: 'Heartbeat', levelRequirement: 12, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Pulse I', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Pulse II', levelRequirement: 12, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Pulse III', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Heart-throb', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Heavy Heart I', levelRequirement: 14, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Heavy Heart II', levelRequirement: 16, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Heavy Heart III', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Restoration', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Warmth I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Warmth II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Warmth III', levelRequirement: 25, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Mass Effect', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] }
      ] },
      { id: ++id, name: 'Blood Spikes', levelRequirement: 17, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Gore Tentacles I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Gore Tentacles II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Gore Tentacles III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Sanguine Protection', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Mass Murder I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Mass Murder II', levelRequirement: 20, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Mass Murder III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Cold Blooded', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Pain and Suffering I', levelRequirement: 17, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Pain and Suffering II', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Pain and Suffering III', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Bloodfreeze', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] }
      ] },
      { id: ++id, name: 'Altar of Gore', levelRequirement: 19, minimumPoints: 0, maximumPoints: 3, children: [
        { id: ++id, name: 'Quick Lashes I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Quick Lashes II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Quick Lashes III', levelRequirement: 26, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Sustenance', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'All About Range I', levelRequirement: 21, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'All About Range II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'All About Range III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Blood Efficiency', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] },
        { id: ++id, name: 'Sanguine Longevity I', levelRequirement: 19, minimumPoints: 0, maximumPoints: 1, children: [
          { id: ++id, name: 'Sanguine Longevity II', levelRequirement: 22, minimumPoints: 0, maximumPoints: 1, children: [
            { id: ++id, name: 'Sanguine Longevity III', levelRequirement: 23, minimumPoints: 0, maximumPoints: 1, children: [
              { id: ++id, name: 'Corruption of Gore', levelRequirement: 30, minimumPoints: 0, maximumPoints: 1 }
            ] }
          ] }
        ] }
      ] } ];

    this.fixParentIds(nodes);
    return nodes;
  }

  private static getDameerNodes(): INode[] {
    let id: number = 0;
    return [
      { id: ++id, name: 'Child of the Forest', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Boomerang Throw / Furious Swipe', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Command: Stance', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Command: Shelter', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Call of the Ravens', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Call of Hrast', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'BEARserk', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 },
      { id: ++id, name: 'Call to Action', levelRequirement: 0, minimumPoints: 0, maximumPoints: 0 }
    ];
  }

  private static getIstokNodes(): INode[] {
    return [];
  }

  private static getKingeWitchNodes(): INode[] {
    return [];
  }

  private static getLukianNodes(): INode[] {
    return [];
  }

  private static getMashaNodes(): INode[] {
    return [];
  }

  private static getMarokhNodes(): INode[] {
    return [];
  }

  private static getValeriaNodes(): INode[] {
    return [];
  }

  private static fixParentIds(nodes: INode[], parent?: INode): void {
    for (const node of nodes) {
      node.parentid = parent != null ? parent.id : undefined;
      node.parent = parent;

      if (node.children != null) {
        this.fixParentIds(node.children, node);
      }
    }
  }
}
