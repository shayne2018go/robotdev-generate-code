// import { DBSchema } from './DBSchema';
// import { Identifier } from './code-schema/Identifier';
// import { I_component_LifeCycle } from './component';
// import { ICS_Function } from './function';
// import { INode } from './view';

// // 一个页面
// export interface ICS_Page {
//   id: string;
//   // key: string; // 页面标识名 不需要（在directory中取, 这里可视为一个页面的描述，类似一个组件的描述）
//   mate: {
//     title: DBSchema.RdData; // 页面标题（可动态拼接，因此用“量”表示）
//     describe?: DBSchema.RdData; // 页面描述（可动态拼接，因此用“量”表示）
//     keyword?: DBSchema.RdData; // 页面关键词（可动态拼接，因此用“量”表示）
//   };
//   route?: {
//     path?: string; // 路径包括路由参数,例：xxxx/:id/yyy/:type
//     params?: Array<Identifier>; // 路径参数
//     query?: Array<Identifier>; // 路由get参数声明
//   };
//   variables?: Array<Identifier>;
//   nodes: Array<INode>;
//   lifeCycle: Array<I_component_LifeCycle>; // 声明周期
//   functions: Array<ICS_Function>;
// }

// // vue -> template/script/style
