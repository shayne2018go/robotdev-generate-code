import { localSqlStore } from '../local-map';

export const apisDataStore = (apis: VueTypes.Api[]) => {
  const store = localSqlStore<VueTypes.Api, 'id', []>({ primaryKey: 'id' });
  if (apis) store.created(apis);

  return {
    getApi(tagId: VueTypes.Api['id']) {
      return store.query(tagId);
    },
  };
};
