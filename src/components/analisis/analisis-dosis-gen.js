import React from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts'
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";

class AnalisisDosisGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chart: {
            type: 'boxPlot',
            height:'500',
            width: '100%' 
        },
        options: {
            colors: ['#008FFB', '#FEB019'],
            title: {
                text:  '',
                align: 'left'
            },
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
            }
        },

        series: [
            {
            name: 'box',
            type: 'boxPlot',
            data: [
                {
                x: new Date('2017-01-01').getTime(),
                y: [54, 66, 69, 75, 88]
                },
                {
                x: new Date('2018-01-01').getTime(),
                y: [43, 65, 69, 76, 81]
                },
                {
                x: new Date('2019-01-01').getTime(),
                y: [31, 39, 45, 51, 59]
                },
                {
                x: new Date('2020-01-01').getTime(),
                y: [39, 46, 55, 65, 71]
                },
                {
                x: new Date('2021-01-01').getTime(),
                y: [29, 31, 35, 39, 44]
                }
            ]
            },
            {
            name: 'outliers',
            type: 'scatter',
            data: [
                {
                x: new Date('2017-01-01').getTime(),
                y: 32
                },
                {
                x: new Date('2018-01-01').getTime(),
                y: 25
                },
                {
                x: new Date('2019-01-01').getTime(),
                y: 64
                },
                {
                x: new Date('2020-01-01').getTime(),
                y: 27
                },
                {
                x: new Date('2020-01-01').getTime(),
                y: 78
                },
                {
                x: new Date('2021-01-01').getTime(),
                y: 15
                }
            ]
            }
        ],
      }
    //this.canvasRef = React.createRef();
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
              <RangeDatePicker />
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
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

/*
AnalisisDosisGen.defaultProps = {
  title: "Análisis",
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    
    datasets: [
      {
        label: "Current Month",
        fill: "start",
        data: [
          500,
          800,
          320,
          180,
          240,
          320,
          230,
          650,
          590,
          1200,
          750,
          940,
          1420,
          1200,
          960,
          1450,
          1820,
          2800,
          2102,
          1920,
          3920,
          3202,
          3140,
          2800,
          3200,
          3200,
          3400,
          2910,
          3100,
          4250
        ],¨
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Past Month",
        fill: "start",
        data: [
          380,
          430,
          120,
          230,
          410,
          740,
          472,
          219,
          391,
          229,
          400,
          203,
          301,
          380,
          291,
          620,
          700,
          300,
          630,
          402,
          320,
          380,
          289,
          410,
          300,
          530,
          630,
          720,
          780,
          1200
        ],
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderDash: [3, 3],
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
    
  }
};
*/
export default AnalisisDosisGen;
