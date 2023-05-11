import { localSqlStore } from '../local-map';

export const propertiesDataStore = (
  properties: CodeSchema.Property_Protocol[],
  itemCallback?: (item: CodeSchema.Property_Protocol, index: number) => void
) => {
  const store = localSqlStore<CodeSchema.Property_Protocol, 'id', []>({ primaryKey: 'id' });

  if (properties) {
    store.created(properties, itemCallback);
  }
  return {
    get(varId: CodeSchema.Property_Protocol['id']) {
      return store.query(varId);
    },
  };
};
