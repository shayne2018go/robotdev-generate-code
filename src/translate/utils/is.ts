import { DBWSchema } from '@/types';

function isComponent(dependency: any): dependency is DBWSchema.Component {
  return dependency.type === 'component' || (dependency.type !== 'element' && (dependency.nodes || dependency.spec));
}

function isElement(dependency: any): dependency is DBWSchema.Element {
  return dependency.type === 'element' || (dependency.type !== 'component' && (dependency.nodes || dependency.spec));
}

function isFunction(dependency: any): dependency is DBWSchema.Function {
  return dependency.type === 'function' || (dependency.type !== 'action' && dependency?.func);
}

function isAction(dependency: any): dependency is DBWSchema.Action {
  return dependency.type === 'action' || (dependency.type !== 'function' && dependency?.func);
}

function isEvent(dependency: any): dependency is DBWSchema.Emit {
  return dependency.type === 'event';
}

function isProp(dependency: any): dependency is DBWSchema.Prop {
  return dependency.type === 'prop';
}

function isSlot(dependency: any): dependency is DBWSchema.Slot {
  return dependency.type === 'slot';
}

export { isComponent, isElement, isFunction, isAction, isEvent, isProp, isSlot };
