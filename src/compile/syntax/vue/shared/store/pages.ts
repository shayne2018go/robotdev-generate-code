import { localSqlStore } from '../local-map';

export const pagesDataStore = (pages?: CodeSchema.Page[]) => {
  const store = localSqlStore<CodeSchema.Page, 'id', []>({ primaryKey: 'id' });
  const querysStore = localSqlStore<CodeSchema.Page['route']['query'][number], 'id', []>;
  const cache: {
    [pageId: string]: {
      querysStore: ReturnType<typeof querysStore>;
    };
  } = {};
  if (pages)
    store.created(pages, (item) => {
      cache[item.id] = {
        querysStore: querysStore({ primaryKey: 'id' }).created(item.route?.query),
      };
    });
  return {
    pages() {
      return pages;
    },
    getPage(pageId: CodeSchema.Page['id']) {
      return store.query(pageId);
    },
    getQuery(pageId: CodeSchema.Page['id'], queryId: CodeSchema.Page['route']['query'][number]['id']) {
      return cache[pageId]?.querysStore.query(queryId);
    },
  };
};
