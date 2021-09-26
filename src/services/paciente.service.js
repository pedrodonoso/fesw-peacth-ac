import {api} from '../helpers';
import axios from 'axios';
//TODO: API
const basePath = 'api';

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
    return await api.get(`${basePath}/patients/${data}`);
}

async function getGeneticProfilePatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/patient/genetic_analysis
    //var json = JSON.stringify({ answer: 42 });
    console.log({
        title: 'pre get getGeneticProfilePatient',
        data: data,
        path: `${basePath}/patients/${data}`
    })
    return await api.get(`${basePath}/patients/${data}/genetic_analysis`);
}

const pacienteService = {
    getProfilePatient,
    getGeneticProfilePatient,
};

export default pacienteService;

