import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    Form,
    Badge,
    FormGroup,
    FormInput,
    Button,
    FormFeedback,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ButtonGroup,
    CardHeader,
    ListGroup,
    ListGroupItem, Container,
} from "shards-react";


import DropdownOptions from "./drop-options";
import constants from "../../data/constants";

const DataUserGeneral = ({ onSubmit, dosis, dosis_network }) => {

    const [cod_paciente, setCodPaciente] = useState({ value: '', valid: undefined });
    const [edad, setEdad] = useState({ value: '', valid: undefined });
    const [peso, setPeso] = useState({ value: '', valid: undefined });
    const [talla, setTalla] = useState({ value: '', valid: undefined });
    const [sexo, setSexo] = useState({ value: 'F' });
    const [inr_inicial, setInrInicial] = useState({ value: '', valid: undefined });
    const [genetics, setGenetics] = useState({
        value: {
            [constants.gen2]: constants.gen11,
            [constants.gen3]: constants.gen11,
            [constants.gen4]: constants.genaa
        }, valid: false
    });

    function setForm() {
        setCodPaciente((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setEdad((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setPeso((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setTalla((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setSexo((prevState) => ({ ...prevState, value: 'F' }));
        setInrInicial((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setGenetics((prevState) => ({
            ...prevState,
            value: {
                [constants.gen2]: constants.gen11,
                [constants.gen3]: constants.gen11,
                [constants.gen4]: constants.genaa
            },
            valid: false
        }));
    }

    const validNumRegex =
        RegExp(/^([0-9])+[\.]?([0-9])*$/i);
    const validPacienteRegex =
        RegExp(/^(T-)([0-9]){3}$/i);

    function allValid() {
        return (cod_paciente.valid && !(cod_paciente.valid === undefined)) && (edad.valid && !(edad.valid === undefined)) && (peso.valid && !(peso.valid === undefined)) && (talla.valid && !(talla.valid === undefined)) && (inr_inicial.valid && !(inr_inicial.valid === undefined));
    }

    function handleSubmit(data) {
        var title = data.title
        var selected = data.selected
        var dic = genetics.value
        dic = { ...dic, [title]: selected }
        setGenetics((prevState) => ({ ...prevState, value: dic }))
    }

    function calcImc() {
        var _imc = peso.value / Math.pow(talla.value, 2);
        return _imc;
    }

    function onChangeCodPaciente(e) {
        var _cod = e.target.value;
        setCodPaciente((prevState) => ({ ...prevState, value: _cod }))
        console.log(validPacienteRegex.test(_cod))
        if (validPacienteRegex.test(_cod)) {
            setCodPaciente((prevState) => ({ ...prevState, valid: true }))
        } else {
            setCodPaciente((prevState) => ({ ...prevState, valid: false }))
        }
        if (_cod === '') {
            setCodPaciente((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeEdad(e) {
        var _edad = e.target.value;
        setEdad((prevState) => ({ ...prevState, value: _edad }))
        if (validNumRegex.test(_edad)) {
            setEdad((prevState) => ({ ...prevState, valid: true }))
        } else {
            setEdad((prevState) => ({ ...prevState, valid: false }))
        }
        if (_edad === '') {
            setEdad((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePeso(e) {
        var _peso = e.target.value;
        setPeso((prevState) => ({ ...prevState, value: _peso }))
        if (validNumRegex.test(_peso)) {
            setPeso((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPeso((prevState) => ({ ...prevState, valid: false }))
        }
        if (_peso === '') {
            setPeso((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeTalla(e) {
        var _talla = e.target.value;
        setTalla((prevState) => ({ ...prevState, value: _talla }))
        if (validNumRegex.test(_talla)) {
            setTalla((prevState) => ({ ...prevState, valid: true }))
        } else {
            setTalla((prevState) => ({ ...prevState, valid: false }))
        }
        if (_talla === '') {
            setTalla((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeINRInicial(e) {
        var _inr = e.target.value;
        setInrInicial((prevState) => ({ ...prevState, value: _inr }))
        if (validNumRegex.test(_inr)) {
            setInrInicial((prevState) => ({ ...prevState, valid: true }))
        } else {
            setInrInicial((prevState) => ({ ...prevState, valid: false }))
        }
        if (_inr === '') {
            setInrInicial((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Cálculo de la primera dosis</h5>
                            </CardHeader>
                            <CardBody>
                                <Row className="mb-2">
                                    <Col>
                                        {/* Data general */}
                                        <Card small lg="12">
                                            <CardHeader className="border-bottom">
                                                <h6 className="m-0">Datos Clínicos del Paciente</h6>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col sm="12" lg="4">
                                                        {/* Codigo Paciente */}
                                                        <FormGroup>
                                                            <label>Código del paciente</label>
                                                            <FormInput
                                                                value={cod_paciente.value}
                                                                valid={cod_paciente.valid}
                                                                invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                                                                onChange={onChangeCodPaciente}
                                                                size="lg"
                                                                className="mb-3"
                                                                placeholder="T-001" />
                                                            <FormFeedback tooltip={true}>"Ej:
                                                                T-002"</FormFeedback>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        {/* Edad */}
                                                        <FormGroup>
                                                            <label>Edad</label>
                                                            <InputGroup className="mb-3">
                                                                <FormInput

                                                                    value={edad.value}
                                                                    valid={edad.valid}
                                                                    invalid={edad.valid === undefined ? undefined : !edad.valid}
                                                                    onChange={onChangeEdad}
                                                                    size="lg"
                                                                    //className="mb-3 "
                                                                    placeholder="0"
                                                                />
                                                                <FormFeedback tooltip={true}>"Debes ingresar solo
                                                                    números."</FormFeedback>
                                                                <InputGroupAddon type="append">
                                                                    <InputGroupText>años</InputGroupText>
                                                                </InputGroupAddon>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        {/* Peso */}
                                                        <FormGroup>
                                                            <label>Peso</label>
                                                            <InputGroup className="mb-3">
                                                                <FormInput
                                                                    value={peso.value}
                                                                    valid={peso.valid}
                                                                    invalid={peso.valid === undefined ? undefined : !peso.valid}
                                                                    onChange={onChangePeso}
                                                                    size="lg"
                                                                    //className="mb-3"
                                                                    placeholder="0" />
                                                                <FormFeedback tooltip={true}>"Debes ingresar solo
                                                                    números."</FormFeedback>
                                                                <InputGroupAddon type="append">
                                                                    <InputGroupText>Kg</InputGroupText>
                                                                </InputGroupAddon>

                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm="12" lg="4">
                                                        {/* Talla */}
                                                        <FormGroup>
                                                            <label>Talla</label>
                                                            <InputGroup className="mb-3">
                                                                <FormInput
                                                                    value={talla.value}
                                                                    valid={talla.valid}
                                                                    invalid={talla.valid === undefined ? undefined : !talla.valid}
                                                                    onChange={onChangeTalla}
                                                                    size="lg"
                                                                    //className="mb-3"
                                                                    placeholder="0" />
                                                                <FormFeedback tooltip={true}>"Debes ingresar solo
                                                                    números"</FormFeedback>
                                                                <InputGroupAddon type="append">
                                                                    <InputGroupText>m</InputGroupText>
                                                                </InputGroupAddon>

                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        {/* INR Inicial */}
                                                        <FormGroup>
                                                            <label>INR Inicial</label>
                                                            <FormInput
                                                                value={inr_inicial.value}
                                                                valid={inr_inicial.valid}
                                                                invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                                onChange={onChangeINRInicial}
                                                                size="lg"
                                                                className="mb-3"
                                                                placeholder="0" />
                                                            <FormFeedback tooltip={true}>"Debes ingresar un
                                                                valor decimal. EJ: 2.4"</FormFeedback>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        {/* Sexo */}
                                                        <label>Sexo</label>
                                                        <FormGroup>
                                                            <ButtonGroup>
                                                                <Button theme={sexo.value === 'F' ? 'primary' : 'white'}
                                                                    onClick={() => setSexo((prevState) => ({
                                                                        ...prevState,
                                                                        value: 'F',
                                                                        valid: true
                                                                    }))}>Femenino</Button>
                                                                <Button theme={sexo.value === 'M' ? 'primary' : 'white'}
                                                                    onClick={() => setSexo((prevState) => ({
                                                                        ...prevState,
                                                                        value: 'M',
                                                                        valid: true
                                                                    }))}>Masculino</Button>
                                                            </ButtonGroup>
                                                        </FormGroup>
                                                    </Col>

                                                </Row>


                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {/* Genetica */}
                                        <Card small lg="12">
                                            <CardHeader className="border-bottom">
                                                <h6 className="m-0">Datos Farmacogenéticos del Paciente</h6>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col sm="12" lg="4">
                                                        <label>CYP2C9-2</label>
                                                        <DropdownOptions
                                                            title={constants.gen2}
                                                            options={[constants.gen11, constants.gen12, constants.gen22]}
                                                            values={[constants.gen11, constants.gen12, constants.gen22]}
                                                            onSubmit={handleSubmit}
                                                        />
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        <label>CYP2C9-3</label>
                                                        <DropdownOptions
                                                            title={constants.gen3}
                                                            options={[constants.gen11, constants.gen13, constants.gen33]}
                                                            values={[constants.gen11, constants.gen13, constants.gen33]}
                                                            onSubmit={handleSubmit}
                                                        />
                                                    </Col>
                                                    <Col sm="12" lg="4">
                                                        <label>VKORC1</label>
                                                        <DropdownOptions
                                                            title={constants.gen4}
                                                            options={['*A/*A', '*G/*A', '*G/*G']}
                                                            values={[constants.genaa, constants.genga, constants.gengg]}
                                                            onSubmit={handleSubmit}
                                                        />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" style={{
                        position: "sticky",
                        bottom: 0,
                        zIndex: 1
                    }}>
                        {/*
                        <Card small className="mb-3">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Calculo</h6>
                            </CardHeader>

                            <CardBody className="p-0">
                                <ListGroup flush>
                                    <ListGroupItem className="p-3">
                                        <span className="d-flex mb-2">
                                            <strong className="mr-1">Modelo Red Neuronal:</strong>
                                            <t6 className={"text-black"}> {isNaN(dosis_network) ? '-' : dosis_network.toFixed(4)} </t6>
                                            <t6 className="ml-auto">
                                                mg/semana
                                            </t6>
                                        </span>
                                        <span className="d-flex mb-2">
                                            <strong className="mr-1">Modelo Regresión:</strong>
                                            <t6 className={"text-black"}> {isNaN(dosis) ? '-' : dosis.toFixed(4)} </t6>
                                            <t6 className="ml-auto">
                                                mg/semana
                                            </t6>
                                        </span>

                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex px-3 border-0">
                                        <Button
                                            theme="primary"
                                            className="font-weight-bold mb-2"
                                            onClick={(event) => {
                                                var _imc = calcImc();
                                                onSubmit({
                                                    valid: allValid(),
                                                    vars: {
                                                        'code': cod_paciente.valid ? cod_paciente.value : "",
                                                        'sex': sexo.value,
                                                        // 'bloodtype': blood.value,
                                                        'initialDate': "2009-11-30", //preguntar
                                                        'initialDosis': 0,
                                                        'initialINR': inr_inicial.valid ? parseFloat(inr_inicial.value) : 0.0,
                                                        'weeklyDosisInRange': 10,
                                                        'totalDays': 534,
                                                        'weight': peso.valid ? parseFloat(peso.value) : 0.0,
                                                        'height': talla.valid ? parseFloat(talla.value) : 0.0,
                                                        'imc': _imc === Infinity ? 999 : _imc,
                                                        'age': edad.valid ? parseFloat(edad.value) : 0,
                                                        'genetics': genetics.value,
                                                        //'diagnosis': diagnosis.value,
                                                    }
                                                });
                                            }}
                                        >
                                            Calcular dosis
                                        </Button>
                                        <Button
                                            theme="secondary"
                                            className="mb-2 ml-auto"
                                            onClick={(event) => {
                                                setForm()
                                            }}>
                                            Limpiar campos
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        */}
                        <Row>
                            <Col className="col-lg mb-2">
                                <Card small className={"stats-small--60 m-auto"}>
                                    <CardBody className={"stats-small--60 m-auto"}>
                                        <ButtonGroup >
                                            <Button
                                                theme="primary"
                                                className="font-weight-bold mb-2"
                                                onClick={(event) => {
                                                    var _imc = calcImc();
                                                    onSubmit({
                                                        valid: allValid(),
                                                        vars: {
                                                            'code': cod_paciente.valid ? cod_paciente.value : "",
                                                            'sex': sexo.value,
                                                            // 'bloodtype': blood.value,
                                                            'initialDate': "2009-11-30", //preguntar
                                                            'initialDosis': 0,
                                                            'initialINR': inr_inicial.valid ? parseFloat(inr_inicial.value) : 0.0,
                                                            'weeklyDosisInRange': 10,
                                                            'totalDays': 534,
                                                            'weight': peso.valid ? parseFloat(peso.value) : 0.0,
                                                            'height': talla.valid ? parseFloat(talla.value) : 0.0,
                                                            'imc': _imc === Infinity ? 999 : _imc,
                                                            'age': edad.valid ? parseFloat(edad.value) : 0,
                                                            'genetics': genetics.value,
                                                            //'diagnosis': diagnosis.value,
                                                        }
                                                    });
                                                }}
                                            >
                                                Calcular dosis
                                            </Button>
                                            <Button
                                                theme="secondary"
                                                className="mb-2"
                                                onClick={(event) => {
                                                    setForm()
                                                }}>
                                                Limpiar campos
                                            </Button>
                                        </ButtonGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-lg mb-2">
                                <Card small className={"stats-small--60"}>
                                    <CardBody className={" d-flex"}>
                                        <div className={"d-flex flex-column m-auto"}>
                                            <div className={"text-center"}>
                                                <span className={"stats-small__label text-uppercase mb-1"}>{"Modelo Regresión Lineal"}</span>
                                                <h6 className={"stats-small__value count my-3"}>{isNaN(dosis) ? '-' : dosis.toFixed(4)}</h6>
                                            </div>
                                            <div className={"stats-small__data text-center align-items-center m-auto"}>
                                                <span> mg/semana</span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-lg mb-5">
                                <Card small className={"stats-small--60"}>
                                    <CardBody className={" d-flex"}>
                                        <div className={"d-flex flex-column m-auto"}>
                                            <div className={"text-center"}>
                                                <span className={"stats-small__label text-uppercase mb-1"}>{"Modelo Red Neuronal"}</span>
                                                <h6 className={"stats-small__value count my-3"}>{isNaN(dosis_network) ? '-' : dosis_network.toFixed(4)}</h6>
                                            </div>
                                            <div className={"stats-small__data text-center align-items-center m-auto"}>
                                                <span> mg/semana</span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

DataUserGeneral.propTypes =
{
    onSubmit: PropTypes.func,
    dosis: PropTypes.any
}

DataUserGeneral.defaultProps =
{
    onSubmit: () => {
    },
    dosis: -999.0,
}

export default DataUserGeneral;
