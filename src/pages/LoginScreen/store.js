import {askPermission} from 'rbase-utils/permission';
import {routesName} from 'rbase-routes';
import {create} from 'zustand';

export function baseState(props) {
  return {
    loading: props?.loading ?? false,
    showPassword: props?.showPassword ?? false,
    username: props?.username ?? '',
    password: props?.password ?? '',
  };
}

export const useStore = create(set => baseState());

export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  password: (value = '') => useStore.setState({password: value}),
  username: (value = '') => useStore.setState({username: value}),
  showPassword: () =>
    useStore.setState({showPassword: !useStore.getState().showPassword}),
};

export const action = {
  initialize: () => {
    askPermission();
  },
  cleanUp: () => useStore.setState(baseState()),
  doLogin,
};

function doLogin(navigation) {
  navigation.replace(routesName.layout);
}
