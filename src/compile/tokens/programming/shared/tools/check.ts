import { dataTypeKey } from '../../const/dataType';
import { expressionType, statementType } from '../../const/statementType';
import { DataType } from '../../types/dataType';
import { Expression } from '../../types/expression';
import { Statement } from '../../types/statement';

const statement = {
  isStmt(data: Statement.Unknown): data is Statement.Unknown {
    return !!data._statement_;
  },
  isDeclareVariable(data: Statement.Unknown): data is Statement.DeclareVariable {
    return data?._statement_ === statementType.variable;
  },
  isDeclareClass(data: Statement.Unknown): data is Statement.DeclareClass {
    return data?._statement_ === statementType.class;
  },
  isExpression(data: Statement.Unknown): data is Statement.Expression {
    return data?._statement_ === statementType.expression;
  },
  isExport(data: Statement.Unknown): data is Statement.Export {
    return data?._statement_ === statementType.export;
  },
  isImport(data: Statement.Unknown): data is Statement.Import {
    return data?._statement_ === statementType.import;
  },
  isIf(data: Statement.Unknown): data is Statement.If {
    return data?._statement_ === statementType.if;
  },
  isFor(data: Statement.Unknown): data is Statement.For {
    return data?._statement_ === statementType.for;
  },
  isWhile(data: Statement.Unknown): data is Statement.While {
    return data?._statement_ === statementType.while;
  },
  isBreak(data: Statement.Unknown): data is Statement.Break {
    return data?._statement_ === statementType.break;
  },
  isContinue(data: Statement.Unknown): data is Statement.Continue {
    return data?._statement_ === statementType.continue;
  },
  isReturn(data: Statement.Unknown): data is Statement.Return {
    return data?._statement_ === statementType.return;
  },
  isThrow(data: Statement.Unknown): data is Statement.Throw {
    return data?._statement_ === statementType.throw;
  },
};

const expression = {
  isIdentifier(data: Expression.Unknown): data is Expression.Identifier {
    return statement.isExpression(data) && data._expression_ === expressionType.identifier;
  },
  isDataType(data: Expression.Unknown): data is Expression.DataType {
    return statement.isExpression(data) && data._expression_ === expressionType.dataType;
  },
  isLiteral(data: Expression.Unknown): data is Expression.Literal {
    return statement.isExpression(data) && data._expression_ === expressionType.literal;
  },
  isCall(data: Expression.Unknown): data is Expression.Call {
    return statement.isExpression(data) && data._expression_ === expressionType.call;
  },
  isNew(data: Expression.Unknown): data is Expression.New {
    return statement.isExpression(data) && data._expression_ === expressionType.new;
  },
  isAccess(data: Expression.Unknown): data is Expression.Access {
    return statement.isExpression(data) && data._expression_ === expressionType.access;
  },
  isAssignment(data: Expression.Unknown): data is Expression.Assignment {
    return statement.isExpression(data) && data._expression_ === expressionType.assignment;
  },
  isBinary(data: Expression.Unknown): data is Expression.Binary {
    return statement.isExpression(data) && data._expression_ === expressionType.binary;
  },
  isConditional(data: Expression.Unknown): data is Expression.Conditional {
    return statement.isExpression(data) && data._expression_ === expressionType.conditional;
  },
  isPostfixUnary(data: Expression.Unknown): data is Expression.PostfixUnary {
    return statement.isExpression(data) && data._expression_ === expressionType.postfixUnary;
  },
  isPrefixUnary(data: Expression.Unknown): data is Expression.PrefixUnary {
    return statement.isExpression(data) && data._expression_ === expressionType.prefixUnary;
  },
};

const dataType = {
  isVoid(data: DataType.Unknown): data is DataType.Schema_Void {
    return expression.isDataType(data) && data.type === dataTypeKey.void;
  },
  isNull(data: DataType.Unknown): data is DataType.Schema_Null {
    return expression.isDataType(data) && data.type === dataTypeKey.null;
  },
  isString(data: DataType.Unknown): data is DataType.Schema_String {
    return expression.isDataType(data) && data.type === dataTypeKey.string;
  },
  isLong(data: DataType.Unknown): data is DataType.Schema_Long {
    return expression.isDataType(data) && data.type === dataTypeKey.long;
  },
  isBoolean(data: DataType.Unknown): data is DataType.Schema_Boolean {
    return expression.isDataType(data) && data.type === dataTypeKey.boolean;
  },
  isInt(data: DataType.Unknown): data is DataType.Schema_Int {
    return expression.isDataType(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: DataType.Unknown): data is DataType.Schema_Decimal {
    return expression.isDataType(data) && data.type === dataTypeKey.decimal;
  },
  isObject(data: DataType.Unknown): data is DataType.Schema_Object {
    return expression.isDataType(data) && data.type === dataTypeKey.object;
  },
  isArray(data: DataType.Unknown): data is DataType.Schema_Array {
    return expression.isDataType(data) && data.type === dataTypeKey.array;
  },
  isTuple(data: DataType.Unknown): data is DataType.Schema_Tuple {
    return expression.isDataType(data) && data.type === dataTypeKey.tuple;
  },
  isFunction(data: DataType.Unknown): data is DataType.Schema_Function {
    return expression.isDataType(data) && data.type === dataTypeKey.function;
  },
  // isEnum(data: DataType.Unknown): data is DataType.Schema_Enum {
  //   return expression.isDataType(data) && data.type === dataTypeKey.enum;
  // },
  isDatetime(data: DataType.Unknown): data is DataType.Schema_Datetime {
    return expression.isDataType(data) && data.type === dataTypeKey.datetime;
  },
  isDate(data: DataType.Unknown): data is DataType.Schema_Date {
    return expression.isDataType(data) && data.type === dataTypeKey.date;
  },
  isTime(data: DataType.Unknown): data is DataType.Schema_Time {
    return expression.isDataType(data) && data.type === dataTypeKey.time;
  },
  isTimestamp(data: DataType.Unknown): data is DataType.Schema_Timestamp {
    return expression.isDataType(data) && data.type === dataTypeKey.timestamp;
  },
};

const literal = {
  isVoid(data: Expression.Literal): data is Expression.Literal_Void {
    return expression.isLiteral(data) && data.type === dataTypeKey.void;
  },
  isNull(data: Expression.Literal): data is Expression.Literal_Null {
    return expression.isLiteral(data) && data.type === dataTypeKey.null;
  },
  isString(data: Expression.Literal): data is Expression.Literal_String {
    return expression.isLiteral(data) && data.type === dataTypeKey.string;
  },
  isLong(data: Expression.Literal): data is Expression.Literal_Long {
    return expression.isLiteral(data) && data.type === dataTypeKey.long;
  },
  isBoolean(data: Expression.Literal): data is Expression.Literal_Boolean {
    return expression.isLiteral(data) && data.type === dataTypeKey.boolean;
  },
  isInt(data: Expression.Literal): data is Expression.Literal_Int {
    return expression.isLiteral(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: Expression.Literal): data is Expression.Literal_Decimal {
    return expression.isLiteral(data) && data.type === dataTypeKey.decimal;
  },
  isObject(data: Expression.Literal): data is Expression.Literal_Object {
    return expression.isLiteral(data) && data.type === dataTypeKey.object;
  },
  isArray(data: Expression.Literal): data is Expression.Literal_Array {
    return expression.isLiteral(data) && data.type === dataTypeKey.array;
  },
  isTuple(data: Expression.Literal): data is Expression.Literal_Tuple {
    return expression.isLiteral(data) && data.type === dataTypeKey.tuple;
  },
  isFunction(data: Expression.Literal): data is Expression.Literal_Function {
    return expression.isLiteral(data) && data.type === dataTypeKey.function;
  },
  // isEnum(data: Expression.Literal): data is Expression.Literal_Enum {
  //   return expression.isLiteral(data) && data.type === dataTypeKey.enum;
  // },
  isDatetime(data: Expression.Literal): data is Expression.Literal_Datetime {
    return expression.isLiteral(data) && data.type === dataTypeKey.datetime;
  },
  isDate(data: Expression.Literal): data is Expression.Literal_Date {
    return expression.isLiteral(data) && data.type === dataTypeKey.date;
  },
  isTime(data: Expression.Literal): data is Expression.Literal_Time {
    return expression.isLiteral(data) && data.type === dataTypeKey.time;
  },
  isTimestamp(data: Expression.Literal): data is Expression.Literal_Timestamp {
    return expression.isLiteral(data) && data.type === dataTypeKey.timestamp;
  },

  isNumber(data: Expression.Literal): data is Expression.Literal_Int | Expression.Literal_Decimal {
    return expression.isLiteral(data) && (data.type === dataTypeKey.int || data.type === dataTypeKey.decimal);
  },
  canText(
    data: Expression.Literal
  ): data is Expression.Literal_String | Expression.Literal_Int | Expression.Literal_Decimal {
    return (
      expression.isLiteral(data) &&
      (data.type === dataTypeKey.string || data.type === dataTypeKey.int || data.type === dataTypeKey.decimal)
    );
  },
};

export const errorText = {
  schema(fnName: string) {
    return `${fnName} 方法的 schema 参数错误！`;
  },
  schemaProp(fnName: string, propName: string) {
    return `${fnName} 方法的 schema.${propName} 参数错误！`;
  },
  schemaFn(fnName: string, type: string) {
    return `${fnName} 方法没有找到 ${type} 对应的编译方法！`;
  },
};

export const helper = {
  statement,
  expression,
  literal,
  dataType,
};
