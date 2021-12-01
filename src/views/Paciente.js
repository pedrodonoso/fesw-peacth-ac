import React from "react";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Progress
} from "shards-react";

import PacienteGeneral from "../components/paciente/paciente-general";
import SearchBar from "../components/paciente/search-bar";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomToggle from '../components/forms/CustomToggle';

import pacienteService from "../services/paciente.service";
import constants from "../data/constants";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

const themeMap = ['info', 'success', 'danger']; //azul,verde, rojo

function getTheme(index) {
    return themeMap[(index + themeMap.length) % themeMap.length];
}

class Paciente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bad_response: false,
            percent: 0,
            tm: null,
            error: false,
            data: {}, //dataprofile
        }


        this.handlerSearch = this.handlerSearch.bind(this);

        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggle = this.toggle.bind(this);

        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

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
                console.log("??")
                this.increase(50);
            } else {
                console.log("aa")
            }
        });
    }

    handlerSearch(data) {
        this.generate(data.query)
    }


    generate(query) {

        this.restart(false);

        pacienteService.getProfilePatient(query)
            .then((response) => {
                var dataProfile = response.data
                // var ser = response.data.frequency
                console.log({ title: "getProfilePatient", response: dataProfile, gen: query });
                this.setState({
                    ...this.state,
                    data: dataProfile,
                    bad_response: false,
                });
                console.log({ title: "getProfilePatient2", response: this.state.data, gen: query });
            })
            .catch((error) => {
                if(error.message === 'Network Error') {
                    this.setState({
                        ...this.state,
                        bad_response: true,
                        error: true,
                        data: {},
                        errortitle: constants.mensaje_error_network_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_network_perfil_paciente_mensaje,
                    });
                } else {
                    this.setState({
                        ...this.state,
                        bad_response: true,
                        error: true,
                        data: {},
                        errortitle: constants.mensaje_error_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_perfil_paciente_mensaje,
                    });
                }

            }).finally(() => {
                console.log(this.state.data)
                this.setState({
                    ...this.state,
                    percent: 100,
                });
            });
    }

    toggle(data) {
        if (data === {}) {
            this.setState({
                ...this.state,
                error: !this.state.error
            });
        } else {
            this.setState({
                ...this.state,
                error: !this.state.error,
                errortitle: data.title,
                errortext: data.text,
            });
        }
    }

    handlerOpenDialog(data) {
        this.setState({
            ...this.state,
            error: data
        });
    }


    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <ThemeProvider theme={theme}>
                    <Container className="main-content-container px-4">

                        <Col className="py-3">
                            <Row>
                                <Col className="mb-2">
                                    <SearchBar onSearchSubmit={this.handlerSearch} />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" className="">
                                    <div>
                                        {/*colores: azul,verde, rojo*/}
                                        {/*
                                        <Line
                                            percent={this.state.percent}
                                            strokeWidth={0.5}
                                            strokeColor={getColor(this.state.bad_response ? 2 : 1)}
                                        />
                                        */}
                                        <Progress
                                            theme={getTheme(this.state.bad_response ? 2 : 1)}
                                            style={{ height: "4px" }}
                                            className="mb-3"
                                            value={this.state.percent}
                                            striped={false}
                                            animated={false}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <PacienteGeneral data_paciente={this.state.data} title="Información del paciente" />
                            </Row>
                        </Col>
                        <CustomToggle openOut={this.state.error} toggle={this.toggle.bind(this, {})}
                            handler={this.handlerOpenDialog.bind(this)}
                            text={this.state.errortext}
                            title={this.state.errortitle}
                        />
                    </Container>
                </ThemeProvider>
            </Container>

        );
    }
}

Paciente.propTypes = {
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


Paciente.defaultProps = {
    error: false,
    perfil: constants.perfil_clinico,

};

export default Paciente;
