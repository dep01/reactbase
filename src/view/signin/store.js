import {store} from '@risingstack/react-easy-state';
import {static_routes} from '../../routes/static_routes';
import {global_state} from '../../utils/global_store';
export const state = store({
  loading: false,
  secure_password: true,
  username: '',
  password: '',
});
export async function initialized() {
  state.loading = true;
}
export function cleanUp() {
  state.loading = false;
  state.secure_password = true;
  state.username = '';
  state.password = '';
}

export function changeUsername(val = '') {
  state.username = val;
}
export function changePassword(val = '') {
  state.password = val;
}
export function changeShowPassword() {
  state.secure_password = !state.secure_password;
}
export async function doLogin({navigation}) {
  global_state.setLoading(true);
  if (state.username == '') {
    global_state.toast?.current.show('Username must be filled');
    global_state.setLoading(false);
    return false;
  } else if (state.password == '') {
    global_state.toast?.current.show('Password must be filled');
    global_state.setLoading(false);
    return false;
  } else if (state.password != state.username) {
    global_state.toast?.current.show('Username and Password must be same!');
    global_state.setLoading(false);
    return false;
  } else {
    setTimeout(() => {
      global_state.setLoading(false);
      navigation.replace(static_routes.homepage);
    }, 1850);
  }
}
