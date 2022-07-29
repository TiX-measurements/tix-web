import 'whatwg-fetch';

function getApiURL() {
    return location.protocol + '//' + location.hostname + ':3001';
}

function getAuthentication(token) {
  if (token) {
    return { Authorization: `JWT ${token}` };
  }
  return {};
}

export default function isoFetch(url, options = {}) {
  const method = options.method || 'GET';
  const body = JSON.stringify(options.body) || undefined;
  const fullUrl = `${getApiURL()}/api${url}`;
  return (token) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
      ...getAuthentication(token),
    };
    return fetch(fullUrl, { headers, method, body });
  };
}
