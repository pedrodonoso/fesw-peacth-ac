import { api } from '../helpers';
import axios from 'axios';
//TODO: API 
const basePath = 'api';
var headers = {
    headers: {
        'Content-Type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
    }
  };
function getDosePatient(data) { 
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //post
    //https://peacth-ac-backend.herokuapp.com/api/patients/get_weekly_dosis/get_weekly_dosis/
    //var json = JSON.stringify({ answer: 42 });
    console.log({title: 'pre post getDosePatient', data:data})
    return api.post(`${basePath}/patients/get_weekly_dosis/get_weekly_dosis/`, data);
}

function getLastPropsAlgorithm() {
    //get
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/get_last/get_last/
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return api.get(`${basePath}/LogWTDparameters/get_last/get_last/`);
}

function getControls() {
    //get
    //https://peacth-ac-backend.herokuapp.com/api/clinical_control/
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return api.get(`${basePath}/clinical_control`)
}

function registerVisit(data) {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/clinical_control/register_visit/register_visit/
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return api.post(`${basePath}/clinical_control/register_visit/register_visit/`,data)
}

function updatePropsAlgorithm(data) {
    //post
    //https://peacth-ac-backend.herokuapp.com/api/LogWTDparameters/set_parametres/set_parametres/
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return api.post(`${basePath}/LogWTDparameters/set_parametres/set_parametres/`,data)
}
/*
function deleteToTeam(id,idlist) {
    return api.post(`${basePath}/deleteToTeam?id=${id}&idlist=${idlist}`)
}

function addToTeam(id,idlist) {
  return api.post(`${basePath}/addToTeam?id=${id}&idlist=${idlist}`)
}
*/
const calculoService = {
    getDosePatient,
    getLastPropsAlgorithm,
};

export default calculoService;

