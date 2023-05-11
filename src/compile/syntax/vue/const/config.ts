export const COMPONENT_DIR = 'src/components'; // 组件目录

export const PAGE_DIR = 'src/pages'; // 页面目录

export const API_DIR = 'src/apis'; // api 目录

export const UTIL_DIR = 'src/utils'; // 帮助函数睦

export const ROUTER_DIR = 'src/router'; // 路由目录

export const ROUTES_FILENAME = 'routes.ts'; // 路由文件名
/**
 * 内部包
 */
export const BUILT_IN_PACKAGES = [
  '000000000000000000000010', // 内置 antd
  '000000000000000000000000', // html
  '000000000000000000000001', // 程序元件
  '6405a27e2d9335b17497fd8f', // 系统函数
];

export enum VirtualTag {
  EACH = 'each', // 循环
  SLOT = 'slot', // 插槽
  COND = 'cond', // 条件
  TPL = 'tpl', // 模板
}
