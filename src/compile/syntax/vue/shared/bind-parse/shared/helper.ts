import { DBWSchema } from '@/types/DBWSchema';
import { tools } from '@/utils/tools';

export const isRdData = (data: any): data is DBWSchema.RdData => {
  if (tools.dataType.isObject(data) && data.type === 'data' && data.mode) {
    return true;
  }
  return false;
};
export const rdDataisCustom = (data: DBWSchema.RdData): data is DBWSchema.RdData_Custom => {
  return data.mode === 'custom';
};
export const rdDataIsBind = (
  data: DBWSchema.RdData
): data is
  | DBWSchema.RdData_GetVar
  | DBWSchema.RdData_GetApiData
  | DBWSchema.RdData_GetParam
  | DBWSchema.RdData_GetEventData
  | DBWSchema.RdData_GetSlotData
  | DBWSchema.RdData_GetEachData
  | DBWSchema.RdData_GetModelData
  | DBWSchema.RdData_GetCmptPropData
  | DBWSchema.RdData_TableData => {
  return [
    'getVar',
    'getApiData',
    'getParam',
    'getEventData',
    'getSlotData',
    'getEachData',
    'getModelData',
    'getCmptPropData',
    'tableData',
  ].includes(data.mode);
};

export const genRdData = (
  type: DBWSchema.RdData_Custom['args']['type'],
  value: any,
  multiple?: boolean
): DBWSchema.RdData_Custom => {
  return {
    id: '',
    modeId: '',
    type: 'data',
    mode: 'custom',
    args: {
      type: type,
      multiple: multiple === true,
      value: value,
    },
  };
};

export const literalToRdData_Custom = (data: any): DBWSchema.RdData_Custom => {
  const type = tools.dataType.getType(data);
  switch (type) {
    case 'string': {
      return genRdData('text', data);
    }
    case 'number': {
      return genRdData('number', data);
    }
    case 'whether': {
      return genRdData('whether', data);
    }
    case 'object': {
      const objList: { propId: string; value: any }[] = [];
      Object.entries(data).forEach((item) => {
        objList.push({
          propId: item[0],
          value: item[1],
        });
      });
      return genRdData('module', objList);
    }
    case 'array': {
      let type: DBWSchema.RdData_Custom['args']['type'] = '';
      const list: any[] = [];
      data.forEach((item: any, index: number) => {
        const itemRdData = isRdData(item) ? item : literalToRdData_Custom(item);
        if (!type && rdDataisCustom(itemRdData)) {
          type = itemRdData.args.type;
        }
        list.push(itemRdData);
      });
      return genRdData(type, list, true);
    }
  }
  throw new Error('数据类型有误');
};
