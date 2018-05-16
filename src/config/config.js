const baseHref = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/';

export default {
  baseUrl: baseHref,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
};

