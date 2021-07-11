import axios from 'axios';

const endpoints = {
    // development: 'http://chile-2.herokuapp.com',
    // development: 'http://127.0.0.1:8000',
    development: 'https://chopinhauer.herokuapp.com',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});
