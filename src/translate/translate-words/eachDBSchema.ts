import { DBSchema } from '@/types';
import { isAction, isComponent, isFunction } from '../utils/is';

function isObject(obj: unknown): obj is Record<string, any> {
  return typeof obj === 'object' && obj !== null;
}

export const eachDBSchema = (dbJson: DBSchema.Project, fn: (data: any) => boolean) => {
  const { dependencies, dependenciesPackages, apis, projectIndex, data } = dbJson;

  fn(dbJson);
  dependencies.forEach((d) => {
    if (isComponent(d)) {
      eachComponent(d, fn);
    }
    if (isAction(d) || isFunction(d)) {
      eachActionOrFunction(d, fn);
    }
  });

  apis.forEach((a) => {
    eachApi(a, fn);
  });

  projectIndex.page.forEach((p) => {
    eachProjectIndexPage(p, fn);
  });

  data.forEach((page) => {
    eachPage(page, fn);
  });
};

export const eachPage = (p: DBSchema.Page, fn: (data: any) => boolean) => {
  fn(p);
  if (p.decl?.length) {
    p.decl.forEach((dd: DBSchema.RdDefineProp) => {
      fn(dd);
      if (dd) {
        eachTypes(dd.types, fn);
      }
    });
  }

  if (p.params?.length) {
    p.params.forEach((dd: DBSchema.RdDefineProp) => {
      fn(dd);
      if (dd) {
        eachTypes(dd.types, fn);
      }
    });
  }

  if (p.nodes?.length) {
    p.nodes.forEach((dd: DBSchema.RdNode) => {
      fn(dd);
    });
  }
};

export const eachProjectIndexPage = (p: DBSchema.ProjectIndex['page'][number], fn: (data: any) => boolean) => {
  fn(p);
};

export const eachApi = (api: DBSchema.Api, fn: (data: any) => boolean) => {
  fn(api);
  api.request.forEach((r) => {
    fn(r);
    eachTypes(r.types, fn);
  });

  api.response.forEach((r) => {
    fn(r);
    eachTypes(r.types, fn);
  });
};

export const eachActionOrFunction = (action: DBSchema.Action | DBSchema.Function, fn: (data: any) => boolean) => {
  fn(action);
  if (action.func) {
    action.func.parameters?.forEach((p) => {
      fn(p);
      eachTypes(p.types, fn);
    });
    if (action.func.output?.types) {
      eachTypes(action.func.output?.types, fn);
    }
  }
};

export const eachComponent = (component: DBSchema.Component, fn: (data: any) => boolean) => {
  fn(component);
  if (component.decl?.length) {
    component.decl.forEach((dd: DBSchema.RdDefineProp) => {
      fn(dd);
      if (dd) {
        eachTypes(dd.types, fn);
      }
    });
  }

  if (component.spec) {
    const { props = [], events = [], slots = [] } = component.spec || {};
    props.forEach((dd: any) => {
      fn(dd);
      if (dd) {
        eachTypes(dd.types, fn);
      }
    });
    events.forEach((dd: DBSchema.RdComponentDefineEvent) => {
      fn(dd);
      if (dd.parameters) {
        dd.parameters.forEach((p) => {
          fn(p);
          eachTypes(p.types, fn);
        });
      }
    });
    slots.forEach((dd: DBSchema.RdComponentDefineSlot) => {
      fn(dd);
      if (dd.parameters) {
        dd.parameters.forEach((p) => {
          fn(p);
          eachTypes(p.types, fn);
        });
      }
    });
  }

  if (component.events) {
    component.events.forEach((event) => {
      fn(event);
      event.actions.forEach((action) => {
        eachActionDefine(action, fn);
      });
    });
  }

  if (component.nodes) {
    component.nodes.forEach((n) => {
      fn(n);
    });
  }
};

export const eachTypes = (types: DBSchema.RdDefinePropType[], fn: (data: any) => boolean) => {
  types.forEach((t) => {
    fn(t);
    const children = t.rules?.properties || t.rules?.parameters || [];

    /**
     * if (t.rules?.properties) {
      t.rules?.properties.forEach((child) => {
        fn(child);
        eachTypes(child.types, fn);
      });
    }
    if (t.rules?.parameters) {
      t.rules?.parameters.forEach((child) => {
        fn(child);
        eachTypes(child.types, fn);
      });
    }
     */
    if (children.length) {
      children.forEach((child) => {
        fn(child);
        eachTypes(child.types, fn);
      });
    }
  });
};

export const eachActionDefine = (action: DBSchema.RdAction, fn: (data: any) => boolean) => {
  fn(action);
  Object.values(action.args).forEach((argValue) => {
    eachActionDeep(argValue, fn);
  });
};

export const eachActionDeep = (obj: unknown, fn: (data: any) => boolean) => {
  if (isObject(obj)) {
    fn(obj);
    Object.values(obj).forEach((objValue) => {
      fn(objValue);
      eachActionDeep(objValue, fn);
    });
  }
  return;
};
