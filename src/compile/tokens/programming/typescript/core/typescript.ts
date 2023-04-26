import { statementTypes } from '../../const/statementType';
import { helper } from '../../shared/tools/check';
import { Statement } from '../../types/statement';
import { Config } from '../types';
import { statement, statementHelper } from './statement';

export const generateStatement = (schema: Statement.Line, config?: Config) => {
  if (!helper.isStmt(schema)) {
    throw new Error('generateStatement 方法的 schema参数 非法！');
  }
  const fn = statementHelper.getFn(schema._statement_);
  if (!fn) {
    throw new Error(`generateStatement 方法没有找到“${schema._statement_}”对应的编译方法！`);
  }
  return fn(schema as any, config);

  /*
  switch (schema._statement_) {
    case statementType.import: {
      return statement.import(schema, config);
    }
    case statementType.export: {
      return statement.export(schema, config);
    }
    case statementType.declare: {
      return statement.declare(schema, config);
    }
    case statementType.expression: {
      return statement.expression(schema, config);
    }
    case statementType.cond: {
      return statement.cond(schema, config);
    }
    case statementType.for: {
      return statement.for(schema, config);
    }
    case statementType.while: {
      return statement.while(schema, config);
    }
    case statementType.break: {
      return statement.break(schema, config);
    }
    case statementType.continue: {
      return statement.continue(schema, config);
    }
    case statementType.return: {
      return statement.return(schema, config);
    }
  }
  */
};

export const generateTypeScript = (schema: Statement.List | Statement.Line, config?: Config) => {
  let code = '';
  if (!Array.isArray(schema)) {
    return generateStatement(schema, config) + ';';
  }
  schema.forEach((item) => {
    code += generateStatement(item, config) + ';';
  });
  return code;
};

export class GenerateTypeScript {
  #config?: Config;
  constructor(config?: Config) {
    this.#config = Object.assign(
      {
        singleQuote: true,
        oneIndentSpaceNumber: 2,
      },
      config || {}
    );
  }
  statements(schema: Statement.List | Statement.Line) {
    return generateTypeScript(schema, this.#config);
  }
  export(schema: Statement.Export) {
    return statement.export(schema, this.#config);
  }
  import(schema: Statement.Import) {
    return statement.import(schema, this.#config);
  }
  declare(schema: Statement.Declare) {
    return statement.declare(schema, this.#config);
  }
  expression(schema: Statement.Expression) {
    return statement.expression(schema, this.#config);
  }
  if(schema: Statement.If) {
    return statement.if(schema, this.#config);
  }
  for(schema: Statement.For) {
    return statement.for(schema, this.#config);
  }
  while(schema: Statement.While) {
    return statement.while(schema, this.#config);
  }
  break(schema: Statement.Break) {
    return statement.break(schema, this.#config);
  }
  continue(schema: Statement.Continue) {
    return statement.continue(schema, this.#config);
  }
  return(schema: Statement.Return) {
    return statement.return(schema, this.#config);
  }
}
