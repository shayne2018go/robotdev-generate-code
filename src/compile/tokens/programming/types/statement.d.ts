import { DataType } from './dataType';
import { Expression as StatementExpression } from './expression';
import { Keyword } from './keyword';
import { StatementType, StatementTypeEnum } from './statementType';

export namespace Statement {
  export interface Common {
    _statement_: StatementTypeEnum;
  }

  export type Expression = StatementExpression.Unknown;

  export interface ImportExportElementsItem {
    propertyName?: StatementExpression.Identifier;
    name: StatementExpression.Identifier;
  }

  export interface Export {
    _statement_: StatementType['export'];
    all?: boolean | StatementExpression.Identifier;
    elements?: Array<ImportExportElementsItem>;
    path?: StatementExpression.Literal_String;
  }

  export interface Import {
    _statement_: StatementType['import'];
    all?: StatementExpression.Identifier;
    default?: StatementExpression.Identifier;
    elements?: Array<ImportExportElementsItem>;
    path?: StatementExpression.Literal_String;
  }

  export interface Declare {
    _statement_: StatementType['declare'];
    name: StatementExpression.Identifier;
    modifiers?: Array<Keyword.Unknown>;
    isConst?: boolean;
    // isGlobal?: boolean;
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
    label?: StatementExpression.Identifier;
  }

  export interface Continue {
    _statement_: StatementType['continue'];
    label?: StatementExpression.Identifier;
  }

  export interface Throw {
    _statement_: StatementType['throw'];
    expression: Expression;
  }

  export type StatementLine =
    | Expression
    | Export
    | Import
    | Declare
    | Return
    | Throw
    | If
    | While
    | For
    | Break
    | Continue;
  // | Free;

  export type StatementList = Array<Line>;

  export type Line = StatementLine;
  export type List = StatementList;
  export type Unknown = StatementLine;
}
