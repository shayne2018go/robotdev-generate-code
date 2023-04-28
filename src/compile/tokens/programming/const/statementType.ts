export const statementType = {
  expression: 'expression',
  export: 'export', // 导出语句
  import: 'import', // 导入语句
  declare: 'declare', // 声明语句
  return: 'return', // 返回值语句
  if: 'if', // 条件语句
  for: 'for', // for循环语句
  while: 'while', // while循环语句
  break: 'break', // 退出语句
  continue: 'continue', // 退出当前循环语句
  throw: 'throw', // 抛出异常
  // free: 'free', // 自由代码语句。慎用！只有你在非常明确你需要编写某种特定语言的时候才能用，如果语言是可变的就不能用
} as const;

export const expressionType = {
  dataType: 'dataType', // 数据类型语句
  literal: 'literal', // 字面量语句
  class: 'class', // class类语句

  access: 'access', // 访问变量、对象元素、数组元素等语句

  identifier: 'identifier', // 取变量语句
  // propertyAccess: 'propertyAccess', // 取属性语句
  // elementAccess: 'elementAccess', // 取元素语句

  call: 'call', // 调用函数语句
  new: 'new', // 实例化类语句

  assignment: 'assignment', // 赋值语句

  binary: 'binary', // 二元表达式语句
  conditional: 'conditional', // 三元表达式语句
  postfixUnary: 'postfixUnary', // 前缀一元达式语句
  prefixUnary: 'prefixUnary', // 后缀一元达式语句
  await: 'await', // 等待
} as const;

export const keywordType = {
  export: 'export',
  import: 'import',
  static: 'static',
  private: 'private',
  public: 'public',
  protected: 'protected',
  async: 'async',
} as const;

export const statementTypes = Object.values(statementType);

export const expressionTypes = Object.values(expressionType);

export const keywordTypes = Object.values(keywordType);
