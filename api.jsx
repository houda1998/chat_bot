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
    baseURL: 'http://newsapi.org/v2/top-headlines?country=ma&q=covid&sortBy=publishedAt&apiKey=04f4ae3f5bd344c78d1d1aa5961a86cf',
    timeout: 1000,
  });
  export const CovidApi = axios.create({
    baseURL: 'https://corona-api.com',
    timeout: 1000,
  });
