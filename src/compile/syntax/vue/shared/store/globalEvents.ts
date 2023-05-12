import { componentEmitsDataStore } from './componentEmits';

export const eventsDataStore = (events: GlobalContext.Event[]) => {
  return componentEmitsDataStore(events.map((item) => item.protocol));
};
