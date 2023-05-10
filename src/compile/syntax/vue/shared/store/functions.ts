import { localSqlStore } from '../local-map';

export const functionsDataStore = (functions: VueTypes.Function[]) => {
  const store = localSqlStore<VueTypes.Function, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<VueTypes.Function['protocol']['parameters'][number], 'id', []>;
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
    getFunction(tagId: VueTypes.Function['id']) {
      return store.query(tagId);
    },
    getParameters(tagId: VueTypes.Function['id'], propId: VueTypes.Function['protocol']['parameters'][number]['id']) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
