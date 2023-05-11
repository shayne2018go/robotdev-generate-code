import { localSqlStore } from '../local-map';

export const propsDataStore = (props: GlobalContext.Property[]) => {
  const store = localSqlStore<GlobalContext.Property, 'id', []>({ primaryKey: 'id' });
  const types = localSqlStore<GlobalContext.Property['protocol']['types'][number], 'id', []>;
  const cache: {
    [tagId: string]: {
      types: ReturnType<typeof types>;
    };
  } = {};

  if (props)
    store.created(props, (item) => {
      cache[item.id] = {
        types: types({ primaryKey: 'id' }).created(item.protocol.types),
      };
    });
  return {
    getProp(tagId: GlobalContext.Property['id']) {
      return store.query(tagId);
    },
    getTypes(tagId: GlobalContext.Property['id'], propId: GlobalContext.Property['protocol']['types'][number]['id']) {
      return cache[tagId]?.types.query(propId!);
    },
  };
};
