import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts'
import {
  Row, Col, Card, CardHeader, CardBody, Button ,ButtonGroup
  ,InputGroupAddon,
  InputGroupText,
  Container
} from "shards-react";

import PacienteDataUserGeneral from "../paciente/paciente-data-user-general";
import CustomToggle from '../forms/CustomToggle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import pacienteService from "../../services/paciente.service";
import constants from "../../data/constants";

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
      id_paciente: "T-001",
    }
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
    this.generate(constants.perfil_clinico);
  }

  generate(_perfil_option) {
    //console.log({title: "generate box", gen: _gen})
    this.setState({
      ...this.state,
      perfil: _perfil_option
    });

    //TODO: aquí voy jeje
    pacienteService.getProfilePatient(this.state.id_paciente)
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
    if(data === {}) {
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
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            <Col sm="8" className="d-flex mb-2 mb-sm-0">
              {/*<RangeDatePicker />*/}
              <ButtonGroup >
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
                  <Row><strong style={{ 'font-size': '13px', 'font-weight': '80' }}>Clínico</strong></Row>
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
                  <Row><strong style={{ 'font-size': '13px', 'font-weight': '80' }}>Genético</strong></Row>
                  </Col>
                </Col>
                </Button>
              </ButtonGroup>
            </Col>
            <Col>
            {/*
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
            */}
            </Col>
          </Row>

          {/*
          <div id="chart"></div>
          */}

          <Row >
            <Col>
            <Chart
                options={this.state.options}
                series={this.state.series}
                type='boxPlot'
                width='800'
                height='300'
            />
            </Col>
          </Row>
          <CustomToggle openOut={this.state.error} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.errortext}
          title={this.state.errortitle}
          />
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
        text:  'Dosis calculada v/s genotipos',
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
