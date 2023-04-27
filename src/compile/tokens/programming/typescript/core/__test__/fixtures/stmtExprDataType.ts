import { DataType } from '../../../../types/dataType';

export const dataType_void: DataType.Schema_Void = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'void',
};
export const dataType_null: DataType.Schema_Null = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'null',
};
export const dataType_string: DataType.Schema_String = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'string',
};
export const dataType_long: DataType.Schema_Long = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'long',
};
export const dataType_boolean: DataType.Schema_Boolean = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'boolean',
};
export const dataType_int: DataType.Schema_Int = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'int',
};
export const dataType_decimal: DataType.Schema_Decimal = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'decimal',
};

export const dataType_object1: DataType.Schema_Object = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'object',
  properties: [
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'title',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'string',
        },
      ],
    },
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'length',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'int',
        },
      ],
    },
  ],
};

export const dataType_object2: DataType.Schema_Object = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'object',
  record: {
    key: [
      {
        _statement_: 'expression',
        _expression_: 'dataType',
        type: 'string',
      },
      {
        _statement_: 'expression',
        _expression_: 'dataType',
        type: 'int',
      },
    ],
    value: [
      {
        _statement_: 'expression',
        _expression_: 'dataType',
        type: 'string',
      },
      {
        _statement_: 'expression',
        _expression_: 'dataType',
        type: 'boolean',
      },
    ],
  },
};

export const dataType_array: DataType.Schema_Array = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'array',
  items: [
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'string',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'int',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'boolean',
    },
  ],
};

export const dataType_tuple: DataType.Schema_Tuple = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'tuple',
  items: [
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'string',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'int',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'boolean',
    },
  ],
};

export const dataType_function1: DataType.Schema_Function = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'function',
  parameters: [
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'a',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'string',
        },
      ],
    },
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'b',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'int',
        },
      ],
    },
  ],
};

export const dataType_function2: DataType.Schema_Function = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'function',
  parameters: [
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'a',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'string',
        },
      ],
    },
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'b',
      },
      types: [
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'string',
        },
        {
          _statement_: 'expression',
          _expression_: 'dataType',
          type: 'int',
        },
      ],
    },
  ],
  outTypes: [
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'string',
    },
    {
      _statement_: 'expression',
      _expression_: 'dataType',
      type: 'boolean',
    },
  ],
};

export const dataType_datetime: DataType.Schema_Datetime = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'datetime',
};

export const dataType_date: DataType.Schema_Date = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'date',
};

export const dataType_time: DataType.Schema_Time = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'time',
};

export const dataType_timestamp: DataType.Schema_Timestamp = {
  _statement_: 'expression',
  _expression_: 'dataType',
  type: 'timestamp',
};
