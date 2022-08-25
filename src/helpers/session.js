import AsyncStorage from '@react-native-community/async-storage';

export const setDeviceId = async data => {
  return AsyncStorage.setItem('deviceId', data);
};

export const getDeviceId = async () => {
  return AsyncStorage.getItem('deviceId');
};

export const saveUser = async data => {
  let values = Object.keys(data).map(value => [value, data[value]]);
  return AsyncStorage.multiSet(values);
};

export const getToken = async () => {
  return AsyncStorage.getItem('token');
};

export const getUserData = async () => {
  let user = {};
  let hasNull = false;
  const data = ['nik', 'name', 'roles', 'token'];
  for (let i = 0; i < data.length; i++) {
    user[data[i]] = await AsyncStorage.getItem(data[i]);
    if (user[data[i]] == null) {
      hasNull = true;
    }
  }
  return hasNull ? null : user;
};
export const clearSession = async () => {
  const data = ['nik', 'name', 'roles', 'token'];
  await AsyncStorage.multiRemove(data);
  for (let i = 0; i < data.length; i++) {}
};
