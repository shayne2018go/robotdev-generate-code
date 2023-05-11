import { localSqlStore } from '../local-map';

export const apisDataStore = (apis: VueTypes.Api[]) => {
  const store = localSqlStore<VueTypes.Api, 'id', []>({ primaryKey: 'id' });
  const bodys = localSqlStore<VueTypes.Api['protocol']['response']['body'][number], 'id', []>;
  const cache: {
    [apiId: string]: {
      bodysStore: ReturnType<typeof bodys>;
    };
  } = {};
  if (apis) {
    store.created(apis, (item) => {
      cache[item.id] = {
        bodysStore: bodys({ primaryKey: 'id' }).created(item.protocol.response?.body || []),
      };
    });
  }
  return {
    apis() {
      return apis;
    },
    getApi(apiId: VueTypes.Api['id']) {
      return store.query(apiId);
    },
    getApiBody(apiId: VueTypes.Action['id'], bodyId: VueTypes.Api['protocol']['response']['body'][number]['id']) {
      return cache[apiId]?.bodysStore.query(bodyId);
    },
  };
};
