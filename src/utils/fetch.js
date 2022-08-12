import 'whatwg-fetch';

function getApiURL() {
    // the frontend should be served from a web server that redirects
    // requests to /api to port 3001 (or wherever the tix-api is listening)
    return location.protocol + '//' + location.host;
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
