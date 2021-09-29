import constants from "../data/constants";
import { api } from '../helpers';
import axios from 'axios';
//TODO: API
const basePath = 'api';

function formula(props, vars) {
    console.log({nombre: "Formula", data: vars, props: props})
    if (Object.keys(props).length === 0) {
        props = this.getLastLocalProps();
    }
    var _1_2 = 0
    var _1_3 = 0
    var _3_3 = 0
    var _G_A = 0
    var _A_A = 0
    if (!(vars.genetics[constants.gen2] === undefined)) { //CYP2C9*2
        if (vars.genetics[constants.gen2] === constants.gen12) { //*1/*2
            _1_2 = 1
        }
    }
    if (!(vars.genetics[constants.gen3] === undefined)) { //CYP2C9*3
        if (vars.genetics[constants.gen3] === constants.gen13) { //*1/*3
            _1_3 = 1
        }
        if (vars.genetics[constants.gen3] === constants.gen33) { //*3/*3
            _3_3 = 1
        }
    }
    if (!(vars.genetics[constants.gen4] === undefined)) { //VKORC1
        if (vars.genetics[constants.gen4] === constants.genga) { //G/A
            _G_A = 1
        }
        if (vars.genetics[constants.gen4] === constants.genaa) { //A/A
            _A_A = 1
        }
    }


    var _vars = {
        'notfem': vars.sex === 'F' ? 0 : 1,
        'age': vars.age,
        'initINR': vars.initialINR,
        'BMI': vars.imc,
        '1/2': _1_2,
        '1/3': _1_3,
        '3/3': _3_3,
        'G/A': _G_A,
        'A/A': _A_A,
    }
    console.log({nombre: "calculo dosis 2", data: _vars, props: props})

    var LogWTD = props['p_0'] + (props['p_men'] * _vars['notfem']) - (props['p_age'] * _vars['age']) - (props['p_initialINR'] * _vars['initINR']) + (props['p_imc'] * _vars['BMI']) - (props['p_CYP2C9_12'] * _vars['1/2']) - (props['p_CYP2C9_13'] * _vars['1/3']) - (props['p_CYP2C9_33'] * _vars['3/3']) - (props['p_VKORC1_GA'] * _vars['G/A']) - (props['p_VKORC1_AA'] * _vars['A/A'])
    var WTD = Math.exp(LogWTD)
    console.log({nombre: "WTD", data: WTD.toFixed(4)})
    WTD = WTD.toFixed(4);
    return WTD;
}

function updateLocalProps(data) {
    window.localStorage.setItem('vars', JSON.stringify(data));
    const result = window.localStorage.getItem('vars');
    console.log({title: "formula updateLocalProps", data: this.getLastLocalProps()})
    return result
}

function getLastLocalProps() {
    var result = window.localStorage.getItem('vars');
    console.log(result);
    if (result === null || result === {}) {
        result = {
            'p_0': 3.081,
            'p_men': 0.167,
            'p_age': -0.0081,
            'p_initialINR': 0.055,
            'p_imc': 0.013,
            'p_CYP2C9_12': -0.107,
            'p_CYP2C9_13': -0.323,
            'p_CYP2C9_33': -0.746,
            'p_VKORC1_GA': -0.270,
            'p_VKORC1_AA': -0.701,
            'r_squared': 0.5147,
        }
    } else {
        result = JSON.parse(result)
    }
    return result;
}



//obtener regresión 
async function getRegresion() {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //get
    //https://peacth-ac-api.herokuapp.com/api/LogWTDparameters/multivariable_regression/
    //var json = JSON.stringify({ answer: 42 });
    console.log({
        title: 'pre get getRegresion',
        path: `${basePath}/LogWTDparameters/multivariable_regression/`
    })
    return await api.get(`${basePath}/LogWTDparameters/multivariable_regression/`);
}


const formulaService = {
    formula,
    updateLocalProps,
    getLastLocalProps,
    getRegresion,
};

export default formulaService;