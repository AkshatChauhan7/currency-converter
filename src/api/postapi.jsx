import axios from 'axios'

// https://v6.exchangerate-api.com/v6/f07645a0931923b3cdbf3e95/latest/USD
const api = axios.create({
    baseURL: 'https://v6.exchangerate-api.com/v6/f07645a0931923b3cdbf3e95',
});

export const getcurrency = (fromcurrency, tocurrency, amount) => {
    return api.get(`/pair/${fromcurrency}/${tocurrency}/${amount}`);

};

export default api;