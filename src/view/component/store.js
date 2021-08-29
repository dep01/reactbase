import {store} from '@risingstack/react-easy-state';
export const state = store({
  loading: false,
});
export async function initialized() {
  state.loading = true;
}
export function cleanUp() {
  state.loading = false;
}
