// import { DBSchema } from './DBSchema';
// import { DBWSchema } from './DBWSchema';
// import { IdentifierValue, IdentifierValueArgs } from './code-schema/Identifier';
// import { IEvent } from './event';
// import { IProp } from './prop';

// export interface IViewNode {
//   id: string;
//   name?: string; // 节点名
//   tagId: string;
//   packageId?: string | null; // 来源，如果定义了来源，则必须定义sourceId，refId指向sourceId中的资源id。如果未定义来源，则refId指向当前项目的组件id
//   props?: Array<IProp> | null;
//   events?: Array<IEvent> | null;
//   slots?: Array<IViewTemplateSlot>;
// }

// // react特殊处理：识别tagId指向的tag是否为“slot”，如果是，就是一个插槽定义节点

// export interface IViewTemplateSlot {
//   id: string;
//   parentId: IViewNode['id'];
//   name?: string; // 插槽名
//   nodes?: Array<IViewNode>;
// }

// export interface INodeProps {
//   propId: string; // 属性名
//   value?: IdentifierValueArgs;
//   static?: any; // 目前只有class和style在用
//   dynamic?: IdentifierValue; // 目前只有class和style在用
//   ui?: {
//     // 如果支持用户自己选择用什么控件输入static，则在ui中记录具体的输入控件，用于ui配置界面具体显示什么控件，该数据在编译代码时会被忽略掉
//     tag?: string; // 输入控件的组件名
//     props?: { [key: string]: any };
//   };
// }

// export interface INodeEvent extends DBWSchema.RdEvent {}

// export interface INode {
//   id: string;
//   parentId?: string | null;
//   preId?: string | null;
//   nextId?: string | null;

//   tagId: string;
//   packageId?: string | null;

//   props?: Array<INodeProps> | null;
//   events?: Array<INodeEvent> | null;
// }
