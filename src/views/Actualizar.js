import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Alert,
    Collapse,
} from "shards-react";

import calculoService from '../services/calculo.service';
import CustomToggle from '../components/forms/CustomToggle';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UpdateProps from "../components/actualizar/update-props";
import formulaService from "../services/formula.service";
import constants from "../data/constants";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

class Actualizar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //progressbar
            bad_response: false,
            percent: 0,
            tm: null,
            //toggle eror
            open: false,
            data: {}, //data props generar regresion lineal
            message: "",
            collapse: false,
            data_local: {} //data local
        }
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleRegresion = this.handleRegresion.bind(this);
        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggleMessageError = this.toggleMessageError.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }
    //progress bar

    increase(speed) {
        const { percent } = this.state;
        const newPercent = percent + 1;
        if (newPercent > 100) {
            clearTimeout(this.state.tm);
            return;
        }
        this.setState({ ...this.state, percent: newPercent });

        this.state.tm = setTimeout(this.increase, speed);
    }

    restart(error) {
        clearTimeout(this.state.tm);
        this.setState({ ...this.state, percent: 0 }, () => {
            if (!error) {
                console.log("barra restart sin error")
                this.increase(50);
            } else {
                console.log("barra restart con error")
            }
        });
    }

    //envía data a API
    handleUpdateSubmit(submited) {

        if (!submited.valid) {
            this.toggleMessageError({
                title: "Revisa los datos ingresados",
                text: "Algunos campos presentan errores o están vacíos",
            });
            return false;
        }

        console.log(submited)

        //console.log({nombre:"handleUpdateSubmit",data:submited.vars})


        //guarda variables ingresadas
        this.setState({
            ...this.state,
            data: submited.vars,
            data_local: submited.vars,
        });
        //iniciamos el progresbar
        this.restart(false);

        //subimos las variables ingresadas
        calculoService.updatePropsAlgorithm(submited.vars)
            .then((response) => {
                console.log({ title: 'updatePropsAlgorithm', data: response.data })

                //guardamos parametros obtenidos en los estados
                this.setState({
                    ...this.state,
                    bad_response: false,
                    data: submited.vars,
                    data_local: submited.vars,
                    message: response.data.message,
                });

                //guardamos parametros obtenidos en local
                formulaService.updateLocalProps(submited.vars);

                //mensage
                this.toggleMessageError({
                    title: "",
                    text: response.data.message,
                });
            })
            .catch((error) => {
                console.log({ title: 'error', error: error.response.data })
                //mostramos al usuario un toggleMessageError
                this.setState({
                    ...this.state,
                    bad_response: true,
                });
            })
            .finally(() => {
                this.setState({
                    ...this.state,
                    percent: 100,
                });
            });
    }

    handleRegresion(submited) {

        if (!submited.valid) {
            return false;
        }

        /*
        this.setState({
            ...this.state,
            collapse: !this.state.collapse
        });
        */

        this.restart(false);
        formulaService.getRegresion()
            .then((response) => {
                console.log({ title: 'getRegresion', data: response.data })

                console.log(response.data.params.r_squared);
                //guardamos parametros obtenidos en los estados
                this.setState({
                    ...this.state,
                    bad_response: false,
                    data: response.data.params,
                    data_local: response.data.params,
                    message: response.data.message,
                });

                //guardamos parametros obtenidos en local
                formulaService.updateLocalProps(response.data.params);

                //mensage

                var mensaje = response.data.message;

                this.toggleMessageError({
                    title: "",
                    text: mensaje.replace("r2", 'R²'),
                });
            })
            .catch((error) => {
                console.log("error");
                console.log(error);
                this.setState({
                    ...this.state,
                    bad_response: true,
                });
                //mensage
                this.toggleMessageError({
                    title: constants.mensaje_error_regresion_titulo,
                    text: constants.mensaje_error_regresion_mensaje,
                });
            })
            .finally(() => {
                //this.increase(0.1);
                this.setState({
                    ...this.state,
                    percent: 100,
                });

            });
    }

    toggleCollapse() {

        this.setState({
            ...this.state,
            collapse: !this.state.collapse
        });
    }

    toggleMessageError(data) {

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
    }

    handlerOpenDialog(data) {
        this.setState({
            ...this.state,
            open: data
        });
    }

    //al cargar la pagina
    componentDidMount() {
        //obtener datos de local
        var model = formulaService.getLastLocalProps();
        //guardar en estado
        this.setState({
            ...this.state,
            data_local: model === null ? {} : model
        });
    }
    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <ThemeProvider theme={theme}>
                    <Container fluid className="main-content-container px-4">

                        <Row>
                            <Col lg="12" className="py-4">
                            {this.props.regresion ?
                                    <UpdateProps
                                    data_local={this.state.data_local}
                                    data_model={this.state.data}
                                    onSubmitManual={this.handleUpdateSubmit}
                                    onSubmitGetRegresion={this.handleRegresion}
                                    progressBar={{
                                        percent: this.state.percent,
                                        tm: this.state.tm,
                                        bad_response: this.state.bad_response,
                                    }} />
                                    :
                                    <Card></Card>
                                    //<AnalisisDisGen title="Análisis de la frecuencia de distribución de genotipos "/>
                                }
                                
                                <CustomToggle openOut={this.state.open} toggle={this.toggleMessageError.bind(this, {})}
                                    handler={this.handlerOpenDialog.bind(this)}
                                    text={this.state.text}
                                    title={this.state.title}
                                />

                                {/*
                                <Collapse open={this.state.collapse}>
                                    <div className="p-3 mt-3 border rounded">
                                        <h5>😍 Now you see me!</h5>
                                        <Alert theme="success">
                                            {this.state.message}
                                        </Alert>
                                    </div>
                                </Collapse>
                                */}
                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </Container>

        );
    }
};

export default Actualizar;
