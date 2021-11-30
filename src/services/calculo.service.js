import {api} from '../helpers';
import axios from 'axios';
//TODO: API
const basePath = 'api';

//obtener dosis del paciente
async function getDosePatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({title: 'pre post getDosePatient', data: data})
    return await api.post(`${basePath}/patients/get_weekly_dosis/`, data);
}

//obtener dosis del paciente
async function submitDosePatient(data) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({title: 'pre post submitDosePatient', data: data})
    return await api.post(`${basePath}/patients/set_dose/`, data);
}

//obtener ultimos coeficientes del algoritmo
function getLastPropsAlgorithm() {
    //get
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/get_last/get_last/
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return api.get(`${basePath}/LogWTDparameters/get_last/get_last/`);
}


//registrar visitas
function postRegisterVisit(data) {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/clinical_control/register_visit/register_visit/
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    console.log({
        title: 'pre post postRegisterVisit',
        url: `${basePath}/clinical_control/register_visit/`,
        data: data
    })

    return api.post(`${basePath}/clinical_control/register_visit/`, data)
}

function updatePropsAlgorithm(data) {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/set_parametres/set_parametres/
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    console.log({
        title: 'pre post updatePropsAlgorithm',
        url: (`${basePath}/LogWTDparameters/set_parametres/set_parametres/`, data),
        data: data
    })
    return api.post(`${basePath}/LogWTDparameters/set_parametres/set_parametres/`, data)
}


function getLastNeuralNetwork() {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/get_last_neural_network/
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    console.log({
        title: 'pre get getLastNeuralNetwork',
        url: (`${basePath}/LogWTDparameters/get_last_neural_network/`),
    })
    return api.get(`${basePath}/LogWTDparameters/get_last_neural_network/`)
}


function getNeuralNetwork() {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/neural_network/
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    console.log({
        title: 'pre get getNeuralNetwork',
        url: (`${basePath}/LogWTDparameters/neural_network/`),
    })
    return api.get(`${basePath}/LogWTDparameters/neural_network/`)
}





//obtener distribucion
async function getDistribution(data) {
    //get
    //https://peacth-ac-backend.herokuapp.com/api/distributions/frequency/{gen}
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return await api.get(`${basePath}/distributions/frequency/${data}`)
}

//obtener dosis entre genotipos
async function getBoxplot(data) {
    //get
    //https://peacth-ac-backend.herokuapp.com/api/distributions/boxplot/{gen}
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return await api.get(`${basePath}/distributions/boxplot/${data}`)
}

const calculoService = {
    getDosePatient,
    getLastPropsAlgorithm,
    postRegisterVisit,
    getDistribution,
    getBoxplot,
    updatePropsAlgorithm,
    submitDosePatient,
    getLastNeuralNetwork,
    getNeuralNetwork
};

export default calculoService;

