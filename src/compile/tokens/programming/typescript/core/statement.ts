import { tools } from '@/utils/tools';
import { helper } from '../../shared/tools/check';
import { Statement } from '../../types/statement';
import { Config } from '../types';
import { expression } from './expression';

export const statement = {
  unknowns(schema: Statement.Line | Statement.List, config?: Config) {
    let code = '';
    if (!Array.isArray(schema)) {
      return statement.unknown(schema, config) + ';';
    }
    schema.forEach((item) => {
      code += statement.unknown(item, config) + ';';
    });
    return code;
  },
  unknown(schema: Statement.Line, config?: Config) {
    if (!helper.statement.isStmt(schema)) {
      throw new Error('generateStatement 方法的 schema参数 非法！');
    }
    if (typeof statement[schema._statement_] !== 'function') {
      return false;
    }
    return statement[schema._statement_](schema as any, config);
  },
  export(schema: Statement.Export, config?: Config): string {
    if (!helper.statement.isExport(schema)) {
      throw new Error('statement.export 方法的 schema 参数非法！');
    }
    let code = 'export';
    const { all, elements, path } = schema;
    if (!tools.dataType.isUndefined(all)) {
      if (typeof all === 'boolean') {
        code += '*';
      } else {
        code += ` * as ${expression.identifier(all)} `;
      }
    }
    if (!tools.dataType.isUndefined(elements)) {
      code += `{`;
      code += elements.reduce((start, ele, index) => {
        let str = expression.identifier(ele.name);
        if (!tools.dataType.isUndefined(ele.propertyName)) {
          str = `${expression.identifier(ele.propertyName)} as ${str}`;
        }
        return start + `${index > 0 ? ',' : ''}${str}`;
      }, '');
      code += `}`;
    }
    if (!tools.dataType.isUndefined(path)) {
      code += `from${expression.literal(path)}`;
    }
    return code;
  },
  import(schema: Statement.Import, config?: Config): string {
    if (!helper.statement.isImport(schema)) {
      throw new Error('statement.import 方法的 schema 参数非法！');
    }
    const { all, default: def, elements, path } = schema;
    const hasDefault = !tools.dataType.isUndefined(def);
    const hasAll = !tools.dataType.isUndefined(all);
    const hasElements = !tools.dataType.isUndefined(elements);
    let code = `import${(hasElements && !hasDefault) || (!hasDefault && !hasAll && !hasElements) ? '' : ' '}`;
    if (hasDefault) {
      code += `${expression.identifier(def)}${hasElements || hasAll ? ',' : ''}`;
    }
    if (hasAll) {
      code += `* as ${expression.identifier(all)}`;
    }
    if (hasElements) {
      code += `{`;
      code += elements.reduce((start, ele, index) => {
        let str = expression.identifier(ele.name);
        if (!tools.dataType.isUndefined(ele.propertyName)) {
          str = `${expression.identifier(ele.propertyName)} as ${str}`;
        }
        return start + `${index > 0 ? ',' : ''}${str}`;
      }, '');
      code += `}`;
    }
    if (!tools.dataType.isUndefined(path)) {
      code += `${hasDefault || hasAll || hasElements ? `${hasElements ? '' : ' '}from` : ''}${expression.literal(
        path
      )}`;
    }
    return code;
  },
  declare(schema: Statement.Declare, config?: Config): string {
    if (!helper.statement.isDeclare(schema)) {
      throw new Error('statement.declare 方法的 schema参数 错误！');
    }
    let code = '';
    if (schema.isConst) {
      code += 'const ';
    } else {
      code += 'let ';
    }
    code += expression.identifier(schema.name);
    if (Array.isArray(schema.dataTypes) && schema.dataTypes.length) {
      code += ':' + expression.dataType(schema.dataTypes, config);
    }
    if (schema.value) {
      code += '=' + statement.expression(schema.value, config);
    }
    return code;
  },
  expression(schema: Statement.Expression, config?: Config): string {
    return expression.unknown(schema, config);
  },
  if(schema: Statement.If, config?: Config): string {
    let code = '';
    return code;
  },
  for(schema: Statement.For, config?: Config): string {
    let code = '';
    return code;
  },
  while(schema: Statement.While, config?: Config): string {
    let code = '';
    return code;
  },
  break(schema: Statement.Break, config?: Config): string {
    let code = '';
    return code;
  },
  continue(schema: Statement.Continue, config?: Config): string {
    let code = '';
    return code;
  },
  return(schema: Statement.Return, config?: Config): string {
    let code = '';
    return code;
  },
};
