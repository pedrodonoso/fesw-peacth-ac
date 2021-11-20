import React, { useState } from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts';
import {
    Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup
    , InputGroupAddon,
    InputGroupText,
    Container, FormInput, InputGroup, ButtonToolbar, FormGroup, FormFeedback,
} from "shards-react";

import constants from "../../data/constants";
//import Download from '../exports/excel-export';
import DropdownExports from '../exports/DropdownExports';
const PacienteGeneral = ({ data_paciente, title }) => {
    //const [data_paciente, setDataPaciente] = useState({value: '', valid: undefined});
    const [isActive, setisActive] = useState({ value: constants.perfil_clinico });
    function handleChangeOption(section) {
        console.log(section);
        if (section === constants.perfil_clinico) {
            setisActive((prevState) => ({ ...prevState, value: constants.perfil_clinico }));

        }
        if (section === constants.perfil_genetico) {
            setisActive((prevState) => ({ ...prevState, value: constants.perfil_genetico }));

        }
        if (section === constants.perfil_historico) {
            setisActive((prevState) => ({ ...prevState, value: constants.perfil_historico }));
        }
    }
    function isObjectEmpty(obj) {
        return Object.getOwnPropertyNames(obj).length === 0
    }

    //render() {
    //const {title} = this.props;

    return (
       
        <Container >
            <Card small className="h-100 w-100">
                <CardHeader className="border-bottom bg-light">
                    <h5 className="mt-1 font-weight-bold text-center">{title}</h5>
                </CardHeader>
                <CardBody>
                    <DropdownExports/>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                className="font-weight-bold"
                                theme={isActive.value === constants.perfil_clinico ? 'primary' : 'white'}
                                onClick={() =>
                                    handleChangeOption(constants.perfil_clinico)
                                }>
                                {constants.perfil_clinico}

                            </Button>
                            <Button
                                className="font-weight-bold"
                                theme={isActive.value === constants.perfil_genetico ? 'primary' : 'white'}
                                onClick={() =>
                                    handleChangeOption(constants.perfil_genetico)
                                }>
                                {constants.perfil_genetico}
                            </Button>
                            <Button
                                className="font-weight-bold"
                                theme={isActive.value === constants.perfil_historico ? 'primary' : 'white'}
                                onClick={() =>
                                    handleChangeOption(constants.perfil_historico)
                                    //this.generate(constants.gen4)
                                }>
                                {constants.perfil_historico}
                                <Col style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Row><strong style={{
                                        'font-size': '10px',
                                        'font-weight': '50'
                                    }}>dosificación vs INR</strong></Row>
                                </Col>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>

                    {/* Perfil Clinico*/}
                    {isActive.value === constants.perfil_clinico &&
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
                                                            placeholder="0" />
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
                                                        placeholder="Femenino" />
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
                                                        placeholder="0" />
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
                                                    placeholder="*1/*1" />
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
                                                    placeholder="*1/*1" />
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
                                                    placeholder="*A/*A" />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>}


                    {/* Perfil Genético*/}
                    {isActive.value === constants.perfil_genetico &&
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
                    {/* Perfil Histórico*/}
                    {isActive.value === constants.perfil_historico &&
                        <div id="#perfil-historico" className="mt-2">
                            <Card>
                                <CardHeader className="border-bottom bg-light">
                                    Perfil Histórico
                                </CardHeader>
                                <CardBody>
                                    <Row align="center">
                                        <Col>
                                            <div className="align-middle">
                                                <Chart
                                                    options={{
                                                        chart: {
                                                            height: 'auto',
                                                            width: '100%',
                                                            type: 'line',
                                                            // zoom: {
                                                            //     enabled: false
                                                            // }
                                                        },
                                                        noData: {
                                                            text: 'No tenemos información disponible ...'
                                                        },
                                                        dataLabels: {
                                                            enabled: true,
                                                            // enabledOnSeries: [1]
                                                        },
                                                        stroke: {
                                                            // curve: 'smooth'
                                                            // width: [0, 4]
                                                        },
                                                        title: {
                                                            text: 'Dosificiación vs INR',
                                                            align: 'left'
                                                        },
                                                        grid: {
                                                            row: {
                                                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                                                opacity: 0.5
                                                            },
                                                        },
                                                        markers: {
                                                            size: 1
                                                        },
                                                        xaxis: {
                                                            // type: 'datetime',
                                                            // forceNiceScale: true,

                                                            categories: isObjectEmpty(data_paciente) ? [] : data_paciente.historicINR.dates, //fechas
                                                            // categories: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001'],
                                                            // title: {
                                                            //     text: 'Dosis semanal (mg/semana)'
                                                            // },
                                                            // labels: {
                                                            //     formatter: function (value, timestamp) {
                                                            //         return new Date(timestamp);
                                                            //     }
                                                            // },
                                                        },
                                                        yaxis: [{
                                                            title: {
                                                                text: 'INR'
                                                            },
                                                            /*
                                                            labels: {
                                                                formatter: function(val) {
                                                                return val.toFixed(3);
                                                                }
                                                            }
                                                            */
                                                        },
                                                        {
                                                            opposite: true,
                                                            title: {
                                                                text: 'Dosis semanal (mg/semana)'
                                                            }
                                                        }],
                                                        annotations: {
                                                            yaxis: [{
                                                                y: 2.0,
                                                                y2: 3.0,
                                                                borderColor: '#000',
                                                                fillColor: '#FEB019',
                                                                opacity: 0.01,
                                                                label: {
                                                                    borderColor: '#333',
                                                                    style: {
                                                                        fontSize: '10px',
                                                                        color: '#333',
                                                                        background: '#FEB019',
                                                                    },
                                                                    text: 'INR rango normal',
                                                                }
                                                            }]
                                                        }
                                                    }}
                                                    series={[{
                                                        name: "INR",
                                                        type: 'line',
                                                        // data: [0.1, 0.14, 0.16, 0.2, 0.25, 0.27, 0.31, 0.35, 0.32, 0.31, 0.25]
                                                        data: isObjectEmpty(data_paciente) ? [] : data_paciente.historicINR.inrValues //indicesinr
                                                    },
                                                    {
                                                        name: "Dosis semanal (mg/semana)",
                                                        type: 'line',
                                                        // data: [0.45, 0.56, 0.67, 0.68, 0.69, 0.56, 0.69, 0.70, 0.65, 0.64, 0.65],
                                                        data: isObjectEmpty(data_paciente) ? [] : data_paciente.historicINR.doseValues //dosis
                                                    }]}
                                                    type={'line'}
                                                    width={'100%'}
                                                    height={'auto'}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    }
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
