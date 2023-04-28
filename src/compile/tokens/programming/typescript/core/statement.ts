import { tools } from '@/utils/tools';
import { helper } from '../../shared/tools/check';
import { Statement } from '../../types/statement';
import { Config } from '../types';
import { expression } from './expression';
import { generateTypeScript } from './typescript';

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
        code += ` * as ${expression.identifier(all, config)} `;
      }
    }
    if (!tools.dataType.isUndefined(elements)) {
      code += `{`;
      code += elements.reduce((start, ele, index) => {
        let str = expression.identifier(ele.name, config);
        if (!tools.dataType.isUndefined(ele.propertyName)) {
          str = `${expression.identifier(ele.propertyName, config)} as ${str}`;
        }
        return start + `${index > 0 ? ',' : ''}${str}`;
      }, '');
      code += `}`;
    }
    if (!tools.dataType.isUndefined(path)) {
      code += `from${expression.literal(path, config)}`;
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
      code += `${expression.identifier(def, config)}${hasElements || hasAll ? ',' : ''}`;
    }
    if (hasAll) {
      code += `* as ${expression.identifier(all, config)}`;
    }
    if (hasElements) {
      code += `{`;
      code += elements.reduce((start, ele, index) => {
        let str = expression.identifier(ele.name, config);
        if (!tools.dataType.isUndefined(ele.propertyName)) {
          str = `${expression.identifier(ele.propertyName, config)} as ${str}`;
        }
        return start + `${index > 0 ? ',' : ''}${str}`;
      }, '');
      code += `}`;
    }
    if (!tools.dataType.isUndefined(path)) {
      code += `${hasDefault || hasAll || hasElements ? `${hasElements ? '' : ' '}from` : ''}${expression.literal(
        path,
        config
      )}`;
    }
    return code;
  },
  declareVariable(schema: Statement.DeclareVariable, config?: Config): string {
    if (!helper.statement.isDeclareVariable(schema)) {
      throw new Error('statement.variable 方法的 schema参数 错误！');
    }
    let code = '';
    if (schema.isConst) {
      code += 'const ';
    } else {
      code += 'let ';
    }
    code += expression.identifier(schema.name, config);
    if (Array.isArray(schema.dataTypes) && schema.dataTypes.length) {
      code += ':' + expression.dataType(schema.dataTypes, config);
    }
    if (schema.value) {
      code += '=' + statement.expression(schema.value, config);
    }
    return code;
  },
  declareClass(schema: Statement.DeclareClass, config?: Config): string {
    let code = '';
    return code;
  },
  expression(schema: Statement.Expression, config?: Config): string {
    return expression.unknown(schema, config);
  },
  if(schema: Statement.If, config?: Config): string {
    if (!helper.statement.isIf(schema)) {
      throw new Error('statement.if 方法的 schema 参数非法！');
    }
    let code = '';
    code += schema.ifs.reduce((start, arr, index) => {
      return (
        start +
        `${index === 0 ? 'if' : 'else if'}(${statement.expression(arr[0], config)}){${arr[1].reduce(
          (start, ele) => start + generateTypeScript(ele, config),
          ''
        )}}`
      );
    }, '');
    if (!tools.dataType.isUndefined(schema.else)) {
      code += `else{${schema.else.reduce((start, ele) => start + generateTypeScript(ele, config), '')}}`;
    }
    return code;
  },
  for(schema: Statement.For, config?: Config): string {
    if (!helper.statement.isFor(schema)) {
      throw new Error('statement.for 方法的 schema 参数非法！');
    }
    let code = 'for(';
    code += `${statement.declareVariable(schema.declare, config)};`;
    code += `${statement.expression(schema.initializer, config)};`;
    if (helper.expression.isPostfixUnary(schema.incrementor)) {
      code += `${expression.postfixUnary(schema.incrementor, config)}`;
    } else if (helper.expression.isPrefixUnary(schema.incrementor)) {
      code += `${expression.prefixUnary(schema.incrementor, config)}`;
    } else {
      throw new Error('statement.for 方法的 schema 参数错误！');
    }
    code += `){${schema.statements.reduce((start, ele) => start + generateTypeScript(ele, config), '')}}`;
    return code;
  },
  while(schema: Statement.While, config?: Config) {
    if (!helper.statement.isWhile(schema)) {
      throw new Error('statement.while 方法的 schema 参数非法！');
    }
    let code = 'while(';
    code += `${statement.expression(schema.expression, config)}`;
    code += `){${schema.statements.reduce((start, ele) => start + generateTypeScript(ele, config), '')}}`;
    return code;
  },
  break(schema: Statement.Break, config?: Config) {
    if (!helper.statement.isBreak(schema)) {
      throw new Error('statement.break 方法的 schema 参数非法！');
    }
    let code = 'break';
    if (!tools.dataType.isUndefined(schema.label)) {
      code += ` ${expression.identifier(schema.label, config)}`;
    }
    return code;
  },
  continue(schema: Statement.Continue, config?: Config) {
    if (!helper.statement.isContinue(schema)) {
      throw new Error('statement.continue 方法的 schema 参数非法！');
    }
    let code = 'continue';
    if (!tools.dataType.isUndefined(schema.label)) {
      code += ` ${expression.identifier(schema.label, config)}`;
    }
    return code;
  },
  return(schema: Statement.Return, config?: Config) {
    if (!helper.statement.isReturn(schema)) {
      throw new Error('statement.return 方法的 schema 参数非法！');
    }
    let code = 'return';
    if (!tools.dataType.isUndefined(schema.value)) {
      code += ` ${statement.expression(schema.value, config)}`;
    }
    return code;
  },
  throw() {},
};
