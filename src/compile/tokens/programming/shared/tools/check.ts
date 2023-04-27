import { dataTypeKey } from '../../const/dataType';
import { expressionType, statementType } from '../../const/statementType';
import { DataType } from '../../types/dataType';
import { Expression } from '../../types/expression';
import { Statement } from '../../types/statement';

const common = {
  isStmt(data: Statement.Line): data is Statement.Line {
    return !!data._statement_;
  },
  isDeclare(data: Statement.Declare): data is Statement.Declare {
    return data?._statement_ === statementType.declare;
  },
  isExpression(data: Statement.Expression): data is Statement.Expression {
    return data?._statement_ === statementType.expression;
  },
  isExport(data: Statement.Export): data is Statement.Export {
    return data?._statement_ === statementType.export;
  },
};

const expression = {
  isIdentifier(data: Expression.Identifier): data is Expression.Identifier {
    return common.isExpression(data) && data._expression_ === expressionType.identifier;
  },
  isDataType(data: Expression.DataType): data is Expression.DataType {
    return common.isExpression(data) && data._expression_ === expressionType.dataType;
  },
  isLiteral(data: Expression.Literal): data is Expression.Literal {
    return common.isExpression(data) && data._expression_ === expressionType.literal;
  },
};

const dataType = {
  isString(data: DataType.Schema_String): data is DataType.Schema_String {
    return expression.isDataType(data) && data.type === dataTypeKey.string;
  },
  isBoolean(data: DataType.Schema_Boolean): data is DataType.Schema_Boolean {
    return expression.isDataType(data) && data.type === dataTypeKey.boolean;
  },
  isInt(data: DataType.Schema_Int): data is DataType.Schema_Int {
    return expression.isDataType(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: DataType.Schema_Decimal): data is DataType.Schema_Decimal {
    return expression.isDataType(data) && data.type === dataTypeKey.decimal;
  },
};

const literal = {
  isString(data: Expression.Literal_String): data is Expression.Literal_String {
    return expression.isLiteral(data) && data.type === dataTypeKey.string;
  },
  isInt(data: Expression.Literal_Int): data is Expression.Literal_Int {
    return expression.isLiteral(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: Expression.Literal_Decimal): data is Expression.Literal_Decimal {
    return expression.isLiteral(data) && data.type === dataTypeKey.decimal;
  },
  isNumber(
    data: Expression.Literal_Int | Expression.Literal_Decimal
  ): data is Expression.Literal_Int | Expression.Literal_Decimal {
    return expression.isLiteral(data) && (data.type === dataTypeKey.int || data.type === dataTypeKey.decimal);
  },
  canText(
    data: Expression.Literal_String | Expression.Literal_Int | Expression.Literal_Decimal
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
