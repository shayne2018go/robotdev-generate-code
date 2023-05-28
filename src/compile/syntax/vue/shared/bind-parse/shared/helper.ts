import * as t from '@babel/types';
import { tools } from '@/utils/tools';
import { AccessPath, ActionAst, ActionsAst, BindAst, BindParseCtx, ReturnRef, SplitProps } from '../types';
import { NodeMapItem } from '../../store/nodes';

type BindRdData =
  | CodeSchema.DataValue_GetVar
  | CodeSchema.DataValue_GetApiData
  | CodeSchema.DataValue_GetParam
  | CodeSchema.DataValue_GetEventData
  | CodeSchema.DataValue_GetSlotData
  | CodeSchema.DataValue_GetEachData
  | CodeSchema.DataValue_GetArguments
  // | CodeSchema.DataValue_GetModelData
  | CodeSchema.DataValue_GetCmptPropData;

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
    'getArguments',
    // 'getModelData',
    'getCmptPropData',
  ].includes(data.mode);
};
export const rdActionIsSys = (data: any): data is SysAction => {
  return ['setVar', 'setApiData', 'set', 'api', 'open'].includes(data.mode);
};
export const rdDataIsTable = (data: CodeSchema.DataValue): data is CodeSchema.DataValue_TableData => {
  return data.mode === 'tableData';
};

export const actionCheck = {
  isSetVar: (data: CodeSchema.Action): data is CodeSchema.Action_SetVar => {
    return data.mode === 'setVar';
  },
  isSetApiData: (data: CodeSchema.Action): data is CodeSchema.Action_SetApiData => {
    return data.mode === 'setApiData';
  },
  isOpen: (data: CodeSchema.Action): data is CodeSchema.Action_Open => {
    return data.mode === 'open';
  },
  isSet: (data: CodeSchema.Action): data is CodeSchema.Action_Set => {
    return data.mode === 'set';
  },
  isApi: (data: CodeSchema.Action): data is CodeSchema.Action_Api => {
    return data.mode === 'api';
  },
  isWhen: (data: any): data is CodeSchema.Action_When => {
    return data.mode === 'when';
  },
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

export const literalToRdData_Custom = (
  data: any,
  types?: CodeSchema.PropertyType_Protocol[]
): CodeSchema.DataValue_Custom => {
  if (types?.[0]?.type) {
    if (types?.[0]?.type === 'module') {
      const objList: { propId: string; value: any }[] = [];
      Object.entries(data).forEach((item) => {
        objList.push({
          propId: item[0],
          value: item[1],
        });
      });
      return genRdData('module', objList);
    }
    return genRdData(types?.[0]?.type, data);
  }
  const type = tools.dataType.getType(data);
  switch (type) {
    case 'string': {
      return genRdData('text', data);
    }
    case 'number': {
      return genRdData('number', data);
    }
    case 'boolean': {
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

export const genAccessPathItem = (key: string | number, type?: 'object' | 'array'): AccessPath[number] => {
  return {
    type: type || 'object',
    key,
  };
};

export const isTplSlot = (tagId: string, ctx: BindParseCtx) => {
  return ctx.global.componentsStore.getCmpt(tagId)?.key === 'tpl';
};

export const isEach = (tagId: string, ctx: BindParseCtx) => {
  return ctx.global.componentsStore.getCmpt(tagId)?.key === 'each';
};

export const isEach_Or_TplSlot = (tagId: string, ctx: BindParseCtx) => {
  return (
    ctx.global.componentsStore.getCmpt(tagId)?.key === 'tpl' ||
    ctx.global.componentsStore.getCmpt(tagId)?.key === 'each'
  );
};

export const isAstType = (ref: ReturnRef): ref is { type: 'ast'; value: ActionAst | BindAst | undefined } => {
  return ref.type === 'ast';
};

// 拼接循环节点的item变量名
export const getEachItemVarName = (eachVarName: string) => `${eachVarName}_item`;
// 拼接循环节点的index变量名
export const getEachIndexVarName = (eachVarName: string) => `${eachVarName}_index`;
// 拼接插槽节点的作用域插槽变量
export const getSlotVarName = (slotVarName: string) => `${slotVarName}_slot`;
// 拼接事件入参变量
export const getEventArgVarName = (argName: string) => `event_${argName}`;

// 得到节点的上下文节点
export const nodeCtx = (nodeId: string, ctx: BindParseCtx): NodeMapItem[] => {
  const parents = ctx.scope.current.nodesStore.parents(nodeId, (node) => isEach_Or_TplSlot(node.data.tagId, ctx));
  return parents.map((item) => item.store) as NodeMapItem[];
};

// 判断当前属性值，是否应该写在template里，如果不是，则写在script中
export const inTemplate = (data: BindRdData) => {
  if (rdDataIsBind(data)) {
    return true;
  }
  // TODO: 后续可以判断是否为字面量，判断里面的文本是否包含双引号，不包含则可以写在template里
  return false;
};

export const getMemberExpr = (paths: string[], optional = false): t.MemberExpression | t.Identifier => {
  if (!paths.length) {
    throw new Error('getMemberExpr的paths元素个数不能为1');
  }
  if (paths.length === 1) {
    return t.identifier(paths[0]);
  } else {
    return t.memberExpression(
      getMemberExpr(paths.slice(0, -1), optional),
      t.identifier(paths[paths.length - 1]),
      undefined,
      optional
    );
  }
};

export const getOptMemberExpr = (paths: string[], optional = true): t.OptionalMemberExpression | t.Identifier => {
  if (!paths.length) {
    throw new Error('getOptMemberExpr的paths元素个数不能为1');
  }
  if (paths.length === 1) {
    return t.identifier(paths[0]);
  } else {
    return t.optionalMemberExpression(
      getOptMemberExpr(paths.slice(0, -1), optional),
      t.identifier(paths[paths.length - 1]),
      undefined,
      optional
    );
  }
};

export const getDataAstByAny = (value: any): t.Literal | t.ObjectExpression | t.ArrayExpression => {
  const type = tools.dataType.getType(value);
  switch (type) {
    case 'string': {
      return t.stringLiteral(value);
    }
    case 'number': {
      return t.numericLiteral(value);
    }
    case 'boolean': {
      return t.booleanLiteral(value);
    }
    case 'null': {
      return t.nullLiteral();
    }
    case 'undefined': {
      return t.nullLiteral();
    }
    case 'object': {
      const properties: t.ObjectProperty[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const element = value[key];
          properties.push(t.objectProperty(t.identifier(key), getDataAstByAny(element)));
        }
      }
      return t.objectExpression(properties);
    }
    case 'array': {
      return t.arrayExpression(value.map((ele: any) => getDataAstByAny(ele)));
    }

    default:
      throw new Error('getDataAstByAny的未知类型type');
  }
};

// 判断是表达式还是语句（赋值表达式视为语句）
export const astIsExpression = (value: any): value is BindAst => {
  if (t.isStatement(value) || t.isAssignmentExpression(value) || Array.isArray(value)) {
    return false;
  }
  return true;
};

// TODO
export const initDefaultValue = (propDefine: CodeSchema.Property_Protocol) => {
  // TODO 本期考虑没有多类型，默认取第一个，未来再考虑多类型。由于未来默认值很有可能存在属性节点，所以把属性传进来
  const type = propDefine.types[0];
  if (type.default !== undefined) {
    return type.default;
  }
  if (type.multiple === true) {
    return [];
  }
  if (type.type !== 'module') {
    return undefined; // 不是模块就返回undefined
  }
};
