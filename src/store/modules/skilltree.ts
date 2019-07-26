import { Module, ActionTree, ActionContext, MutationTree } from 'vuex';
import { ICharacter, INode, ISkillTree } from '@/types';
import CharacterFactory from '@/model/character-factory';
import NodeFactory from '@/model/node-factory';

const defaultState: ISkillTree = {
  character: {
    id: 0,
    name: 'Select a character'
  },
  level: 5,
  totalPointsSpent: 0,
  rootNodes: []
};

export default class Store implements Module<ISkillTree, any> {
  public namespaced: boolean = true;

  public state: ISkillTree = defaultState;

  public actions: ActionTree<ISkillTree, any> = {
    selectCharacter(injectee: ActionContext<ISkillTree, any>, payload: ICharacter | number): void {
      let character: ICharacter = payload as ICharacter;
      if (typeof payload === 'number') {
        character = CharacterFactory.getCharacter(payload as number) || defaultState.character;
      }

      if (injectee.state.character.id === character.id) {
        return;
      }

      injectee.commit('selectCharacter', character);

      const nodes = NodeFactory.getNodes(character);
      injectee.dispatch('resetNodes', nodes);
    },
    resetNodes(injectee: ActionContext<ISkillTree, any>, payload: INode[]) {
      let minimumPointsSpent: number = 0;
      const nodeWalker = (nodes: INode[]) => {
        for (const node of nodes) {
          node.pointsSpent = node.minimumPoints;
          minimumPointsSpent += node.pointsSpent;
          if (node.children != null) {
            nodeWalker(node.children);
          }
        }
      };

      nodeWalker(payload);
      injectee.commit('setNodes', payload);
      injectee.commit('setPointsSpent', minimumPointsSpent);
    },
    setLevel(injectee: ActionContext<ISkillTree, any>, payload: number) {
      if (payload < 1) {
        payload = 1;
      } else if (payload > 30) {
        payload = 30;
      }
      injectee.commit('setLevel', payload);
    },
    spendPoints(injectee: ActionContext<ISkillTree, any>, payload: { node: INode, amount: number }) {
      if (payload.amount > 0) {
        if (injectee.state.totalPointsSpent >= injectee.state.level) {
          return;
        }

        if (payload.node.parent != null && payload.node.parent.pointsSpent! < 1) {
          injectee.dispatch('spendPoints', { node: payload.node.parent, amount: 1 });
          injectee.dispatch('spendPoints', { node: payload.node, amount: payload.amount });
          return;
        }

        const maxIncrement = payload.node.maximumPoints - payload.node.pointsSpent!;
        if (payload.amount > maxIncrement) {
          payload.amount = maxIncrement;
        }
      } else if (payload.amount < 0) {
        const maxDecrement = payload.node.minimumPoints - payload.node.pointsSpent!;
        if (payload.amount < maxDecrement) {
          payload.amount = maxDecrement;
        }
        if (payload.amount === maxDecrement) {
          if (payload.node.children != null) {
            for (const child of payload.node.children) {
              injectee.dispatch('spendPoints', { node: child, amount: -100 });
            }
          }
        }
      }

      if (payload.amount !== 0) {
        injectee.commit('spendPoints', payload);
      }
    }
  };

  public mutations: MutationTree<ISkillTree> = {
    selectCharacter(state: ISkillTree, payload: ICharacter): void {
      state.character = payload;
    },
    setNodes(state: ISkillTree, payload: INode[]): void {
      state.rootNodes = payload;
    },
    setLevel(state: ISkillTree, payload: number): void {
      state.level = payload;
    },
    setPointsSpent(state: ISkillTree, payload: number) {
      state.totalPointsSpent = payload;
    },
    spendPoints(state: ISkillTree, payload: { node: INode, amount: number }): void {
      state.totalPointsSpent += payload.amount;
      payload.node.pointsSpent! += payload.amount;
    }
  };
}
