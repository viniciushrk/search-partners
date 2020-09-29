import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com/',
  baseURL: 'http://localhost:21000/',
});

export default api;
