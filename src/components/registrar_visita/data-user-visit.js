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
    const [cod_paciente, setCodPaciente] = useState({value:'', valid:undefined});
    const [arrivalDose, setArrivalDose] = useState({value:'',valid:undefined});
    const [updatedDose, setUpdatedDose] = useState({value:'',valid:undefined});
    const [arrivalINR, setArrivalINR] = useState({value:'',valid:undefined});
    //const [inrInRange, setINRinRange] = useState({value:false,valid:false});
    

    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:undefined})); {/* code: "T-004" */}       {/* age: 69 */}
        setArrivalDose((prevState) => ({...prevState, value: '',valid:undefined}));        {/* weight: 80.5 */}
        setUpdatedDose((prevState) => ({...prevState, value: '',valid:undefined}));       {/* height: 1.56 */}
        setArrivalINR((prevState) => ({...prevState, value: '',valid:undefined}));       {/* sex: "M" */}
        //setINRinRange((prevState) => ({...prevState, value: false,valid:false}));  {/* "weight: 80" */}
    }
    
    const validNumRegex =
    RegExp(/^([0-9])*[\.]?([0-9])*$/i);
    const validPacienteRegex =
    RegExp(/^(T-)([0-9]){3}$/i);

  function onChangeCodPaciente(e) {
    var _cod = e.target.value;
    setCodPaciente((prevState) => ({...prevState, value: _cod}))
    if(validPacienteRegex.test(_cod)) {
      setCodPaciente((prevState) => ({...prevState, valid: true}))
    } else {
      setCodPaciente((prevState) => ({...prevState, valid: false}))
    }
    if(_cod === '') {
      setCodPaciente((prevState) => ({...prevState, valid: undefined}))
    }
  }

  function onChangeArrivalDose(e) {
    var _arrival = e.target.value;
    setArrivalDose((prevState) => ({...prevState, value: _arrival}))
    if(validNumRegex.test(_arrival)) {
      setArrivalDose((prevState) => ({...prevState, valid: true}))
    } else {
      setArrivalDose((prevState) => ({...prevState, valid: false}))
    }
    if(_arrival === '') {
      setCodPaciente((prevState) => ({...prevState, valid: undefined}))
    }
  }
  function onChangeUpdatedDose(e) {
    var _updated = e.target.value;
    setUpdatedDose((prevState) => ({...prevState, value: _updated}))
    if(validNumRegex.test(_updated)) {
      setUpdatedDose((prevState) => ({...prevState, valid: true}))
    } else {
      setUpdatedDose((prevState) => ({...prevState, valid: false}))
    }
    if(_updated === '') {
      setCodPaciente((prevState) => ({...prevState, valid: undefined}))
    }
  }
  function onChangeArrivalINR(e) {
    var _arrival = e.target.value;
    setArrivalINR((prevState) => ({...prevState, value: _arrival}))
    if(validNumRegex.test(_arrival)) {
      setArrivalINR((prevState) => ({...prevState, valid: true}))
    } else {
      setArrivalINR((prevState) => ({...prevState, valid: false}))
    }
    if(_arrival === '') {
      setCodPaciente((prevState) => ({...prevState, valid: undefined}))
    }
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
                    placeholder="T-421" />
                <FormFeedback  
                //className={`style={{display: ${!cod_paciente.valid} ? 'block' : 'none' }}`} 
                //valid={undefined} 
                //valid={cod_paciente.valid}
                >"Debes ingresar una letra seguido de un guión y tres dígitos. <br/> Ej: T-422"</FormFeedback>
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
                    <FormFeedback  
                    //valid={arrivalDose.valid}
                    >"Debes ingresar solo números."</FormFeedback>
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
                <FormFeedback  
                //valid={updatedDose.valid}
                >"Debes ingresar solo números."</FormFeedback>
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
                <FormFeedback  
                //valid={arrivalINR.valid}
                >"Debes ingresar solo números"</FormFeedback>
                </InputGroup>
                </FormGroup>
                {/* INR rango */}
                {/*
                <label>¿INR dentro de rango?</label> 
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2" >
                    <Button theme={inrInRange.value === true ? 'primary' : 'white'} onClick={() => setINRinRange((prevState) => ({...prevState, value: true, valid:true}))}>Sí</Button>
                    <Button theme={inrInRange.value === false ? 'primary' : 'white'} onClick={() => setINRinRange((prevState) => ({...prevState, value: false, valid:true}))}>No</Button>    
                </ButtonGroup>
                </FormGroup>
                */}
              </Form>
            </CardBody>
          </Card>
      </Row>
      <Row>
         <Button
          theme="primary"
          className="mb-2 mr-1"
          onClick={(event) => {
            onSubmit({
              data: {
                'patientCode': cod_paciente.valid ? cod_paciente.value : "",
                'controlDate':  today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2),
                'arrivalDose' : arrivalDose.valid ? parseFloat(arrivalDose.value) : 0.0,
                'updatedDose': updatedDose.valid ? parseFloat(updatedDose.value): 0.0, 
                'arrivalINR': arrivalINR.valid ? parseFloat(arrivalINR.value) : 0.0,
                'inrInRange': false//inrInRange.value
              }
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

