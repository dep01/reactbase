import { SESSION } from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setSession = async(name = '', data = '') => {
  return await AsyncStorage.setItem(name, data);
};
export const getSession = async(name = '') => {
  return await AsyncStorage.getItem(name);
};
export const setDeviceId = async(data) => {
  return await AsyncStorage.setItem('deviceId', data);
};

export const getDeviceId = async () => {
  return await AsyncStorage.getItem('deviceId');
};

export const saveUser = async(data) => {
  Object.keys(data).map(value => AsyncStorage.setItem(value, data[value]));
  return true;
};

export const getToken = async() => {
  return await AsyncStorage.getItem(SESSION.ACCESS_TOKEN);
};

export const getUserData =async () => {
  let user = {};
  let hasNull = false;
  const data = ['nik', 'name', 'roles', 'token'];
  for (let i = 0; i < data.length; i++) {
    user[data[i]] =await AsyncStorage.getItem(data[i]);
    if (user[data[i]] == null) {
      hasNull = true;
    }
  }
  return hasNull ? null : user;
};
export const clearSession =async () => {
  await AsyncStorage.clear();
};
