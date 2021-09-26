import React, {Component} from "react";
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

class PacienteGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            perfil: this.props.perfil,
            title: this.props.title,
            series: this.props.series,
            chart: this.props.chart,
            options: this.props.options,
            id_paciente: this.props.id_paciente,
        }
    }


    render() {
        const {title} = this.props;
        return (
            <Card small className="h-100">
                <CardHeader className="border-bottom bg-light">
                    <h5 className="mt-1 font-weight-bold text-center">{title}</h5>
                </CardHeader>
                <CardBody className="">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>Perfil</InputGroupText>
                            </InputGroupAddon>
                            <Button
                                theme={this.state.perfil === constants.perfil_clinico ? 'primary' : 'white'}
                                onClick={() =>
                                    this.generate(constants.perfil_clinico)
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
                                theme={this.state.perfil === constants.perfil_genetico ? 'primary' : 'white'}
                                onClick={() =>
                                    this.generate(constants.perfil_genetico)
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

                        {/*<InputGroup className="ml-auto">
                            <InputGroupAddon type="prepend">
                                <InputGroupText>Código del paciente</InputGroupText>
                            </InputGroupAddon>
                            <FormInput placeholder="T-001"/>
                            <InputGroupAddon type="append">
                                <Button theme="secondary">Buscar</Button>
                            </InputGroupAddon>
                        </InputGroup>*/}
                    </ButtonToolbar>

                    {/* Perfil Clinico*/}
                    <Row id="#perfil-clinico" className="mt-2">
                        <Col lg="4" className="mb-4">
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

                                                /*value={cod_paciente.value}
                                                valid={cod_paciente.valid}
                                                invalid={cod_paciente.valid === undefined ? undefined : !cod_paciente.valid}
                                                onChange={onChangeCodPaciente}*/
                                                size="lg"
                                                className="mb-3"
                                                placeholder="T-001"/>
                                            <FormFeedback>"Ej:
                                                T-002"</FormFeedback>
                                        </FormGroup>

                                        {/* Edad */}
                                        <FormGroup>
                                            <label>Edad</label>
                                            <InputGroup className="mb-3">
                                                <FormInput

                                                    /*value={edad.value}
                                                    valid={edad.valid}
                                                    invalid={edad.valid === undefined ? undefined : !edad.valid}
                                                    onChange={onChangeEdad}*/
                                                    size="lg"
                                                    //className="mb-3 "
                                                    placeholder="0"
                                                />
                                                <InputGroupAddon type="append">
                                                    <InputGroupText>años</InputGroupText>
                                                </InputGroupAddon>
                                                <FormFeedback>"Debes ingresar solo
                                                    números."</FormFeedback>
                                            </InputGroup>
                                        </FormGroup>

                                        {/* Peso */}
                                        <FormGroup>
                                            <label>Peso</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    /*value={peso.value}
                                                    valid={peso.valid}
                                                    invalid={peso.valid === undefined ? undefined : !peso.valid}
                                                    onChange={onChangePeso}*/
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0"/>
                                                <InputGroupAddon type="append">
                                                    <InputGroupText>Kg</InputGroupText>
                                                </InputGroupAddon>
                                                <FormFeedback>"Debes ingresar solo
                                                    números."</FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" className="mb-4">
                            <Card small lg="9">
                                <ListGroup flush>
                                    <ListGroupItem className="px-3">
                                        {/* Talla */}
                                        <FormGroup>
                                            <label>Talla</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    /*value={talla.value}
                                                    valid={talla.valid}
                                                    invalid={talla.valid === undefined ? undefined : !talla.valid}
                                                    onChange={onChangeTalla}*/
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0"/>
                                                <InputGroupAddon type="append">
                                                    <InputGroupText>m</InputGroupText>
                                                </InputGroupAddon>
                                                <FormFeedback>"Debes ingresar solo
                                                    números"</FormFeedback>
                                            </InputGroup>
                                        </FormGroup>


                                        {/* Sexo */}
                                        <label>Sexo</label>
                                        <FormGroup>
                                            <ButtonGroup size="sm" className="mr-2">
                                                <Button /*theme={sexo.value === 'F' ? 'primary' : 'white'}
                                                                onClick={() => setSexo((prevState) => ({
                                                                    ...prevState,
                                                                    value: 'F',
                                                                    valid: true
                                                                }))}*/>Femenino</Button>
                                                <Button/* theme={sexo.value === 'M' ? 'primary' : 'white'}
                                                                onClick={() => setSexo((prevState) => ({
                                                                    ...prevState,
                                                                    value: 'M',
                                                                    valid: true
                                                                }))}*/>Masculino</Button>
                                            </ButtonGroup>
                                            {/*
                <FormInput
                    value={sexo.value}
                    valid={sexo.valid}
                    invalid={sexo.invalid}
                    //onChange={validCorreo}
                    size="lg"
                    className="mb-3"
                    placeholder="juan@gmail.com" />
                    */}
                                        </FormGroup>

                                        {/* INR Inicial */}
                                        <FormGroup>
                                            <label>INR Inicial</label>
                                            <FormInput
                                                /*value={inr_inicial.value}
                                                valid={inr_inicial.valid}
                                                invalid={inr_inicial.valid === undefined ? undefined : !inr_inicial.valid}
                                                onChange={onChangeINRInicial}*/
                                                size="lg"
                                                className="mb-3"
                                                placeholder="0"/>
                                            <FormFeedback>"Debes ingresar un
                                                valor decimal. EJ: 2.4"</FormFeedback>
                                        </FormGroup>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col lg="4" className="mb-4">
                            {/* Genetica */}
                            <Card small lg="12">
                                <CardHeader className="border-bottom">
                                    <h6 className="m-0">Datos Farmacogenética del Paciente</h6>
                                </CardHeader>
                                <CardBody>
                                    <Form className="add-new-post">
                                        <ListGroup flush>
                                            <ListGroupItem className="px-0">
                                                <Form>
                                                    <label>CYP2C9-2</label>
                                                    <DropdownOptions
                                                        title={constants.gen2}
                                                        options={[constants.gen11, constants.gen12, constants.gen22]}
                                                        values={[constants.gen11, constants.gen12, constants.gen22]}
                                                        // onSubmit={handleSubmit}
                                                    />
                                                    <label>CYP2C9-3</label>
                                                    <DropdownOptions
                                                        title={constants.gen3}
                                                        options={[constants.gen11, constants.gen13, constants.gen33]}
                                                        values={[constants.gen11, constants.gen13, constants.gen33]}
                                                        // onSubmit={handleSubmit}
                                                    />
                                                    <label>VKORC1</label>
                                                    <DropdownOptions
                                                        title={constants.gen4}
                                                        options={['*A/*A', '*G/*A', '*G/*G']}
                                                        values={[constants.genaa, constants.genga, constants.gengg]}
                                                        // onSubmit={handleSubmit}
                                                    />
                                                </Form>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    {/* Perfil Genético*/}
                    <div hidden id="#perfil-genetico" className="table-responsive pt-4">
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
                                <td>Ausente</td>
                                <td rowSpan="2">
                                    El genotipo del paciente corresponde a un metabolizador
                                    extensivo o silvestre (EM)
                                </td>
                            </tr>
                            <tr>
                                <td>rs1057910 (*3)</td>
                                <td>Ausente</td>
                            </tr>
                            <tr>
                                <th scope="row">VKORC1</th>
                                <td>rs9923231</td>
                                <td>Heterocigoto (G/A)</td>
                                <td>El genotipo del paciente se relaciona con una menor dosis de
                                    Acenocumarol
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    {/*
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
          */}
                </CardBody>
            </Card>
        );
    }
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
