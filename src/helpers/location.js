import Geolocation from '@react-native-community/geolocation';
import {SESSION} from './constants';
import {setSession} from './session';

export const getPosition = async () => {
  const config = {
    skipPermissionRequests: false,
    authorizationLevel: 'whenInUse',
    locationProvider: 'auto',
  };
  Geolocation.setRNConfiguration(config);
  Geolocation.getCurrentPosition(value => {
    setSession(SESSION.LOCATION, JSON.stringify(value.coords));
  });
};
