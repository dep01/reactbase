import {getSession, getToken} from 'rbase-helpers/session';
import { SESSION } from './constants';
// import {API_URL} from '@env';
const API_URL = "";

// THIS IS BASEURL CHANGE WITH YOUR API URL EX.. https://jsonplaceholder.typicode.com
// THIS IS DEFAULT CALLBACK, JUST CHANGE IT IF YOU HAVE ANOTHER DEFAULT
const callbackModel = {
  code:503,
  success: false,
  message: 'Network request failed',
  data: null,
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
  callback.success = data.success;
  callback.message = data.message;
  callback.data = data.data;
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
  callback.success = data.success ;
  callback.message = data.message;
  callback.data = data.data;
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
  callback.success = response.success;
  callback.message = data.message;
  callback.data = data.data;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
export const sys_put = async ({auth = false, endpoint = '', body = {},is_refresh=false}) => {
  let token = await getToken();
  if(is_refresh){
    token = await getSession(SESSION.REFRESH_TOKEN);
  }
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
  console.log(data);
  callback.code = response.status;
  callback.success = data.success;
  callback.message = data.message;
  callback.data = data.data;
  if (response.status > 201 && response.status < 200) {
    throw callback;
  }
  return callback;
};
