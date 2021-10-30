import {store} from '@risingstack/react-easy-state';
export const state = store({
  loading: false,
  inputText: '',
});
export async function initialized() {
  state.loading = true;
  state.inputText = '';
}
export function cleanUp() {
  state.loading = false;
  state.inputText = '';
}
export function handleTextChange(val) {
  state.inputText = val;
}
