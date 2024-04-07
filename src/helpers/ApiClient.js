import {getSession, getToken} from 'rbase-helpers/session';
import {SESSION} from './constants';

export class ApiClient {
  constructor(uri = '', data = {}, auth = false, {headers = null}) {
    this.baseUri = '';
    this.uri = uri;
    this.data = data;
    this.auth = auth;
    this.token = '';
    this.response = {
      code: 503,
      success: false,
      message: 'Network request failed',
      data: null,
    };
    this.headers = headers ?? {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (auth) {
      this.init();
    }
  }
  async init() {
    this.token = await getToken();
    this.headers['Authorization'] = `Bearer ${this.token}`;
    
  }
  async sys_get() {
    const resp = await fetch(this.baseUri + this.uri, {
      method: 'GET',
      headers: this.headers,
    });
    const data = await resp.json();
    if (resp.status != 200) {
      throw this.response;
    }
    this.response['data'] = data?.data ?? null;
    this.response['code'] = resp.status;
    this.response['message'] = data?.message ?? '';
    this.response['success'] = data?.success ?? true;
    return this.response;
  }
  async sys_post() {
    const resp = await fetch(this.baseUri + this.uri, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(this.data),
    });
    const data = await resp.json();
    if (resp.status != 200) {
      throw this.response;
    }
    this.response['data'] = data?.data ?? null;
    this.response['code'] = resp.status;
    this.response['message'] = data?.message ?? '';
    this.response['success'] = data?.success ?? true;
    return this.response;
  }
  async sys_put() {
    const resp = await fetch(this.baseUri + this.uri, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(this.data),
    });
    const data = await resp.json();
    if (resp.status != 200) {
      throw this.response;
    }
    this.response['data'] = data?.data ?? null;
    this.response['code'] = resp.status;
    this.response['message'] = data?.message ?? '';
    this.response['success'] = data?.success ?? true;
    return this.response;
  }
}
