const baseUrl = '';
export const get = async ({auth = false, endpoint = ''}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'GET',
    headers: auth
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
  });
};
export const post = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'GET',
    headers: auth
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    body: JSON.stringify(body),
  });
};
export const del = async ({auth = false, endpoint = ''}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'DEL',
    headers: auth
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
  });
};
export const put = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  return await fetch(baseUrl + endpoint, {
    method: 'PUT',
    headers: auth
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
    body: JSON.stringify(body),
  });
};
