import { IEvent } from './event';
import { IProp } from './prop';

export interface IViewNode {
  id: string;
  name?: string; // 节点名
  tagId: string;
  packageId?: string | null; // 来源，如果定义了来源，则必须定义sourceId，refId指向sourceId中的资源id。如果未定义来源，则refId指向当前项目的组件id
  props?: Array<IProp> | null;
  events?: Array<IEvent> | null;
  slots?: Array<IViewTemplateSlot>;
}

// react特殊处理：识别tagId指向的tag是否为“slot”，如果是，就是一个插槽定义节点

export interface IViewTemplateSlot {
  id: string;
  parentId: IViewNode['id'];
  name?: string; // 插槽名
  nodes?: Array<IViewNode>;
}
