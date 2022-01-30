import Convert from '../model/exampleModel.js';
import {sys_get,sys_post,sys_put,sys_del} from '../utils/api_client';

const uri = 'example/'
export async function getAll(){
  try {
    const response = await sys_get({endpoint: uri});
    return Convert.listOfexampleModel(response.callback);
  } catch (error) {
    
  }
}
export async function getById(id){
  try {
    const response = await sys_get({endpoint: uri+id});
    return Convert.objectOfexampleModel(response.callback);
  } catch (error) {
    
  }
}
export async function addData(data){
  try {
    const response = await sys_post({endpoint: uri,body:data});
    return response.callback;
  } catch (error) {
    
  }
}
export async function updateData(data){
  try {
    const response = await sys_put({endpoint: uri,body:data});
    return response.callback;
  } catch (error) {
    
  }
}
export async function deleteData(id){
  try {
    const response = await sys_del({endpoint: uri+id});
    return response.callback;
  } catch (error) {
    
  }
}

  