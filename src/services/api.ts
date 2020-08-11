import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cyriclass.herokuapp.com',
});

export default api;
