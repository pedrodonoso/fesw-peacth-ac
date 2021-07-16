import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
  FormFeedback,
  InputGroup, 
  ButtonGroup,
  CardHeader,
} from "shards-react";

const DataUserVisit = ({onSubmit }) => {

    const today = new Date();
    const [cod_paciente, setCodPaciente] = useState({value:'',valid:false});
    const [arrivalDose, setArrivalDose] = useState({value:'',valid:false});
    const [updatedDose, setUpdatedDose] = useState({value:'',valid:false});
    const [arrivalINR, setArrivalINR] = useState({value:'',valid:false});
    const [inrInRange, setINRinRange] = useState({value:false,valid:false});
    

    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:false})); {/* code: "T-004" */}       {/* age: 69 */}
        setArrivalDose((prevState) => ({...prevState, value: 0.0,valid:false}));        {/* weight: 80.5 */}
        setUpdatedDose((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* height: 1.56 */}
        setArrivalINR((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* sex: "M" */}
        setINRinRange((prevState) => ({...prevState, value: false,valid:false}));  {/* "weight: 80" */}
    }
    
    const validEmailRegex =
    RegExp(/^((([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})|)$/i
    );
    const validRutRegex =
    //RegExp(/^(([0-9])+\-([kK0-9])|)$/i);
    RegExp(/^(([0-9])+|)$/i);
    const validNombreRegex =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validApellidoRegex =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validProfesionRegex  =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validNumRegex =
    RegExp(/^([0-9])*[\.]?([0-9])*$/i);
    const validPacienteRegex =
    RegExp(/^(T-)([0-9])*$/i);
/*
    const validNombre = (e) =>{
      var input = e.target.value;
      setNombres((prevState) => ({...prevState, nombres: input}));
      if(validNombreRegex.test(input))  {
          setNombres((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setNombres((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

*/

/*
 function handleSubmit(data) {
    console.log({nombre:"handleSubmit",data:data})
    var title = data.title
    var selected = data.selected
    var dic = genetics.value
    dic = { ...dic, [title] : selected}
    setGenetics((prevState) => ({...prevState, value: dic}))
    
    console.log(genetics.value)
  }

  function onChangecontrolDate(e) {
    var _cod = e.target.value;
    setCodPaciente((prevState) => ({...prevState, value: _cod}))
    console.log(validPacienteRegex.test(_cod))
    if(validPacienteRegex.test(_cod)) {
      
      setCodPaciente((prevState) => ({...prevState, valid: true}))
    } else {
      setCodPaciente((prevState) => ({...prevState, valid: false}))
    }

    return true
  }
  */

  function onChangeCodPaciente(e) {
    var _cod = e.target.value;
    setCodPaciente((prevState) => ({...prevState, value: _cod}))
    if(validPacienteRegex.test(_cod)) {
      setCodPaciente((prevState) => ({...prevState, valid: true}))
    } else {
      setCodPaciente((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangeArrivalDose(e) {
    var _arrival = e.target.value;
    setArrivalDose((prevState) => ({...prevState, value: _arrival}))
    if(validNumRegex.test(_arrival)) {
      setArrivalDose((prevState) => ({...prevState, valid: true}))
    } else {
      setArrivalDose((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  function onChangeUpdatedDose(e) {
    var _updated = e.target.value;
    setUpdatedDose((prevState) => ({...prevState, value: _updated}))
    if(validNumRegex.test(_updated)) {
      setUpdatedDose((prevState) => ({...prevState, valid: true}))
    } else {
      setUpdatedDose((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  function onChangeArrivalINR(e) {
    var _arrival = e.target.value;
    setArrivalINR((prevState) => ({...prevState, value: _arrival}))
    if(validNumRegex.test(_arrival)) {
      setArrivalINR((prevState) => ({...prevState, valid: true}))
    } else {
      setArrivalINR((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  
    return(
      <Col>
      <Row>
          {/* Data general */}
          <Card small lg="9" >
            <CardHeader className="border-bottom">
              <h6 className="m-0">Registro de visita de paciente</h6>
            </CardHeader>
            <CardBody>
              <Form className="add-new-post">

                {/* Codigo Paciente */}
                <FormGroup check={false}>
                <label>Código del paciente</label>
                <FormInput
                    value= {cod_paciente.value}
                    valid={cod_paciente.valid}
                    invalid={!cod_paciente.valid}
                    onChange={onChangeCodPaciente}
                    size="lg"
                    className="mb-3"
                    placeholder="T-069" />
                <FormFeedback   valid={cod_paciente.valid}>"Ej: T-420"</FormFeedback>
                </FormGroup>

                {/* Dosis con que llega */}
                <FormGroup>
                <label>Dosis actual</label>
                    <InputGroup className="mb-3">
                    <FormInput
                    value={arrivalDose.value}
                    valid={arrivalDose.valid}
                    invalid={!arrivalDose.valid}
                    onChange={onChangeArrivalDose}
                    size="lg"
                    //className="mb-3 "
                    placeholder="3.7"
                    />
                    <FormFeedback  valid={arrivalDose.valid}>"Debes ingresar solo números."</FormFeedback>
                    </InputGroup>
                </FormGroup>

                {/* Nueva dosis */}
                <FormGroup>
                <label>Nueva dosis</label>
                <InputGroup className="mb-3">
                <FormInput
                    value={updatedDose.value}
                    valid={updatedDose.valid}
                    invalid={!updatedDose.valid}
                    onChange={onChangeUpdatedDose}
                    size="lg"
                    //className="mb-3"
                    placeholder="2.5" />
                <FormFeedback  valid={updatedDose.valid}>"Debes ingresar solo números."</FormFeedback>
                </InputGroup>
                </FormGroup>

                {/* INR con que llega el paciente */}
                <FormGroup>
                <label>INR actual</label>
                <InputGroup className="mb-3">
                <FormInput
                    value={arrivalINR.value}
                    valid={arrivalINR.valid}
                    invalid={!arrivalINR.valid}
                    onChange={onChangeArrivalINR}
                    size="lg"
                    //className="mb-3"
                    placeholder="2.9" />
                <FormFeedback  valid={arrivalINR.valid}>"Debes ingresar solo números"</FormFeedback>
                </InputGroup>
                </FormGroup>
                {/* Sexo */}
                <label>¿INR dentro de rango?</label> 
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2" >
                    <Button theme={inrInRange.value === true ? 'primary' : 'white'} onClick={() => setINRinRange((prevState) => ({...prevState, value: true, valid:true}))}>Sí</Button>
                    <Button theme={inrInRange.value === false ? 'primary' : 'white'} onClick={() => setINRinRange((prevState) => ({...prevState, value: false, valid:true}))}>No</Button>    
                </ButtonGroup>
                    {/*
                <FormInput
                    value={sexo.value}
                    valid={sexo.valid}
                    invalid={sexo.invalid}
                    //onChange={validCorreo}
                    size="lg"
                    className="mb-3"
                    placeholder="juan@gmail.com" />
                    */}
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
      </Row>
      <Row>
         <Button
          theme="primary"
          className="mb-2 mr-1"
          onClick={(event) => {
            console.log({
              'patientCode': cod_paciente.valid ? cod_paciente.value : "",
              'controlDate':  today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2),
              'arrivalDose' : arrivalDose.valid ? arrivalDose.value : 0.0,
              'updatedDose': updatedDose.valid ? updatedDose.value: 0.0, 
              'arrivalINR': arrivalINR.valid ? arrivalINR.value: 0.0,
              'inrInRange': inrInRange.value
              });
            setForm();
            }}
          >
            Agregar
        </Button>
      </Row>
      </Col>
    );
  }

  DataUserVisit.propTypes = {
  onSubmit: PropTypes.func,
}

DataUserVisit.defaultProps = {
  onSubmit: () => {},
}



export default DataUserVisit;

