
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
var series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
var labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var props = {
    'p_0'         :   3.081   , 
    'p_men'       :   0.167   ,
    'p_age'       :   0.0081  , 
    'p_initialINR':   0.055   ,
    'p_imc'       :   0.013   ,
    'p_CYP2C9_12' :   0.107   ,
    'p_CYP2C9_13' :   0.323   ,
    'p_CYP2C9_33' :   0.746   ,
    'p_VKORC1_GA' :   0.270   ,
    'p_VKORC1_AA' :   0.701   
  }

  
const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

var search_paciente = "Ingresa el código del paciente a buscar: T-200"

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
    search_paciente
};

export default constants;