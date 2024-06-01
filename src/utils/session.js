import {SESSION_CONSTANT} from 'rbase-constants/sessions_constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setSession = async (name = '', data = '') => {
  return await AsyncStorage.setItem(name, data);
};
export const getSession = async (name = '') => {
  return await AsyncStorage.getItem(name);
};
export const getToken = async () => {
  return await getSession(SESSION_CONSTANT.ACCESS_TOKEN);
};