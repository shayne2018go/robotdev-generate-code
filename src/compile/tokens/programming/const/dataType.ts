export const dataTypeKey = {
  void: 'void',
  null: 'null',
  string: 'string',
  long: 'long',
  int: 'int',
  decimal: 'decimal',
  boolean: 'boolean',
  array: 'array',
  tuple: 'tuple',
  object: 'object',
  // enum: 'enum',
  // enums: 'enums',
  datetime: 'datetime',
  date: 'date',
  time: 'time',
  timestamp: 'timestamp',
  function: 'function',
  // ref: 'ref',
} as const;

export const dataTypeKeys = Object.values(dataTypeKey);
