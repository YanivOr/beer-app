import { store } from '../index';

export const request = async (
  version,
  endpoint,
  method = 'GET',
  headers = {},
  body = {}
) => {
  const state = store.getState();
  const { host } = state.apiSettings;

  const options = {
    method,
    mode: 'cors',
    credential: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };

  const url = host + '/' + version + `/${endpoint}`;

  if (method !== 'GET') {
    options.body = body;
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`API error. ${error.message}`);
  }
};
