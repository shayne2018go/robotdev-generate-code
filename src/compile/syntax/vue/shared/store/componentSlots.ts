import { genVarName } from '../helper';
import { propertiesDataStore } from './properties';

export interface SlotMapItem {
  data: CodeSchema.ComponentSlot;
  varName: string;
  members: Members;
}

interface SlotMap {
  [idOrKey: string]: SlotMapItem;
}

interface Members {
  properties?: ReturnType<typeof propertiesDataStore>;
}

export const componentSlotsDataStore = (slots: CodeSchema.ComponentSlot[]) => {
  const slotsMap: SlotMap = {};
  const slotsKeyMap: SlotMap = {};
  const genVariablesNameHandler = genVarName();

  if (slots) {
    if (slots) {
      slots.forEach((item) => {
        slotsMap[item.id] = {
          data: item,
          varName: genVariablesNameHandler(item.key),
          members: {
            properties: propertiesDataStore(item.properties),
          },
        };
        slotsKeyMap[item.key] = slotsMap[item.id];
      });
    }
  }
  return {
    find(id_or_Key: CodeSchema.ComponentSlot['id'] | CodeSchema.ComponentSlot['key']) {
      const data = slotsMap[id_or_Key] || slotsKeyMap[id_or_Key];
      if (!data) {
        return;
      }
      return data;
    },
    findKey(key: CodeSchema.ComponentSlot['key']) {
      if (!slotsKeyMap[key]) {
        return;
      }
      return slotsKeyMap[key];
    },
    findId(id: CodeSchema.ComponentSlot['id']) {
      if (!slotsMap[id]) {
        return;
      }
      return slotsMap[id];
    },
    getParameters(
      eventId: CodeSchema.ComponentSlot['id'],
      propId: CodeSchema.ComponentSlot['properties'][number]['id']
    ) {
      return slotsMap[eventId]?.members?.properties?.find(propId);
    },
  };
};
