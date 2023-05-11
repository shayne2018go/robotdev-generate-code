import { tools } from '@/utils/tools';

type BindRdData =
  | CodeSchema.DataValue_GetVar
  | CodeSchema.DataValue_GetApiData
  | CodeSchema.DataValue_GetParam
  | CodeSchema.DataValue_GetEventData
  | CodeSchema.DataValue_GetSlotData
  | CodeSchema.DataValue_GetEachData
  // | CodeSchema.DataValue_GetModelData
  | CodeSchema.DataValue_GetCmptPropData
  | CodeSchema.DataValue_TableData;

type SysAction =
  | CodeSchema.Action_SetVar
  | CodeSchema.Action_SetApiData
  | CodeSchema.Action_Set
  | CodeSchema.Action_Api
  | CodeSchema.Action_Open;

export const isRdData = (data: any): data is CodeSchema.DataValue => {
  if (tools.dataType.isObject(data) && data.type === 'data' && data.mode) {
    return true;
  }
  return false;
};
export const isAction = (data: any): data is CodeSchema.DataValue => {
  if (tools.dataType.isObject(data) && data.type === 'action' && data.mode) {
    return true;
  }
  return false;
};
export const rdDataisCustom = (data: CodeSchema.DataValue): data is CodeSchema.DataValue_Custom => {
  return data.mode === 'custom';
};
export const rdDataIsBind = (data: CodeSchema.DataValue): data is BindRdData => {
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
export const rdActionIsSys = (data: any): data is SysAction => {
  return ['setVar', 'setApiData', 'set', 'api', 'open'].includes(data.mode);
};
export const rdDataIsTable = (data: CodeSchema.DataValue): data is CodeSchema.DataValue_TableData => {
  return data.mode === 'tableData';
};

export const genRdData = (
  type: CodeSchema.DataValue_Custom['args']['type'],
  value: any,
  multiple?: boolean
): CodeSchema.DataValue_Custom => {
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

export const literalToRdData_Custom = (data: any): CodeSchema.DataValue_Custom => {
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
      let type: CodeSchema.DataValue_Custom['args']['type'] = '';
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
