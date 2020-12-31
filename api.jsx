import axios from "axios";
export const statApi = axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com',
    timeout: 1000,
  });
  
export const botapi = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 1000,
  });
  export const newsApi = axios.create({
    baseURL: 'http://newsapi.org/v2',
    timeout: 1000,
  });