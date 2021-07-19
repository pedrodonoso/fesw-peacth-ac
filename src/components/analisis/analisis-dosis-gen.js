import React from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts'
import { Row, Col, Card, CardHeader, CardBody, Button ,ButtonGroup} from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import constants from "../../data/constants";

import calculoService from "../../services/calculo.service";

class AnalisisDosisGen extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      gen: this.props.gen,
      title: this.props.title,
      series: this.props.series,
      chart: this.props.chart,
      options: this.props.options,
    }
    this.generate(constants.gen2);
  }
  
  generate(_gen) {
    console.log({title: "generate box", gen: _gen})
    this.setState({
      ...this.state,
      gen: _gen
    });

    calculoService.getBoxplot(_gen)
    .then((response) => {
      var data = response.data
      // var ser = response.data.frequency
      console.log({title: "getBoxplot", response: data, gen: _gen})
      var _data = [];
      data.forEach(function(e) {
        var label = e.label;
        var value = e.value;
        console.log({title:"foreach", data: label})
        var aux = {};
        aux.x = label;
        aux.y = value;
        _data.push(aux)
      })
      
      var _serie = [{
        type: 'boxPlot',
        data:  _data,
      }]

      console.log({title: "data",data:_data})
      this.setState({
        ...this.state,
        series: _serie
      });
      console.log(this.state)
    })
    .catch((error) => {
      // this.setState({
      //   ...this.state,
      //   series: constants.series, 
      //   options: {
      //     ...this.state.options,
      //     lables: constants.labels
      //   }
      // });
    })
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

AnalisisDosisGen.propTypes = {
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


AnalisisDosisGen.defaultProps = {
  gen: constants.gen2,
  title: "Análisis",
  chart: {
    type: 'boxPlot',
    height:'300',
    width: '100%' 
  },
  options: {
      colors: ['#008FFB', '#FEB019'],
      title: {
          text:  '',
          align: 'left'
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value.toFixed(3);
          }
        },
      },
      /*
      xaxis: {
          type: 'datetime',
          tooltip: {
          formatter: function(val) {
              return new Date(val).getFullYear()
          }
          }
      },
      
      tooltip: {
          shared: false,
          intersect: true
      },
      */
      responsive: [{
        breakpoint: 1000,
        options: {
        legend: {
            position: 'top'
        }
        }
    }]     
      
  },

  series: [
      {
      name: 'box',
      type: 'boxPlot',
      data: [
          {
          x: '*3/*4',
          y: [54, 66, 69, 75, 88]
          },
          {
          x: '*3/*5',
          y: [43, 65, 69, 76, 81]
          },
          {
          x: '*3/*6',
          y: [31, 39, 45, 51, 59]
          },
      ]
      },
      
  ],
  
};
export default AnalisisDosisGen;
