import { Identifier } from '@/types/code-schema/Identifier';
import { localSqlStore } from '../local-map';

export const propertiesDataStore = (
  properties: Identifier[],
  itemCallback?: (item: Identifier, index: number) => void
) => {
  const store = localSqlStore<Identifier, 'id', []>({ primaryKey: 'id' });

  if (properties) {
    store.created(properties, itemCallback);
  }
  return {
    get(varId: Identifier['id']) {
      return store.query(varId);
    },
  };
};
