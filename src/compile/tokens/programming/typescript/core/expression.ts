import { helper } from '../../shared/tools/check';
import { Expression } from '../../types/expression';
import { ExpressionTypeEnum } from '../../types/statementType';
import { Config } from '../types';
import { dataTypeHelper } from './dataType';
import { literalHelper } from './literal';
import { statement } from './statement';

export const expressionHelper = {
  getFn(name: ExpressionTypeEnum) {
    if (typeof expression[name] !== 'function') {
      return false;
    }
    return expression[name];
  },
};

const dataType = (schema: Expression.DataType, config?: Config) => {
  if (!helper.expression.isDataType(schema)) {
    throw new Error('dataType 方法的 schema参数 错误！');
  }
  const fn = dataTypeHelper.getFn(schema.type);
  if (!fn) {
    throw new Error(`dataType 方法没有找到“${schema.type}”对应的编译方法！`);
  }
  return fn(schema as any, config);
};

export const expression = {
  dataType(schema: Array<Expression.DataType> | Expression.DataType, config?: Config) {
    let types: Array<Expression.DataType>;
    if (Array.isArray(schema)) {
      types = schema;
    } else {
      types = [schema];
    }
    let code = '';
    types.forEach((item, index) => {
      if (index > 0) {
        code += '|';
      }
      code += dataType(item, config);
    });
    return code;
  },
  literal(schema: Expression.Literal, config?: Config) {
    if (!helper.expression.isLiteral(schema)) {
      throw new Error('expression.literal 方法的 schema参数 错误！');
    }
    const fn = literalHelper.getFn(schema.type);
    if (!fn) {
      throw new Error(`expression.dataType 方法没有找到“${schema.type}”对应的编译方法！`);
    }
    return fn(schema as any, config);
  },
  class(schema: Expression.Class, config?: Config) {
    let code = '';
    return code;
  },
  access(schema: Expression.Access, config?: Config) {
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
  identifier(schema: Expression.Identifier, config?: Config) {
    if (!helper.expression.isIdentifier(schema)) {
      throw new Error('expression.literal 方法的 schema参数 错误！');
    }
    let code = '';
    code += schema.escapedText;
    return code;
  },
  call(schema: Expression.Call, config?: Config) {
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
        code += statement.expression(item);
      });
    }
    code += ')';
    return code;
  },
  new(schema: Expression.New, config?: Config) {
    let code = '';
    return code;
  },
  assignment(schema: Expression.Assignment, config?: Config) {
    let code = '';
    return code;
  },
  binary(schema: Expression.Binary, config?: Config) {
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
  conditional(schema: Expression.Conditional, config?: Config) {
    let code = '';
    return code;
  },
  postfixUnary(schema: Expression.PostfixUnary, config?: Config) {
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
  prefixUnary(schema: Expression.PrefixUnary, config?: Config) {
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
