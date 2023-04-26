import { helper } from '../../shared/tools/check';
import { Expression } from '../../types/expression';
import { ExpressionTypeEnum } from '../../types/statementType';
import { Config } from '../types';
import { dataTypeHelper } from './dataType';
import { literal, literalHelper } from './literal';

export const expressionHelper = {
  getFn(name: ExpressionTypeEnum) {
    if (typeof expression[name] !== 'function') {
      return false;
    }
    return expression[name];
  },
};

export const expression = {
  dataType(schema: Expression.DataType, config?: Config) {
    if (!helper.isDataType(schema)) {
      throw new Error('expression.dataType 方法的 schema参数 非法！');
    }
    const fn = dataTypeHelper.getFn(schema.type);
    if (!fn) {
      throw new Error(`expression.dataType 方法没有找到“${schema.type}”对应的编译方法！`);
    }
    return fn(schema as any, config);
  },
  literal(schema: Expression.Literal, config?: Config) {
    if (!helper.isLiteral(schema)) {
      throw new Error('expression.literal 方法的 schema参数 非法！');
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
    let code = '';
    return code;
  },
  identifier(schema: Expression.Identifier, config?: Config) {
    let code = '';
    return code;
  },
  call(schema: Expression.Call, config?: Config) {
    let code = '';
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
