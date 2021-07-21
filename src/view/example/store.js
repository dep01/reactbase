import {store} from '@risingstack/react-easy-state';
import {Alert} from 'react-native';
import {sampleTest} from '../../providers/sample';
import {global_state} from '../../utils/global_store';

export const state = store({
  loading: true,
  count: 0,
  isMinus: false,
});

export async function initialized() {
  global_state.setLoading(true);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1500);
}
export function cleanUp() {
  state.loading = false;
  state.count = 0;
  state.isMinus = false;
}
export function PlusAction() {
  state.count++;
  global_state.toast?.current.show(state.count);
}
export function MinAction() {
  if (state.count > 0) {
    state.count--;
    global_state.toast?.current.show(state.count);
  } else {
    if (state.isMinus) {
      state.count--;
      global_state.toast?.current.show(state.count);
    } else {
      Alert.alert('Warning', 'Value is 0', [
        {
          text: 'close',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  }
}
export function AllowMinus() {
  if (state.count < 0) {
    state.isMinus = !state.isMinus;
    state.count = 0;
  } else {
    state.isMinus = !state.isMinus;
  }
}
export function TestLoading() {
  global_state.setLoading(true);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1850);
}
