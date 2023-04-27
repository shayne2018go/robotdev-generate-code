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
  if (!helper.isDataType(schema)) {
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
    if (!helper.isLiteral(schema)) {
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
    if (!helper.isAccess(schema)) {
      throw new Error('expression.access 方法的 schema参数 错误！');
    }

    const isOptionalChaining =
      typeof schema.isOptionalChaining === 'boolean'
        ? schema.isOptionalChaining
        : config?.accessOptionalChainingDefault === true;

    let code = statement.expression(schema.expression, config);

    if (helper.isIdentifier(schema.name)) {
      code += `${isOptionalChaining ? '?' : ''}.${expression.identifier(schema.name, config)}`;
    } else {
      code += `${isOptionalChaining ? '?.' : ''}[${statement.expression(schema.name, config)}]`;
    }
    return code;
  },
  identifier(schema: Expression.Identifier, config?: Config) {
    if (!helper.isIdentifier(schema)) {
      throw new Error('expression.literal 方法的 schema参数 错误！');
    }
    let code = '';
    code += schema.escapedText;
    return code;
  },
  call(schema: Expression.Call, config?: Config) {
    if (!helper.isCall(schema)) {
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
    let code = '';
    return code;
  },
  conditional(schema: Expression.Conditional, config?: Config) {
    let code = '';
    return code;
  },
  postfixUnary(schema: Expression.PostfixUnary, config?: Config) {
    let code = '';
    return code;
  },
  prefixUnary(schema: Expression.PrefixUnary, config?: Config) {
    let code = '';
    return code;
  },
};
