import React, {useState} from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    FormInput,
    Button,
    FormFeedback,
    InputGroup,
    CardHeader,
    InputGroupAddon,
    InputGroupText, Container
} from "shards-react";

import constants from "../../data/constants";
import formulaService from "../../services/formula.service";
import pacienteService from "../../services/paciente.service";
import CustomToggle from "../forms/CustomToggle";

const DataUserVisit = ({onSubmit, onSearchLastVisit}) => {

    // const today = new Date();
    const [cod_paciente, setCodPaciente] = useState({
        value: '',
        valid: undefined
    });
    const [arrivalDose, setArrivalDose] = useState({
        value: '',
        valid: undefined
    });
    const [updatedDose, setUpdatedDose] = useState({
        value: '',
        valid: undefined
    });
    const [arrivalINR, setArrivalINR] = useState({value: '', valid: undefined});
    const [apiResponse, setApiResponse] = useState({value: false});
    const [errorState, setError] = useState([]);


    function setForm() {
        setCodPaciente((prevState) => ({
            ...prevState,
            value: '',
            valid: undefined
        }));
        setArrivalDose((prevState) => ({
            ...prevState,
            value: '',
            valid: undefined
        }));
        setUpdatedDose((prevState) => ({
            ...prevState,
            value: '',
            valid: undefined
        }));
        setArrivalINR((prevState) => ({
            ...prevState,
            value: '',
            valid: undefined
        }));
        setApiResponse({value: false})
    }

    function allValid() {
        return (cod_paciente.valid || !(cod_paciente.valid === undefined)) && (arrivalDose.valid || !(arrivalDose.valid === undefined)) && (updatedDose.valid || !(updatedDose.valid === undefined)) && (arrivalINR.valid || !(arrivalINR.valid === undefined));
    }

    function onChangeCodPaciente(e) {
        var _cod = e.target.value.toUpperCase();
        setCodPaciente((prevState) => ({...prevState, value: _cod}))
        if (constants.validPacienteRegex.test(_cod)) {
            setCodPaciente((prevState) => ({...prevState, valid: true}))
        } else {
            setCodPaciente((prevState) => ({...prevState, valid: false}))
        }
        if (_cod === '') {
            setCodPaciente((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangeArrivalDose(e) {
        var _arrival = e.target.value;
        setArrivalDose((prevState) => ({...prevState, value: _arrival}))
        if (constants.validNumRegex.test(_arrival)) {
            setArrivalDose((prevState) => ({...prevState, valid: true}))
        } else {
            setArrivalDose((prevState) => ({...prevState, valid: false}))
        }
        if (_arrival === '') {
            setArrivalDose((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangeUpdatedDose(e) {
        var _updated = e.target.value;
        setUpdatedDose((prevState) => ({...prevState, value: _updated}))
        if (constants.validNumRegex.test(_updated)) {
            setUpdatedDose((prevState) => ({...prevState, valid: true}))
        } else {
            setUpdatedDose((prevState) => ({...prevState, valid: false}))
        }
        if (_updated === '') {
            setUpdatedDose((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangeArrivalINR(e) {
        var _arrival = e.target.value;
        setArrivalINR((prevState) => ({...prevState, value: _arrival}))
        if (constants.validNumRegex.test(_arrival)) {
            setArrivalINR((prevState) => ({...prevState, valid: true}))
        } else {
            setArrivalINR((prevState) => ({...prevState, valid: false}))
        }
        if (_arrival === '') {
            setArrivalINR((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function setPatientData(data) {
        setCodPaciente((prevState) => ({
            ...prevState,
            value: data.patientCode,
            valid: true
        }));
        setArrivalDose((prevState) => ({
            ...prevState,
            value: data.updatedDose,
            valid: true
        }))
    }

    function handleSearchLastVisit(patient) {
        pacienteService.getLastVisitPatient(patient)
            .then((response) => {
                try{
                    const dataProfile = response.data
                    console.log({ title: "Fetch", response: dataProfile });
                    setPatientData(dataProfile)
                    setApiResponse({value: true})
                    console.log({ title: "Fetch2", response: this.lastVisit });
                } catch (e) {
                    console.log({
                        title: response,
                        error: e
                    })
                }
            })
            .catch((error) => {
                if(error.message === 'Network Error') {
                    setError((prevState => ({...prevState,
                        bad_response: true,
                        error: true,
                        errortitle: constants.mensaje_error_network_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_network_perfil_paciente_mensaje,})))
                } else {
                    setError((prevState => ({...prevState,
                        bad_response: true,
                        error: true,
                        errortitle: constants.mensaje_error_network_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_network_perfil_paciente_mensaje,})))
                }

        });
    }

    return (
        <React.Fragment>
            <Container className="mb-4">
                {/* Data general */}
                <Card small lg="7">
                    <CardHeader className="border-bottom bg-light">
                        <h5 className="m-0 font-weight-bold text-center">Registrar
                            visita</h5>
                    </CardHeader>
                    <CardBody>

                        {!apiResponse.value ?
                            <Row>
                                <Col>
                                    {/* Codigo Paciente */}

                                    <InputGroup size="lg">
                                        <InputGroupAddon type="prepend">
                                            <InputGroupText>Código del paciente</InputGroupText>
                                        </InputGroupAddon>
                                        <FormInput
                                            value={cod_paciente.value}
                                            valid={cod_paciente.valid}
                                            invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                                            onChange={onChangeCodPaciente}
                                            size="lg"
                                            style={{"height":"auto"}}
                                            placeholder="T-001"/>
                                        <FormFeedback tooltip={true}>"Ej:
                                            T-002"</FormFeedback>
                                        <InputGroupAddon type="append">
                                            <Button theme="secondary" onClick={() => {handleSearchLastVisit(cod_paciente.value)}} >Buscar</Button>
                                        </InputGroupAddon>
                                    </InputGroup>


                                    {/*<FormGroup check={false}>
                                        <label>Código del paciente</label>
                                        <FormInput
                                            value={cod_paciente.value}
                                            valid={cod_paciente.valid}
                                            invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                                            onChange={onChangeCodPaciente}
                                            size="lg"
                                            className="mb-3"
                                            placeholder="T-001"/>
                                        <FormFeedback tooltip={true}>"Ej:
                                            T-002"</FormFeedback>
                                    </FormGroup>*/}
                                </Col>
                            </Row> : <>
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
                                            <FormFeedback tooltip={true}>"Ej:
                                                T-002"</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
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
                                                    placeholder="0"
                                                />
                                                <FormFeedback
                                                    tooltip={true}> Debes
                                                    ingresar un número decimal,
                                                    con punto. EJ:
                                                    1.0 </FormFeedback>
                                                <InputGroupAddon type="append">
                                                    <InputGroupText>mg/semana</InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>

                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        {/* INR de llegada */}
                                        <FormGroup>
                                            <label>INR de llegada</label>
                                            <FormInput
                                                value={arrivalINR.value}
                                                valid={arrivalINR.valid}
                                                invalid={arrivalINR.valid === undefined ? undefined : !arrivalINR.valid}
                                                onChange={onChangeArrivalINR}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0"/>
                                            <FormFeedback tooltip={true}> Debes
                                                ingresar un número decimal, con
                                                punto. EJ:
                                                1.0 </FormFeedback>
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
                                                    placeholder="0"/>
                                                <FormFeedback
                                                    tooltip={true}> Debes
                                                    ingresar un número decimal,
                                                    con punto. EJ:
                                                    1.0 </FormFeedback>
                                                <InputGroupAddon type="append">
                                                    <InputGroupText>mg/semana</InputGroupText>
                                                </InputGroupAddon>

                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </>}


                    </CardBody>
                </Card>
            </Container>
            <Container className="mb-4" style={{
                position: "center",
                bottom: 0,
                zIndex: 1
            }}>
                <Card small lg="7" className="mb-2 border-primary"
                      style={{border: '#5A6169'}}>
                    <CardBody>
                        <Row>
                            <Col xs="6" md="6">
                                <InputGroup>
                                    <Button
                                        theme="primary"
                                        className="font-weight-bold"
                                        onClick={() => {
                                            const date = new Date();
                                            let year = date.getFullYear().toString();
                                            let month = date.getMonth().toString();
                                            let day = date.getDate().toString();
                                            var date2string = year + "-" + month + "-" + day
                                            onSubmit({
                                                valid: allValid(),
                                                vars: {
                                                    'patientCode': cod_paciente.valid ? cod_paciente.value : "",
                                                    'controlDate': date2string,
                                                    'arrivalDose': arrivalDose.valid ? parseFloat(arrivalDose.value) : 0.0,
                                                    'updatedDose': updatedDose.valid ? parseFloat(updatedDose.value) : 0.0,
                                                    'arrivalINR': arrivalINR.valid ? parseFloat(arrivalINR.value) : 0.0,
                                                    "inrInRange": false
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
                                    onClick={() => {
                                        setForm()
                                    }}>
                                    Nuevo Paciente
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </React.Fragment>
    );
}

DataUserVisit.propTypes = {
    onSubmit: PropTypes.func,
}

DataUserVisit.defaultProps = {
    onSubmit: () => {
    },
}


export default DataUserVisit;

