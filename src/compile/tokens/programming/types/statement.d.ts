import { DataType } from './dataType';
import { StatementType } from './statementType';
import { Expression as StatementExpression } from './expression';

export namespace Statement {
  export type Expression = StatementExpression.Unknown;

  export interface Export {
    _statement_: StatementType['export'];
    default: string;
    keys: Array<string>;
    path: string;
  }

  export interface Import {
    _statement_: StatementType['import'];
    default?: string;
    keys?: Array<string>;
    path: string;
  }

  export interface Declare {
    _statement_: StatementType['declare'];
    name: StatementExpression.Identifier;
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
    else: StatementList;
  }

  export interface While {
    _statement_: StatementType['while'];
    expression: Expression;
    statement: StatementList;
  }

  export interface For {
    _statement_: StatementType['for'];
    declare: Declare;
    initializer: Expression;
    incrementor: StatementExpression.PostfixUnary | StatementExpression.PrefixUnary;
    statement: StatementList;
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
