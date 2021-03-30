import {store} from 'react-easy-state';
import {global_state} from '../../utils/global_store';

export const state = store({
  content_text: '',
});
export async function initialized() {
  global_state.setLoading(true);
  setTimeout(() => {
    state.content_text = 'This is a blank page';
    global_state.setLoading(false);
  }, 1500);
}
export function cleanUp() {
  state.content_text = '';
}
export const print = () => {
  console.log(state.testString);
};
