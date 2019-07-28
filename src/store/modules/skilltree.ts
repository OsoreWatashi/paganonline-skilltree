import { Module, ActionTree, ActionContext, MutationTree } from 'vuex';
import { ICharacter, IViewNode, IViewSkillTree } from '@/types';
import CharacterFactory from '@/model/character-factory';
import NodeFactory from '@/model/node-factory';

const defaultState: IViewSkillTree = {
  character: {
    id: 0,
    name: 'Select a character'
  },
  level: 5,
  totalPointsSpent: 0,
  rootNodes: []
};

export default class Store implements Module<IViewSkillTree, any> {
  public namespaced: boolean = true;

  public state: IViewSkillTree = defaultState;

  public actions: ActionTree<IViewSkillTree, any> = {
    selectCharacter(injectee: ActionContext<IViewSkillTree, any>, payload: ICharacter | number): void {
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
    resetNodes(injectee: ActionContext<IViewSkillTree, any>, payload: IViewNode[]) {
      let minimumPointsSpent: number = 0;
      const nodeWalker = (nodes: IViewNode[]) => {
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
    setLevel(injectee: ActionContext<IViewSkillTree, any>, payload: number) {
      if (payload < 1) {
        payload = 1;
      } else if (payload > 30) {
        payload = 30;
      }
      injectee.commit('setLevel', payload);
    },
    spendPoints(injectee: ActionContext<IViewSkillTree, any>, payload: { node: IViewNode, amount: number }) {
      if (payload.amount > 0) {
        if (injectee.state.totalPointsSpent >= injectee.state.level) {
          return;
        }

        if (payload.node.parent != null && payload.node.parent.pointsSpent < 1) {
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

  public mutations: MutationTree<IViewSkillTree> = {
    selectCharacter(state: IViewSkillTree, payload: ICharacter): void {
      state.character = payload;
    },
    setNodes(state: IViewSkillTree, payload: IViewNode[]): void {
      state.rootNodes = payload;
    },
    setLevel(state: IViewSkillTree, payload: number): void {
      state.level = payload;
    },
    setPointsSpent(state: IViewSkillTree, payload: number) {
      state.totalPointsSpent = payload;
    },
    spendPoints(state: IViewSkillTree, payload: { node: IViewNode, amount: number }): void {
      state.totalPointsSpent += payload.amount;
      payload.node.pointsSpent += payload.amount;
    }
  };
}
