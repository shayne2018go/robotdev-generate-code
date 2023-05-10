import { IdentifierValueArgs } from '@/types/code-schema/Identifier';
import { DBWSchema } from '@/types/DBWSchema';
import { isRdData, literalToRdData_Custom, rdDataIsBind, rdDataisCustom } from './shared/helper';
import * as t from '@babel/types';
import {
  ArrayExpression,
  BooleanLiteral,
  CallExpression,
  DecimalLiteral,
  NumericLiteral,
  ObjectExpression,
  StringLiteral,
} from '@babel/types';
import { CompilePageCtx } from '../../compilePages';
import { searchModulePathKeys } from '../searchPath';

export const dataParse = (ctx: CompilePageCtx) => {
  const methods = {
    unknown(
      data: IdentifierValueArgs,
      types?: DBWSchema.RdDefinePropType[]
    ):
      | ArrayExpression
      | StringLiteral
      | NumericLiteral
      | BooleanLiteral
      | ObjectExpression
      | DecimalLiteral
      | CallExpression {
      if (!isRdData(data)) {
        return methods.literal(literalToRdData_Custom(data), types);
      }
      if (rdDataisCustom(data)) {
        return methods.literal(data, types);
      } else if (rdDataIsBind(data)) {
        return methods.bind(data, types);
      }
      throw new Error('RdData数据异常');
    },
    bind(
      data:
        | DBWSchema.RdData_GetVar
        | DBWSchema.RdData_GetApiData
        | DBWSchema.RdData_GetParam
        | DBWSchema.RdData_GetEventData
        | DBWSchema.RdData_GetSlotData
        | DBWSchema.RdData_GetEachData
        | DBWSchema.RdData_GetModelData
        | DBWSchema.RdData_GetCmptPropData
        | DBWSchema.RdData_TableData,
      types?: DBWSchema.RdDefinePropType[]
    ) {
      switch (data.mode) {
        case 'getVar': {
          return methods.getVar(data);
        }
        case 'getApiData': {
          return methods.getApiData(data);
        }
        case 'getParam': {
          return methods.getParam(data);
        }
        case 'getEventData': {
          return methods.getEventData(data);
        }
        case 'getSlotData': {
          return methods.getSlotData(data);
        }
        case 'getEachData': {
          return methods.getEachData(data);
        }
        case 'getModelData': {
          return methods.getModelData(data);
        }
        case 'getCmptPropData': {
          return methods.getCmptPropData(data);
        }
        case 'tableData': {
          return methods.tableData(data);
        }
      }
    },
    literal(
      data: DBWSchema.RdData_Custom,
      types?: DBWSchema.RdDefinePropType[]
    ):
      | ArrayExpression
      | StringLiteral
      | NumericLiteral
      | BooleanLiteral
      | ObjectExpression
      | DecimalLiteral
      | CallExpression {
      switch (data.args.type) {
        case 'text':
        case 'richText':
        case 'password':
        case 'email':
        case 'mobilePhone':
        case 'telephone':
        case 'fax': {
          if (typeof data.args.value !== 'string') {
            throw new Error('不是文本');
          }
          return t.stringLiteral(data.args.value);
        }
        case 'number': {
          if (typeof data.args.value !== 'number') {
            throw new Error('不是数字');
          }
          if (Math.round(data.args.value) !== data.args.value) {
            return t.decimalLiteral(data.args.value.toString());
          }
          return t.numericLiteral(data.args.value);
        }
        case 'whether': {
          if (typeof data.args.value !== 'boolean') {
            throw new Error('不是布尔');
          }
          return t.booleanLiteral(data.args.value);
        }
        case 'module': {
          if (!Array.isArray(data.args.value)) {
            throw new Error('不是module数组');
          }

          return t.objectExpression(
            data.args.value.map((item) => t.objectProperty(t.identifier(item.key), methods.unknown(item.value)))
          );
        }
        case 'array': {
          if (!Array.isArray(data.args.value)) {
            throw new Error('不是数组');
          }

          return t.arrayExpression(data.args.value.map((item) => methods.unknown(item)));
        }
        case 'option': {
          if (typeof data.args.value !== 'string') {
            throw new Error('option的值必须是文本(id)');
          }
          const type = types?.find((item) => item.type === 'option');
          if (!type) {
            throw new Error('option未定义');
          }
          const optionItem = type.rules?.items?.find((item) => item.id === data.args.value);
          if (typeof optionItem?.value !== 'string') {
            throw new Error('option的项没有对应的值数据');
          }
          return t.stringLiteral(optionItem?.value);
        }
      }
      throw new Error('rdData_custom中的类型"' + data.args.type + '"不支持编译');
    },
    getVar(data: DBWSchema.RdData_GetVar): t.MemberExpression {
      const types = ctx.variablesStore.get(data.args.id).types;
      if (!types) {
        throw new Error('getVar的id的types获取失败');
      }
      const rootName = ctx.variablesRootName; // 变量外层的变量名
      const varName = ctx.variablesNames[data.args.id].varName; // 变量名
      const paths = searchModulePathKeys(types, data.args.path || []); // 路径中的每个属性名
      const memberExpr = (paths: string[]): t.MemberExpression => {
        const [varStr, ...memberPaths] = paths;
        if (memberPaths.length !== 1) {
          return t.memberExpression(memberExpr(memberPaths), t.identifier(varStr));
        } else {
          return t.memberExpression(t.identifier(varStr),t.identifier(memberPaths[0]));
        }
      };
      return memberExpr([...paths.reverse(), rootName, varName])
    },
    getApiData(data: DBWSchema.RdData_GetApiData): CallExpression {},
    getParam(data: DBWSchema.RdData_GetParam): CallExpression {},
    getEventData(data: DBWSchema.RdData_GetEventData): CallExpression {},
    getSlotData(data: DBWSchema.RdData_GetSlotData): CallExpression {},
    getEachData(data: DBWSchema.RdData_GetEachData): CallExpression {},
    getModelData(data: DBWSchema.RdData_GetModelData): CallExpression {},
    getCmptPropData(data: DBWSchema.RdData_GetCmptPropData): CallExpression {},
    tableData(data: DBWSchema.RdAction): CallExpression {},
    fx(data: DBWSchema.RdData): CallExpression {},
    set(data: DBWSchema.RdAction): CallExpression {},
    setVar(data: DBWSchema.RdAction): CallExpression {},
    setApiData(data: DBWSchema.RdAction): CallExpression {},
    api(data: DBWSchema.RdAction): CallExpression {},
    open(data: DBWSchema.RdAction): CallExpression {},
    callAction(data: DBWSchema.RdAction): CallExpression {},
  };

  return methods;
};
