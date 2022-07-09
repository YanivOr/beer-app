import { store } from '../index';

export const request = async (
  version,
  endpoint,
  method = 'GET',
  headers = {},
  params = {}
) => {
  const state = store.getState();
  const { host, mock } = state.apiSettings;

  const options = {
    method,
    mode: 'cors',
    credential: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };

  if (method === 'GET') {
    // If not mock, construct query string
    if (!mock) endpoint += `?${Object.keys(params).map(key => key + '=' + params[key]).join('&')}`;
  } else {
    options.body = params;
  }

  const url = mock ? `data/${endpoint}.${version}.json` : host + '/' + version + `/${endpoint}`;

  try {
    const response = await fetch(url, options);
    let result = await response.json();

    if (mock) {
      params.page = params?.page ? params.page : 1;
      params.per_page = params?.per_page ? params.per_page : 25;

      const start = (params.page - 1) * params.per_page;
      const end = params.per_page + start;

      result = result.slice(start, end);
    }

    return result;
  } catch (error) {
    throw new Error(`API error. ${error.message}`);
  }
};
