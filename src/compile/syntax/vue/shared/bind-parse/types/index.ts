import {
  ArrayExpression,
  AssignmentExpression,
  BooleanLiteral,
  CallExpression,
  DecimalLiteral,
  Identifier,
  IfStatement,
  MemberExpression,
  NullLiteral,
  NumericLiteral,
  ObjectExpression,
  OptionalMemberExpression,
  StringLiteral,
} from '@babel/types';
import { CompileCurrentCtx } from '../../../compilePages';
import { genVarName } from '../../helper';
import { T } from 'vitest/dist/types-e3c9754d';

export type ActionAst = CallExpression | AssignmentExpression;
export type ActionsAst = CallExpression[] | AssignmentExpression[];

export type BindAst =
  | OptionalMemberExpression
  | MemberExpression
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression
  | NullLiteral
  | Identifier;

export type BindRdData =
  | CodeSchema.DataValue_GetVar
  | CodeSchema.DataValue_GetApiData
  | CodeSchema.DataValue_GetParam
  | CodeSchema.DataValue_GetEventData
  | CodeSchema.DataValue_GetSlotData
  | CodeSchema.DataValue_GetEachData
  | CodeSchema.DataValue_GetArguments
  // | CodeSchema.DataValue_GetModelData
  | CodeSchema.DataValue_GetCmptPropData
  | CodeSchema.DataValue_TableData;

export type LiteralAst =
  | ArrayExpression
  | StringLiteral
  | NumericLiteral
  | BooleanLiteral
  | ObjectExpression
  | DecimalLiteral
  | CallExpression;

export type BindParseCtx<T extends CodeSchema.Page | CodeSchema.Component = CodeSchema.Page> = {
  global: CompileCurrentCtx['global'];
  scope: CompileCurrentCtx['scope'] & {
    node?: CodeSchema.ComponentNode;
    prop?: CodeSchema.Property;
    event?: CodeSchema.Event;
    actions?: {
      genVarName: ReturnType<typeof genVarName>;
      map: {
        [id: CodeSchema.Action['id']]: {
          data: CodeSchema.Action;
          protocol: CodeSchema.Action_Protocol;
          varName: string;
          parametersVarNames: {
            [id: CodeSchema.Action_Protocol['parameters'][number]['id']]: {
              protocol: CodeSchema.Action_Protocol['parameters'][number];
              varName: string;
              memberVarNames: {
                [id: CodeSchema.Property_Protocol['id']]: {
                  protocol: CodeSchema.Property_Protocol;
                  varName: string;
                };
              };
            };
          };
        };
      };
    };
  };
};

export type AccessPath = {
  type: 'object' | 'array';
  key: string | number;
}[];

export type TableProps = {
  _table_: true;
  columns: {
    key: string;
    value: ArrayExpression;
  };
  dataSource: {
    key: string;
    value: ActionAst | ActionsAst | BindAst | undefined;
  };
};

export type ReturnRef = {
  type: 'table' | 'ast';
  value?: ActionAst | ActionsAst | IfStatement | BindAst | TableProps | undefined;
};
