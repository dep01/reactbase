import {create} from 'zustand';
import {askPermission} from 'rbase-helpers/permission';
export function base_state(props) {
  return {
    loading: props?.loading ?? true,
  };
}
export const useStore = create(set => base_state());

export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};

export const action = {
  initialize: () => {
    askPermission();
  },
  cleanUp: () => {
    useStore.setState(base_state());
  },
};
