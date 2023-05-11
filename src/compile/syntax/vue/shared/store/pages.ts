import { localSqlStore } from '../local-map';

export const pagesDataStore = (pages?: GlobalContext.Page[]) => {
  const store = localSqlStore<GlobalContext.Page, 'id', []>({ primaryKey: 'id' });
  const queryStore = localSqlStore<CodeSchema.Property_Protocol, 'id', []>;
  const cache: {
    [tagId: string]: {
      queryStore?: ReturnType<typeof queryStore>;
    };
  } = {};
  if (pages)
    store.created(pages, (item) => {
      cache[item.id] = {};
      if (item.protocol.route?.query) {
        cache[item.id].queryStore = queryStore({ primaryKey: 'id' }).created(item.protocol.route?.query);
      }
    });
  return {
    get(id: GlobalContext.Page['id']) {
      return store.query(id);
    },
    getQuery(pageId: GlobalContext.Page['id'], queryId: CodeSchema.Property_Protocol) {
      return cache[pageId].queryStore?.query(queryId);
    },
  };
};
