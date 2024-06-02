import {create} from 'zustand';
import {routesName} from 'rbase-routes';

export function base_state(props) {
  return {
    loading: props?.loading ?? true,
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: navigation => {
    setTimeout(() => {
      navigation.replace(routesName.LOGIN);
    }, 2000);
  },
  cleanUp: () => {
    useStore.setState(base_state());
  },
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};
