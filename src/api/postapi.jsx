import axios from 'axios'

const api = axios.create({
    baseURL: 'your_api_key',
});

export const getcurrency = (fromcurrency, tocurrency, amount) => {
    return api.get(`/pair/${fromcurrency}/${tocurrency}/${amount}`);

};

export default api;