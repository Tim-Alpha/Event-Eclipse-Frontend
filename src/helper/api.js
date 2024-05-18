import config from './config';

const apiFetch = async (endpoint, options = {}) => {
  const url = `${config.apiBaseUrl}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const token = localStorage.getItem('token');
  if (token) {
    defaultHeaders['event-token'] = `${token}`;
  }

  const response = await fetch(url, {
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();
  return data;
};

export default apiFetch;