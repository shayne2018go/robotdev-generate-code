import { tools } from '@/utils/tools';
import { errorText, helper } from '../../shared/tools/check';
import { DataType } from '../../types/dataType';
import { Expression } from '../../types/expression';
import { Config } from '../types';
import { expression } from './expression';

export const dataType = {
  unknown(schema: Expression.DataType, config?: Config): string {
    if (!helper.expression.isDataType(schema)) {
      throw new Error(errorText.schema('dataType.unknown'));
    }
    if (typeof dataType[schema.type] !== 'function') {
      throw new Error(errorText.schemaFn('dataType', schema.type));
    }
    return dataType[schema.type](schema as any, config);
  },
  unknowns(schema: Array<Expression.DataType> | Expression.DataType, config?: Config): string {
    let types: Array<Expression.DataType>;
    if (Array.isArray(schema)) {
      types = schema;
    } else {
      if (!helper.expression.isDataType(schema)) {
        throw new Error(errorText.schema('expression.dataType'));
      }
      types = [schema];
    }
    let code = '';
    types.forEach((item, index) => {
      if (index > 0) {
        code += '|';
      }
      if (helper.dataType.isFunction(item)) {
        code += `(${dataType.unknown(item, config)})`;
      } else {
        code += dataType.unknown(item, config);
      }
    });
    return code;
  },
  void(schema: DataType.Schema_Void, config?: Config): string {
    if (!helper.dataType.isVoid(schema)) {
      throw new Error(errorText.schema('dataType.void'));
    }
    return 'void';
  },
  null(schema: DataType.Schema_Null, config?: Config): string {
    if (!helper.dataType.isNull(schema)) {
      throw new Error(errorText.schema('dataType.null'));
    }
    return 'null | undefined';
  },
  string(schema: DataType.Schema_String, config?: Config): string {
    if (!helper.dataType.isString(schema)) {
      throw new Error(errorText.schema('dataType.string'));
    }
    return 'string';
  },
  long(schema: DataType.Schema_Long, config?: Config): string {
    if (!helper.dataType.isLong(schema)) {
      throw new Error(errorText.schema('dataType.long'));
    }
    return 'string';
  },
  boolean(schema: DataType.Schema_Boolean, config?: Config): string {
    if (!helper.dataType.isBoolean(schema)) {
      throw new Error(errorText.schema('dataType.boolean'));
    }
    return 'boolean';
  },
  int(schema: DataType.Schema_Int, config?: Config): string {
    if (!helper.dataType.isInt(schema)) {
      throw new Error(errorText.schema('dataType.int'));
    }
    let code = 'number';
    return code;
  },
  decimal(schema: DataType.Schema_Decimal, config?: Config): string {
    if (!helper.dataType.isDecimal(schema)) {
      throw new Error(errorText.schema('dataType.decimal'));
    }
    let code = 'number';
    return code;
  },
  object(schema: DataType.Schema_Object, config?: Config): string {
    if (!helper.dataType.isObject(schema)) {
      throw new Error(errorText.schema('dataType.object'));
    }
    if (!schema.properties && !schema.record) {
      throw new Error(errorText.schemaProp('dataType.object', 'properties and schema.record'));
    }

    if (tools.dataType.isObject(schema.record)) {
      let code = 'Record<';
      code += dataType.unknowns(schema.record.key);
      code += ',';
      code += dataType.unknowns(schema.record.value);
      code += '>';
      return code;
    }

    if (schema.properties && !Array.isArray(schema.properties)) {
      throw new Error(errorText.schemaProp('dataType.object', 'properties'));
    }
    let code = '{';
    schema.properties?.forEach((item, index) => {
      code += expression.identifier(item.key);
      code += ':';
      code += dataType.unknowns(item.types);
      code += ';';
    });
    code += '}';
    return code;
  },
  array(schema: DataType.Schema_Array, config?: Config): string {
    if (!helper.dataType.isArray(schema)) {
      throw new Error(errorText.schema('dataType.array'));
    }

    let code = 'Array<';
    code += dataType.unknowns(schema.items);
    code += '>';
    return code;
  },
  tuple(schema: DataType.Schema_Tuple, config?: Config): string {
    if (!helper.dataType.isTuple(schema)) {
      throw new Error(errorText.schema('dataType.tuple'));
    }

    if (schema.items && !Array.isArray(schema.items)) {
      throw new Error(errorText.schemaProp('dataType.tuple', 'items'));
    }

    let code = '[';
    schema.items?.forEach((item, index) => {
      if (index > 0) {
        code += ',';
      }
      code += dataType.unknowns(item);
    });
    code += ']';
    return code;
  },
  function(schema: DataType.Schema_Function, config?: Config): string {
    if (!helper.dataType.isFunction(schema)) {
      throw new Error(errorText.schema('dataType.function'));
    }
    if (schema.parameters && !Array.isArray(schema.parameters)) {
      throw new Error(errorText.schemaProp('dataType.function', 'parameters'));
    }
    if (schema.outTypes && !Array.isArray(schema.outTypes)) {
      throw new Error(errorText.schemaProp('dataType.function', 'outTypes'));
    }
    let code = '(';
    schema.parameters?.forEach((item, index) => {
      if (index > 0) {
        code += ',';
      }
      code += expression.identifier(item.key);
      code += ':'; // 一定会有类型，否则下面的方法会报错
      code += expression.dataType(item.types, config);
    });
    code += ')=>';
    if (schema.outTypes) {
      code += expression.dataType(schema.outTypes);
    } else {
      code += 'void';
    }
    return code;
  },
  // enum(schema: DataType.Schema_Enum, config?: Config): string {
  //   if (!helper.dataType.isEnum(schema)) {
  //     throw new Error(errorText.schema('dataType.enum'));
  //   }
  //   let code = '';
  //   return code;
  // },
  datetime(schema: DataType.Schema_Datetime, config?: Config): string {
    if (!helper.dataType.isDatetime(schema)) {
      throw new Error(errorText.schema('dataType.datetime'));
    }
    return 'string';
  },
  date(schema: DataType.Schema_Date, config?: Config): string {
    if (!helper.dataType.isDate(schema)) {
      throw new Error(errorText.schema('dataType.date'));
    }
    return 'string';
  },
  time(schema: DataType.Schema_Time, config?: Config): string {
    if (!helper.dataType.isTime(schema)) {
      throw new Error(errorText.schema('dataType.time'));
    }
    return 'string';
  },
  timestamp(schema: DataType.Schema_Timestamp, config?: Config): string {
    if (!helper.dataType.isTimestamp(schema)) {
      throw new Error(errorText.schema('dataType.timestamp'));
    }
    return 'string';
  },
};
