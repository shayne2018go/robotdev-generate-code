import { dataTypeKey } from '../../const/dataType';
import { statementType } from '../../const/statementType';
import { Expression } from '../../types/expression';
import { Statement } from '../../types/statement';

const common = {
  isStmt(data: Statement.Line): data is Statement.Line {
    return !!data._statement_;
  },
  isExpression(data: Statement.Expression): data is Statement.Expression {
    return data?._statement_ === statementType.expression;
  },
  isExport(data: Statement.Export): data is Statement.Export {
    return data?._statement_ === statementType.export;
  },
  isLiteral(data: Expression.Literal): data is Expression.Literal {
    return data?._statement_ === statementType.expression && data._expression_ === 'literal';
  },
  isDataType(data: Expression.DataType): data is Expression.DataType {
    return data?._statement_ === statementType.expression && data._expression_ === 'dataType';
  },
};

const literal = {
  isString(data: any): data is Expression.Literal_String {
    return common.isLiteral(data) && data.type === dataTypeKey.string;
  },
  isInt(data: any): data is Expression.Literal_Int {
    return common.isLiteral(data) && data.type === dataTypeKey.int;
  },
  isDecimal(data: any): data is Expression.Literal_Decimal {
    return common.isLiteral(data) && data.type === dataTypeKey.decimal;
  },
  isNumber(data: any): data is Expression.Literal_Int | Expression.Literal_Decimal {
    return common.isLiteral(data) && (data.type === dataTypeKey.int || data.type === dataTypeKey.decimal);
  },
  canText(data: any): data is Expression.Literal_String | Expression.Literal_Int | Expression.Literal_Decimal {
    return (
      (common.isLiteral(data) && data.type === dataTypeKey.string) ||
      data.mode === dataTypeKey.int ||
      data.mode === dataTypeKey.decimal
    );
  },
};

export const helper = {
  ...common,
  literal,
};
