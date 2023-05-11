import { localSqlStore } from '../local-map';

export const componentsDataStore = (components?: GlobalContext.Component[]) => {
  const store = localSqlStore<GlobalContext.Component, 'id', []>({ primaryKey: 'id' });
  const propsStore = localSqlStore<GlobalContext.Component['protocol']['props'][number], 'id', []>;
  const emitsStore = localSqlStore<GlobalContext.Component['protocol']['emits'][number], 'id', []>;
  const slotsStore = localSqlStore<GlobalContext.Component['protocol']['slots'][number], 'id', []>;
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
    getCmpt(tagId: GlobalContext.Component['id']) {
      return store.query(tagId);
    },
    getProp(tagId: GlobalContext.Component['id'], propId: GlobalContext.Component['protocol']['props'][number]['id']) {
      return cache[tagId]?.propsStore.query(propId);
    },
    getEmit(tagId: GlobalContext.Component['id'], emitId: GlobalContext.Component['protocol']['emits'][number]['id']) {
      return cache[tagId]?.emitsStore.query(emitId);
    },
    getSlot(tagId: GlobalContext.Component['id'], slotId: GlobalContext.Component['protocol']['slots'][number]['id']) {
      return cache[tagId]?.slotsStore.query(slotId);
    },
  };
};
