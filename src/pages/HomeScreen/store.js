import {create} from 'zustand';
import {askPermission} from 'rbase-utils/permission';
import convert from 'rbase-models/usersModel';
import * as providerUser from 'rbase-providers/usersProvider';
import {
  setLoadingTrue,
  setLoadingFalse,
  globalToast,
} from 'rbase-utils/global_store';

export function baseState(props) {
  return {
    loading: props?.loading ?? true,
    usersData: convert.listOfusersModel(props?.usersData ?? []),
  };
}
export const useStore = create(set => baseState());

export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  usersData: (value = []) =>
    useStore.setState({usersData: convert.listOfusersModel(value)}),
};

export const action = {
  initialize: () => {
    askPermission();
    getUserData();
  },
  cleanUp: () => {
    useStore.setState(baseState());
  },
};

async function getUserData() {
  // set loading overlay true
  setLoadingTrue();

  // get data from API
  const resp = await providerUser.getAll();

  // check response is success, show toast error if false
  if (!resp.success) {
    globalToast({message: resp.message});

    // set loading to false
    setLoadingFalse();
  }

  // set data to state
  setter.usersData(resp.data);

  // set loading to false
  setLoadingFalse();
}
