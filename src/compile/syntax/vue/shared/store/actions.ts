import { localSqlStore } from '../local-map';

export const actionsDataStore = (actions: GlobalContext.Action[]) => {
  const store = localSqlStore<GlobalContext.Action, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<GlobalContext.Action['protocol']['parameters'][number], 'id', []>;
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
    getAction(tagId: GlobalContext.Action['id']) {
      return store.query(tagId);
    },
    getParameters(
      tagId: GlobalContext.Action['id'],
      propId: GlobalContext.Action['protocol']['parameters'][number]['id']
    ) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
