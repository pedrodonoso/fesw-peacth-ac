import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    FormFeedback,
    FormGroup,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from "shards-react";

import constants from "../../data/constants";

const Compare = ({ onSubmit, onSetDose, dosis, dosis_network, doseCalculatedStatus }) => {
    console.log({ title: "dosecalculated", value: doseCalculatedStatus });

    const [card_1_selected, setCard1Selected] = useState({ value: false, });
    const [card_2_selected, setCard2Selected] = useState({ value: false, });
    const [card_3_selected, setCard3Selected] = useState({ value: false, });


    const [cod_paciente, setCodPaciente] = useState({ value: '', valid: undefined });
    const [edad, setEdad] = useState({ value: '', valid: undefined });
    const [peso, setPeso] = useState({ value: '', valid: undefined });
    const [talla, setTalla] = useState({ value: '', valid: undefined });
    const [sexo, setSexo] = useState({ value: 'F' });
    const [initialDose, setInitialDose] = useState({ value: '', valid: undefined });
    const [manualDose, setManualDose] = useState({ value: '', valid: undefined });

    const [inr_inicial, setInrInicial] = useState({ value: '', valid: undefined });
    const [genetics, setGenetics] = useState({
        value: {
            [constants.gen2]: constants.gen11,
            [constants.gen3]: constants.gen11,
            [constants.gen4]: constants.genaa
        }, valid: false
    });
    function setForm() {
        setCard1Selected((prevState) => ({ ...prevState, value: false, }));
        setCard2Selected((prevState) => ({ ...prevState, value: false, }));
        setCard3Selected((prevState) => ({ ...prevState, value: false, }));

        setCodPaciente((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setEdad((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setPeso((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setTalla((prevState) => ({ ...prevState, value: 0.0, valid: undefined }));
        setSexo((prevState) => ({ ...prevState, value: 'F' }));
        setInrInicial((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setManualDose((prevState) => ({ ...prevState, value: '', valid: undefined }));

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
        RegExp(/^([0-9])+[.]?([0-9])*$/i);
    const validPacienteRegex =
        RegExp(/^([a-zA-Z0-9\-]){1,5}$/i);

    function allValid() {
        // return (cod_paciente.valid && !(cod_paciente.valid === undefined)) && (edad.valid && !(edad.valid === undefined)) && (peso.valid && !(peso.valid === undefined)) && (talla.valid && !(talla.valid === undefined)) && (inr_inicial.valid && !(inr_inicial.valid === undefined));
        return (cod_paciente.valid && true) && (edad.valid && true) && (peso.valid && true) && (talla.valid && true) && (inr_inicial.valid && true);

    }

    function handleSubmit(data) {
        var title = data.title
        var selected = data.selected
        var dic = genetics.value
        dic = { ...dic, [title]: selected }
        setGenetics((prevState) => ({ ...prevState, value: dic }))
    }

    function calcImc() {
        return peso.value / Math.pow(talla.value, 2);
    }

    function onChangeCodPaciente(e) {
        var _cod = e.target.value.toUpperCase();
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

    function onChangeInitialDose(e) {
        var _initialDose = e.target.value;
        setInitialDose((prevState) => ({ ...prevState, value: _initialDose }));
        if (validNumRegex.test(_initialDose)) {
            setInitialDose((prevState) => ({ ...prevState, valid: true }))
        } else {
            setInitialDose((prevState) => ({ ...prevState, valid: false }))
        }
        if (_initialDose === '') {
            setInitialDose((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    function onChangeManualDose(e) {
        var _manualDose = e.target.value;
        setManualDose((prevState) => ({ ...prevState, value: _manualDose }));
        setInitialDose((prevState) => ({ ...prevState, value: _manualDose, }));

        if (validNumRegex.test(_manualDose)) {
            setManualDose((prevState) => ({ ...prevState, valid: true }))
        } else {
            setManualDose((prevState) => ({ ...prevState, valid: false }))
        }
        if (_manualDose === '') {
            setManualDose((prevState) => ({ ...prevState, valid: undefined }))
        }

        if (manualDose.value != '') { //seleccionar card cuando tiene input
            setCard3Selected((prevState) => ({ ...prevState, value: true }));
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
                                <h5 className="m-0 font-weight-bold text-center">Comparación de Modelos</h5>
                            </CardHeader>
                            <CardBody>
                                <h6>Dosis Real: 58 [mg/semana]</h6>
                                <table className="table table-striped">
                                    <thead>
                                    <tr className="text-center">
                                        <th scope="col">Características\Modelo</th>
                                        <th scope="col">Modelo de Regresión</th>
                                        <th scope="col">Red Neuronal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                        <th scope="row">Dosis [mg/semana]</th>
                                        <td>55</td>
                                        <td>59</td>
                                    </tr>
                                    <tr className="text-center">
                                        <th scope="row">Errores</th>
                                        <td>0.6129</td>
                                        <td>8.19%</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}

Compare.propTypes =
    {
        onSubmit: PropTypes.func,
        dosis: PropTypes.any
    }

Compare.defaultProps =
    {
        onSubmit: () => {
        },
        dosis: -999.0,
    }

export default Compare;
