import { searchModulePath } from '../../searchPath';
import { BindParseCtx } from '../types';
import { getEachIndexVarName, getEachItemVarName, isRdData, rdDataIsBind } from './helper';

const genApiResProp = (api: CodeSchema.Api_Protocol) => {
  return {
    id: api.id,
    key: api.key,
    types: [
      {
        type: 'module',
        rules: {
          properties: [
            {
              id: 'status',
              key: 'status',
              types: [{ type: 'whether' }],
              // name: '请求是否成功',
            },
            {
              id: 'data',
              key: 'data',
              types: [{ type: 'module', multiple: true, rules: { properties: api.response.body } }],
              // name: '得到的数据',
            },
            {
              id: 'message',
              key: 'message',
              types: [{ type: 'text' }],
              // name: '提示语',
            },
          ],
        },
      },
    ],
    // name: '请求是否成功',
  } as CodeSchema.Property_Protocol;
};

const genEachModuleType = (varName: string, types: CodeSchema.PropertyType_Protocol[]) => {
  const itemTypes = types.map((type) => {
    return { ...type, multiple: false };
  });
  return {
    type: 'module',
    rules: {
      properties: [
        {
          id: 'item',
          key: getEachItemVarName(varName),
          types: itemTypes,
          // name: '每次循环得到的数据',
        },
        {
          id: 'index',
          key: getEachIndexVarName(varName),
          types: [{ type: 'index' }],
          // name: '索引',
        },
      ],
    },
  } as CodeSchema.PropertyType_Protocol;
};

const getBindPathProperties = {
  getVar(ctx: BindParseCtx, data: CodeSchema.DataValue_GetVar, isRoot = false, pathLastIsModuleMultiple?: boolean) {
    if (!data.args.id) {
      return;
    }
    const define = ctx.scope.current.variablesStore.findId(data.args.id);
    if (!define) {
      throw new Error('getVar的定义获取失败');
    }
    const accessPath = searchModulePath(define.data.types, data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    if (isRoot) {
      return [define.data, ...accessPath];
    }
    return accessPath;
  },
  getApiData(
    ctx: BindParseCtx,
    data: CodeSchema.DataValue_GetApiData,
    isRoot = false,
    pathLastIsModuleMultiple?: boolean
  ) {
    if (!data.args.id) {
      return;
    }
    const define = ctx.global.apisStore.getApi(data.args.id);
    if (!define) {
      throw new Error('getApiData的定义获取失败');
    }
    const keyId = data.args.path?.[1];
    if (!keyId) {
      return;
    }
    const apiResProp = genApiResProp(define?.data.protocol || []);
    const accessPath = searchModulePath(apiResProp.types, data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    if (isRoot) {
      return [apiResProp, ...accessPath];
    }
    return accessPath;
  },
  getParam(ctx: BindParseCtx, data: CodeSchema.DataValue_GetParam, isRoot = false, pathLastIsModuleMultiple?: boolean) {
    if (!data.args.id) {
      return;
    }
    const define = ctx.global.pagesStore.getQuery(ctx.scope.current.data.id, data.args.id);
    if (!define) {
      throw new Error('getParam的定义获取失败');
    }
    const accessPath = searchModulePath(define.data.types || [], data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    if (isRoot) {
      return [define.data, ...accessPath];
    }
    return accessPath;
  },
  getCmptPropData(
    ctx: BindParseCtx,
    data: CodeSchema.DataValue_GetCmptPropData,
    isRoot = false,
    pathLastIsModuleMultiple?: boolean
  ) {
    if (!data.args.id) {
      return;
    }
    const define = ctx.scope.current.propsStore.findId(data.args.id);
    if (!define) {
      throw new Error('getCmptPropData的定义获取失败');
    }
    const accessPath = searchModulePath(define?.data.types || [], data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    if (isRoot) {
      return [define.data, ...accessPath];
    }
    return accessPath;
  },
  getSlotData(
    ctx: BindParseCtx,
    data: CodeSchema.DataValue_GetSlotData,
    isRoot = false,
    pathLastIsModuleMultiple?: boolean
  ) {
    if (!data.args.id) {
      return;
    }
    const node = ctx.scope.current.nodesStore.find(data.args.id);
    if (!node) {
      return;
    }
    const slotAffiliationCmpt = ctx.scope.current.nodesStore.parentOne(
      data.args.id,
      (item) => item.store?.component?.data.protocol.key !== 'tpl'
    )?.component;
    const propId = data.args.path?.[0];
    if (!propId) {
      return;
    }
    const slot = slotAffiliationCmpt?.members.slotsStore.findId(propId);
    if (!slot) {
      throw new Error('数据异常，插槽节点的属性的id没找到！');
    }
    const slotProp = slotAffiliationCmpt?.members.slotsStore.getParameters(slot.data.id, propId);
    if (!slotProp) {
      throw new Error('数据异常，插槽节点的属性的下的参数没有没找到相应属性！');
    }

    const accessPath = searchModulePath(
      slotProp.data.types || [],
      data.args.path?.slice(1) || [],
      pathLastIsModuleMultiple
    ); // 路径中的每个属性名
    if (isRoot) {
      return [slotProp.data, ...accessPath];
    }
    return accessPath;
  },
  getEachData(ctx: BindParseCtx, data: CodeSchema.DataValue_GetEachData, isRoot = false) {
    if (!data.args.id) {
      return;
    }
    const node = ctx.scope.current.nodesStore.find(data.args.id);
    if (!node) {
      return;
    }
    const eachPropDataId = node.component?.members.propsStore.findKey('data')?.data.id;
    if (!eachPropDataId) {
      throw new Error('数据异常，循环节点的data属性的id没找到！');
    }
    const bindData = node.propsStore.query(eachPropDataId).value;
    if (!bindData) {
      return;
    }

    if (isRdData(bindData) && rdDataIsBind(bindData)) {
      const bindPathProperties = getBindPathProperties.getAnyData(ctx, bindData, true);
      if (!bindPathProperties?.length) {
        return;
      }
      if (!isRoot) {
        return bindPathProperties;
      }
      const last = bindPathProperties[bindPathProperties?.length - 1];

      const types = [genEachModuleType(node.varName, last.types)];
      const accessPath = searchModulePath(types || [], data.args?.path || []); // 路径中的每个属性名
      return accessPath;
    }
    return;
  },
  getAnyData(
    ctx: BindParseCtx,
    data: CodeSchema.DataValueArgument,
    isRoot = false,
    pathLastIsModuleMultiple?: boolean
  ): CodeSchema.Property_Protocol[] | undefined {
    if (!isRdData(data)) {
      return [];
    }
    switch (data.mode) {
      case 'getEachData': {
        return getBindPathProperties.getEachData(ctx, data as CodeSchema.DataValue_GetEachData, isRoot);
      }
      case 'getApiData': {
        return getBindPathProperties.getApiData(
          ctx,
          data as CodeSchema.DataValue_GetApiData,
          isRoot,
          pathLastIsModuleMultiple
        );
      }
      case 'getVar': {
        return getBindPathProperties.getVar(ctx, data as CodeSchema.DataValue_GetVar, isRoot, pathLastIsModuleMultiple);
      }
      case 'getParam': {
        return getBindPathProperties.getParam(
          ctx,
          data as CodeSchema.DataValue_GetParam,
          isRoot,
          pathLastIsModuleMultiple
        );
      }
      case 'getCmptPropData': {
        return getBindPathProperties.getCmptPropData(
          ctx,
          data as CodeSchema.DataValue_GetCmptPropData,
          isRoot,
          pathLastIsModuleMultiple
        );
      }
      case 'getSlotData': {
        return getBindPathProperties.getSlotData(
          ctx,
          data as CodeSchema.DataValue_GetSlotData,
          isRoot,
          pathLastIsModuleMultiple
        );
      }
    }
    return [];
  },
};

export const getPathProperties = (
  ctx: BindParseCtx,
  data: CodeSchema.DataValue,
  pathLastIsModuleMultiple?: boolean
) => {
  return getBindPathProperties.getAnyData(ctx, data, true, pathLastIsModuleMultiple);
};

export const getPathPropertieKeys = (
  ctx: BindParseCtx,
  data: CodeSchema.DataValue,
  pathLastIsModuleMultiple?: boolean
) => {
  return getBindPathProperties.getAnyData(ctx, data, true, pathLastIsModuleMultiple)?.map((item) => item.key);
};
