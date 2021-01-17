import { autoEffect, store } from '@risingstack/react-easy-state';

const globalStore = store({
    isLoading: false,
    netInfo: false,
    toast: null,
    setLoading(val) {
        globalStore.isLoading = val;
    },
    setToastRef(ref) {
        globalStore.toast = ref;
    }
});
// autoEffect(() => globalStore.checkConnection())

export default globalStore;