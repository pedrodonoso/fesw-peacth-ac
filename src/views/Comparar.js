import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import DataUserGeneral from "../components/calculo/data-user-general";
import Compare from "../components/comparar/compare";
import CustomToggle from '../components/forms/CustomToggle';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import constants from "../data/constants";


import formulaService from "../services/formula.service";
import calculoService from "../services/calculo.service";


const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

class Comparar extends Component {
    vars = {};
    coef = {};

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dosis: 0.0,
            dosis_network: 0.0,
            doseCalculated: false,
        }
        this.handleCalculoSubmit = this.handleCalculoSubmit.bind(this);
        this.handleSubmitDose = this.handleSubmitDose.bind(this);
        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    toggle(data) {
        if (data === {}) {
            this.setState({
                ...this.state,
                open: !this.state.open
            });
        } else {
            this.setState({
                ...this.state,
                open: !this.state.open,
                title: data.title,
                text: data.text,
            });
        }
        //console.log({text:"toggle", open:this.state.open});
    }

    handlerOpenDialog(data) {
        this.setState({
            ...this.state,
            open: data
        });
        //console.log({text:"handler", open:this.state.open});
    }

    //envía data a API
    handleCalculoSubmit(data) {
        console.log(data)
        if (!data.valid) {
            //console.log({title:"Data",data:data})
            this.toggle({
                title: constants.mensaje_error_calculo_mal_ingreso_titulo,
                text: constants.mensaje_error_calculo_mal_ingreso_mensaje,
            });
            return false;
        }

        // var ifResponseCoef = false
        var ifResponseVar = false


        //console.log({nombre:"handleCalculoSubmit",data:data})
        //guarda variables ingresadas
        this.vars = data.vars

        // this.setState({
        //   ...this.state,
        //   vars: data.vars
        // });

        calculoService.getLastPropsAlgorithm()
            .then((response) => {
                var _coef = response.data
                //console.log({title: 'Coefs', coef: _coef})
                // ifResponseCoef = true

                this.coef = _coef
                //guardamos en local
                formulaService.updateLocalProps(_coef);
            })
            .catch((error) => {
                console.log({ title: 'error', error: error })
            });


        console.log({ title: 'vars', data: this.vars })
        //subimos las variables ingresadas
        calculoService.getDosePatient(this.vars)
            .then((response) => {
                var _dosis = response.data.regressionDose
                var _dosis_network = response.data.networkDose
                let _doseCalculatedStatus = true;
                _dosis = _dosis.toFixed(4)
                _dosis_network = _dosis_network.toFixed(4)
                //console.log({title: 'initialDose', initialDose: _dosis})
                //guardamos las variables
                ifResponseVar = true

                this.setState({
                    ...this.state,
                    dosis: _dosis,
                    dosis_network: _dosis_network,
                    doseCalculated: _doseCalculatedStatus,
                });
            })
            .catch((error) => {
                console.log({ title: 'error', error: error })

                //calculamos sin internet con las últimas variables
                this.setState({
                    ...this.state,
                    coef: {} //vacío para que formula service ejecute las últimas variables
                });
                //mostramos al usuario un toggle

                this.toggle({
                    title: constants.mensaje_error_calculo_titulo,
                    text: constants.mensaje_error_calculo_mensaje,
                });

            });
        if (!ifResponseVar) { //no se puede acceder a bd para calcular dosis
            var _Dosis = formulaService.formula(this.coef, this.vars)
            this.setState({
                ...this.state,
                dosis: _Dosis,
                dosis_network: 0.0,
            });
        }
    }

    //guarda dosis en la api
    handleSubmitDose(data) {
        console.log(data);

        let vars = data.vars;
        console.log(vars);


        if (vars.initialDose == '') {
            this.toggle({
                title: "No se envío ninguna dosis.",
                text: "Procure seleccionar una dosis a utilizar y/o ingresar una dosis manualmente.",
            });
        } else {
            calculoService.submitDosePatient(vars)
                .then((response) => {
                    console.log({ title: "Respuesta api", value: response.data.initialDose })
                    console.log({ title: "Respuesta api", value: response })

                    //var _dosis_subida = response.data.initialDose

                    //_dosis_subida = _dosis_subida.toFixed(4)
                    //console.log({title: 'initialDose', initialDose: _dosis})
                    //guardamos las variables

                    this.toggle({
                        title: "Se ha enviado correctamente!!",
                        text: response.data.message,
                    });

                })
                .catch((error) => {
                    console.log({ title: 'error', error: error })
                    //mostramos al usuario un toggle
                    this.toggle({
                        title: "Ha ocurrido un problema!!",
                        text: "Por favor intente más tarde.",
                    });
                    // this.toggle({
                    //     title: constants.mensaje_error_calculo_titulo,
                    //     text: constants.mensaje_error_calculo_mensaje,
                    // });
                });
        }
    }



    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <ThemeProvider theme={theme}>

                    <Container fluid className="main-content-container px-4">
                        <Row >
                            <Col lg="12" className="py-4">
                                <Compare />

                                <CustomToggle openOut={this.state.open} toggle={this.toggle.bind(this, {})}
                                    handler={this.handlerOpenDialog.bind(this)}
                                    text={this.state.text}
                                    title={this.state.title}
                                />

                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </Container>

        );
    }
}

export default Comparar;
