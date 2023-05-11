import { localSqlStore } from '../local-map';

export const apisDataStore = (apis: GlobalContext.Api[]) => {
  const store = localSqlStore<GlobalContext.Api, 'id', []>({ primaryKey: 'id' });
  const bodys = localSqlStore<CodeSchema.Property_Protocol, 'id', []>;
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
    getApi(apiId: GlobalContext.Api['id']) {
      return store.query(apiId);
    },
    getApiBody(apiId: GlobalContext.Action['id'], bodyId: CodeSchema.Property_Protocol['id']) {
      return cache[apiId]?.bodysStore.query(bodyId);
    },
  };
};
