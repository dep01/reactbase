import {routes_name} from 'rbase-routes';
import create from 'zustand';

export function base_state(props) {
  return {
    loading: props?.loading ?? false,
    showPassword: props?.showPassword ?? false,
    username: props?.username ?? '',
    password: props?.password ?? '',
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: () => {},
  cleanUp: () => useStore.destroy(),
  doLogin,
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  password: (value = '') => useStore.setState({password: value}),
  username: (value = '') => useStore.setState({username: value}),
  showPassword: () =>
    useStore.setState({showPassword: !useStore.getState().showPassword}),
};

function doLogin(navigation) {
  navigation.replace(routes_name.LAYOUT);
}
