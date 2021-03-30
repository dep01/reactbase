const baseUrl = '';
export const sys_get = async ({auth = false, endpoint = ''}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
};
export const sys_post = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
};
export const sys_del = async ({auth = false, endpoint = ''}) => {
  const token = '';

  return await fetch(baseUrl + endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
  });
};
export const sys_put = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth ? 'Bearer ' + token : '',
    },
    body: JSON.stringify(body),
  });
};
