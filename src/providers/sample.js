import {sys_get} from '../utils/api_client';

export async function sampleTest() {
  const response = await sys_get({auth: false, endpoint: 'sample'});
  return response.callback;
}
