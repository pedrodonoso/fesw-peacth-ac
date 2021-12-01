import { api } from '../helpers';
import axios from 'axios';
//TODO: API
const basePath = 'api';

//enviar correo de notificacion
async function postSendMail(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({title: 'pre post postSendMail', data: data})
    return await api.post(`${basePath}/send_email`, data);
}


//obtener todos los pacientes
async function getAllPatients() {
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

//obtener perfil del paciente
async function getProfilePatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({
        title: 'pre get getProfilePatient',
        data: data,
        path: `${basePath}/patients/${data}`
    })
    return await api.get(`${basePath}/patients/${data}/patient_profile/`);
}

//obtener ultima visita
async function getLastVisitPatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({
        title: 'pre get getLastVisitPatient',
        data: data,
        path: `${basePath}/clinical_control/${data}/get_last/`
    })
    return await api.get(`${basePath}/clinical_control/${data}/get_last/`);
}

async function getGeneticProfilePatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/patient/genetic_analysis
    //var json = JSON.stringify({ answer: 42 });
    /*
    console.log({
        title: 'pre get getGeneticProfilePatient',
        data: data,
        path: `${basePath}/patients/${data}`
    })
    */
    return await api.get(`${basePath}/patients/${data}/genetic_analysis`);
}

const pacienteService = {
    getProfilePatient,
    getLastVisitPatient,
    getGeneticProfilePatient,
    getAllPatients,
    postSendMail
};

export default pacienteService;

