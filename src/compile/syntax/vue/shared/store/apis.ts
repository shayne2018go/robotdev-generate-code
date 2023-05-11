import { localSqlStore } from '../local-map';

export const apisDataStore = (apis: GlobalContext.Api[]) => {
  const store = localSqlStore<GlobalContext.Api, 'id', []>({ primaryKey: 'id' });
  if (apis) store.created(apis);

  return {
    getApi(tagId: GlobalContext.Api['id']) {
      return store.query(tagId);
    },
  };
};
