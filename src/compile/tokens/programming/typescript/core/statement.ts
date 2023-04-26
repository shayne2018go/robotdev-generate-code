import { helper } from '../../shared/tools/check';
import { Statement } from '../../types/statement';
import { StatementTypeEnum } from '../../types/statementType';
import { Config } from '../types';
import { expression, expressionHelper } from './expression';

export const statementHelper = {
  getFn(name: StatementTypeEnum) {
    if (typeof statement[name] !== 'function') {
      return false;
    }
    return statement[name];
  },
};

export const statement = {
  export(schema: Statement.Export, config?: Config) {
    let code = '';
    return code;
  },
  import(schema: Statement.Import, config?: Config) {
    let code = '';
    return code;
  },
  declare(schema: Statement.Declare, config?: Config) {
    let code = '';
    return code;
  },
  expression(schema: Statement.Expression, config?: Config) {
    if (!helper.isExpression(schema)) {
      throw new Error('statement.expression 方法的 schema参数 非法！');
    }
    const fn = expressionHelper.getFn(schema._expression_);
    if (!fn) {
      throw new Error(`statement.expression 方法没有找到“${schema._expression_}”对应的编译方法！`);
    }
    return fn(schema as any, config);
  },
  if(schema: Statement.If, config?: Config) {
    let code = '';
    return code;
  },
  for(schema: Statement.For, config?: Config) {
    let code = '';
    return code;
  },
  while(schema: Statement.While, config?: Config) {
    let code = '';
    return code;
  },
  break(schema: Statement.Break, config?: Config) {
    let code = '';
    return code;
  },
  continue(schema: Statement.Continue, config?: Config) {
    let code = '';
    return code;
  },
  return(schema: Statement.Return, config?: Config) {
    let code = '';
    return code;
  },
};
