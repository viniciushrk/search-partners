import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.github.com/',
  //baseURL: 'http://localhost:21000/',
  baseURL: 'https://levoemcasa.com.br:21000',
  headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDE1MDA0MTksImV4cCI6MzE3MTQ1OTQyODE5LCJzdWIiOiJzdXBlcnRlaWEifQ.T5r3TTNxVzKqroZ8--3aIGztDyO9Ya4Dxw4cgMhKh20"
  }
});

export default api;
