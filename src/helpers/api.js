import axios from 'axios';

const endpoints = {
    // development: 'http://chile-2.herokuapp.com',
    // development: 'http://127.0.0.1:8000',
    // development: 'https://chopinhauer.herokuapp.com',
    test: 'https://peacth-ac-api.herokuapp.com/',
    // neural: 'http://54.164.58.120:8000/',
    neural: 'http://dummy.restapiexample.com/',
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

export const neuralApi = axios.create({
    baseURL: endpoints['neural'],
    timeout: 20000,
})
