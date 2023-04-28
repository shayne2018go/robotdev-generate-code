import { tools } from '@/utils/tools';
import { helper } from '../../shared/tools/check';
import { Expression } from '../../types/expression';
import { Statement } from '../../types/statement';
import { Config } from '../types';
import { dataType } from './dataType';
import { literal } from './literal';
import { statement } from './statement';

export const expression = {
  unknown(schema: Statement.Expression, config?: Config): string {
    if (!helper.statement.isExpression(schema)) {
      throw new Error('statement.expression 方法的 schema参数 非法！');
    }
    if (typeof expression[schema._expression_] !== 'function') {
      throw new Error(`statement.expression 方法没有找到“${schema._expression_}”对应的编译方法！`);
    }
    return expression[schema._expression_](schema as any, config);
  },
  dataType(schema: Array<Expression.DataType> | Expression.DataType, config?: Config): string {
    return dataType.unknowns(schema, config);
  },
  literal(schema: Expression.Literal, config?: Config): string {
    return literal.unknown(schema, config);
  },
  access(schema: Expression.Access, config?: Config): string {
    if (!helper.expression.isAccess(schema)) {
      throw new Error('expression.access 方法的 schema参数 错误！');
    }

    const isOptionalChaining =
      typeof schema.isOptionalChaining === 'boolean'
        ? schema.isOptionalChaining
        : config?.accessOptionalChainingDefault === true;

    let code = statement.expression(schema.expression, config);

    if (helper.expression.isIdentifier(schema.name)) {
      code += `${isOptionalChaining ? '?' : ''}.${expression.identifier(schema.name, config)}`;
    } else {
      code += `${isOptionalChaining ? '?.' : ''}[${statement.expression(schema.name, config)}]`;
    }
    return code;
  },
  identifier(schema: Expression.Identifier, config?: Config): string {
    if (!helper.expression.isIdentifier(schema)) {
      throw new Error('expression.literal 方法的 schema参数 错误！');
    }
    let code = '';
    code += schema.escapedText;
    return code;
  },
  call(schema: Expression.Call, config?: Config): string {
    if (!helper.expression.isCall(schema)) {
      throw new Error('expression.call 方法的 schema参数 错误！');
    }
    if (schema.args && !Array.isArray(schema.args)) {
      throw new Error('expression.call 方法的 schema.args参数 错误！');
    }
    let code = '';
    code += statement.expression(schema.expression, config);
    code += '(';
    if (schema.args) {
      schema.args.forEach((item, index) => {
        if (index > 0) {
          code += ',';
        }
        code += statement.expression(item, config);
      });
    }
    code += ')';
    return code;
  },
  new(schema: Expression.New, config?: Config): string {
    if (!helper.expression.isNew(schema)) {
      throw new Error('expression.new 方法的 schema参数错误！');
    }
    let code = 'new';
    code += ` ${statement.expression(schema.expression)}`;
    if (!tools.dataType.isUndefined(schema.args)) {
      code += `(${schema.args.reduce((start, ele, index) => {
        let str = statement.expression(ele, config);
        return start + `${index > 0 ? ',' : ''}${str}`;
      }, '')})`;
    } else {
      code += '()';
    }
    return code;
  },
  assignment(schema: Expression.Assignment, config?: Config): string {
    if (!helper.expression.isAssignment(schema)) {
      throw new Error('expression.assignment 方法的 schema参数错误！');
    }
    let code = '';
    if (helper.expression.isIdentifier(schema.left)) {
      code += expression.identifier(schema.left, config);
    } else if (helper.expression.isAccess(schema.left)) {
      code += expression.access(schema.left, config);
    } else {
      throw new Error('expression.assignment 方法的 schema.left 参数错误！');
    }
    code += '=';
    if (!tools.dataType.isUndefined(schema.right)) {
      code += statement.expression(schema.right, config);
    }
    return code;
  },
  binary(schema: Expression.Binary, config?: Config): string {
    if (!helper.expression.isBinary(schema)) {
      throw new Error('expression.binary 方法的 schema参数错误！');
    }
    const left = statement.expression(schema.left, config);
    const right = statement.expression(schema.right, config);
    switch (schema.logical) {
      case 'eq': {
        return `${left}===${right}`;
      }
      case 'neq': {
        return `${left}!==${right}`;
      }
      case 'gt': {
        return `${left}>${right}`;
      }
      case 'gte': {
        return `${left}>=${right}`;
      }
      case 'lt': {
        return `${left}<${right}`;
      }
      case 'lte': {
        return `${left}<=${right}`;
      }
      default:
        throw new Error('expression.binary 方法的 schema.logical 参数错误！');
    }
  },
  conditional(schema: Expression.Conditional, config?: Config): string {
    if (!helper.expression.isConditional(schema)) {
      throw new Error('expression.conditional 方法的 schema参数错误！');
    }
    return `${statement.expression(schema.condition, config)}?${statement.expression(
      schema.true,
      config
    )}:${statement.expression(schema.false, config)}`;
  },
  postfixUnary(schema: Expression.PostfixUnary, config?: Config): string {
    if (!helper.expression.isPostfixUnary(schema)) {
      throw new Error('expression.postfixUnary 方法的 schema 参数错误！');
    }
    switch (schema.action) {
      case 'add': {
        return `${expression.identifier(schema.identifier, config)}++`;
      }
      case 'subtract': {
        return `${expression.identifier(schema.identifier, config)}--`;
      }

      default:
        throw new Error('expression.postfixUnary 方法的 schema.action 参数错误！');
    }
  },
  prefixUnary(schema: Expression.PrefixUnary, config?: Config): string {
    if (!helper.expression.isPrefixUnary(schema)) {
      throw new Error('expression.PrefixUnary 方法的 schema 参数错误！');
    }
    switch (schema.action) {
      case 'add': {
        return `++${expression.identifier(schema.identifier, config)}`;
      }
      case 'subtract': {
        return `--${expression.identifier(schema.identifier, config)}`;
      }

      default:
        throw new Error('expression.PrefixUnary 方法的 schema.action 参数错误！');
    }
  },
};
