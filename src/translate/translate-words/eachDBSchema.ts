import { DBSchema, DBWSchema } from '@/types';
import { isAction, isComponent, isFunction } from '../utils/is';

function isObject(obj: unknown): obj is Record<string, any> {
  return typeof obj === 'object' && obj !== null;
}

export interface EachDbSchemaFn {
  (data: any, config?: { translated?: boolean }): boolean;
}
export const eachDBSchema = (dbJson: DBSchema.Project, fn: EachDbSchemaFn) => {
  const { dependencies, dependenciesPackages, apis, projectIndex, data } = dbJson;

  fn(dbJson, { translated: true });

  const components = dependencies.filter((d) => isComponent(d)) as DBWSchema.Component[];

  const actionOrFunctions = dependencies.filter((d) => isAction(d) || isFunction(d)) as (
    | DBWSchema.Function
    | DBWSchema.Action
  )[];

  eachComponents(components, fn);

  eachActionOrFunctions(actionOrFunctions, fn);

  eachApis(apis, fn);

  eachProjectIndexPages(projectIndex.page, fn);

  eachPages(data, fn);
};

export const eachPages = (pages: DBSchema.Page[], fn: EachDbSchemaFn) => {
  fn(pages);
  pages.forEach((p) => {
    if (p.decl?.length) {
      fn(p.decl, { translated: true });
      p.decl.forEach((dd: DBSchema.RdDefineProp) => {
        if (dd) {
          eachTypes(dd.types, fn);
        }
      });
    }

    if (p.params?.length) {
      fn(p.params, { translated: true });
      p.params.forEach((dd: DBSchema.RdDefineProp) => {
        if (dd) {
          eachTypes(dd.types, fn);
        }
      });
    }

    if (p.nodes?.length) {
      fn(p.nodes, { translated: true });
    }
  });
};

export const eachProjectIndexPages = (pages: DBSchema.ProjectIndex['page'], fn: EachDbSchemaFn) => {
  fn(pages, { translated: true });
};

export const eachApis = (apis: DBSchema.Api[], fn: EachDbSchemaFn) => {
  fn(apis, { translated: true });
  apis.forEach((api) => {
    fn(api.request, { translated: true });
    api.request.forEach((r) => {
      eachTypes(r.types, fn);
    });

    fn(api.response, { translated: true });
    api.response.forEach((r) => {
      eachTypes(r.types, fn);
    });
  });
};

export const eachActionOrFunctions = (actions: (DBSchema.Action | DBSchema.Function)[], fn: EachDbSchemaFn) => {
  fn(actions, { translated: true });
  actions.forEach((action) => {
    if (action.func) {
      if (action.func.parameters) {
        fn(action.func.parameters, { translated: true });
        action.func.parameters?.forEach((p) => {
          eachTypes(p.types, fn);
        });
      }

      if (action.func.output?.types) {
        eachTypes(action.func.output?.types, fn);
      }
    }
  });
};

export const eachComponents = (components: DBSchema.Component[], fn: EachDbSchemaFn) => {
  fn(components, { translated: true });
  components.forEach((component) => {
    if (component.decl?.length) {
      fn(component.decl, { translated: true });
      component.decl.forEach((dd: DBSchema.RdDefineProp) => {
        if (dd) {
          eachTypes(dd.types, fn);
        }
      });
    }

    if (component.spec) {
      const { props = [], events = [], slots = [] } = component.spec || {};
      fn(props, { translated: true });
      props.forEach((dd: any) => {
        if (dd) {
          eachTypes(dd.types, fn);
        }
      });
      fn(events, { translated: true });
      events.forEach((dd: DBSchema.RdComponentDefineEvent) => {
        if (dd.parameters) {
          fn(dd.parameters, { translated: true });
          dd.parameters.forEach((p) => {
            eachTypes(p.types, fn);
          });
        }
      });
      fn(slots, { translated: true });
      slots.forEach((dd: DBSchema.RdComponentDefineSlot) => {
        if (dd.parameters) {
          fn(dd.parameters, { translated: true });
          dd.parameters.forEach((p) => {
            eachTypes(p.types, fn);
          });
        }
      });
    }

    if (component.events) {
      fn(component.events, { translated: true });
      component.events.forEach((event) => {
        event.actions.forEach((action) => {
          eachAction(action, fn);
        });
      });
    }

    if (component.nodes) {
      fn(component.nodes, { translated: true });
    }
  });
};

export const eachTypes = (types: DBSchema.RdDefinePropType[], fn: EachDbSchemaFn) => {
  fn(types);
  types.forEach((t) => {
    const children = t.rules?.properties || t.rules?.parameters || [];

    if (children.length) {
      fn(children, { translated: true });
      children.forEach((child) => {
        eachTypes(child.types, fn);
      });
    }
  });
};

export const eachAction = (action: DBSchema.RdAction, fn: EachDbSchemaFn) => {
  fn(action);
  Object.values(action.args).forEach((argValue) => {
    eachActionDeep(argValue, fn);
  });
};

export const eachActionDeep = (obj: unknown, fn: EachDbSchemaFn) => {
  if (isObject(obj)) {
    fn(obj);
    Object.values(obj).forEach((objValue) => {
      fn(objValue);
      eachActionDeep(objValue, fn);
    });
  }
  return;
};
