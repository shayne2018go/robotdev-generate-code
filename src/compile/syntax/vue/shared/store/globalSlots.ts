import { componentSlotsDataStore } from './componentSlots';

export const slotsDataStore = (slots: GlobalContext.Slot[]) => {
  return componentSlotsDataStore(slots.map((item) => item.protocol));
};
