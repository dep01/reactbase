import create from 'zustand';
import {routes_name} from 'rbase-routes';
export const useStore = create(set => ({
  loading: false,
}));
export const action = {
  initialize: navigation => {
    setTimeout(() => {
      navigation.replace(routes_name.LOGIN);
    }, 2000);
  },
  cleanUp: () => useStore.destroy(),
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};
