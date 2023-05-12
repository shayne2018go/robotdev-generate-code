import { localSqlStore } from '../local-map';
import { propertiesDataStore } from './properties';

export const apisDataStore = (apis: GlobalContext.Api[]) => {
  const store = localSqlStore<GlobalContext.Api, 'id', []>({ primaryKey: 'id' });
  const cache: {
    [apiId: string]: {
      bodysStore: ReturnType<typeof propertiesDataStore>;
    };
  } = {};
  if (apis) {
    store.created(apis, (item) => {
      cache[item.id] = {
        bodysStore: propertiesDataStore(item.protocol.response?.body || []),
      };
    });
  }
  return {
    apis() {
      return apis;
    },
    getApi(apiId: GlobalContext.Api['id']) {
      if (!cache[apiId]) {
        return;
      }
      return {
        data: store.query(apiId),
        members: cache[apiId],
      };
    },
    getApiBody(apiId: GlobalContext.Action['id'], bodyId: CodeSchema.Property_Protocol['id']) {
      return cache[apiId]?.bodysStore.findId(bodyId);
    },
  };
};
