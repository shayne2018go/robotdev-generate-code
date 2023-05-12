import { genVarName } from '../helper';
import { propertiesDataStore } from './properties';

interface EmitMapItem {
  data: CodeSchema.ComponentEmit;
  varName: string;
  members: Members;
}

interface EmitMap {
  [idOrKey: string]: EmitMapItem;
}

interface Members {
  parameters?: ReturnType<typeof propertiesDataStore>;
}

export const componentEmitsDataStore = (emits: CodeSchema.ComponentEmit[]) => {
  const emitsMap: EmitMap = {};
  const emitsKeyMap: EmitMap = {};
  const genVariablesNameHandler = genVarName();

  if (emits) {
    if (emits) {
      emits.forEach((item) => {
        emitsMap[item.id] = {
          data: item,
          varName: genVariablesNameHandler(item.key),
          members: {
            parameters: propertiesDataStore(item.parameters),
          },
        };
        emitsKeyMap[item.key] = emitsMap[item.id];
      });
    }
  }
  return {
    find(id_or_Key: CodeSchema.ComponentEmit['id'] | CodeSchema.ComponentEmit['key']) {
      const data = emitsMap[id_or_Key] || emitsKeyMap[id_or_Key];
      if (!data) {
        return;
      }
      return data;
    },
    findKey(key: CodeSchema.ComponentEmit['key']) {
      if (!emitsKeyMap[key]) {
        return;
      }
      return emitsKeyMap[key];
    },
    findId(id: CodeSchema.ComponentEmit['id']) {
      if (!emitsMap[id]) {
        return;
      }
      return emitsMap[id];
    },
    getParameters(
      eventId: CodeSchema.ComponentEmit['id'],
      propId: CodeSchema.ComponentEmit['parameters'][number]['id']
    ) {
      return emitsMap[eventId]?.members?.parameters?.find(propId);
    },
    getEvent(eventId: CodeSchema.ComponentEmit['id']) {
      return emitsMap[eventId].data;
    },
  };
};
