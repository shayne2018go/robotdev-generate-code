import { searchModulePath } from '../../searchPath';
import { BindParseCtx } from '../types';
import { isRdData, rdDataIsBind } from './helper';

const getBindPathProperties = {
  getVar(ctx: BindParseCtx, data: CodeSchema.DataValue_GetVar, pathLastIsModuleMultiple = false) {
    if (data.args.id) {
      return;
    }
    const define = ctx.scope.page.variablesStore.findId(data.args.id);
    if (!define) {
      throw new Error('getVar的定义获取失败');
    }
    const accessPath = searchModulePath(define.data.types, data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    return accessPath
  },
  getApiData(ctx: BindParseCtx, data: CodeSchema.DataValue_GetApiData, pathLastIsModuleMultiple = false) {
    if (data.args.id) {
      return;
    }
    const define = ctx.global.apisStore.getApi(data.args.id);
    if (!define) {
      throw new Error('getApiData的定义获取失败');
    }
    const keyId = data.args.path?.[1]
    if (!keyId) {
      return
    }
    const propDefine = ctx.global.apisStore.getApiBody(data.args.id, keyId)
    const accessPath = searchModulePath(propDefine?.data.types || [], data.args.path?.slice(2) || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    return accessPath
  },
  getParam(ctx: BindParseCtx, data: CodeSchema.DataValue_GetParam, pathLastIsModuleMultiple = false) {
    if (data.args.id) {
      return;
    }
    const define = ctx.global.pagesStore.getQuery(ctx.scope.page.page.id, data.args.id);
    if (!define) {
      throw new Error('getParam的定义获取失败');
    }
    const accessPath = searchModulePath(define?.data.types || [], data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    return accessPath
  },
  getCmptPropData(ctx: BindParseCtx, data: CodeSchema.DataValue_GetCmptPropData, pathLastIsModuleMultiple = false) {
    if (data.args.id) {
      return;
    }
    const define = ctx.scope.current.propsStore.findId(data.args.id);
    if (!define) {
      throw new Error('getCmptPropData的定义获取失败');
    }
    const accessPath = searchModulePath(define?.data.types || [], data.args.path || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    return accessPath
  },
  getSlotData(ctx: BindParseCtx, data: CodeSchema.DataValue_GetSlotData, pathLastIsModuleMultiple = false) {
    if (data.args.id) {
      return;
    }
    const node = ctx.scope.page.nodesStore.find(data.args.id);
    if (!node) {
      return
    }
    const slotAffiliationCmpt = ctx.scope.page.nodesStore.parentOne(data.args.id, (item) => item.store?.component?.data.protocol.key !== 'tpl')?.component
    const propId = data.args.path?.[0]
    if (!propId) {
      return
    }
    const slot = slotAffiliationCmpt?.members.slotsStore.findId(propId)
    if (!slot) {
      throw new Error('数据异常，插槽节点的属性的id没找到！');
    }
    const slotProp = slotAffiliationCmpt?.members.slotsStore.getParameters(slot.data.id, propId)

    const accessPath = searchModulePath(slotProp?.data.types || [], data.args.path?.slice(1) || [], pathLastIsModuleMultiple); // 路径中的每个属性名
    return accessPath
  },
  getEachData(ctx: BindParseCtx, data: CodeSchema.DataValue_GetEachData, isRoot = false) {
    if (data.args.id) {
      return;
    }
    const node = ctx.scope.page.nodesStore.find(data.args.id);
    if (!node) {
      return
    }
    const eachPropDataId = node.component?.members.propsStore.findKey('data')?.data.id;
    if (!eachPropDataId) {
      throw new Error('数据异常，循环节点的data属性的id没找到！');
    }
    const bindData = node.propsStore.query(eachPropDataId);
    if (!bindData) {
      return
    }

    if (isRdData(bindData) && rdDataIsBind(bindData)) {
      const bindPathProperties = getBindPathProperties.getAnyData(ctx, bindData, true)
      if (!bindPathProperties) {
        return
      }
      if (!isRoot) {
        return bindPathProperties
      }
      const last = bindPathProperties[bindPathProperties?.length]
      const accessPath = searchModulePath(last.types || [], data.args.path?.slice(1) || [], true); // 路径中的每个属性名
      return accessPath
    }
    return
  },
  getAnyData(ctx: BindParseCtx, data: CodeSchema.DataValueArgument, pathLastIsModuleMultiple = false): CodeSchema.Property_Protocol[] | undefined {
    if (!isRdData(data)) {
      return [];
    }
    switch (data.mode) {
      case 'getEachData': {
        return getBindPathProperties.getEachData(ctx, data as CodeSchema.DataValue_GetEachData, true);
      }
      case 'getApiData': {
        return getBindPathProperties.getApiData(ctx, data as CodeSchema.DataValue_GetApiData, pathLastIsModuleMultiple);
      }
      case 'getVar': {
        return getBindPathProperties.getVar(ctx, data as CodeSchema.DataValue_GetVar, pathLastIsModuleMultiple);
      }
      case 'getParam': {
        return getBindPathProperties.getParam(ctx, data as CodeSchema.DataValue_GetParam, pathLastIsModuleMultiple);
      }
      case 'getCmptPropData': {
        return getBindPathProperties.getCmptPropData(ctx, data as CodeSchema.DataValue_GetCmptPropData, pathLastIsModuleMultiple);
      }
      case 'getSlotData': {
        return getBindPathProperties.getSlotData(ctx, data as CodeSchema.DataValue_GetSlotData, pathLastIsModuleMultiple);
      }
    }
    return [];
  },
};

export const getPathProperties = (
  ctx: BindParseCtx,
  data: CodeSchema.DataValue,
  pathLastIsModuleMultiple = false
) => {
  return getBindPathProperties.getAnyData(ctx, data, pathLastIsModuleMultiple);
};
