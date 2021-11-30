import React from "react";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme } from '@material-ui/core/styles';

var gen2 = 'CYP2C9_2'
var gen3 = 'CYP2C9_3'
var gen4 = 'VKORC1'
var genga = 'G/A'
var genaa = 'A/A'
var gengg = 'G/G'
var gen11 = '*1/*1'
var gen12 = '*1/*2'
var gen22 = '*2/*2'
var gen13 = '*1/*3'
var gen33 = '*3/*3'
var perfil_clinico = 'Clínico'
var perfil_genetico = 'Genético'
var perfil_historico = 'Histórico'
var series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
var labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var props = {
    'p_0': 3.081,
    'p_men': 0.167,
    'p_age': 0.0081,
    'p_initialINR': 0.055,
    'p_imc': 0.013,
    'p_CYP2C9_12': 0.107,
    'p_CYP2C9_13': 0.323,
    'p_CYP2C9_33': 0.746,
    'p_VKORC1_GA': 0.270,
    'p_VKORC1_AA': 0.701
}


const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

var search_paciente = "Ingresa el código del paciente a buscar: T-200"

var mensaje_error_perfil_paciente_titulo = "Lo sentimos";
var mensaje_error_perfil_paciente_mensaje = "No pudimos obtener los datos, verifique que el código de paciente esté bien escrito o exista";

var mensaje_error_network_perfil_paciente_titulo = "Lo sentimos";
var mensaje_error_network_perfil_paciente_mensaje = (<div> No pudimos obtener los datos,<br /> <b> verifique que hay conexión a internet o contactese con el sistema de soporte. </b></div>)
//"No pudimos obtener los datos, verifique que hay conexión a internet o que el sistema está funcionado correctamente. ";

var mensaje_error_analisis_titulo = "Ocurrió un problema";
var mensaje_error_analisis_mensaje = "No pudimos obtener los datos, verifique que el código de paciente esté bien escrito o exista";

var mensaje_error_calculo_titulo = "Ocurrió un problema";
var mensaje_error_calculo_mensaje = (<div> El código del paciente ya existe!! <br /> <b> Vuelve a intentarlo con un nuevo código </b></div>)

//(<div> Ha ocurrido un problema, vuelve a intentarlo! <br/> <b> Se calculará la dosis con los
//    último parametros guardados localmente. </b></div>);

var mensaje_error_calculo_mal_ingreso_titulo = "Revisa los datos";
var mensaje_error_calculo_mal_ingreso_mensaje = "Algunos campos presentan errores o están vacíos";

var mensaje_error_regresion_titulo = "No se pudo";
var mensaje_error_regresion_mensaje = (
    <div>Ha ocurrido un problema, vuelve a intentarlo! <br /> <b> Intentalo más tarde </b></div>)


var no_data = "no hay datos";
const validPacienteRegex =
    RegExp(/^([a-zA-Z0-9\-]){1,5}$/i);
const validNumRegex =
    RegExp(/^([0-9])+[.]?([0-9])*$/i);

const newtest = 'http://13.58.23.184:8000/'
const constants = {
    gen2,
    gen3,
    gen4,
    genga,
    genaa,
    gengg,
    gen11,
    gen12,
    gen22,
    gen13,
    gen33,
    series,
    labels,
    props,
    theme,
    perfil_clinico,
    perfil_genetico,
    perfil_historico,
    search_paciente,
    no_data,
    mensaje_error_perfil_paciente_titulo,
    mensaje_error_perfil_paciente_mensaje,
    mensaje_error_network_perfil_paciente_titulo,
    mensaje_error_network_perfil_paciente_mensaje,
    mensaje_error_analisis_titulo,
    mensaje_error_analisis_mensaje,
    mensaje_error_calculo_titulo,
    mensaje_error_calculo_mensaje,
    mensaje_error_calculo_mal_ingreso_titulo,
    mensaje_error_calculo_mal_ingreso_mensaje,
    mensaje_error_regresion_titulo,
    mensaje_error_regresion_mensaje,
    validPacienteRegex,
    validNumRegex,
    newtest
};

export default constants;
