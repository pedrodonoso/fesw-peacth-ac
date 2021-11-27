import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    FormGroup,
    FormInput,
    Button,
    FormFeedback,
    Progress,
    CardHeader, Container, FormCheckbox,
} from "shards-react";

import constants from "../../data/constants";
//import SmallToggleExamples from './small_toggle_examples';


const UpdateProps = ({ data_local, data_model, onSubmitManual, onSubmitGetRegresion, progressBar }) => {
    const [p_0, setP0] = useState({ value: '', valid: undefined });
    const [p_men, setPMen] = useState({ value: '', valid: undefined });
    const [p_age, setPAge] = useState({ value: '', valid: undefined });
    const [p_initialINR, setPInitialINR] = useState({ value: '', valid: undefined });
    const [p_imc, setPImc] = useState({ value: '', valid: undefined });
    const [p_CYP2C9_12, setPCYP2C912] = useState({ value: '', valid: undefined });
    const [p_CYP2C9_13, setPCYP2C913] = useState({ value: '', valid: undefined });
    const [p_CYP2C9_33, setPCYP2C933] = useState({ value: '', valid: undefined });
    const [p_VKORC1_GA, setPVKORC1GA] = useState({ value: '', valid: undefined });
    const [p_VKORC1_AA, setPVKORC1AA] = useState({ value: '', valid: undefined });

    const [manualUpdate, setManualUpdate] = useState({ value: false });

    function isObjectEmpty(obj) {
        if(obj === null) {
            return true;
        } else {
            return Object.getOwnPropertyNames(obj).length === 0
        }
    }
    /*function setForm() {
        setP0((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPMen((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPAge((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPInitialINR((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPImc((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPCYP2C912((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPCYP2C913((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPCYP2C933((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPVKORC1GA((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPVKORC1AA((prevState) => ({ ...prevState, value: '', valid: undefined }));
    }*/

    const themeMap = ['info', 'success', 'danger']; //azul,verde, rojo

    function getTheme(index) {
        return themeMap[(index + themeMap.length) % themeMap.length];
    }

    const validNumRegex =
        RegExp(/^([\-0-9])+[.]?([0-9])*$/i);

    function allValid() {
        return (p_0.valid) &&
            (p_men.valid) &&
            (p_age.valid) &&
            (p_initialINR.valid) &&
            (p_imc.valid) &&
            (p_CYP2C9_12.valid) &&
            (p_CYP2C9_13.valid) &&
            (p_CYP2C9_33.valid) &&
            (p_VKORC1_GA.valid) &&
            (p_VKORC1_AA.valid);
    }

    function onChangeP0(e) {
        var _po = e.target.value;
        setP0((prevState) => ({ ...prevState, value: _po }))
        if (validNumRegex.test(_po)) {
            setP0((prevState) => ({ ...prevState, valid: true }))
        } else {
            setP0((prevState) => ({ ...prevState, valid: false }))
        }
        if (_po === '') {
            setP0((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePMen(e) {
        var _pmen = e.target.value;
        setPMen((prevState) => ({ ...prevState, value: _pmen }))
        if (validNumRegex.test(_pmen)) {
            setPMen((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPMen((prevState) => ({ ...prevState, valid: false }))
        }
        if (_pmen === '') {
            setPMen((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePAge(e) {
        var _page = e.target.value;
        setPAge((prevState) => ({ ...prevState, value: _page }))
        if (validNumRegex.test(_page)) {
            setPAge((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPAge((prevState) => ({ ...prevState, valid: false }))
        }
        if (_page === '') {
            setPAge((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePInitialINR(e) {
        var _pinitialinr = e.target.value;
        setPInitialINR((prevState) => ({ ...prevState, value: _pinitialinr }))
        if (validNumRegex.test(_pinitialinr)) {
            setPInitialINR((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPInitialINR((prevState) => ({ ...prevState, valid: false }))
        }
        if (_pinitialinr === '') {
            setPInitialINR((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePImc(e) {
        var _pimc = e.target.value;
        setPImc((prevState) => ({ ...prevState, value: _pimc }))
        if (validNumRegex.test(_pimc)) {
            setPImc((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPImc((prevState) => ({ ...prevState, valid: false }))
        }
        if (_pimc === '') {
            setPImc((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePCYP2C912(e) {
        var _p12 = e.target.value;
        setPCYP2C912((prevState) => ({ ...prevState, value: _p12 }))
        if (validNumRegex.test(_p12)) {
            setPCYP2C912((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPCYP2C912((prevState) => ({ ...prevState, valid: false }))
        }
        if (_p12 === '') {
            setPCYP2C912((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePCYP2C913(e) {
        var _p13 = e.target.value;
        setPCYP2C913((prevState) => ({ ...prevState, value: _p13 }))
        if (validNumRegex.test(_p13)) {
            setPCYP2C913((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPCYP2C913((prevState) => ({ ...prevState, valid: false }))
        }
        if (_p13 === '') {
            setPCYP2C913((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangePCYP2C933(e) {
        var _p33 = e.target.value;
        setPCYP2C933((prevState) => ({ ...prevState, value: _p33 }))
        if (validNumRegex.test(_p33)) {
            setPCYP2C933((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPCYP2C933((prevState) => ({ ...prevState, valid: false }))
        }
        if (_p33 === '') {
            setPCYP2C933((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeVKORC1GA(e) {
        var _pga = e.target.value;
        setPVKORC1GA((prevState) => ({ ...prevState, value: _pga }))
        if (validNumRegex.test(_pga)) {
            setPVKORC1GA((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPVKORC1GA((prevState) => ({ ...prevState, valid: false }))
        }
        if (_pga === '') {
            setPVKORC1GA((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeVKORC1AA(e) {
        var _paa = e.target.value;
        setPVKORC1AA((prevState) => ({ ...prevState, value: _paa }))
        if (validNumRegex.test(_paa)) {
            setPVKORC1AA((prevState) => ({ ...prevState, valid: true }))
        } else {
            setPVKORC1AA((prevState) => ({ ...prevState, valid: false }))
        }
        if (_paa === '') {
            setPVKORC1AA((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function switchEdit() {
        setManualUpdate((prevState) => ({ ...prevState, value: !manualUpdate.value }));
    }

    /*
    function handleManual() {
        setManualUpdate((prevState) => ({ ...prevState, value: true}));
    }

    function handleNotManual() {
        setManualUpdate((prevState) => ({ ...prevState, value: false }));
    }
    */
    return (
        <React.Fragment>
            <Col>
                <Container>
                    <Col className="mb-4">
                        {/* Data general */}
                        <Card small sm="12">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Actualizar parámetros del algoritmo</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>

                                    {/* Parametros Actuales*/}
                                    <Col sm="5">
                                        <CardHeader className="border mb-3 text-center">
                                            Parámetros Actuales
                                        </CardHeader>
                                        {/*Coef. inicial*/}
                                        <FormGroup>
                                            <label>Coeficiente inicial</label>
                                            <FormInput
                                                disabled
                                                //value={p_0.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_0.toFixed(4))}
                                                //valid={p_0.valid}
                                                //invalid={p_0.valid === undefined ? undefined : !p_0.valid}
                                                onChange={onChangeP0}
                                                size="lg"
                                                className="mb-3"
                                                placeholder="3.042" />
                                            <FormFeedback>Debes ingresar un número decimal, con punto. EJ:
                                                1.0</FormFeedback>
                                        </FormGroup>

                                        {/*Coef. Hombre*/}
                                        <FormGroup>
                                            <label>Coeficiente Hombre</label>
                                            <FormInput
                                                disabled
                                                //value={p_men.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_men.toFixed(4))}
                                                //valid={p_men.valid}
                                                //invalid={p_men.valid === undefined ? undefined : !p_men.valid}
                                                onChange={onChangePMen}
                                                size="lg"
                                                //className="mb-3 "
                                                placeholder="0.169" />
                                        </FormGroup>

                                        {/*Coef edad*/}
                                        <FormGroup>
                                            <label>Coeficiente Edad</label>
                                            <FormInput
                                                disabled
                                                // value={p_age.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_age.toFixed(4))}
                                                //valid={p_age.valid}
                                                //invalid={p_age.valid === undefined ? undefined : !p_age.valid}
                                                onChange={onChangePAge}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.0021" />
                                        </FormGroup>

                                        {/*INR inicial*/}
                                        <FormGroup>
                                            <label>Coeficiente INR Inicial</label>
                                            <FormInput
                                                disabled
                                                // value={p_initialINR.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_initialINR.toFixed(4))}
                                                //valid={p_initialINR.valid}
                                                //invalid={p_initialINR.valid === undefined ? undefined : !p_initialINR.valid}
                                                onChange={onChangePInitialINR}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.044" />
                                        </FormGroup>

                                        {/*IMC*/}
                                        <FormGroup>
                                            <label>Coeficiente IMC</label>
                                            <FormInput
                                                disabled
                                                //value={p_imc.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_imc.toFixed(4))}
                                                //valid={p_imc.valid}
                                                //invalid={p_imc.valid === undefined ? undefined : !p_imc.valid}
                                                onChange={onChangePImc}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.013" />
                                        </FormGroup>

                                        {/*Coef CYP2C9 *1/*2*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*2</label>
                                            <FormInput
                                                disabled
                                                //value={p_CYP2C9_12.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_CYP2C9_12.toFixed(4))}
                                                //valid={p_CYP2C9_12.valid}
                                                //invalid={p_CYP2C9_12.valid === undefined ? undefined : !p_CYP2C9_12.valid}
                                                onChange={onChangePCYP2C912}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.106" />
                                        </FormGroup>

                                        {/*Coef CYP2C9 *1/*3*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*3</label>
                                            <FormInput
                                                disabled
                                                // value={p_CYP2C9_13.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_CYP2C9_13.toFixed(4))}
                                                // valid={p_CYP2C9_13.valid}
                                                // invalid={p_CYP2C9_13.valid === undefined ? undefined : !p_CYP2C9_13.valid}
                                                onChange={onChangePCYP2C913}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.334" />
                                        </FormGroup>

                                        {/*Coef CYP2C9 *3/*3*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *3/*3</label>
                                            <FormInput
                                                disabled
                                                // value={p_CYP2C9_33.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_CYP2C9_33.toFixed(4))}
                                                // valid={p_CYP2C9_33.valid}
                                                // invalid={p_CYP2C9_33.valid === undefined ? undefined : !p_CYP2C9_33.valid}
                                                onChange={onChangePCYP2C933}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.784" />
                                        </FormGroup>

                                        {/* Coeficiente VKORC1 *G/*A */}
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *G/*A </label>
                                            <FormInput
                                                disabled
                                                // value={p_VKORC1_GA.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_VKORC1_GA.toFixed(4))}
                                                // valid={p_VKORC1_GA.valid}
                                                // invalid={p_VKORC1_GA.valid === undefined ? undefined : !p_VKORC1_GA.valid}
                                                onChange={onChangeVKORC1GA}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.26" />
                                        </FormGroup>

                                        {/* Coeficiente VKORC1 *A/*A */}
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *A/*A</label>
                                            <FormInput
                                                disabled
                                                // value={p_VKORC1_AA.value}
                                                value={(isObjectEmpty(data_local) ? constants.no_data : data_local.p_VKORC1_AA.toFixed(4))}
                                                // valid={p_VKORC1_AA.valid}
                                                // invalid={p_VKORC1_AA.valid === undefined ? undefined : !p_VKORC1_AA.valid}
                                                onChange={onChangeVKORC1AA}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="0.705" />
                                        </FormGroup>
                                        <Row>
                                            <Badge outline theme="light">
                                                R²:
                                            </Badge><Badge outline theme="info">
                                                {(isObjectEmpty(data_local) ? constants.no_data : data_local.r_squared.toFixed(4))}
                                            </Badge>
                                        </Row>
                                    </Col>

                                    {/*Columna Central*/}
                                    <Col sm="2" className="text-center mx-auto d-flex flex-column justify-content-around">
                                        <h2 style={{ "font-size": "60px" }}><i className="material-icons text-primary">double_arrow</i></h2>
                                        <h2 style={{ "font-size": "60px" }}><i className="material-icons text-primary">double_arrow</i></h2>
                                        <h2 style={{ "font-size": "60px" }}><i className="material-icons text-primary">double_arrow</i></h2>
                                    </Col>

                                    {/* Nuevos Parámetros*/}
                                    <Col sm="5">
                                        <CardHeader className="border mb-3 text-center">
                                            Nuevos Parámetros con: <span
                                                className="font-weight-bold">{manualUpdate.value ? "Ingreso Manual" : "Regresión Lineal"}</span>
                                        </CardHeader>
                                        {/*Coef. inicial*/}
                                        <FormGroup>
                                            <label>Coeficiente inicial</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                //value={p_0.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_0.toFixed(4)) : p_0.value}
                                                valid={p_0.valid}
                                                invalid={p_0.valid === undefined ? undefined : !p_0.valid}
                                                onChange={onChangeP0}
                                                size="lg"
                                                className="mb-3"
                                                placeholder="Ej: 3.042" />
                                            <FormFeedback>Debes ingresar un número decimal, con punto. EJ:
                                                1.0</FormFeedback>
                                        </FormGroup>

                                        {/*Coef. Hombre*/}
                                        <FormGroup>
                                            <label>Coeficiente Hombre</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                //value={p_men.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_men.toFixed(4)) : p_men.value}
                                                valid={p_men.valid}
                                                invalid={p_men.valid === undefined ? undefined : !p_men.valid}
                                                onChange={onChangePMen}
                                                size="lg"
                                                //className="mb-3 "
                                                placeholder="Ej: 0.169" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*Coef edad*/}
                                        <FormGroup>
                                            <label>Coeficiente Edad</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                //value={p_age.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_age.toFixed(4)) : p_age.value}
                                                valid={p_age.valid}
                                                invalid={p_age.valid === undefined ? undefined : !p_age.valid}
                                                onChange={onChangePAge}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.0021" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*INR inicial*/}
                                        <FormGroup>
                                            <label>Coeficiente INR Inicial</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                //value={p_initialINR.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_initialINR.toFixed(4)) : p_initialINR.value}
                                                valid={p_initialINR.valid}
                                                invalid={p_initialINR.valid === undefined ? undefined : !p_initialINR.valid}
                                                onChange={onChangePInitialINR}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.044" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*IMC*/}
                                        <FormGroup>
                                            <label>Coeficiente IMC</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_imc.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_imc.toFixed(4)) : p_imc.value}
                                                valid={p_imc.valid}
                                                invalid={p_imc.valid === undefined ? undefined : !p_imc.valid}
                                                onChange={onChangePImc}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.013" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*Coef CYP2C9 *1/*2*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*2</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_CYP2C9_12.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_CYP2C9_12.toFixed(4)) : p_CYP2C9_12.value}
                                                valid={p_CYP2C9_12.valid}
                                                invalid={p_CYP2C9_12.valid === undefined ? undefined : !p_CYP2C9_12.valid}
                                                onChange={onChangePCYP2C912}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.106" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*Coef CYP2C9 *1/*3*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*3</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_CYP2C9_13.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_CYP2C9_13.toFixed(4)) : p_CYP2C9_13.value}
                                                valid={p_CYP2C9_13.valid}
                                                invalid={p_CYP2C9_13.valid === undefined ? undefined : !p_CYP2C9_13.valid}
                                                onChange={onChangePCYP2C913}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.334" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/*Coef CYP2C9 *3/*3*/}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *3/*3</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_CYP2C9_33.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_CYP2C9_33.toFixed(4)) : p_CYP2C9_33.value}
                                                valid={p_CYP2C9_33.valid}
                                                invalid={p_CYP2C9_33.valid === undefined ? undefined : !p_CYP2C9_33.valid}
                                                onChange={onChangePCYP2C933}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.784" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/* Coeficiente VKORC1 *G/*A */}
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *G/*A </label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_VKORC1_GA.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_VKORC1_GA.toFixed(4)) : p_VKORC1_GA.value}
                                                valid={p_VKORC1_GA.valid}
                                                invalid={p_VKORC1_GA.valid === undefined ? undefined : !p_VKORC1_GA.valid}
                                                onChange={onChangeVKORC1GA}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.26" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>

                                        {/* Coeficiente VKORC1 *A/*A */}
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *A/*A</label>
                                            <FormInput
                                                disabled={!manualUpdate.value}
                                                // value={p_VKORC1_AA.value}
                                                value={!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.p_VKORC1_AA.toFixed(4)) : p_VKORC1_AA.value}
                                                valid={p_VKORC1_AA.valid}
                                                invalid={p_VKORC1_AA.valid === undefined ? undefined : !p_VKORC1_AA.valid}
                                                onChange={onChangeVKORC1AA}
                                                size="lg"
                                                //className="mb-3"
                                                placeholder="Ej: 0.705" />
                                            <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                1.0 </FormFeedback>
                                        </FormGroup>
                                        <Row>
                                            <Badge outline theme="light">
                                                R²:
                                            </Badge><Badge outline theme="info">
                                                {!manualUpdate.value ? (isObjectEmpty(data_model) ? constants.no_data : data_model.r_squared.toFixed(4)) : '-'}
                                            </Badge>
                                        </Row>

                                    </Col>

                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                    {/*<Col lg="12" className="mb-4">
                        <Card small lg="6">
                            <CardBody>
                                <Row>
                                     Nueva dosis
                                    <Col>
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*3</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_CYP2C9_13.value}
                                                    valid={p_CYP2C9_13.valid}
                                                    invalid={p_CYP2C9_13.valid === undefined ? undefined : !p_CYP2C9_13.valid}
                                                    onChange={onChangePCYP2C913}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.334"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                         INR de llegada
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *3/*3</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_CYP2C9_33.value}
                                                    valid={p_CYP2C9_33.valid}
                                                    invalid={p_CYP2C9_33.valid === undefined ? undefined : !p_CYP2C9_33.valid}
                                                    onChange={onChangePCYP2C933}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.784"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                     Nueva dosis
                                    <Col>
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *G/*A </label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_VKORC1_GA.value}
                                                    valid={p_VKORC1_GA.valid}
                                                    invalid={p_VKORC1_GA.valid === undefined ? undefined : !p_VKORC1_GA.valid}
                                                    onChange={onChangeVKORC1GA}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.26"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                         INR de llegada
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *A/*A</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_VKORC1_AA.value}
                                                    valid={p_VKORC1_AA.valid}
                                                    invalid={p_VKORC1_AA.valid === undefined ? undefined : !p_VKORC1_AA.valid}
                                                    onChange={onChangeVKORC1AA}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.705"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>*/}
                    <Col lg="12" style={{
                        position: "sticky",
                        bottom: 0,
                        zIndex: 1
                    }}>
                        <Card small lg="12" className="mb-2" style={{ border: '#5A6169' }}>
                            <CardBody>

                                {/* Regresión Lineal*/}

                                <Row>
                                    <Col xs="6" md="6">
                                        {manualUpdate.value === false &&
                                            <Button
                                                className="font-weight-bold"
                                                onClick={() => {
                                                    onSubmitGetRegresion({
                                                        valid: true,
                                                    });
                                                }}
                                            >
                                                Generar mejor Regresión Lineal
                                            </Button>
                                        }
                                        {manualUpdate.value &&
                                            <Button
                                                theme="primary"
                                                className="font-weight-bold"
                                                onClick={() => {
                                                    onSubmitManual({
                                                        valid: allValid(),
                                                        vars: {
                                                            "p_0": p_0.valid ? parseFloat(p_0.value) : 0.0,
                                                            "p_men": p_men.valid ? parseFloat(p_men.value) : 0.0,
                                                            "p_age": p_age.valid ? parseFloat(p_age.value) : 0.0,
                                                            "p_initialINR": p_initialINR.valid ? parseFloat(p_initialINR.value) : 0.0,
                                                            "p_imc": p_imc.valid ? parseFloat(p_imc.value) : 0.0,
                                                            "p_CYP2C9_12": p_CYP2C9_12.valid ? parseFloat(p_CYP2C9_12.value) : 0.0,
                                                            "p_CYP2C9_13": p_CYP2C9_13.valid ? parseFloat(p_CYP2C9_13.value) : 0.0,
                                                            "p_CYP2C9_33": p_CYP2C9_33.valid ? parseFloat(p_CYP2C9_33.value) : 0.0,
                                                            "p_VKORC1_GA": p_VKORC1_GA.valid ? parseFloat(p_VKORC1_GA.value) : 0.0,
                                                            "p_VKORC1_AA": p_VKORC1_AA.valid ? parseFloat(p_VKORC1_AA.value) : 0.0,
                                                            "r_squared": 0.0,
                                                        }
                                                    });

                                                }}
                                            >
                                                Guardar parámetros
                                            </Button>}
                                    </Col>

                                    <Col sm="12" md="4" className="mb-3">
                                        <strong className="text-muted d-block mb-2">
                                            Estado de edición
                                        </strong>
                                        {/*<SmallToggleExamples title={'Manual'} handler={} />*/}
                                        
                                            <FormCheckbox
                                                toggle
                                                small
                                                onChange={switchEdit}
                                                checked={manualUpdate.value}
                                            >
                                                {manualUpdate.value ? "Manual" : "Regresión Lineal"}
                                            </FormCheckbox>
                                        

                                    </Col>

                                    {/*
                                    <Col xs="6" md="6" className="text-right">
                                            <Button
                                                theme="secondary"
                                                className="mb-2"
                                                onClick={(event) => {
                                                    setForm();
                                                    handleManual()
                                                }}>
                                                Ingreso Manual
                                            </Button>

                                        </Col>
                                            */}
                                </Row>
                                <Progress
                                    //'info', 'success', 'danger'
                                    theme={getTheme(progressBar.bad_response ? 2 : 1)}
                                    //theme='success'
                                    style={{ height: "4px" }}
                                    className="mb-3"
                                    value={progressBar.percent}
                                    //value={100}
                                    striped={false}
                                    animated={false}
                                />

                                {/* Actualización Manual*/}
                                {/*
                                {manualUpdate.value &&
                                    <Row>
                                        <Col xs="6" md="6">
                                            <InputGroup className="mb-2">
                                                <Button
                                                    theme="primary"
                                                    className="font-weight-bold"
                                                    onClick={(event) => {
                                                        onSubmitManual({
                                                            valid: allValid(),
                                                            vars: {
                                                                "p_0": p_0.valid ? parseFloat(p_0.value) : 0.0,
                                                                "p_men": p_men.valid ? parseFloat(p_men.value) : 0.0,
                                                                "p_age": p_age.valid ? parseFloat(p_age.value) : 0.0,
                                                                "p_initialINR": p_initialINR.valid ? parseFloat(p_initialINR.value) : 0.0,
                                                                "p_imc": p_imc.valid ? parseFloat(p_imc.value) : 0.0,
                                                                "p_CYP2C9_12": p_CYP2C9_12.valid ? parseFloat(p_CYP2C9_12.value) : 0.0,
                                                                "p_CYP2C9_13": p_CYP2C9_13.valid ? parseFloat(p_CYP2C9_13.value) : 0.0,
                                                                "p_CYP2C9_33": p_CYP2C9_33.valid ? parseFloat(p_CYP2C9_33.value) : 0.0,
                                                                "p_VKORC1_GA": p_VKORC1_GA.valid ? parseFloat(p_VKORC1_GA.value) : 0.0,
                                                                "p_VKORC1_AA": p_VKORC1_AA.valid ? parseFloat(p_VKORC1_AA.value) : 0.0,
                                                            }
                                                        });

                                                    }}
                                                >
                                                    Guardar parámetros
                                                </Button>
                                            </InputGroup>
                                        </Col>
                                        <Col xs="6" md="6" className="text-right">
                                            <Button
                                                theme="secondary"
                                                className="mb-2"
                                                onClick={(event) => {
                                                    setForm();
                                                    handleNotManual()
                                                }}>
                                                Regresión Lineal
                                            </Button>
                                        </Col>
                                    </Row>}
                                            */}
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </Col>
        </React.Fragment>
    );
}

UpdateProps.propTypes = {
    onSubmitManual: PropTypes.func,
}

UpdateProps.defaultProps = {
    onSubmitManual: () => {
    },
}


export default UpdateProps;

