export interface IToken {}

export abstract class BaseCompiler {
  /**
   * @name parsing 语法分析
   * @description
   */
  abstract parsing(): any;

  /**
   * @name tokenize 标记化
   * @description
   */
  abstract tokenize(): any;
}
