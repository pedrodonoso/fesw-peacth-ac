import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
    Progress
} from "shards-react";
import { Line } from 'rc-progress';

import PacienteGeneral from "../components/paciente/paciente-general";
import SearchBar from "../components/paciente/search-bar";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomToggle from '../components/forms/CustomToggle';

import pacienteService from "../services/paciente.service";
import constants from "../data/constants";
import ProgressBars from "../components/components-overview/ProgressBars";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A']; //azul,verde, rojo
const themeMap = ['info', 'success', 'danger']; //azul,verde, rojo

function getColor(index) {
    return colorMap[(index + colorMap.length) % colorMap.length];
}

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
        console.log(data.query);

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
                this.increase(0.1);
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    bad_response: true,
                    error: true,
                    errortitle: constants.mensaje_error_perfil_paciente_titulo,
                    errortext: constants.mensaje_error_perfil_paciente_mensaje,
                });
                this.increase(0);
            })
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
                    <Container fluid className="main-content-container px-4">

                        <Col lg="12" className="py-4">
                            <Row >
                                <Col lg="11" className="mb-2">
                                    <SearchBar onSearchSubmit={this.handlerSearch} />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" className="mb-2">

                                    <div style={{ width: "auto" }}>
                                        {/*colores: azul,verde, rojo*/}
                                        <Line
                                            percent={this.state.percent}
                                            strokeWidth={0.5}
                                            strokeColor={getColor(this.state.bad_response ? 2 : 1)}
                                        />
                                        <Progress
                                            theme={getTheme(this.state.bad_response ? 2 : 1)}
                                            style={{ height: "4px" }}
                                            className="mb-3"
                                            value={this.state.percent}
                                            striped={false}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <PacienteGeneral data_paciente={this.state.data} title="Perfil médico del paciente" />
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
};

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
