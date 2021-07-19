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
  CardHeader,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const DataUserVisit = ({onSubmit }) => {

    const today = new Date();
    const [cod_paciente, setCodPaciente] = useState({value:'', valid:undefined});
    const [arrivalDose, setArrivalDose] = useState({value:'',valid:undefined});
    const [updatedDose, setUpdatedDose] = useState({value:'',valid:undefined});
    const [arrivalINR, setArrivalINR] = useState({value:'',valid:undefined});


    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:undefined}));
        setArrivalDose((prevState) => ({...prevState, value: '',valid:undefined}));
        setUpdatedDose((prevState) => ({...prevState, value: '',valid:undefined}));
        setArrivalINR((prevState) => ({...prevState, value: '',valid:undefined}));
    }

    const validNumRegex =
    RegExp(/^([0-9])+[\.]?([0-9])*$/i);
    const validPacienteRegex =
    RegExp(/^(T-)([0-9]){3}$/i);

  function allValid() {
    return (cod_paciente.valid || !(cod_paciente.valid === undefined)) && (arrivalDose.valid || !(arrivalDose.valid === undefined)) && (updatedDose.valid || !(updatedDose.valid === undefined))  && (arrivalINR.valid || !(arrivalINR.valid === undefined));
  }
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
      setArrivalDose((prevState) => ({...prevState, valid: undefined}))
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
      setUpdatedDose((prevState) => ({...prevState, valid: undefined}))
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
      setArrivalINR((prevState) => ({...prevState, valid: undefined}))
    }
  }

    return(
      <React.Fragment>
      <Col>
        <Row>
          <Col xs="12" lg="10" xl="8" className="mb-4 offset-lg-1 offset-xl-2">
            {/* Data general */}
            <Card small lg="7">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Registrar visita</h6>
              </CardHeader>
              <CardBody>
                <Form className="add-new-post">
                  <Row>
                    <Col>
                      {/* Codigo Paciente */}
                      <FormGroup check={false}>
                        <label>Código del paciente</label>
                        <FormInput
                          value={cod_paciente.value}
                          valid={cod_paciente.valid}
                          invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                          onChange={onChangeCodPaciente}
                          size="lg"
                          className="mb-3"
                          placeholder="T-001"/>
                        <FormFeedback >"Ej: T-002"</FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col >
                      {/* Dosis de llegada */}
                      <FormGroup>
                        <label>Dosis llegada </label>
                        <InputGroup className="mb-3">
                          <FormInput
                            value={arrivalDose.value}
                            valid={arrivalDose.valid}
                            invalid={arrivalDose.valid === undefined ? undefined : !arrivalDose.valid}
                            onChange={onChangeArrivalDose}
                            size="lg"
                            //className="mb-3 "
                            placeholder="1.0"
                          />
                          <InputGroupAddon type="prepend">
                            <InputGroupText>mg/semana</InputGroupText>
                          </InputGroupAddon>
                           <FormFeedback> Debes ingresar un número decimal, con punto. EJ: 1.0 </FormFeedback>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    
                  <Col>
                  {/* INR de llegada */}
                  <FormGroup>
                    <label>INR de llegada</label>
                    <InputGroup className="mb-3">
                      <FormInput
                        value={arrivalINR.value}
                        valid={arrivalINR.valid}
                        invalid={arrivalINR.valid === undefined ? undefined : !arrivalINR.valid}
                        onChange={onChangeArrivalINR}
                        size="lg"
                        //className="mb-3"
                        placeholder="1.5"/>
                      <FormFeedback> Debes ingresar un número decimal, con punto. EJ: 1.0 </FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  {/* Nueva dosis */}
                  <Col>
                  <FormGroup>
                    <label>Nueva dosis</label>
                    <InputGroup className="mb-3">
                      <FormInput
                        value={updatedDose.value}
                        valid={updatedDose.valid}
                        invalid={updatedDose.valid === undefined ? undefined : !updatedDose.valid}
                        onChange={onChangeUpdatedDose}
                        size="lg"
                        //className="mb-3"
                        placeholder="1.5"/>
                        <InputGroupAddon type="prepend">
                          <InputGroupText>mg/semana</InputGroupText>
                        </InputGroupAddon>
                      <FormFeedback> Debes ingresar un número decimal, con punto. EJ: 1.0 </FormFeedback>
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="10" xl="8" className="mb-4 offset-lg-1 offset-xl-2" style={{
            position: "center",
            bottom: 0,
            zIndex: 1
          }}>
            <Card small lg="7" className="mb-2 border-primary" style={{border: '#5A6169'}}>
              <CardBody>
                <Row>
                  <Col xs="6" md="6">
                    <InputGroup className="mb-2">
                        <Button
                          theme="primary"
                          className="font-weight-bold"
                          onClick={(event) => {
                            onSubmit({
                              valid: allValid(),
                              vars: {
                                'patientCode': cod_paciente.valid ? cod_paciente.value: "",
                                'controlDate': "2009-11-30",
                                'arrivalDose': arrivalDose.valid ? parseFloat(arrivalDose.value) : 0.0,
                                'updatedDose': updatedDose.valid ? parseFloat(updatedDose.value) : 0.0,
                                'arrivalINR': arrivalINR.valid ? parseFloat(arrivalINR.value) : 0.0,
                                "inrInRange":  false
                                //'diagnosis': diagnosis.value,
                              }
                            });

                          }}
                        >
                          Guardar visita
                        </Button>
                    </InputGroup>
                  </Col>
                  <Col xs="6" md="6" className="text-right">
                    <Button
                      theme="secondary"
                      className="mb-2"
                      onClick={(event) => {
                        setForm()
                      }}>
                      Nuevo Paciente
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
  }

  DataUserVisit.propTypes = {
  onSubmit: PropTypes.func,
}

DataUserVisit.defaultProps = {
  onSubmit: () => {},
}



export default DataUserVisit;

