import { api } from '../helpers';
import axios from 'axios';
//TODO: API
const basePath = 'api';

//enviar correo de notificacion
/**
 * {
    "email": "test@test.com",
    "password": "test"
}

 */
async function login(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({ title: 'pre post postLogin', data: data })
    return await api.post(`${basePath}/medical/login/`, data);
}
//enviar correo de notificacion
/**
 * {
    "email": "test@test.com",
    "password": "test",
    "name": "Cosme",
    "last_name": "Fulanito",
    "registry_number": "1234",
    "rut": "12345678-9"
}
 */
async function getSession(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Authorization'] = `${data}`;
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({ title: 'pre post getSession', data: data })
    return await api.post(`${basePath}/medical/get_session/`, data);
}

/*
//obtener todos los pacientes
async function register() {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({
        title: 'pre get getAllPatients',
        path: `${basePath}/patients/`
    })
    return await api.get(`${basePath}/patients/`);
}
*/

const systemService = {
    login,
    getSession,
};

export default systemService;

