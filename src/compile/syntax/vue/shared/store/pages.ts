import { propertiesDataStore } from './properties';

interface Members {
  querysStore: ReturnType<typeof propertiesDataStore>;
}

interface PageMapItem {
  data: GlobalContext.Page;
  members: Members;
}
interface ComponentMap {
  [id: string]: PageMapItem;
}

export const pagesDataStore = (pages: GlobalContext.Page[]) => {
  const pageMap: ComponentMap = {};

  pages.forEach((item) => {
    pageMap[item.id] = {
      data: item,
      members: {
        querysStore: propertiesDataStore(item.protocol.route?.query || []),
      },
    };
  });

  return {
    pages() {
      return pages;
    },
    getPage(pageId: GlobalContext.Page['id']): GlobalContext.Page | undefined {
      return pageMap[pageId].data;
    },
    getQuery(pageId: GlobalContext.Page['id'], queryId: CodeSchema.Property_Protocol['id']) {
      return pageMap[pageId].members.querysStore.findId(queryId);
    },
  };
};
