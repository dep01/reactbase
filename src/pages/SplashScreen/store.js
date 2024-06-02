import {create} from 'zustand';
import {routesName} from 'rbase-routes';

export function baseState(props) {
  return {
    loading: props?.loading ?? true,
  };
}
export const useStore = create(set => baseState());

export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};

export const action = {
  initialize: navigation => {
    setTimeout(() => {
      navigation.replace(routesName.LOGIN);
    }, 2000);
  },
  cleanUp: () => {
    useStore.setState(baseState());
  },
};