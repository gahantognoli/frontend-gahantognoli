import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-gahantognoli.herokuapp.com'
});

export default api;