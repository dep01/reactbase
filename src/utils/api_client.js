import {getSession, getToken} from 'rbase-utils/session';
import {SESSION_CONSTANT} from 'rbase-constants/sessions_constant';
import {CONFIG_ENV} from '../config';

const API_URL = CONFIG_ENV.API_URL;
const responseModel = {
  code: 503,
  success: false,
  message: 'Network request failed',
  data: null,
};

// init default header
const initHeader = async ({auth = false, isRefresh = false}) => {
  // default header
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // check auth is true
  if (auth) {
    const token = await getToken();
    header['Authorization'] = 'Bearer ' + token;
  }

  // check this for update refresh token
  if (isRefresh) {
    const token = await getSession(SESSION_CONSTANT.REFRESH_TOKEN);
    header['Authorization'] = 'Bearer ' + token;
  }
  return header;
};

// handling get method
export const get = async ({auth = false, endpoint = ''}) => {
  // init header
  const header = await initHeader({auth: auth});

  // init response
  let resp = responseModel;

  // hit endpoint get
  const response = await fetch(API_URL + endpoint, {
    method: 'GET',
    headers: header,
  });

  // parse json response
  const data = await response.json();

  // assign response
  resp.code = response.status;
  resp.success = data.success;
  resp.message = data.message;
  resp.data = data.data;

  // check response status
  if (response.status > 201 && response.status < 200) {
    throw resp;
  }

  return resp;
};

// handling post method
export const post = async ({auth = false, endpoint = '', body = {}}) => {
  // init header
  const header = await initHeader({auth: auth});

  // init response
  let resp = responseModel;

  // hit endpoint post
  const response = await fetch(API_URL + endpoint, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(body),
  });

  // parse json response
  const data = await response.json();

  // assign response
  resp.code = response.status;
  resp.success = data.success;
  resp.message = data.message;
  resp.data = data.data;

  // check response status
  if (response.status > 201 && response.status < 200) {
    throw resp;
  }

  return resp;
};

// handling delete method
export const del = async ({auth = false, endpoint = ''}) => {
  // init header
  const header = await initHeader({auth: auth});

  // init response
  let resp = responseModel;

  // hit endpoint delete
  const response = await fetch(API_URL + endpoint, {
    method: 'DELETE',
    headers: header,
  });

  // parse json response
  const data = await response.json();

  // assign response
  resp.code = response.status;
  resp.success = data.success;
  resp.message = data.message;
  resp.data = data.data;

  // check response status
  if (response.status > 201 && response.status < 200) {
    throw resp;
  }

  return resp;
};

// handling put method
export const put = async ({
  auth = false,
  endpoint = '',
  body = {},
  isRefresh = false,
}) => {
  // init header
  const header = await initHeader({auth: auth, isRefresh});

  // init response
  let resp = responseModel;

  // hit endpoint put
  const response = await fetch(API_URL + endpoint, {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(body),
  });

  // parse json response
  const data = await response.json();

  // assign response
  resp.code = response.status;
  resp.success = data.success;
  resp.message = data.message;
  resp.data = data.data;

  // check response status
  if (response.status > 201 && response.status < 200) {
    throw resp;
  }

  return resp;
};
