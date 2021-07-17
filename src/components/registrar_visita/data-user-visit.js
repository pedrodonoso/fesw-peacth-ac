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
import RangeDatePicker from '../common/RangeDatePicker';

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
      <React.Fragment>
      <Col>
        <Row>
          <Col lg="12" style={{
            position: "sticky",
            top: 0,
            zIndex: 1
          }}>
            <Card small lg="12" className="mb-2">
              <CardBody>
                <Row>
                  <Col xs="6" md="6">
                    <InputGroup className="mb-2">
                        <Button
                          theme="primary"
                          className="font-weight-bold"
                          onClick={(event) => {
                            onSubmit({
                              vars: {
                                'patientCode': cod_paciente.valid ? cod_paciente.value: "",
                                'controlDate': "2009-11-30",
                                'arrivalDose': arrivalDose.valid ? arrivalDose.value: 0.0,
                                'updatedDose': updatedDose.valid ? updatedDose.value: 0.0,
                                'arrivalINR': arrivalINR.valid ? arrivalINR.value: 0.0
                                //'diagnosis': diagnosis.value,
                              }
                            });
                          }}
                        >
                          Guardar visita
                        </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="7" className="mb-4">

            {/* Data general */}
            <Card small lg="12">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Datos Clínicos del Paciente</h6>
              </CardHeader>
              <CardBody>
                <Form className="add-new-post">

                  {/* Codigo Paciente */}
                  <FormGroup check={false}>
                    <label>Código del paciente</label>
                    <FormInput
                      value={cod_paciente.value}
                      valid={cod_paciente.valid}
                      invalid={!cod_paciente.valid}
                      onChange={onChangeCodPaciente}
                      size="lg"
                      className="mb-3"
                      placeholder="T-001"/>
                    <FormFeedback valid={cod_paciente.valid}>"Ej:
                      T-002"</FormFeedback>
                  </FormGroup>
                  <Row>
                    <Col>
                  {/* Dosis de llegada */}
                  <FormGroup>
                    <label>Dosis llegada</label>
                    <InputGroup className="mb-3">
                      <FormInput
                        value={arrivalDose.value}
                        valid={arrivalDose.valid}
                        invalid={!arrivalDose.valid}
                        onChange={onChangeArrivalDose}
                        size="lg"
                        //className="mb-3 "
                        placeholder="1.0"
                      />
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  {/* Peso */}
                  <Col>
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
                        placeholder="1.5"/>
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                    <label>INR de llegada</label>
                    <InputGroup className="mb-3">
                      <FormInput
                        value={arrivalINR.value}
                        valid={arrivalINR.valid}
                        invalid={!arrivalINR.valid}
                        onChange={onChangeArrivalINR}
                        size="lg"
                        //className="mb-3"
                        placeholder="1.5"/>
                    </InputGroup>
                  </FormGroup>
                  </Col>
                  </Row>
                </Form>
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

