import { DataType } from './dataType';
import { StatementType } from './statementType';
import { Expression as StatementExpression } from './expression';
import { Keyword } from './keyword';

export namespace Statement {
  export type Expression = StatementExpression.Unknown;

  export interface Export {
    _statement_: StatementType['export'];
    all?: boolean | StatementExpression.Identifier;
    elements?: Array<{
      propertyName?: StatementExpression.Identifier;
      name: StatementExpression.Identifier;
    }>;
    path?: StatementExpression.Literal_String;
  }

  export interface Import {
    _statement_: StatementType['import'];
    all?: StatementExpression.Identifier;
    default?: StatementExpression.Identifier;
    elements?: Array<{
      propertyName?: StatementExpression.Identifier;
      name: StatementExpression.Identifier;
    }>;
    path?: StatementExpression.Literal_String;
  }

  export interface Declare {
    _statement_: StatementType['declare'];
    name: StatementExpression.Identifier;
    modifiers?: Array<Keyword.Unknown>;
    isConst?: boolean;
    isGlobal?: boolean;
    dataTypes?: Array<DataType.Unknown>;
    value?: Expression;
  }

  export interface Return {
    _statement_: StatementType['return'];
    value?: Expression;
  }

  export interface If {
    _statement_: StatementType['if'];
    ifs: Array<[Expression, StatementList]>;
    else?: StatementList;
  }

  export interface While {
    _statement_: StatementType['while'];
    expression: Expression;
    statements: StatementList;
  }

  export interface For {
    _statement_: StatementType['for'];
    declare: Declare;
    initializer: Expression;
    incrementor: StatementExpression.PostfixUnary | StatementExpression.PrefixUnary;
    statements: StatementList;
  }

  // export interface Free {
  //   _statement_: StatementType['free'];
  //   code: string;
  // }

  export interface Break {
    _statement_: StatementType['break'];
    index?: number;
  }

  export interface Continue {
    _statement_: StatementType['continue'];
    index?: number;
  }

  export type StatementLine = Expression | Export | Import | Declare | Return | If | While | For | Break | Continue;
  // | Free;

  export type StatementList = Array<Line>;

  export type Line = StatementLine;
  export type List = StatementList;
}
