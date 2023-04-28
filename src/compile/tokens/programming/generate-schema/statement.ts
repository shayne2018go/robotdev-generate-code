import { tools } from '@/utils/tools';
import { expressionType } from '../../const/statementType';
import { helper } from '../../shared/tools/check';
import { Statement } from '../types/statement';
import { Config } from '../types';
import { StatementTypeEnum } from '../types/statementType';
import { expression } from './expression';
import { generateTypeScript } from './typescript';
import { Expression } from '../types/expression';
import { statementType } from '../const/statementType';
import { literal } from './literal';

export const statement = {
  unknown<T extends StatementTypeEnum, R extends Record<string, any>>(
    statementType: T,
    data?: R
  ): {
    _statement_: T;
  } & R {
    return {
      _statement_: statementType,
      ...(data || ({} as R)),
    };
  },
  export(
    exportName: string | null,
    elements: Array<{
      exportName?: string;
      name: string;
    }> | null,
    path?: string
  ): Statement.Export {
    const schema: Statement.Export = statement.unknown(statementType.export);
    if (typeof exportName === 'string') {
      schema.all = expression.identifier(exportName);
    } else if (!elements) {
      schema.all = true;
    } else {
      schema.elements = [];
      elements?.forEach((item) => {
        const _item: Statement.ImportExportElementsItem = {
          name: expression.identifier(item.name),
        };
        if (item.exportName) {
          _item.propertyName = expression.identifier(item.exportName);
        }
        schema.elements?.push(_item);
      });
    }
    if (path) {
      schema.path = literal.string(path);
    }
    return schema;
  },
  import(
    exportName: string | null,
    elements: Array<{
      exportName?: string;
      name: string;
    }> | null,
    path?: string
  ): Statement.Import {
    const schema: Statement.Import = statement.unknown(statementType.import);
    if (typeof exportName === 'string') {
      schema.all = expression.identifier(exportName);
    } else if (elements) {
      schema.elements = [];
      elements?.forEach((item) => {
        const _item: Statement.ImportExportElementsItem = {
          name: expression.identifier(item.name),
        };
        if (item.exportName) {
          _item.propertyName = expression.identifier(item.exportName);
        }
        schema.elements?.push(_item);
      });
    } else {
      throw new Error('statement.import 的exportName和elements两个参数之中至少需要定义一个');
    }
    if (path) {
      schema.path = literal.string(path);
    }
    return schema;
  },
  declare(): Statement.Declare {},
  expression(): Statement.Expression {},
  if(): Statement.If {},
  for(): Statement.For {},
  while(): Statement.While {},
  break(): Statement.Break {},
  continue(): Statement.Continue {},
  return(): Statement.Return {},
  throw(): Statement.Throw {},
};
