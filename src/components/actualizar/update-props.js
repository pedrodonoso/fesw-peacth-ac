import React from 'react';
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
    CardHeader, Container,
    Popover,
    PopoverHeader,
    PopoverBody
} from "shards-react";

import constants from "../../data/constants";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";

const validNumRegex =
    RegExp(/^[-]*([0-9])+[.]?([0-9])*$/i);

const themeMap = ['info', 'success', 'danger']; //azul,verde, rojo


class UpdateProps extends React.Component {
    constructor(props) {
        //props.data_local, props.data_model, onSubmitManual, onSubmitGetRegresion, props.progressBar
        super(props);

        this.state = {
            checked: false,
            title: this.props.title,
            p_0: { value: '', valid: undefined },
            p_men: { value: '', valid: undefined },
            p_age: { value: '', valid: undefined },
            p_initialINR: { value: '', valid: undefined },
            p_imc: { value: '', valid: undefined },
            p_CYP2C9_12: { value: '', valid: undefined },
            p_CYP2C9_13: { value: '', valid: undefined },
            p_CYP2C9_33: { value: '', valid: undefined },
            p_VKORC1_GA: { value: '', valid: undefined },
            p_VKORC1_AA: { value: '', valid: undefined },
            collapseInfoEdition: false,
        };

        this.handleChangeMethod = this.handleChangeMethod.bind(this);
        this.isObjectEmpty = this.isObjectEmpty.bind(this);
        this.getTheme = this.getTheme.bind(this);
        this.allValid = this.allValid.bind(this);
        this.onChangeP0 = this.onChangeP0.bind(this);
        this.onChangePMen = this.onChangePMen.bind(this);
        this.onChangePAge = this.onChangePAge.bind(this);
        this.onChangePInitialINR = this.onChangePInitialINR.bind(this);
        this.onChangePImc = this.onChangePImc.bind(this);
        this.onChangePCYP2C912 = this.onChangePCYP2C912.bind(this);
        this.onChangePCYP2C913 = this.onChangePCYP2C913.bind(this);
        this.onChangePCYP2C933 = this.onChangePCYP2C933.bind(this);
        this.onChangeVKORC1GA = this.onChangeVKORC1GA.bind(this);
        this.onChangeVKORC1AA = this.onChangeVKORC1AA.bind(this);
        this.toggleCollapseInfoEdition = this.toggleCollapseInfoEdition.bind(this);

    }

    isObjectEmpty(obj) {
        if (obj === null) {
            return true;
        } else {
            return Object.getOwnPropertyNames(obj).length === 0
        }
    }

    getTheme(index) {
        return themeMap[(index + themeMap.length) % themeMap.length];
    }

    allValid() {
        return (this.state.p_0.valid) &&
            (this.state.p_men.valid) &&
            (this.state.p_age.valid) &&
            (this.state.p_initialINR.valid) &&
            (this.state.p_imc.valid) &&
            (this.state.p_CYP2C9_12.valid) &&
            (this.state.p_CYP2C9_13.valid) &&
            (this.state.p_CYP2C9_33.valid) &&
            (this.state.p_VKORC1_GA.valid) &&
            (this.state.p_VKORC1_AA.valid);
    }

    onChangeP0(e) {
        var _po = e.target.value;

        this.setState({
            ...this.state,
            p_0: {
                ...this.state.p_0,
                value: _po,
                valid: (_po === '') ? undefined : ((validNumRegex.test(_po)) ? true : false),
            }
        });

    }

    onChangePMen(e) {
        var _pmen = e.target.value;

        this.setState({
            ...this.state,
            p_men: {
                ...this.state.p_men,
                value: _pmen,
                valid: (_pmen === '') ? undefined : ((validNumRegex.test(_pmen)) ? true : false),
            }
        });
    }

    onChangePAge(e) {
        var _page = e.target.value;

        this.setState({
            ...this.state,
            p_age: {
                ...this.state.p_age,
                value: _page,
                valid: (_page === '') ? undefined : ((validNumRegex.test(_page)) ? true : false),
            }
        });

    }

    onChangePInitialINR(e) {
        var _pinitialinr = e.target.value;

        this.setState({
            ...this.state,
            p_initialINR: {
                ...this.state.p_initialINR,
                value: _pinitialinr,
                valid: (_pinitialinr === '') ? undefined : ((validNumRegex.test(_pinitialinr)) ? true : false),
            }
        });
    }

    onChangePImc(e) {
        var _pimc = e.target.value;

        this.setState({
            ...this.state,
            p_imc: {
                ...this.state.p_imc,
                value: _pimc,
                valid: (_pimc === '') ? undefined : ((validNumRegex.test(_pimc)) ? true : false),
            }
        });
    }

    onChangePCYP2C912(e) {
        var _p12 = e.target.value;

        this.setState({
            ...this.state,
            p_CYP2C9_12: {
                ...this.state.p_CYP2C9_12,
                value: _p12,
                valid: (_p12 === '') ? undefined : ((validNumRegex.test(_p12)) ? true : false),
            }
        });
    }

    onChangePCYP2C913(e) {
        var _p13 = e.target.value;

        this.setState({
            ...this.state,
            p_CYP2C9_13: {
                ...this.state.p_CYP2C9_13,
                value: _p13,
                valid: (_p13 === '') ? undefined : ((validNumRegex.test(_p13)) ? true : false),
            }
        });
    }

    onChangePCYP2C933(e) {
        var _p33 = e.target.value;// p_CYP2C9_33

        this.setState({
            ...this.state,
            p_CYP2C9_33: {
                ...this.state.p_CYP2C9_33,
                value: _p33,
                valid: (_p33 === '') ? undefined : ((validNumRegex.test(_p33)) ? true : false),
            }
        });
    }

    onChangeVKORC1GA(e) {
        var _pga = e.target.value;

        this.setState({
            ...this.state,
            p_VKORC1_GA: {
                ...this.state.p_VKORC1_GA,
                value: _pga,
                valid: (_pga === '') ? undefined : ((validNumRegex.test(_pga)) ? true : false),
            }
        });
    }

    onChangeVKORC1AA(e) {
        var _paa = e.target.value;

        this.setState({
            ...this.state,
            p_VKORC1_AA: {
                ...this.state.p_VKORC1_AA,
                value: _paa,
                valid: (_paa === '') ? undefined : ((validNumRegex.test(_paa)) ? true : false),
            }
        });
    }

    handleChangeMethod(method) {
        this.setState({
            checked: (method.target.value === 'manual') ? true : false
        });
    }

    toggleCollapseInfoEdition() {
        this.setState({
            ...this.state,
            collapseInfoEdition: !this.state.collapseInfoEdition });
    }

    render() {
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_0.toFixed(4))}
                                                    //valid={p_0.valid}
                                                    //invalid={p_0.valid === undefined ? undefined : !p_0.valid}
                                                    onChange={this.onChangeP0}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_men.toFixed(4))}
                                                    //valid={p_men.valid}
                                                    //invalid={p_men.valid === undefined ? undefined : !p_men.valid}
                                                    onChange={this.onChangePMen}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_age.toFixed(4))}
                                                    //valid={p_age.valid}
                                                    //invalid={p_age.valid === undefined ? undefined : !p_age.valid}
                                                    onChange={this.onChangePAge}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_initialINR.toFixed(4))}
                                                    //valid={p_initialINR.valid}
                                                    //invalid={p_initialINR.valid === undefined ? undefined : !p_initialINR.valid}
                                                    onChange={this.onChangePInitialINR}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_imc.toFixed(4))}
                                                    //valid={p_imc.valid}
                                                    //invalid={p_imc.valid === undefined ? undefined : !p_imc.valid}
                                                    onChange={this.onChangePImc}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_CYP2C9_12.toFixed(4))}
                                                    //valid={p_CYP2C9_12.valid}
                                                    //invalid={p_CYP2C9_12.valid === undefined ? undefined : !p_CYP2C9_12.valid}
                                                    onChange={this.onChangePCYP2C912}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_CYP2C9_13.toFixed(4))}
                                                    // valid={p_CYP2C9_13.valid}
                                                    // invalid={p_CYP2C9_13.valid === undefined ? undefined : !p_CYP2C9_13.valid}
                                                    onChange={this.onChangePCYP2C913}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_CYP2C9_33.toFixed(4))}
                                                    // valid={p_CYP2C9_33.valid}
                                                    // invalid={p_CYP2C9_33.valid === undefined ? undefined : !p_CYP2C9_33.valid}
                                                    onChange={this.onChangePCYP2C933}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_VKORC1_GA.toFixed(4))}
                                                    // valid={p_VKORC1_GA.valid}
                                                    // invalid={p_VKORC1_GA.valid === undefined ? undefined : !p_VKORC1_GA.valid}
                                                    onChange={this.onChangeVKORC1GA}
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
                                                    value={(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.p_VKORC1_AA.toFixed(4))}
                                                    // valid={p_VKORC1_AA.valid}
                                                    // invalid={p_VKORC1_AA.valid === undefined ? undefined : !p_VKORC1_AA.valid}
                                                    onChange={this.onChangeVKORC1AA}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.705" />
                                            </FormGroup>
                                            <Row>
                                                <Badge outline theme="light">
                                                    R²:
                                                </Badge><Badge outline theme="info">
                                                    {(this.isObjectEmpty(this.props.data_local) ? constants.no_data : this.props.data_local.r_squared.toFixed(4))}
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
                                                    className="font-weight-bold">{this.state.checked ? "Ingreso Manual" : "Regresión Lineal"}</span>
                                            </CardHeader>
                                            {/*Coef. inicial*/}
                                            <FormGroup>
                                                <label>Coeficiente inicial</label>
                                                <FormInput
                                                    disabled={!this.state.checked}
                                                    //value={p_0.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_0.toFixed(4)) : this.state.p_0.value}
                                                    valid={this.state.p_0.valid}
                                                    invalid={this.state.p_0.valid === undefined ? undefined : !this.state.p_0.valid}
                                                    onChange={this.onChangeP0}
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
                                                    disabled={!this.state.checked}
                                                    //value={p_men.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_men.toFixed(4)) : this.state.p_men.value}
                                                    valid={this.state.p_men.valid}
                                                    invalid={this.state.p_men.valid === undefined ? undefined : !this.state.p_men.valid}
                                                    onChange={this.onChangePMen}
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
                                                    disabled={!this.state.checked}
                                                    //value={p_age.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_age.toFixed(4)) : this.state.p_age.value}
                                                    valid={this.state.p_age.valid}
                                                    invalid={this.state.p_age.valid === undefined ? undefined : !this.state.p_age.valid}
                                                    onChange={this.onChangePAge}
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
                                                    disabled={!this.state.checked}
                                                    //value={p_initialINR.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_initialINR.toFixed(4)) : this.state.p_initialINR.value}
                                                    valid={this.state.p_initialINR.valid}
                                                    invalid={this.state.p_initialINR.valid === undefined ? undefined : !this.state.p_initialINR.valid}
                                                    onChange={this.onChangePInitialINR}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_imc.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_imc.toFixed(4)) : this.state.p_imc.value}
                                                    valid={this.state.p_imc.valid}
                                                    invalid={this.state.p_imc.valid === undefined ? undefined : !this.state.p_imc.valid}
                                                    onChange={this.onChangePImc}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_CYP2C9_12.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_CYP2C9_12.toFixed(4)) : this.state.p_CYP2C9_12.value}
                                                    valid={this.state.p_CYP2C9_12.valid}
                                                    invalid={this.state.p_CYP2C9_12.valid === undefined ? undefined : !this.state.p_CYP2C9_12.valid}
                                                    onChange={this.onChangePCYP2C912}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_CYP2C9_13.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_CYP2C9_13.toFixed(4)) : this.state.p_CYP2C9_13.value}
                                                    valid={this.state.p_CYP2C9_13.valid}
                                                    invalid={this.state.p_CYP2C9_13.valid === undefined ? undefined : !this.state.p_CYP2C9_13.valid}
                                                    onChange={this.onChangePCYP2C913}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_CYP2C9_33.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_CYP2C9_33.toFixed(4)) : this.state.p_CYP2C9_33.value}
                                                    valid={this.state.p_CYP2C9_33.valid}
                                                    invalid={this.state.p_CYP2C9_33.valid === undefined ? undefined : !this.state.p_CYP2C9_33.valid}
                                                    onChange={this.onChangePCYP2C933}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_VKORC1_GA.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_VKORC1_GA.toFixed(4)) : this.state.p_VKORC1_GA.value}
                                                    valid={this.state.p_VKORC1_GA.valid}
                                                    invalid={this.state.p_VKORC1_GA.valid === undefined ? undefined : !this.state.p_VKORC1_GA.valid}
                                                    onChange={this.onChangeVKORC1GA}
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
                                                    disabled={!this.state.checked}
                                                    // value={p_VKORC1_AA.value}
                                                    value={!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.p_VKORC1_AA.toFixed(4)) : this.state.p_VKORC1_AA.value}
                                                    valid={this.state.p_VKORC1_AA.valid}
                                                    invalid={this.state.p_VKORC1_AA.valid === undefined ? undefined : !this.state.p_VKORC1_AA.valid}
                                                    onChange={this.onChangeVKORC1AA}
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
                                                    {!this.state.checked ? (this.isObjectEmpty(this.props.data_model) ? constants.no_data : this.props.data_model.r_squared.toFixed(4)) : '-'}
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
                                                onChange={this.onChangePCYP2C913}
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
                                                onChange={this.onChangeVKORC1GA}
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
                                                onChange={this.onChangeVKORC1AA}
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
                                            {this.state.checked === false &&
                                                <Button
                                                    className="font-weight-bold"
                                                    onClick={() => {
                                                        this.props.onSubmitGetRegresion({
                                                            valid: true,
                                                        });
                                                    }}
                                                >
                                                    Generar mejor Regresión Lineal
                                                </Button>
                                            }
                                            {this.state.checked &&
                                                <Button
                                                    theme="primary"
                                                    className="font-weight-bold"
                                                    onClick={() => {
                                                        this.props.onSubmitManual({
                                                            valid: this.allValid(),
                                                            vars: {
                                                                "p_0": this.sp_0.valid ? parseFloat(this.sp_0.value) : 0.0,
                                                                "p_men": this.sp_men.valid ? parseFloat(this.sp_men.value) : 0.0,
                                                                "p_age": this.sp_age.valid ? parseFloat(this.sp_age.value) : 0.0,
                                                                "p_initialINR": this.sp_initialINR.valid ? parseFloat(this.sp_initialINR.value) : 0.0,
                                                                "p_imc": this.sp_imc.valid ? parseFloat(this.sp_imc.value) : 0.0,
                                                                "p_CYP2C9_12": this.sp_CYP2C9_12.valid ? parseFloat(this.sp_CYP2C9_12.value) : 0.0,
                                                                "p_CYP2C9_13": this.sp_CYP2C9_13.valid ? parseFloat(this.sp_CYP2C9_13.value) : 0.0,
                                                                "p_CYP2C9_33": this.sp_CYP2C9_33.valid ? parseFloat(this.sp_CYP2C9_33.value) : 0.0,
                                                                "p_VKORC1_GA": this.sp_VKORC1_GA.valid ? parseFloat(this.sp_VKORC1_GA.value) : 0.0,
                                                                "p_VKORC1_AA": this.sp_VKORC1_AA.valid ? parseFloat(this.sp_VKORC1_AA.value) : 0.0,
                                                                "r_squared": 0.0,
                                                            }
                                                        });

                                                    }}
                                                >
                                                    Guardar parámetros
                                                </Button>}
                                        </Col>

                                        <Col sm="12" md="4" className="mb-3">
                                            <Row>
                                                <strong className="d-block mb-2 mr-2">
                                                    Modo de edición
                                                </strong>
                                                <i className="material-icons"
                                                id="popover-1"
                                                style={{cursor:'pointer'}}
                                                    onClick={
                                                        () => {
                                                            this.setState({
                                                                ...this.state,
                                                                collapseInfoEdition: !this.state.collapseInfoEdition });
                                                        }
                                                    }>help</i>
                                            </Row>
                                            <Row>
                                                <Popover
                                                    placement="top"
                                                    open={this.state.collapseInfoEdition}
                                                    toggle={this.toggleCollapseInfoEdition}
                                                    target="#popover-1"
                                                >
                                                    <PopoverHeader>Ayuda</PopoverHeader>
                                                    <PopoverBody>
                                                       Para cambiar el modo de edición debes seleccionar
                                                       la palabra que corresponda al estado de edición que
                                                       corresponda.
                                                    </PopoverBody>
                                                </Popover>
                                            </Row>
                                            <div>
                                                <FormControl component="fieldset">
                                                    <RadioGroup row aria-label="UpdateMethod" name="update" defaultValue="auto" onChange={this.handleChangeMethod}>
                                                        <FormControlLabel
                                                            value="auto"
                                                            control={<Radio color="primary" />}
                                                            label="Regresión Lineal" />
                                                        <FormControlLabel
                                                            value="manual"
                                                            control={<Radio color="primary" />}
                                                            label="Manual" />
                                                    </RadioGroup>
                                                </FormControl>
                                                {/*<FormRadio
                                                    name="manual"
                                                    checked={this.state.checked === true}
                                                    onChange={() => {
                                                        this.changeMethod("manual");
                                                    }}
                                                >
                                                    Manual
                                                </FormRadio>
                                                <FormRadio
                                                inline
                                                    name="auto"
                                                    checked={this.state.checked === false}
                                                    onChange={() => {
                                                        this.changeMethod("auto");
                                                    }}
                                                >
                                                    Automático
                                                </FormRadio>*/}
                                            </div>
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
                                        theme={this.getTheme(this.props.progressBar.bad_response ? 2 : 1)}
                                        //theme='success'
                                        style={{ height: "4px" }}
                                        className="mb-3"
                                        value={this.props.progressBar.percent}
                                        //value={100}
                                        striped={false}
                                        animated={false}
                                    />

                                </CardBody>
                            </Card>
                        </Col>
                    </Container>
                </Col>
            </React.Fragment>

        );
    }
}

export default UpdateProps;

