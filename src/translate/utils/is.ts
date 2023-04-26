import { DBWSchema } from '@/types';

function isComponent(dependency: any): dependency is DBWSchema.Component {
  return dependency?.nodes || dependency.events || dependency.spec;
}

function isFunction(dependency: any): dependency is DBWSchema.Function {
  return dependency?.func;
}

function isAction(dependency: any): dependency is DBWSchema.Action {
  return dependency?.func;
}

export { isComponent, isFunction, isAction };
