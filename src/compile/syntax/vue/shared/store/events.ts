import { localSqlStore } from '../local-map';

export const eventsDataStore = (events: VueTypes.Event[]) => {
  const store = localSqlStore<VueTypes.Event, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<VueTypes.Event['protocol']['parameters'][number], 'id', []>;
  const cache: {
    [tagId: string]: {
      parameters: ReturnType<typeof parameters>;
    };
  } = {};

  if (events)
    store.created(events, (item) => {
      cache[item.id] = {
        parameters: parameters({ primaryKey: 'id' }).created(item.protocol.parameters),
      };
    });
  return {
    getEvent(tagId: VueTypes.Event['id']) {
      return store.query(tagId);
    },
    getParameters(tagId: VueTypes.Event['id'], propId: VueTypes.Event['protocol']['parameters'][number]['id']) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
