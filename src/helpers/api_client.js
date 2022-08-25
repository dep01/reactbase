import {getToken} from '@/helpers/session';
import {API_URL} from '@env';

// THIS IS BASEURL CHANGE WITH YOUR API URL EX.. https://jsonplaceholder.typicode.com/
// const baseUrl = 'http://103.158.192.161:3000';
// THIS IS DEFAULT CALLBACK, JUST CHANGE IT IF YOU HAVE ANOTHER DEFAULT
const callbackModel = {
  code: 503,
  status: false,
  message: 'Network request failed',
  callback: null,
};

export const sys_get = async ({auth = false, endpoint = ''}) => {
  let token = await getToken();
  var callback = callbackModel;
  const response = await fetch(API_URL + endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
  const data = await response.json();

  callback.code = response.status;
  callback.status = response.status == 200;
  callback.message = data.message;
  callback.callback = data.callback;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
export const sys_post = async ({auth = false, endpoint = '', body = {}}) => {
  let token = await getToken();
  var callback = callbackModel;
  const response = await fetch(API_URL + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  callback.code = response.status;
  callback.status = response.status == 200 || response.status == 201;
  callback.message = data.message;
  callback.callback = data.callback;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
export const sys_del = async ({auth = false, endpoint = ''}) => {
  let token = await getToken();
  var callback = callbackModel;
  const response = await fetch(API_URL + endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
  const data = await response.json();
  callback.code = response.status;
  callback.status = response.status == 200;
  callback.message = data.message;
  callback.callback = data.callback;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
export const sys_put = async ({auth = false, endpoint = '', body = {}}) => {
  let token = await getToken();
  var callback = callbackModel;
  const response = await fetch(API_URL + endpoint, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  callback.code = response.status;
  callback.status = response.status == 200 || response.status == 201;
  callback.message = data.message;
  callback.callback = data.callback;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
