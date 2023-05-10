import { localSqlStore } from '../local-map';

export const propsDataStore = (props: VueTypes.Property[]) => {
  const store = localSqlStore<VueTypes.Property, 'id', []>({ primaryKey: 'id' });
  const types = localSqlStore<VueTypes.Property['protocol']['types'][number], 'id', []>;
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
    getProp(tagId: VueTypes.Property['id']) {
      return store.query(tagId);
    },
    getTypes(tagId: VueTypes.Property['id'], propId: VueTypes.Property['protocol']['types'][number]['id']) {
      return cache[tagId]?.types.query(propId!);
    },
  };
};
