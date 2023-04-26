import { statementType, statementTypes, expressionType, expressionTypes } from '../const/statementType';

export type StatementType = typeof statementType;
export type StatementTypeEnum = typeof statementTypes[number];

export type ExpressionType = typeof expressionType;
export type ExpressionTypeEnum = typeof expressionTypes[number];
