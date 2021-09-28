import axios from 'axios';

const endpoints = {
    // development: 'http://chile-2.herokuapp.com',
    // development: 'http://127.0.0.1:8000',
    // development: 'https://chopinhauer.herokuapp.com',
    test: 'https://peacth-ac-api.herokuapp.com/',
};


export const api = axios.create({
    baseURL: endpoints['test'],
    timeout: 20000,
    /*
    headers: {
        post: {        // can be common or any other method
            'Content-Type' : 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin' : '*'
        }
      }
    */
});
