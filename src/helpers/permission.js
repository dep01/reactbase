import {
  request,
  PERMISSIONS,
  check,
  requestMultiple,
  checkMultiple,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';

const list_android_permission = [
  PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
];
const list_ios_permission = [
  PERMISSIONS.IOS.CAMERA,
  PERMISSIONS.IOS.ACCESS_COARSE_LOCATION,
  PERMISSIONS.IOS.ACCESS_FINE_LOCATION,
];

export async function askPermission() {
  const permissions =
    Platform.OS == 'android' ? list_android_permission : list_ios_permission;
  let list_permission_ned_to_ask = [];
  for (let index = 0; index < permissions.length; index++) {
    const result = await check(permissions[index]);
    if (result == RESULTS.DENIED) {
      list_permission_ned_to_ask.push(permissions[index]);
    } else if (result == RESULTS.BLOCKED) {
      list_permission_ned_to_ask.push(permissions[index]);
    }
  }
  requestMultiple(list_permission_ned_to_ask);
}
