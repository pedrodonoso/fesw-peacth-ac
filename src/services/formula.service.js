import constants from "../data/constants"

function formula(props,vars) {
  console.log({nombre:"Formula",data:vars,props:props})
    if (Object.keys(props).length === 0) {
      props = {
        '1' :   3.081   , 
        '2' :   0.167   ,
        '3' :   0.0081  , 
        '4' :   0.55    ,
        '5' :   0.013   ,
        '6' :   0.107   ,
        '7' :   0.323   ,
        '8' :   0.746   ,
        '9' :   0.270   ,
        '10':   0.701   
      }
    }
      
    // var _1_2 = !(vars.genetics[constants.gen2] === undefined) ? 1 : 0
    // var _1_3 = !(vars.genetics[constants.gen3] === undefined) ? 1 : 0
    // var _3_3 = !(vars.genetics[constants.gen3] === undefined) ? 1 : 0
    var _1_2 =  0
    var _1_3 =  0
    var _3_3 =  0
    // var _G_A = !(vars.genetics[constants.genga] === undefined) ? 1 : 0
    // var _A_A = !(vars.genetics[constants.genaa] === undefined) ? 1 : 0
    var _G_A =  1 
    var _A_A =  0
    console.log(_1_2)
    console.log(_1_3)
    console.log(_3_3)
    console.log(_G_A)
    console.log(_A_A)

    var _vars = {
      'men' : vars.sex === 'M' ? 1 : 0,
      'age' : vars.age , 
      'initINR' : vars.initialINR ,
      'BMI'  : vars.imc , 
      '1/2' : _1_2,
      '1/3' : _1_3,
      '3/3' : _3_3,
      'G/A': _G_A,
      'A/A': _A_A,
    }
    console.log({nombre:"calculo dosis 2",data:_vars,props:props})

    var LogWTD = props['1'] + (props['2']*_vars['men']) - (props['3']*_vars['age']) - (props['4']*_vars['initINR']) + (props['5']*_vars['BMI']) - (props['6']*_vars['1/2']) - (props['7']*_vars['1/3']) - (props['8']*_vars['3/3']) - (props['9']*_vars['G/A']) - (props['10']*_vars['A/A'])
    var WTD = Math.exp(LogWTD)
    return WTD;
  }

  const formulaService = {
    formula,
    };

  export default formulaService;