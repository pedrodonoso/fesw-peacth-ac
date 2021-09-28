import React, {Component, useState} from "react";
import PropTypes from "prop-types";
import {
    Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup
    , InputGroupAddon,
    InputGroupText,
    Container, FormInput, InputGroup, ButtonToolbar, Form, FormGroup, FormFeedback, ListGroup, ListGroupItem
} from "shards-react";

import PacienteDataUserGeneral from "../paciente/paciente-data-user-general";
import CustomToggle from '../forms/CustomToggle';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import pacienteService from "../../services/paciente.service";
import constants from "../../data/constants";
import DropdownOptions from "../calculo/drop-options";

const PacienteGeneral = ({data_paciente, title}) => {
    //const [data_paciente, setDataPaciente] = useState({value: '', valid: undefined});
    const [isActive, setisActive] = useState({value: true});

    function handleShowPerfil() {
        setisActive((prevState) => ({...prevState, value: true}));
    }

    function handleHidePerfil() {
        setisActive((prevState) => ({...prevState, value: false}));
    }

    function isObjectEmpty(obj) {
        return Object.getOwnPropertyNames(obj).length == 0
    }

    //render() {
    //const {title} = this.props;

    return (
        <Container>
            <Card small className="h-100 w-100">
                <CardHeader className="border-bottom">
                                <h6 className="m-0">{title}</h6>
                            </CardHeader>
                <CardHeader className="border-bottom bg-light">
                    <h5 className="mt-1 font-weight-bold text-center">{title}</h5>
                </CardHeader>
                <CardBody>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                theme={isActive.value === true ? 'primary' : 'white'}
                                onClick={() =>
                                    handleShowPerfil()
                                }
                            >
                                <Col style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Col>
                                        <Row><strong style={{
                                            'font-size': '13px',
                                            'font-weight': '80'
                                        }}>Clínico</strong></Row>
                                    </Col>
                                </Col>

                            </Button>
                            <Button
                                theme={isActive.value === false ? 'primary' : 'white'}
                                onClick={() =>
                                    handleHidePerfil()
                                }
                            >
                                <Col style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Col>
                                        <Row><strong style={{
                                            'font-size': '13px',
                                            'font-weight': '80'
                                        }}>Genético</strong></Row>
                                    </Col>
                                </Col>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                    {/* Perfil Clinico*/}
                    {isActive.value &&
                    <Row id="#perfil-clinico" className="mt-2">
                        <Col sm="12" className="mb-2">
                            {/* Data general */}
                            <Card lg="12">
                                <CardHeader className="border-bottom">
                                    <h6 className="m-0">Datos Clínicos del Paciente</h6>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col sm="12" lg="4">
                                            {/* Codigo Paciente */}
                                            <FormGroup check={false}>
                                                <label>Código del paciente</label>
                                                <FormInput
                                                    value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.code}
                                                    /*value={cod_paciente.value}
                                                    valid={cod_paciente.valid}
                                                    invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                                                    onChange={onChangeCodPaciente}*/
                                                    disabled
                                                    size="lg"
                                                    className="mb-3"
                                                    placeholder="T-001"
                                                />
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
                                                        value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.age}
                                                        /*value={edad.value}
                                                        valid={edad.valid}
                                                        invalid={edad.valid === undefined ? undefined : !edad.valid}
                                                        onChange={onChangeEdad}*/
                                                        size="lg"
                                                        disabled
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
                                                        value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.weight}
                                                        /*value={peso.value}
                                                        valid={peso.valid}
                                                        invalid={peso.valid === undefined ? undefined : !peso.valid}
                                                        onChange={onChangePeso}*/
                                                        size="lg"
                                                        disabled
                                                        placeholder="0"/>
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
                                                        value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.height}
                                                        /*value={talla.value}
                                                        valid={talla.valid}
                                                        invalid={talla.valid === undefined ? undefined : !talla.valid}
                                                        onChange={onChangeTalla}*/
                                                        size="lg"
                                                        disabled
                                                        placeholder="0"/>
                                                    <FormFeedback tooltip={true}>"Debes ingresar solo
                                                        números"</FormFeedback>
                                                    <InputGroupAddon type="append">
                                                        <InputGroupText>m</InputGroupText>
                                                    </InputGroupAddon>

                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="12" lg="4">
                                            {/* Sexo */}
                                            <FormGroup>
                                                <label>Sexo</label>
                                                <FormInput
                                                    value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.sex}
                                                    /*value={inr_inicial.value}
                                                    valid={inr_inicial.valid}
                                                    invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                    onChange={onChangeINRInicial}*/
                                                    size="lg"
                                                    disabled
                                                    className="mb-3"
                                                    placeholder="Femenino"/>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="12" lg="4">
                                            {/* INR Inicial */}
                                            <FormGroup>
                                                <label>INR Inicial</label>
                                                <FormInput
                                                    value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.initialINR}
                                                    /*value={inr_inicial.value}
                                                    valid={inr_inicial.valid}
                                                    invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                    onChange={onChangeINRInicial}*/
                                                    size="lg"
                                                    className="mb-3"
                                                    disabled
                                                    placeholder="0"/>
                                                <FormFeedback tooltip={true}>"Debes ingresar un
                                                    valor decimal. EJ: 2.4"</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12">
                            {/* Genetica */}
                            <Card small lg="12">
                                <CardHeader className="border-bottom">
                                    <h6 className="m-0">Datos Farmacogenéticos del Paciente</h6>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col sm="12" lg="4">
                                            <label>CYP2C9-2</label>
                                            <FormInput
                                                value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.genetics.CYP2C9_2}
                                                /*value={inr_inicial.value}
                                                valid={inr_inicial.valid}
                                                invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                onChange={onChangeINRInicial}*/
                                                size="lg"
                                                className="mb-3"
                                                disabled
                                                placeholder="*1/*1"/>
                                        </Col>
                                        <Col sm="12" lg="4">
                                            <label>CYP2C9-3</label>
                                            <FormInput
                                                value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.genetics.CYP2C9_3}
                                                /*value={inr_inicial.value}
                                                valid={inr_inicial.valid}
                                                invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                onChange={onChangeINRInicial}*/
                                                size="lg"
                                                className="mb-3"
                                                disabled
                                                placeholder="*1/*1"/>
                                        </Col>
                                        <Col sm="12" lg="4">
                                            <label>VKORC1</label>
                                            <FormInput
                                                value={isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.clinic.genetics.VKORC1}
                                                /*value={inr_inicial.value}
                                                valid={inr_inicial.valid}
                                                invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                onChange={onChangeINRInicial}*/
                                                size="lg"
                                                className="mb-3"
                                                disabled
                                                placeholder="*A/*A"/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>}


                    {/* Perfil Genético*/}
                    {isActive.value === false &&
                    <div id="#perfil-genetico" className="mt-2">
                        <Card>
                            <CardHeader className="border-bottom bg-light">
                                Perfil Genético
                            </CardHeader>
                            <CardBody>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Gen</th>
                                        <th scope="col">ID Poliformismo estudiado</th>
                                        <th scope="col">Presencia del Alelo variante</th>
                                        <th scope="col">Observaciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row" rowSpan="2">CYP2C9</th>
                                        <td>rs1799853 (*2)</td>
                                        <td>{isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.genetic.CYP2C9.rs1799853}</td>
                                        <td rowSpan="2" className="align-middle">
                                            {isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.genetic.CYP2C9.Observaciones}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>rs1057910 (*3)</td>
                                        <td>{isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.genetic.CYP2C9.rs1057910}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">VKORC1</th>
                                        <td>rs9923231</td>
                                        <td>{isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.genetic.VKORC1.rs9923231}</td>
                                        <td>
                                            {isObjectEmpty(data_paciente) ? constants.no_data : data_paciente.genetic.VKORC1.Observaciones}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </div>}
                    {/*
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
          */}
                </CardBody>
            </Card>
        </Container>
    );
    // }
}

PacienteGeneral.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string,
    /**
     * The chart dataset.
     */
    chartData: PropTypes.object,
    /**
     * The Chart.js options.
     */
    chartOptions: PropTypes.object
};


PacienteGeneral.defaultProps = {
    error: false,
    perfil: constants.perfil_clinico,
    title: "Análisis",
    /*
    chart: {
      type: 'boxPlot',
      height:'300',
      width: '100%'
    },
    */
    options: {
        noData: {
            text: 'Cargando...'
        },
        colors: ['#008FFB', '#FEB019'],
        title: {
            text: 'Dosis calculada v/s genotipos',
            align: 'center'
        },

        xaxis: {
            title: {
                text: 'Genotipos'
            },
        },

        yaxis: {
            title: {
                text: 'Dosis semanal (mg/semana)'
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(2);
                }
            },
        },
        /*
        tooltip: {
            shared: false,
            intersect: true
        },

        responsive: [{
          breakpoint: 100,
          options: {
          legend: {
              position: 'top'
          }
          }
        }] */

    },

    series: [
        {
            name: 'box',
            type: 'boxPlot',
            data: []
        },
    ],

};
export default PacienteGeneral;
