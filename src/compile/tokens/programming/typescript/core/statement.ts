import { tools } from '@/utils/tools';
import { errorText, helper } from '../../shared/tools/check';
import { Statement } from '../../types/statement';
import { Config } from '../types';
import { expression } from './expression';
import { literal } from './literal';
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
      throw new Error(errorText.schema('statement.unknown'));
    }
    if (typeof statement[schema._statement_] !== 'function') {
      throw new Error(errorText.schemaFn('unknown', schema._statement_));
    }
    return statement[schema._statement_](schema as any, config);
  },
  export(schema: Statement.Export, config?: Config): string {
    if (!helper.statement.isExport(schema)) {
      throw new Error(errorText.schema('statement.export'));
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
      throw new Error(errorText.schema('statement.import'));
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
      throw new Error(errorText.schema('statement.declareVariable'));
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
      code += '=' + expression.unknown(schema.value, config);
    }
    return code;
  },
  declareClass(schema: Statement.DeclareClass, config?: Config): string {
    if (!helper.statement.isDeclareClass(schema)) {
      throw new Error(errorText.schema('statement.declareClass'));
    }
    let code = 'class';
    code += ` ${expression.identifier(schema.name, config)}{`;
    if (schema.members) {
      if (!Array.isArray(schema.members)) {
        throw new Error(errorText.schemaProp('statement.declareClass', 'members'));
      }
      schema.members.forEach((item) => {
        code += expression.unknown(item.name, config);
        if (!tools.dataType.isUndefined(item.dataTypes) && item.dataTypes.length) {
          code += ':' + expression.dataType(item.dataTypes, config);
        }
        if (
          helper.expression.isLiteral(item.value) &&
          helper.literal.isFunction(item.value) &&
          item.value.mode === 'method'
        ) {
          code += `${literal.function(item.value, config)};`;
        } else {
          code += `=${expression.unknown(item.value, config)};`;
        }
      });
    }
    code += '}';
    return code;
  },
  expression(schema: Statement.Expression, config?: Config): string {
    return expression.unknown(schema, config);
  },
  if(schema: Statement.If, config?: Config): string {
    if (!helper.statement.isIf(schema)) {
      throw new Error(errorText.schema('statement.if'));
    }
    let code = '';
    code += schema.ifs.reduce((start, arr, index) => {
      return (
        start +
        `${index === 0 ? 'if' : 'else if'}(${expression.unknown(arr[0], config)}){${arr[1].reduce(
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
      throw new Error(errorText.schema('statement.for'));
    }
    let code = 'for(';
    code += `${statement.declareVariable(schema.declare, config)};`;
    code += `${expression.unknown(schema.initializer, config)};`;
    if (helper.expression.isPostfixUnary(schema.incrementor)) {
      code += `${expression.postfixUnary(schema.incrementor, config)}`;
    } else if (helper.expression.isPrefixUnary(schema.incrementor)) {
      code += `${expression.prefixUnary(schema.incrementor, config)}`;
    } else {
      throw new Error(errorText.schemaProp('statement.for', 'incrementor'));
    }
    code += `){${schema.statements.reduce((start, ele) => start + generateTypeScript(ele, config), '')}}`;
    return code;
  },
  while(schema: Statement.While, config?: Config) {
    if (!helper.statement.isWhile(schema)) {
      throw new Error(errorText.schema('statement.while'));
    }
    let code = 'while(';
    code += `${expression.unknown(schema.expression, config)}`;
    code += `){${schema.statements.reduce((start, ele) => start + generateTypeScript(ele, config), '')}}`;
    return code;
  },
  break(schema: Statement.Break, config?: Config) {
    if (!helper.statement.isBreak(schema)) {
      throw new Error(errorText.schema('statement.break'));
    }
    let code = 'break';
    if (!tools.dataType.isUndefined(schema.label)) {
      code += ` ${expression.identifier(schema.label, config)}`;
    }
    return code;
  },
  continue(schema: Statement.Continue, config?: Config) {
    if (!helper.statement.isContinue(schema)) {
      throw new Error(errorText.schema('statement.continue'));
    }
    let code = 'continue';
    if (!tools.dataType.isUndefined(schema.label)) {
      code += ` ${expression.identifier(schema.label, config)}`;
    }
    return code;
  },
  return(schema: Statement.Return, config?: Config) {
    if (!helper.statement.isReturn(schema)) {
      throw new Error(errorText.schema('statement.return'));
    }
    let code = 'return';
    if (!tools.dataType.isUndefined(schema.value)) {
      code += ` ${expression.unknown(schema.value, config)}`;
    }
    return code;
  },
  throw(schema: Statement.Throw, config?: Config) {
    if (!helper.statement.isThrow(schema)) {
      throw new Error(errorText.schema('statement.throw'));
    }
    let code = 'throw';
    code += ` ${expression.unknown(schema.expression, config)}`;
    return code;
  },
};
