import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api; // é a ideia do module.exports do nodejs