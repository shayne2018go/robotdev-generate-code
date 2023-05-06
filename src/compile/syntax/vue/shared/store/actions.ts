import { VueTypes } from '../../types/vue';
import { localSqlStore } from '../local-map';

export const actionsDataStore = (actions: VueTypes.Action[]) => {
  const store = localSqlStore<VueTypes.Action, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<VueTypes.Action['protocol']['parameters'][number], 'id', []>;
  const cache: {
    [tagId: string]: {
      parameters: ReturnType<typeof parameters>;
    };
  } = {};

  if (actions)
    store.created(actions, (item) => {
      cache[item.id] = {
        parameters: parameters({ primaryKey: 'id' }).created(item.protocol.parameters),
      };
    });
  return {
    getaction(tagId: VueTypes.Action['id']) {
      return store.query(tagId);
    },
    getParameters(tagId: VueTypes.Action['id'], propId: VueTypes.Action['protocol']['parameters'][number]['id']) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
