export interface ICS_Directory {
  id: string; // 页面/组件/接口/目录id号
  parentId: string; // 父id
  isDirectory: boolean; // 是否为目录
  name: string;
  key: string;
  resourceType?: 'component' | 'api' | 'page' | 'function';
  refId?: string;
}
