import { LocalSql } from './core';
import { Config, FindCallback, IndexKeyValue, PrimaryKeyType, RowDataModal, RowDataQuery } from './type.d';

/**
 * 本地数组数据SQL状态管理
 * @param config
 * @since 0.0.1
 */
export const localSqlStore = <
  RowData extends RowDataModal,
  PrimaryKey extends Extract<keyof RowData, PrimaryKeyType>,
  IndexKeys extends Exclude<keyof RowData, PrimaryKey>[]
>(
  config: Config<RowData, PrimaryKey, IndexKeys>
) => {
  const store = new LocalSql<RowData, PrimaryKey, IndexKeys>(config);
  const methods = {
    created: (rowDatas: RowData | RowData[], itemCallback?: (item: RowData, index: number) => void) => {
      rowDatas = JSON.parse(JSON.stringify(rowDatas));
      store.created(rowDatas, itemCallback);
      return methods;
    },
    update: (
      primaryKey:
        | IndexKeyValue
        | IndexKeyValue[]
        | RowDataQuery<RowData, PrimaryKey, IndexKeys>
        | FindCallback<RowData>,
      value: {
        [Key in keyof RowData]?: RowData[Key];
      }
    ) => {
      store.update(primaryKey, value);
      return methods;
    },
    delete: (
      primaryKey: IndexKeyValue | IndexKeyValue[] | RowDataQuery<RowData, PrimaryKey, IndexKeys> | FindCallback<RowData>
    ) => {
      store.delete(primaryKey);
      return methods;
    },
    query(primaryKeyValue: IndexKeyValue | RowDataQuery<RowData, PrimaryKey, IndexKeys> | FindCallback<RowData>) {
      return store.query(primaryKeyValue);
    },
    queries<MapReturn, MapFn extends ((item: RowData, index: number) => MapReturn) | undefined>(
      primaryKeyValue?:
        | IndexKeyValue
        | IndexKeyValue[]
        | RowDataQuery<RowData, PrimaryKey, IndexKeys>
        | FindCallback<RowData>
        | null,
      map?: MapFn
    ) {
      return store.queries(primaryKeyValue == null ? null : primaryKeyValue, map);
    },
    clear() {
      store.clear();
      return methods;
    },
  };
  return methods;
};
