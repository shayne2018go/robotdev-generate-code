import { dataTypeKey } from '../../const/dataType';
import { expressionType, statementType } from '../../const/statementType';
import { DataType } from '../../types/dataType';
import { Expression } from '../../types/expression';
import { Statement } from '../../types/statement';

const common = {
  isStmt(data: Statement.Line): data is Statement.Line {
    return !!data._statement_;
  },
  isDeclare(data: Statement.Line): data is Statement.Declare {
    return data?._statement_ === statementType.declare;
  },
  isExpression(data: Statement.Line): data is Statement.Expression {
    return data?._statement_ === statementType.expression;
  },
  isExport(data: Statement.Line): data is Statement.Export {
    return data?._statement_ === statementType.export;
  },
  isImport(data: Statement.Line): data is Statement.Import {
    return data?._statement_ === statementType.import;
  },
};

const expression = {
  isIdentifier(data: Expression.Unknown): data is Expression.Identifier {
    return common.isExpression(data) && data._expression_ === expressionType.identifier;
  },
  isDataType(data: Expression.Unknown): data is Expression.DataType {
    return common.isExpression(data) && data._expression_ === expressionType.dataType;
  },
  isLiteral(data: Expression.Unknown): data is Expression.Literal {
    return common.isExpression(data) && data._expression_ === expressionType.literal;
  },
};

const dataType = {
  isString(data: DataType.Unknown): data is DataType.Schema_String {
    return expression.isDataType(data) && data.type === dataTypeKey.string;
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
};

const literal = {
  isString(data: Expression.Literal): data is Expression.Literal_String {
    return expression.isLiteral(data) && data.type === dataTypeKey.string;
  },
  isInt(data: Expression.Literal): data is Expression.Literal_Int {
    return expression.isLiteral(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: Expression.Literal): data is Expression.Literal_Decimal {
    return expression.isLiteral(data) && data.type === dataTypeKey.decimal;
  },
  isNumber(
    data: Expression.Literal
  ): data is Expression.Literal_Int | Expression.Literal_Decimal {
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

export const helper = {
  ...common,
  ...literal,
  ...expression,
  dataType,
};
