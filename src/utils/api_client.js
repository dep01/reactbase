import {getSession, getToken} from 'rbase-utils/session';
import {SESSION_CONSTANT} from 'rbase-constants/sessions_constant';
import {config} from '../config';
import { errorCode } from 'rbase-constants/error_constant';

const apiUrl = config.apiUrl;
export const responseModel = {
  code: '503',
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

const bodyParser = (data, response = new Response()) => {
  // init response model
  let resp = responseModel;

  // check response status
  if (!response.ok) {
    // if having error return
    resp.code = data.code;
    resp.success = false;
    resp.data = null;
    return errorMapper({resp: resp});
  }

  // assign response
  resp.code = data?.code ?? 'success';
  resp.success = true;
  resp.message = data?.message ?? 'success';
  resp.data = data;

  return resp;
};

// handling get method
export const get = async ({auth = false, endpoint = ''}) => {
  // try catch statement for handling error parsing or api
  try {
    // init header
    const header = await initHeader({auth: auth});

    // hit endpoint get
    const response = await fetch(apiUrl + endpoint, {
      method: 'GET',
      headers: header,
    });

    // parse json response
    const data = await response.json();

    // parsing response
    const resp = bodyParser(data, response);

    return resp;
  } catch (error) {
    // wrap message error
    let respError = responseModel;
    respError.message = error.message ?? '';
    respError.success = false;
    respError.data = null;

    return respError;
  }
};

// handling post method
export const post = async ({auth = false, endpoint = '', body = {}}) => {
  // try catch statement for handling error parsing or api
  try {
    // init header
    const header = await initHeader({auth: auth});

    // hit endpoint post
    const response = await fetch(apiUrl + endpoint, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(body),
    });

    // parse json response
    const data = await response.json();

    // parsing response
    const resp = bodyParser(data, response);

    return resp;
  } catch (error) {
    // wrap message error
    let respError = responseModel;
    respError.message = error.message ?? '';
    respError.success = false;
    respError.data = null;

    return respError;
  }
};

// handling delete method
export const del = async ({auth = false, endpoint = ''}) => {
  // try catch statement for handling error parsing or api
  try {
    // init header
    const header = await initHeader({auth: auth});

    // hit endpoint delete
    const response = await fetch(apiUrl + endpoint, {
      method: 'DELETE',
      headers: header,
    });

    // parse json response
    const data = await response.json();

    // parsing response
    const resp = bodyParser(data, response);

    return resp;
  } catch (error) {
    // wrap message error
    let respError = responseModel;
    respError.message = error.message ?? '';
    respError.success = false;
    respError.data = null;

    return respError;
  }
};

// handling put method
export const put = async ({
  auth = false,
  endpoint = '',
  body = {},
  isRefresh = false,
}) => {
  // try catch statement for handling error parsing or api
  try {
    // init header
    const header = await initHeader({auth: auth, isRefresh});

    // hit endpoint put
    const response = await fetch(apiUrl + endpoint, {
      method: 'PUT',
      headers: header,
      body: JSON.stringify(body),
    });

    // parse json response
    const data = await response.json();

    // parsing response
    const resp = bodyParser(data, response);

    return resp;
  } catch (error) {
    // wrap message error
    let respError = responseModel;
    respError.message = error.message ?? '';
    respError.success = false;
    respError.data = null;

    return respError;
  }
};

const errorMapper = ({resp = responseModel}) => {
  var message = errorCode[resp.code][config.locale];
  if (message != '') {
    resp.message = message;
  } else {
    resp.message = errorCode["503"][config.locale];
    resp.code = '503';
  }
  return resp;
};
