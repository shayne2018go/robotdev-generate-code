import {
  Config,
  FindCallback,
  IndexKeyType,
  IndexKeyValue,
  LocalData,
  PrimaryKeyType,
  PrimaryKeyValue,
  RowDataModal,
  RowDataQuery,
} from './type.d';

const isPrimaryKeyValue = (value: any): value is PrimaryKeyValue => {
  return ['string', 'number'].includes(typeof value);
};
const isIndexKeyValue = (value: any): value is IndexKeyValue => {
  return ['string', 'number'].includes(typeof value);
};
const isIndexKeyType = (value: any): value is IndexKeyType => {
  return ['string', 'number'].includes(typeof value);
};
const isRowDataQuery = (value: any): value is Record<string, any> => {
  return Object.prototype.toString.call(value) === '[object Object]';
};
export class LocalSql<
  RowData extends RowDataModal,
  PrimaryKey extends Extract<keyof RowData, PrimaryKeyType>,
  IndexKeys extends Exclude<keyof RowData, PrimaryKey>[]
> {
  #primaryKey: PrimaryKey;
  #indexKeys: IndexKeys[number][];
  #localData: LocalData<RowData, PrimaryKey, IndexKeys>;
  constructor(config: Config<RowData, PrimaryKey, IndexKeys>) {
    if (!config.primaryKey || !isPrimaryKeyValue(config.primaryKey)) {
      throw new Error(`'config.primarykey' is not fuond`);
    }
    if (config.indexKeys && !isPrimaryKeyValue(config.primaryKey)) {
      throw new Error(`'config.indexKeys' is not string[]`);
    }
    this.#primaryKey = config?.primaryKey;
    this.#indexKeys = config?.indexKeys || [];

    let reactive = config.reactive;
    if (typeof reactive !== 'function') {
      reactive = (data) => data;
    }
    this.#localData = reactive({
      data: [],
      primaryKey: {},
      indexs: {} as any,
    });
  }
  #createdIndex(rowData: RowData, indexKey: IndexKeys[number]) {
    if (!this.#localData.indexs[indexKey]) {
      this.#localData.indexs[indexKey] = {};
    }
    const indexValue = rowData[indexKey];
    if (isIndexKeyValue(indexValue)) {
      if (!this.#localData.indexs[indexKey]?.[indexValue]) {
        this.#localData.indexs[indexKey][indexValue] = [rowData];
      } else {
        this.#localData.indexs[indexKey][indexValue]?.push(rowData);
      }
    }
  }
  #createdIndexs(rowData: RowData) {
    this.#indexKeys.forEach((indexKey) => {
      this.#createdIndex(rowData, indexKey);
    });
  }
  created(rowDatas: RowData | RowData[], itemCallback?: (item: RowData, index: number) => void) {
    if (!Array.isArray(rowDatas)) {
      rowDatas = [rowDatas];
    }
    rowDatas.forEach((rowData, index) => {
      if (!this.#localData.primaryKey[rowData[this.#primaryKey]]) {
        let obj: RowData;
        if (!this.#indexKeys?.length) {
          obj = rowData;
        } else {
          obj = new Proxy(rowData, {
            get: (target, key, reciver) => {
              return Reflect.get(target, key, reciver);
            },
            set: (target, key, value, reciver) => {
              if (isIndexKeyType(key) && this.#indexKeys?.includes(key as IndexKeys[number])) {
                const oldValue = target[key] as IndexKeyValue;
                if (oldValue !== value && this.#localData.primaryKey[target[this.#primaryKey]]) {
                  const _key = key as IndexKeys[number];
                  let index = -1;
                  this.#localData.indexs[_key]?.[oldValue]?.find((item, i) => {
                    if (item === obj) {
                      index = i;
                      return true;
                    }
                  });
                  if (index > -1) {
                    this.#localData.indexs[_key]?.[oldValue]?.splice(index, 1);
                  }
                  const res = Reflect.set(target, key, value, reciver);
                  this.#createdIndex(obj, _key as IndexKeys[number]);
                  return res;
                }
              }
              return Reflect.set(target, key, value, reciver);
            },
          });
        }
        itemCallback?.(obj, index);
        this.#localData.primaryKey[obj[this.#primaryKey]] = obj;
        this.#localData.data.push(this.#localData.primaryKey[obj[this.#primaryKey]]);
        this.#createdIndexs(this.#localData.primaryKey[obj[this.#primaryKey]]);
      }
    });
    return this;
  }
  update(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>,
    value: {
      [Key in keyof RowData]?: RowData[Key];
    }
  ) {
    if (isPrimaryKeyValue(primaryKeyValue)) {
      if (this.#localData.primaryKey[primaryKeyValue]) {
        Object.assign(this.#localData.primaryKey[primaryKeyValue], value);
      }
    } else if (Array.isArray(primaryKeyValue)) {
      primaryKeyValue.forEach((primaryKeyValue) => {
        if (this.#localData.primaryKey[primaryKeyValue]) {
          Object.assign(this.#localData.primaryKey[primaryKeyValue], value);
        }
      });
    } else if (typeof primaryKeyValue === 'function') {
      this.#localData.data.forEach((item) => {
        if (primaryKeyValue(item)) {
          Object.assign(item, value);
        }
      });
    } else if (isRowDataQuery(primaryKeyValue)) {
      this.queries(primaryKeyValue).forEach((item) => {
        Object.assign(item, value);
      });
    }
    return this;
  }
  #deleteIndexs(rowDatas: RowData[]) {
    const deleteIndex: {
      [Key in IndexKeys[number]]?: IndexKeyValue[];
    } = {};
    this.#indexKeys?.forEach((indexKey) => {
      if (this.#localData.indexs[indexKey]) {
        rowDatas.forEach((rowData) => {
          const indexKeyValue = rowData[indexKey];
          if (isIndexKeyValue(indexKeyValue)) {
            if (!deleteIndex[indexKey]) {
              deleteIndex[indexKey] = [indexKeyValue];
            } else {
              deleteIndex[indexKey]?.push(indexKeyValue);
            }
          }
        });
      }
    });
    Object.entries(deleteIndex).forEach((option) => {
      const [indexKey, indexValues] = option as [IndexKeys[number], IndexKeyValue[]];
      indexValues.forEach((indexValue) => {
        let index = 0;
        const data = this.#localData.indexs[indexKey]?.[indexValue] || [];
        while (index < data.length) {
          const item = data[index];
          if (rowDatas.includes(item)) {
            data.splice(index, 1);
          } else {
            index++;
          }
        }
      });
    });
  }
  delete(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>
  ) {
    if (isPrimaryKeyValue(primaryKeyValue)) {
      this.#localData.data.find((item, index) => {
        if (item[this.#primaryKey] === primaryKeyValue) {
          this.#localData.data.splice(index, 1);
          return true;
        }
      });
      this.#deleteIndexs([this.#localData.primaryKey[primaryKeyValue]]);
      delete this.#localData.primaryKey[primaryKeyValue];
    } else if (Array.isArray(primaryKeyValue)) {
      let deleteCount = 0;
      let index = 0;
      const deleteIndexs: RowData[] = [];
      while (index < this.#localData.data.length) {
        const item = this.#localData.data[index];
        if (item[this.#primaryKey] === primaryKeyValue[deleteCount]) {
          this.#localData.data.splice(index, 1);
          deleteIndexs.push(this.#localData.primaryKey[item[this.#primaryKey]]);
          delete this.#localData.primaryKey[item[this.#primaryKey]];
          deleteCount++;
          if (deleteCount === primaryKeyValue.length) {
            break;
          }
        } else {
          index++;
        }
      }
      this.#deleteIndexs(deleteIndexs);
    } else if (typeof primaryKeyValue === 'function') {
      let index = 0;
      const deleteIndexs: RowData[] = [];
      while (index < this.#localData.data.length) {
        const item = this.#localData.data[index];
        if (primaryKeyValue(item)) {
          this.#localData.data.splice(index, 1);
          deleteIndexs.push(this.#localData.primaryKey[item[this.#primaryKey]]);
          delete this.#localData.primaryKey[item[this.#primaryKey]];
        } else {
          index++;
        }
      }
      this.#deleteIndexs(deleteIndexs);
    } else if (isRowDataQuery(primaryKeyValue)) {
      let index = 0;
      const deleteIndexs: RowData[] = [];
      while (index < this.#localData.data.length) {
        const item = this.#localData.data[index];
        if (
          Object.entries(primaryKeyValue).every((queryItem) => {
            const [key, value] = queryItem as [PrimaryKey | IndexKeyType, RowDataQuery<RowData, PrimaryKey, IndexKeys>];
            return item[key] === value;
          })
        ) {
          this.#localData.data.splice(index, 1);
          deleteIndexs.push(this.#localData.primaryKey[item[this.#primaryKey]]);
          delete this.#localData.primaryKey[item[this.#primaryKey]];
        } else {
          index++;
        }
      }
      this.#deleteIndexs(deleteIndexs);
    }
    return this;
  }

  query<MapReturn>(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>,
    map: (item: RowData) => MapReturn
  ): ReturnType<typeof map>;
  query<MapReturn>(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>
  ): RowData;
  query<MapReturn, MapFn extends (item: RowData) => MapReturn>(
    primaryKeyValue: IndexKeyValue | RowDataQuery<RowData, PrimaryKey, IndexKeys> | FindCallback<RowData>,
    map?: MapFn
  ) {
    if (isPrimaryKeyValue(primaryKeyValue)) {
      if (this.#localData.primaryKey[primaryKeyValue]) {
        return map ? map(this.#localData.primaryKey[primaryKeyValue]) : this.#localData.primaryKey[primaryKeyValue];
      }
    } else if (typeof primaryKeyValue === 'function') {
      const item = this.#localData.data.find((rowData) => primaryKeyValue(rowData));
      if (item) {
        return map ? map(item) : item;
      }
    } else if (isRowDataQuery(primaryKeyValue)) {
      if (Object.prototype.hasOwnProperty.call(primaryKeyValue, this.#primaryKey)) {
        // 搜索条件包含了primaryKey直接快速定位
        const entries = Object.entries(primaryKeyValue) as [IndexKeys[number], IndexKeyValue][];
        const _primaryKeyValue = primaryKeyValue[this.#primaryKey] as PrimaryKeyValue;
        const item = this.#localData.primaryKey[_primaryKeyValue];
        if (
          item &&
          !entries.some(([key, value]) => {
            return item[key] !== value;
          })
        ) {
          return map ? map(item) : item;
        }
        return;
      }
      const entries = Object.entries(primaryKeyValue) as [IndexKeys[number], IndexKeyValue][];
      if (entries.some((item) => !this.#indexKeys.includes(item[0]))) {
        const item = this.#localData.data.find((item) => {
          return !Object.entries(primaryKeyValue).some((queryItem) => {
            const [key, value] = queryItem as [PrimaryKey | IndexKeyType, RowDataQuery<RowData, PrimaryKey, IndexKeys>];
            return item[key] !== value;
          });
        });
        if (item) {
          return map ? map(item) : item;
        }
      } else {
        const first = entries[0];
        const rowDatas = this.#localData.indexs[first[0]]?.[first[1]];
        const item = rowDatas?.find((rowData) => {
          return !entries.some(([key, value]) => {
            return rowData[key] !== value;
          });
        });
        if (item) {
          return map ? map(item) : item;
        }
      }
    }
  }

  queries(): RowData[];
  queries(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>
      | null
  ): RowData[];
  queries<MapReturn, MapFn extends ((item: RowData, index: number) => MapReturn) | undefined>(
    primaryKeyValue:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>
      | null,
    map: MapFn
  ): MapFn extends (item: RowData, index: number) => MapReturn ? ReturnType<typeof map>[] : RowData[];
  queries<MapReturn, MapFn extends ((item: RowData, index: number) => MapReturn) | undefined>(
    primaryKeyValue?:
      | IndexKeyValue
      | IndexKeyValue[]
      | RowDataQuery<RowData, PrimaryKey, IndexKeys>
      | FindCallback<RowData>
      | null,
    map?: MapFn
  ) {
    if (isPrimaryKeyValue(primaryKeyValue)) {
      if (this.#localData.primaryKey[primaryKeyValue]) {
        return map
          ? [map(this.#localData.primaryKey[primaryKeyValue], 0)]
          : [this.#localData.primaryKey[primaryKeyValue]];
      }
      return [];
    } else if (Array.isArray(primaryKeyValue)) {
      const list: MapFn extends (item: RowData, index: number) => MapReturn ? ReturnType<MapFn>[] : RowData[] =
        [] as any;
      let index = -1;
      primaryKeyValue.forEach((primaryKeyValue) => {
        if (this.#localData.primaryKey[primaryKeyValue]) {
          if (map) {
            index++;
            (list as MapReturn[]).push(map(this.#localData.primaryKey[primaryKeyValue], index));
          } else {
            (list as RowData[]).push(this.#localData.primaryKey[primaryKeyValue]);
          }
        }
      });
      return list;
    } else if (typeof primaryKeyValue === 'function') {
      const list: MapFn extends (item: RowData, index: number) => MapReturn ? ReturnType<MapFn>[] : RowData[] =
        [] as any;
      let index = -1;
      this.#localData.data.forEach((rowData) => {
        if (primaryKeyValue(rowData)) {
          if (map) {
            index++;
            (list as MapReturn[]).push(map(rowData, index));
          } else {
            (list as RowData[]).push(rowData);
          }
        }
      });
      return list;
    } else if (isRowDataQuery(primaryKeyValue)) {
      if (Object.prototype.hasOwnProperty.call(primaryKeyValue, this.#primaryKey)) {
        // 搜索条件包含了primaryKey直接快速定位
        const entries = Object.entries(primaryKeyValue) as [IndexKeys[number], IndexKeyValue][];
        const _primaryKeyValue = primaryKeyValue[this.#primaryKey] as PrimaryKeyValue;
        const item = this.#localData.primaryKey[_primaryKeyValue];
        if (
          item &&
          !entries.some(([key, value]) => {
            return item[key] !== value;
          })
        ) {
          return [map ? map(item, 0) : item];
        }
        return [];
      }
      const list: MapFn extends (item: RowData, index: number) => MapReturn ? ReturnType<MapFn>[] : RowData[] =
        [] as any;
      let index = -1;
      const entries = Object.entries(primaryKeyValue) as [IndexKeys[number], IndexKeyValue][];
      if (entries.some((item) => !this.#indexKeys.includes(item[0]))) {
        // 属性未配置索引，无法根据索引查询
        this.#localData.data.forEach((rowData) => {
          if (
            !Object.entries(primaryKeyValue).some((queryItem) => {
              const [key, value] = queryItem as [
                PrimaryKey | IndexKeyType,
                RowDataQuery<RowData, PrimaryKey, IndexKeys>
              ];
              return rowData[key] !== value;
            })
          ) {
            if (map) {
              index++;
              (list as MapReturn[]).push(map(rowData, index));
            } else {
              (list as RowData[]).push(rowData);
            }
          }
        });
      } else {
        const first = entries[0];
        const rowDatas = this.#localData.indexs[first[0]]?.[first[1]];
        rowDatas?.forEach((rowData) => {
          if (
            !entries.some(([key, value]) => {
              return rowData[key] !== value;
            })
          ) {
            if (map) {
              index++;
              (list as MapReturn[]).push(map(rowData, index));
            } else {
              (list as RowData[]).push(rowData);
            }
          }
        });
      }
      return list;
    } else if (primaryKeyValue == null) {
      if (map) {
        return this.#localData.data.map(map);
      } else {
        return this.#localData.data;
      }
    }
    return [];
  }
  clear() {
    this.#localData.data = [];
    this.#localData.primaryKey = {};
    this.#localData.indexs = {} as any;
  }
}
