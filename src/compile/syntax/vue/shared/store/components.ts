import { componentEmitsDataStore } from './componentEmits';
import { componentSlotsDataStore } from './componentSlots';
import { propertiesDataStore } from './properties';

interface Members {
  propsStore: ReturnType<typeof propertiesDataStore>;
  emitsStore: ReturnType<typeof componentEmitsDataStore>;
  slotsStore: ReturnType<typeof componentSlotsDataStore>;
}

interface ComponentMapItem {
  data: GlobalContext.Component;
  members: Members;
}

interface ComponentMap {
  [id: string]: ComponentMapItem;
}

export const componentsDataStore = (components: GlobalContext.Component[]) => {
  const componentMap: ComponentMap = {};

  components?.forEach((item) => {
    componentMap[item.id] = {
      data: item,
      members: {
        propsStore: propertiesDataStore(item.protocol.props),
        emitsStore: componentEmitsDataStore(item.protocol.emits),
        slotsStore: componentSlotsDataStore(item.protocol.slots),
      },
    };
  });
  return {
    find(tagId: GlobalContext.Component['id']) {
      if (!componentMap[tagId]) {
        return;
      }
      return componentMap[tagId];
    },
    getCmpt(tagId: GlobalContext.Component['id']): GlobalContext.Component | undefined {
      return componentMap[tagId].data;
    },
    getProp(
      tagId: GlobalContext.Component['id'],
      propId: GlobalContext.Component['protocol']['props'][number]['id'],
      findKey?: boolean
    ) {
      if (!componentMap[tagId]) {
        return;
      }
      if (findKey) {
        return componentMap[tagId].members.propsStore.findKey(propId);
      }
      return componentMap[tagId].members.propsStore.findId(propId);
    },
    getEmit(
      tagId: GlobalContext.Component['id'],
      emitId: GlobalContext.Component['protocol']['emits'][number]['id'],
      findKey?: boolean
    ) {
      if (!componentMap[tagId]) {
        return;
      }
      if (findKey) {
        return componentMap[tagId].members.emitsStore.findKey(emitId);
      }
      return componentMap[tagId].members.emitsStore.findId(emitId);
    },
    getSlot(
      tagId: GlobalContext.Component['id'],
      slotId: GlobalContext.Component['protocol']['slots'][number]['id'],
      findKey?: boolean
    ) {
      if (!componentMap[tagId]) {
        return;
      }
      if (findKey) {
        return componentMap[tagId].members.slotsStore.findKey(slotId);
      }
      return componentMap[tagId].members.slotsStore.findId(slotId);
    },
  };
};
