import { localSqlStore } from '../local-map';

export const eventsDataStore = (events: GlobalContext.Event[]) => {
  const store = localSqlStore<GlobalContext.Event, 'id', []>({ primaryKey: 'id' });
  const parameters = localSqlStore<GlobalContext.Event['protocol']['parameters'][number], 'id', []>;
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
    getEvent(tagId: GlobalContext.Event['id']) {
      return store.query(tagId);
    },
    getParameters(
      tagId: GlobalContext.Event['id'],
      propId: GlobalContext.Event['protocol']['parameters'][number]['id']
    ) {
      return cache[tagId]?.parameters.query(propId);
    },
  };
};
