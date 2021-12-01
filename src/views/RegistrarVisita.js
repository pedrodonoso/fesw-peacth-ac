import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import calculoService from '../services/calculo.service';
import pacienteService from '../services/paciente.service';

import DataUserVisit from "../components/registrar_visita/data-user-visit";
import CustomToggle from '../components/forms/CustomToggle';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import constants from "../data/constants";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

class RegistrarVisita extends Component {
    data = {};

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            optionInput: false,
            inputMessageVisible: false,
            inputMessage: ''
        }
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggle = this.toggle.bind(this);
        this.inputToggle = this.inputToggle.bind(this);
    }

    //envía data a API
    handleRegisterSubmit(submited) {

        if (!submited.valid) {
            this.toggle({
                title: "Revisa los datos",
                text: "Algunos campos presentan errores o están vacíos",
            });
            return false;
        }

        //console.log({nombre:"handleRegisterSubmit",data:submited.data})
        //guarda variables ingresadas
        this.data = submited.vars
        //console.log(this.data)
        //subimos las variables ingresadas
        calculoService.postRegisterVisit(this.data)
            .then((response) => {
                ////console.log({title: 'postRegisterVisit', initialDose: response.data})
                //mostramos al usuario un toggle
                
                this.setState({
                    ...this.state,
                    optionInput: true,
                })

                this.toggle({
                    title: "Registro guardado",
                    text: "Visita registrada correctamente!!",
                });
            })
            .catch((error) => {
                ////console.log({title: 'error', error: error.response.data})
                //mostramos al usuario un toggle
                this.toggle({
                    title: "Error!",
                    text: (
                        <div>Ha ocurrido un problema, vuelve a intentarlo! <br /> <b> Intenta ingresando un usuario que
                            ya exista </b></div>)
                });

            });

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

    inputToggle(correo) {
        console.log(this.data.patientCode)
        console.log(this.data.updatedDose)
        console.log(correo.input)

        var email = correo.input.value;
        var patient = this.data.patientCode;
        var totalDosis = this.data.updatedDose;

        var submit = {
            email : email,
            patient : patient,
            totalDosis : totalDosis,
            name: constants.user.name + " " + constants.user.last_name
        }

        if(correo === '') {
        } else {
            //{"email":"xayeta6308@ineedsa.com", "patient":"T-001", "totalDosis":6}
            pacienteService.postSendMail(submit)
            .then((result) => {
                console.log("correo enviado correctamente!")
                this.setState({
                    ...this.state,
                    inputMessageVisible: true,
                    inputMessage: 'Correo enviado correctamente!'
                })
            })
            .catch((error) => {
                console.log("correo no enviado!")
                this.setState({
                    ...this.state,
                    inputMessageVisible: true,
                    inputMessage: 'Correo no enviado!'
                })
            })
        }
    }

    handlerOpenDialog(data) {
        this.setState({
            ...this.state,
            open: data
        });
        //console.log({text:"handler", open:this.state.open});
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <ThemeProvider theme={theme}>
                    <Container fluid className="main-content-container px-4">

                        <Row>
                            <Col lg="12" className="py-4">
                                <DataUserVisit onSubmit={this.handleRegisterSubmit} />
                                <CustomToggle
                                    openOut={this.state.open}
                                    //openOut={true}
                                    toggle={this.toggle.bind(this, {})}
                                    handler={this.handlerOpenDialog.bind(this)}
                                    text={this.state.text}
                                    title={this.state.title}
                                    optionInput={this.state.optionInput}
                                    inputToggle={this.inputToggle}
                                    inputMessageVisible={this.state.inputMessageVisible}
                                    inputMessage={this.state.inputMessage}
                                />
                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </Container>
        );
    }
};

export default RegistrarVisita;
