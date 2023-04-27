import { Statement } from '../../types/statement';
import { Config } from '../types';
import { statement } from './statement';

export const generateTypeScript = (schema: Statement.List | Statement.Line, config?: Config) => {
  return statement.unknowns(schema, config);
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
