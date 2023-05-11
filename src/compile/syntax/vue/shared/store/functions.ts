import { localSqlStore } from '../local-map';

export const functionsDataStore = (functions: GlobalContext.Function[]) => {
  const store = localSqlStore<GlobalContext.Function, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<GlobalContext.Function['protocol']['parameters'][number], 'id', []>;
  const cache: {
    [tagId: string]: {
      parameters: ReturnType<typeof parameters>;
    };
  } = {};

  if (functions)
    store.created(functions, (item) => {
      cache[item.id] = {
        parameters: parameters({ primaryKey: 'id' }).created(item.protocol.parameters),
      };
    });
  return {
    getFunction(tagId: GlobalContext.Function['id']) {
      return store.query(tagId);
    },
    getParameters(
      tagId: GlobalContext.Function['id'],
      propId: GlobalContext.Function['protocol']['parameters'][number]['id']
    ) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
