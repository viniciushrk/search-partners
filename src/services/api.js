import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com/',
  //baseURL: 'http://localhost:21000/',
  baseURL: 'https://levoemcasa.com.br:21000/',
  headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDE1ODAxNzUsImV4cCI6MzE3MTQ2MDIyNTc1LCJzdWIiOiJzdXBlcnRlaWEifQ.xlQ0V2SFO3b7na1SpmWFzL9kk3TmrM6xd9mtqjZ0Om0"
  }
});

export default api;
