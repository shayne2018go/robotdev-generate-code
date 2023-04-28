import { errorText, helper } from '../../shared/tools/check';
import { Expression } from '../../types/expression';
import { Config } from '../types';
import { dataType } from './dataType';
import { expression } from './expression';
import { statement } from './statement';

export const literal = {
  unknown(schema: Expression.Literal, config?: Config): string {
    if (!helper.expression.isLiteral(schema)) {
      throw new Error('literal.unknown 方法的 schema参数 错误！');
    }
    if (typeof literal[schema.type] !== 'function') {
      throw new Error(`expression.dataType 方法没有找到“${schema.type}”对应的编译方法！`);
    }
    return literal[schema.type](schema as any, config);
  },
  void(schema: Expression.Literal_Void, config?: Config): string {
    if (!helper.literal.isVoid(schema)) {
      throw new Error(errorText.schema('dataType.void'));
    }
    return 'undefined';
  },
  null(schema: Expression.Literal_Null, config?: Config): string {
    if (!helper.literal.isNull(schema)) {
      throw new Error(errorText.schema('dataType.null'));
    }
    return 'null';
  },
  string(schema: Expression.Literal_String, config?: Config): string {
    if (!helper.literal.isString(schema)) {
      throw new Error('dataType.string 方法的 schema参数 错误！');
    }
    if (typeof schema.value !== 'string') {
      return '""';
    }
    return JSON.stringify(schema.value);
  },
  long(schema: Expression.Literal_Long, config?: Config): string {
    if (!helper.literal.isLone(schema)) {
      throw new Error(errorText.schema('dataType.long'));
    }
    if (typeof schema.value !== 'string') {
      return '""';
    }
    return JSON.stringify(schema.value);
  },
  boolean(schema: Expression.Literal_Boolean, config?: Config): string {
    if (!helper.literal.isBoolean(schema)) {
      throw new Error('dataType.boolean 方法的 schema参数 错误！');
    }
    if (typeof schema.value !== 'boolean') {
      throw new Error('dataType.boolean 方法的 schema.value 参数 错误！');
    }
    return JSON.stringify(schema.value);
  },
  int(schema: Expression.Literal_Int, config?: Config): string {
    if (!helper.literal.isInt(schema)) {
      throw new Error('dataType.int 方法的 schema参数 错误！');
    }
    return JSON.stringify(schema.value);
  },
  decimal(schema: Expression.Literal_Decimal, config?: Config): string {
    if (!helper.literal.isDecimal(schema)) {
      throw new Error('dataType.decimal 方法的 schema参数 错误！');
    }
    return JSON.stringify(schema.value);
  },
  object(schema: Expression.Literal_Object, config?: Config): string {
    if (!helper.literal.isObject(schema)) {
      throw new Error(errorText.schema('dataType.object'));
    }
    let code = '{';
    if (schema.value) {
      if (!Array.isArray(schema.value)) {
        throw new Error(errorText.schemaProp('dataType.object', 'value'));
      }
      schema.value.forEach((item, index) => {
        if (index > 0) {
          code += ',';
        }
        if (helper.expression.isIdentifier(item.key)) {
          code += expression.identifier(item.key);
        } else {
          code += `[${expression.unknown(item.key)}]`;
        }
        code += ':';
        code += expression.unknown(item.value);
      });
    }
    code += '}';
    return code;
  },
  array(schema: Expression.Literal_Array, config?: Config): string {
    if (!helper.literal.isArray(schema)) {
      throw new Error(errorText.schema('dataType.array'));
    }
    let code = '[';
    if (schema.value) {
      if (!Array.isArray(schema.value)) {
        throw new Error(errorText.schemaProp('dataType.array', 'value'));
      }
      schema.value.forEach((item, index) => {
        if (index > 0) {
          code += ',';
        }
        code += expression.unknown(item);
      });
    }
    code += ']';
    return code;
  },
  tuple(schema: Expression.Literal_Tuple, config?: Config): string {
    if (!helper.literal.isTuple(schema)) {
      throw new Error(errorText.schema('dataType.tuple'));
    }
    let code = '[';
    if (schema.value) {
      if (!Array.isArray(schema.value)) {
        throw new Error(errorText.schemaProp('dataType.tuple', 'value'));
      }
      schema.value.forEach((item, index) => {
        if (index > 0) {
          code += ',';
        }
        code += expression.unknown(item);
      });
    }
    code += ']';
    return code;
  },
  function(schema: Expression.Literal_Function, config?: Config): string {
    if (!helper.literal.isFunction(schema)) {
      throw new Error(errorText.schema('dataType.function'));
    }
    if (schema.parameters && !Array.isArray(schema.parameters)) {
      throw new Error(errorText.schemaProp('dataType.function', 'parameters'));
    }
    let code = '';
    if (schema.mode === 'function') {
      code += 'function(';
    } else if (schema.mode === 'arrow') {
      code += '(';
    } else if (schema.mode === 'method') {
      code += '(';
    } else {
      throw new Error(errorText.schemaProp('dataType.function', 'mode'));
    }
    schema.parameters?.forEach((item, index) => {
      if (index > 0) {
        code += ',';
      }
      code += expression.identifier(item.key, config);
      if (item.types && item.types.length) {
        code += ':';
        code += dataType.unknowns(item.types, config);
      }
    });
    code += ')';
    if (schema.outTypes && schema.outTypes.length) {
      code += ':';
      code += dataType.unknowns(schema.outTypes, config);
    }
    if (schema.mode === 'function') {
      code += '{';
    } else if (schema.mode === 'arrow') {
      code += '=>{';
    } else if (schema.mode === 'method') {
      code += '{';
    }
    if (schema.value) {
      code += statement.unknowns(schema.value, config);
    }
    code += '}';
    return code;
  },
  // enum(schema: Expression.Literal_Enum, config?: Config): string {
  //   if (!helper.literal.isEnum(schema)) {
  //     throw new Error(errorText.schema('dataType.enum'));
  //   }
  //   let code = literalHelper.getFn(schema.value);
  //   return code;
  // },
  datetime(schema: Expression.Literal_Datetime, config?: Config): string {
    if (!helper.literal.isDatetime(schema)) {
      throw new Error(errorText.schema('dataType.datetime'));
    }
    return JSON.stringify(schema.value);
  },
  date(schema: Expression.Literal_Date, config?: Config): string {
    if (!helper.literal.isDate(schema)) {
      throw new Error(errorText.schema('dataType.date'));
    }
    return JSON.stringify(schema.value);
  },
  time(schema: Expression.Literal_Time, config?: Config): string {
    if (!helper.literal.isTime(schema)) {
      throw new Error(errorText.schema('dataType.time'));
    }
    return JSON.stringify(schema.value);
  },
  timestamp(schema: Expression.Literal_Timestamp, config?: Config): string {
    if (!helper.literal.isTimestamp(schema)) {
      throw new Error(errorText.schema('dataType.timestamp'));
    }
    return JSON.stringify(schema.value);
  },
};
