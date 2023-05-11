import { localSqlStore } from '../local-map';

export const pagesDataStore = (pages?: GlobalContext.Page[]) => {
  const store = localSqlStore<GlobalContext.Page, 'id', []>({ primaryKey: 'id' });
  const querysStore = localSqlStore<CodeSchema.Property_Protocol, 'id', []>;
  const cache: {
    [pageId: string]: {
      querysStore?: ReturnType<typeof querysStore>;
    };
  } = {};
  if (pages)
    store.created(pages, (item) => {
      cache[item.id] = {};
      if (item.protocol.route?.query) {
        cache[item.id].querysStore = querysStore({ primaryKey: 'id' }).created(item.protocol.route.query);
      }
    });
  return {
    pages() {
      return pages;
    },
    getPage(id: GlobalContext.Page['id']) {
      return store.query(id);
    },
    getQuery(pageId: GlobalContext.Page['id'], queryId: CodeSchema.Property_Protocol['id']) {
      return cache[pageId].querysStore?.query(queryId);
    },
  };
};
