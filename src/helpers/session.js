export const setDeviceId =  data => {
  return sessionStorage.setItem('deviceId', data)
};

export const getDeviceId = () => {
  return sessionStorage.getItem('deviceId');
};

export const saveUser = data => {
  Object.keys(data).map(value => sessionStorage.setItem(value,data[value]));
  return true;
};

export const getToken =  () => {
  return sessionStorage.getItem('token');
};

export const getUserData =  () => {
  let user = {};
  let hasNull = false;
  const data = ['nik', 'name', 'roles', 'token'];
  for (let i = 0; i < data.length; i++) {
    user[data[i]] =  sessionStorage.getItem(data[i]);
    if (user[data[i]] == null) {
      hasNull = true;
    }
  }
  return hasNull ? null : user;
};
export const clearSession = () => {
  sessionStorage.clear();
};
