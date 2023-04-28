import { Expression } from '../../../../types/expression';

export const literal_void: Expression.Literal_Void = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'void',
};

export const literal_null: Expression.Literal_Null = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'null',
};

export const literal_string1: Expression.Literal_String = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'string',
};

export const literal_string2: Expression.Literal_String = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'string',
  value: '这是"双引号"，这是\'单引号\'',
};

export const literal_long1: Expression.Literal_Long = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'long',
};

export const literal_long2: Expression.Literal_Long = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'long',
  value: '<p>这是一段文本</p>',
};

export const literal_boolean: Expression.Literal_Boolean = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'boolean',
  value: true,
};

export const literal_int: Expression.Literal_Int = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'int',
  value: 89757,
};

export const literal_decimal: Expression.Literal_Decimal = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'decimal',
  value: 3.1415926,
};

export const literal_object1: Expression.Literal_Object = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'object',
  value: [
    {
      key: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'title',
      },
      value: {
        _statement_: 'expression',
        _expression_: 'literal',
        type: 'string',
        value: '中国',
      },
    },
    {
      key: {
        _statement_: 'expression',
        _expression_: 'call',
        expression: {
          _statement_: 'expression',
          _expression_: 'identifier',
          escapedText: 'getText',
        },
      },
      value: {
        _statement_: 'expression',
        _expression_: 'literal',
        type: 'function',
        mode: 'arrow',
        value: [
          {
            _statement_: 'declare',
            name: {
              _statement_: 'expression',
              _expression_: 'identifier',
              escapedText: 'a',
            },
            value: {
              _statement_: 'expression',
              _expression_: 'literal',
              type: 'string',
              value: 'abc',
            },
          },
          {
            _statement_: 'declare',
            name: {
              _statement_: 'expression',
              _expression_: 'identifier',
              escapedText: 'b',
            },
            value: {
              _statement_: 'expression',
              _expression_: 'literal',
              type: 'int',
              value: 123,
            },
          },
        ],
      },
    },
  ],
};

export const literal_array: Expression.Literal_Array = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'array',
  value: [
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'a',
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'int',
      value: 1,
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'boolean',
      value: false,
    },
  ],
};

export const literal_tuple: Expression.Literal_Tuple = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'tuple',
  value: [
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'string',
      value: 'a',
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'int',
      value: 1,
    },
    {
      _statement_: 'expression',
      _expression_: 'literal',
      type: 'boolean',
      value: false,
    },
  ],
};

export const literal_function: Expression.Literal_Function = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'function',
  mode: 'arrow',
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
          type: 'boolean',
        },
      ],
    },
  ],
  value: [
    {
      _statement_: 'declare',
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'a',
      },
      value: {
        _statement_: 'expression',
        _expression_: 'literal',
        type: 'string',
        value: 'abc',
      },
    },
    {
      _statement_: 'declare',
      name: {
        _statement_: 'expression',
        _expression_: 'identifier',
        escapedText: 'b',
      },
      value: {
        _statement_: 'expression',
        _expression_: 'literal',
        type: 'int',
        value: 123,
      },
    },
  ],
};

export const literal_datetime: Expression.Literal_Datetime = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'datetime',
  value: 'Thu Apr 27 2023 17:01:16 GMT+0800 (中国标准时间)',
};

export const literal_date: Expression.Literal_Date = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'date',
  value: '2023/4/27',
};

export const literal_time: Expression.Literal_Time = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'time',
  value: '17:02:20',
};

export const literal_timestamp: Expression.Literal_Timestamp = {
  _statement_: 'expression',
  _expression_: 'literal',
  type: 'timestamp',
  value: '1682586168861',
};
