import { localSqlStore } from '../local-map';
import { propertiesDataStore } from './properties';

export const pagesDataStore = (pages?: GlobalContext.Page[]) => {
  const store = localSqlStore<GlobalContext.Page, 'id', []>({ primaryKey: 'id' });
  const cache: {
    [pageId: string]: {
      querysStore?: ReturnType<typeof propertiesDataStore>;
    };
  } = {};
  if (pages)
    store.created(pages, (item) => {
      cache[item.id] = {};
      if (item.protocol.route?.query) {
        cache[item.id].querysStore = propertiesDataStore(item.protocol.route.query);
      }
    });
  return {
    pages() {
      return pages;
    },
    getPage(id: GlobalContext.Page['id']): GlobalContext.Page | undefined {
      return store.query(id);
    },
    getQuery(pageId: GlobalContext.Page['id'], queryId: CodeSchema.Property_Protocol['id']) {
      return cache[pageId].querysStore?.findId(queryId);
    },
  };
};
