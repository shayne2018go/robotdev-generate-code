import { propertiesDataStore } from './properties';

export const propsDataStore = (props: GlobalContext.Property[]) => {
  return propertiesDataStore(props.map((item) => item.protocol));
};
