import {get, post, put, del} from 'rbase-utils/api_client';

const uri = '/users';
export async function getAll() {
  const response = await get({endpoint: uri});
  return response;
}
export async function getById(id) {
  const response = await get({endpoint: uri + id});
  return response;
}
export async function addData(data) {
  const response = await post({endpoint: uri, body: data});
  return response;
}
export async function updateData(data) {
  const response = await put({endpoint: uri, body: data});
  return response;
}
export async function deleteData(id) {
  const response = await del({endpoint: uri + id});
  return response;
}
