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
        id_paciente: this.props.id_paciente,
        query: '',
    }
    this.handlerSearch = this.handlerSearch.bind(this);
    
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
    this.generate(constants.perfil_clinico);
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

  
  generate(_perfil_option) {
    //console.log({title: "generate box", gen: _gen})
    /*
    this.setState({
        ...this.state,
        perfil: _perfil_option
    });
    */

    //TODO: aquí voy jeje
    pacienteService.getProfilePatient(_perfil_option)
        .then((response) => {
            var data = response.data
            // var ser = response.data.frequency
            console.log({title: "getProfilePatient", response: data, gen: _perfil_option})
            /*
            var _data = [];
            data.forEach(function(e) {
              var label = e.label;
              var value = e.value;
              //console.log({title:"foreach", data: label})
              var aux = {};
              aux.x = label;
              aux.y = value;
              _data.push(aux)
            })
            */
            /*
                  var _serie = [{
                    type: 'boxPlot',
                    data:  _data,
                  }]
                  */

            //console.log({title: "data",data:_data})
            /*
            this.setState({
              ...this.state,
              series: _serie
            });
            */
            //console.log(this.state)
        })
        .catch((error) => {
            this.setState({
                ...this.state,
                error: true,
                errortitle: 'Lo sentimos',
                errortext: 'No pudimos obtener los datos, por favor intenta más tarde',
                options: {
                    ...this.state.options,
                    noData: {
                        ...this.state.options.noData,
                        text: 'Inténtalo más tarde'
                    },
                }
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
    //console.log({text:"toggle", open:this.state.open});
}

handlerOpenDialog(data) {
    this.setState({
        ...this.state,
        error: data
    });
    //console.log({text:"handler", open:this.state.open});
}

  
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <ThemeProvider theme={theme}>
        <Container fluid className="main-content-container px-4">

        <Col lg="12" className="py-4">
            <Row>
                <Col lg="12" className="mb-2"> 
                    <SearchBar onSearchSubmit={this.handlerSearch}/>
                </Col>
            </Row>
            <Row>
                <PacienteGeneral id_paciente={this.state.query} title="Perfil médico del paciente"/>
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

export default Paciente;
