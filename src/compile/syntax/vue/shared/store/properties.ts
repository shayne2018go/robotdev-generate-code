import { genVarName } from '../helper';

export interface PropertiesMapItem {
  data: CodeSchema.Property_Protocol;
  varName: string;
  members: TypesTree;
}

interface PropertiesMap {
  [idOrKey: string]: PropertiesMapItem;
}

interface TypesTree {
  data: CodeSchema.Property_Protocol['types'];
  properties?: ReturnType<typeof propertiesDataStore>;
  parameters?: ReturnType<typeof propertiesDataStore>;
  outTypes?: TypesTree;
  itemTypes?: TypesTree;
}

export const typesToMap = (types?: CodeSchema.Property_Protocol['types']) => {
  const typesTree: TypesTree = {
    data: types || [],
  };
  if (!Array.isArray(types)) {
    return typesTree;
  }
  types?.forEach((typeItem) => {
    if (typeItem.multiple) {
      const _typeItem = { ...typeItem };
      delete _typeItem.multiple;
      typeItem = { ...typeItem };
      typeItem.type = 'array';
      typeItem.rules = {
        itemTypes: [_typeItem],
      };
    }
    if (typeItem.type === 'module') {
      typesTree.properties = propertiesDataStore(typeItem.rules?.properties || []);
    } else if (typeItem.type === 'action') {
      typesTree.parameters = propertiesDataStore(typeItem.rules?.parameters || []);
      typesTree.outTypes = typesToMap(typeItem.rules?.outTypes);
    } else if (typeItem.type === 'array') {
      typesTree.itemTypes = typesToMap(typeItem.rules?.itemTypes);
    }
  });
  return typesTree;
};

export const propertiesDataStore = (
  properties: CodeSchema.Property_Protocol[],
  itemCallback?: (item: CodeSchema.Property_Protocol, index: number) => void
) => {
  const propertiesMap: PropertiesMap = {};
  const propertiesKeyMap: PropertiesMap = {};
  const propertiesArray: PropertiesMapItem[] = [];
  const genVariablesNameHandler = genVarName();

  let length = 0;
  if (properties) {
    properties.forEach((item) => {
      itemCallback?.(item, length++);
      propertiesMap[item.id] = {
        data: item,
        varName: genVariablesNameHandler(item.key),
        members: typesToMap(item.types),
      };
      propertiesKeyMap[item.key] = propertiesMap[item.id];
      propertiesArray.push(propertiesMap[item.id]);
    });
  }

  return {
    findAll(): PropertiesMapItem[] {
      return propertiesArray;
    },
    find(
      id_or_Key: CodeSchema.Property_Protocol['id'] | CodeSchema.Property_Protocol['key']
    ): PropertiesMapItem | undefined {
      return propertiesMap[id_or_Key] || propertiesKeyMap[id_or_Key];
    },
    findKey(key: CodeSchema.Property_Protocol['key']): PropertiesMapItem | undefined {
      return propertiesKeyMap[key];
    },
    findId(id: CodeSchema.Property_Protocol['id']): PropertiesMapItem | undefined {
      return propertiesMap[id];
    },
    create(item: CodeSchema.Property_Protocol) {
      itemCallback?.(item, length++);
      propertiesMap[item.id] = {
        data: item,
        varName: genVariablesNameHandler(item.key),
        members: typesToMap(item.types),
      };
      propertiesKeyMap[item.key] = propertiesMap[item.id];
    },
    getProp(propId: GlobalContext.Property['id']) {
      return propertiesMap[propId]?.data;
    },
  };
};
