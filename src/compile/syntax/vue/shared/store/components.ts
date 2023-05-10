import { localSqlStore } from '../local-map';

export const componentsDataStore = (components?: VueTypes.Component[]) => {
  const store = localSqlStore<VueTypes.Component, 'id', []>({ primaryKey: 'id' });
  const propsStore = localSqlStore<VueTypes.Component['protocol']['props'][number], 'id', []>;
  const emitsStore = localSqlStore<VueTypes.Component['protocol']['emits'][number], 'id', []>;
  const slotsStore = localSqlStore<VueTypes.Component['protocol']['slots'][number], 'id', []>;
  const cache: {
    [tagId: string]: {
      propsStore: ReturnType<typeof propsStore>;
      emitsStore: ReturnType<typeof emitsStore>;
      slotsStore: ReturnType<typeof slotsStore>;
    };
  } = {};
  if (components)
    store.created(components, (item) => {
      cache[item.id] = {
        propsStore: propsStore({ primaryKey: 'id' }).created(item.protocol.props),
        emitsStore: emitsStore({ primaryKey: 'id' }).created(item.protocol.emits),
        slotsStore: slotsStore({ primaryKey: 'id' }).created(item.protocol.slots),
      };
    });
  return {
    getCmpt(tagId: VueTypes.Component['id']) {
      return store.query(tagId);
    },
    getProp(tagId: VueTypes.Component['id'], propId: VueTypes.Component['protocol']['props'][number]['id']) {
      return cache[tagId]?.propsStore.query(propId);
    },
    getEmit(tagId: VueTypes.Component['id'], emitId: VueTypes.Component['protocol']['emits'][number]['id']) {
      return cache[tagId]?.emitsStore.query(emitId);
    },
    getSlot(tagId: VueTypes.Component['id'], slotId: VueTypes.Component['protocol']['slots'][number]['id']) {
      return cache[tagId]?.slotsStore.query(slotId);
    },
  };
};
