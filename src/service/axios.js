import axios from 'axios';

const apiKey = "681b16c8";
const api = axios.create({
    baseURL: `http://www.omdbapi.com`
}) 
export default api;