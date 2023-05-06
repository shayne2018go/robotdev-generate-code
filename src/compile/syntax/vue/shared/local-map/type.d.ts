export type PrimaryKeyType = string | number;
export type PrimaryKeyValue = string | number;
export type IndexKeyType = string | number;
export type IndexKeyValue = string | number;

export type RowDataModal = {
  [Key in string | number]: any;
};

export type RowDataQuery<
  RowData extends RowDataModal,
  PrimaryKey extends Extract<keyof RowData, PrimaryKeyType>,
  IndexKeys extends Exclude<keyof RowData, PrimaryKey>[]
> = {
  [Key in keyof RowData | PrimaryKey | IndexKeys[number]]?: RowData[Key];
};

export type Config<
  RowData extends RowDataModal,
  PrimaryKey extends Extract<keyof RowData, PrimaryKeyType>,
  IndexKeys extends Exclude<keyof RowData, PrimaryKey>[]
> = {
  primaryKey: PrimaryKey;
  indexKeys?: IndexKeys[number][];
  reactive?: <T>(data: T) => T;
};

export type LocalData<
  RowData extends RowDataModal,
  PrimaryKey extends Extract<keyof RowData, PrimaryKeyType>,
  IndexKeys extends Exclude<keyof RowData, PrimaryKey>[]
> = {
  data: RowData[];
  primaryKey: Record<PrimaryKeyValue, RowData>;
  indexs: {
    [Key in IndexKeys[number]]: {
      [P in IndexKeyValue]?: RowData[];
    };
  };
};

export type FindCallback<RowData> = (rowData: RowData) => boolean;
