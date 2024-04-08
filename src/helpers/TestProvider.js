import {ApiClient} from './ApiClient';

export class TestProvider {
  constructor() {
    this.uri = '';
    this.data = {};
    this.api_client = new ApiClient(this.uri, this.data, true);
  }
  async getData(data = {username: 'test'}) {
    this.data = data;
    return await this.api_client.sys_get();
  }
}
