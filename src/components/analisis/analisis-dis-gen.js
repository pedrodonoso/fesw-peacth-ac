import React from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts'
import { Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup } from "shards-react";

import constants from "../../data/constants";

import calculoService from "../../services/calculo.service";

class AnalisisDisGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen: this.props.gen,
      series: this.props.series,
      chart: this.props.chart,
      options:  this.props.options
      // options:  constants.options
    }
    this.generate(constants.gen2)
  }
  
  
  generate(_gen) {
    //console.log({title: "generate", gen: _gen})

    this.setState({
      ...this.state,
      gen: _gen
    });

    calculoService.getDistribution(_gen)
      .then((response) => {
        var lab = response.data.labels
        var ser = response.data.frequency
        //console.log({title: "getDistribution", response: response.data, gen: _gen})
        //console.log({title: "frequency", response: ser})
        //console.log({title: "labels", response: lab})
        this.setState({
          ...this.state,
          series: ser, 
          options: {
            ...this.state.options,
            labels: lab
          }
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          series: constants.series, 
          options: {
            ...this.state.options,
            lables: constants.labels
          }
        });
      })
      //console.log({title: "return", response: this.state})
  }

  componentDidUpdate() {
    
    console.log({title: 'life', data: this.state});
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log({title: 'life', data: prevProps});
    console.log({title: 'life2', data: prevState});

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
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              {/*<RangeDatePicker />*/}
              <ButtonGroup > 
                <Button 
                  theme={this.state.gen === constants.gen2 ? 'primary' : 'white'} 
                  onClick={() => 
                    this.generate(constants.gen2)
                  }
                > {constants.gen2} </Button>
                <Button 
                  theme={this.state.gen === constants.gen3 ? 'primary' : 'white'} 
                  onClick={() => 
                    this.generate(constants.gen3)
                  }
                > {constants.gen3} </Button>
                <Button 
                  theme={this.state.gen === constants.gen4 ? 'primary' : 'white'} 
                  onClick={() => 
                    this.generate(constants.gen4)
                  }
                > {constants.gen4} </Button>
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
          <div >
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type={this.state.chart.type}
                width={this.state.chart.width}
                height={this.state.chart.height}
            />
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

AnalisisDisGen.propTypes = {
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


AnalisisDisGen.defaultProps = {
  gen: constants.gen2,
  series: [],
  chart: {
    type: 'donut',
    height: '300',
    width: '100%',
  },
  options : {
    dataLabels: {
      enabled: true
    },
    series: [],
    noData: {
      text: 'Cargando...'
    },
    labels: [],
    title: {
        text:  '',
        align: 'left'
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    legend: {
        position: 'top',
        containerMargin: {
            left: 10,
            right: 10,
          }
    },
    responsive: [{
        breakpoint: 1000,
        options: {
          legend: {
            position: 'top'
          }
        }
    }]
  },
};
export default AnalisisDisGen;
