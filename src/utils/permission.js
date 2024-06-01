import {
  PERMISSIONS,
  check,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';

// define permission per OS
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
  // check os for list permissons
  const permissions =
    Platform.OS == 'android' ? list_android_permission : list_ios_permission;

  // init permission list denied or blocked
  let list_permission_ned_to_ask = [];

  // loop the permission needed to ask
  for (let permission of permissions) {
    // check the permission status
    const result = await check(permission);

    // if permission denied or blocked push to list permission need to ask
    if (result == RESULTS.DENIED || result == RESULTS.BLOCKED) {
      list_permission_ned_to_ask.push(permission);
    }

    // request permission again
    requestMultiple(list_permission_ned_to_ask);
  }
}
