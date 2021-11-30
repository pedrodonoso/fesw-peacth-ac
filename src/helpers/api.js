import axios from 'axios';
import constants from '../data/constants'

const endpoints = {
    // development: 'http://chile-2.herokuapp.com',
    // development: 'http://127.0.0.1:8000',
    // development: 'https://chopinhauer.herokuapp.com',
    test: 'https://peacth-ac-backend.rj.r.appspot.com/',
    // neural: 'http://54.164.58.120:8000/',
    neural: 'http://dummy.restapiexample.com/',
    newtest: `${constants.newtest}`
};


export const api = axios.create({
    baseURL: endpoints['newtest'],
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

