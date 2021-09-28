import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import PacienteGeneral from "../components/paciente/paciente-general";
import SearchBar from "../components/paciente/search-bar";
import {esES} from '@material-ui/core/locale';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CustomToggle from '../components/forms/CustomToggle';

import pacienteService from "../services/paciente.service";
import constants from "../data/constants";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'},
    },
}, esES);

class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            perfil: this.props.perfil,
            title: this.props.title,
            series: this.props.series,
            chart: this.props.chart,
            options: this.props.options,
            data: {},
            query: '',
        }
        this.handlerSearch = this.handlerSearch.bind(this);

        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handlerSearch(data) {
        console.log(data.query);
        /*
        this.setState({
            ...this.state,
            query: data.query
        });
        */
        this.generate(data.query)
    }


    generate(query) {
        //console.log({title: "generate box", gen: _gen})
        /*
        this.setState({
            ...this.state,
            perfil: _perfil_option
        });
        */

        //TODO: aquí voy jeje
        pacienteService.getProfilePatient(query)
            .then((response) => {
                var dataProfile = response.data
                // var ser = response.data.frequency
                console.log({title: "getProfilePatient", response: dataProfile, gen: query});
                this.setState({
                    ...this.state,
                    data: dataProfile
                });
                console.log({title: "getProfilePatient2", response: this.state.data, gen: query});
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    error: true,
                    errortitle: constants.mensaje_error_perfil_paciente_titulo,
                    errortext: constants.mensaje_error_perfil_paciente_mensaje,
                });
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
                            <Row className="mb-2">
                                <SearchBar onSearchSubmit={this.handlerSearch}/>
                            </Row>
                            <Row>
                                <PacienteGeneral data_paciente={this.state.data} title="Perfil médico del paciente"/>
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
