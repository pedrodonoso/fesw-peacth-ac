import React from "react";
import PropTypes from "prop-types";
import Chart from 'react-apexcharts'
import {
    Row, Col, Card, CardHeader, CardBody, Button, ButtonGroup
    , InputGroupAddon,
    InputGroupText,
    Container
} from "shards-react";

import constants from "../../data/constants";

import CustomToggle from '../forms/CustomToggle';
import calculoService from "../../services/calculo.service";

class AnalisisDosisGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            gen: this.props.gen,
            title: this.props.title,
            series: this.props.series,
            chart: this.props.chart,
            options: this.props.options,
        }
        this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
        this.toggle = this.toggle.bind(this);
        this.generate(constants.gen2);
    }

    generate(_gen) {
        //console.log({title: "generate box", gen: _gen})
        this.setState({
            ...this.state,
            gen: _gen
        });

        calculoService.getBoxplot(_gen)
            .then((response) => {
                var data = response.data
                var _data = [];
                data.forEach(function (e) {
                    var label = e.label;
                    var value = e.value;
                    var aux = {};
                    aux.x = label;
                    aux.y = value;
                    _data.push(aux)
                })

                var _serie = [{
                    type: 'boxPlot',
                    data: _data,
                }]

                this.setState({
                    ...this.state,
                    series: _serie
                });
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    error: true,
                    errortitle: constants.mensaje_error_perfil_paciente_titulo,
                    errortext: constants.mensaje_error_analisis_mensaje,
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
    }

    handlerOpenDialog(data) {
        this.setState({
            ...this.state,
            error: data
        });
    }


    render() {
        const { title } = this.props;
        return (
            <Card small className="h-100">
                <CardHeader className="border-bottom">
                    <h5 className="m-0 font-weight-bold text-center">{title}</h5>
                </CardHeader>
                <CardBody className="pt-0">
                    <Row className="border-bottom py-2 bg-light">
                        <Col sm="8" className="d-flex mb-2 mb-sm-0">
                            {/*<RangeDatePicker />*/}
                            <ButtonGroup>
                                <Button
                                    theme={this.state.gen === constants.gen2 ? 'primary' : 'white'}
                                    onClick={() =>
                                        this.generate(constants.gen2)
                                    }
                                >
                                    <Col style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Col>
                                            <Row><strong style={{ 'font-size': '13px', 'font-weight': '80' }}>CYP2C9
                                                *2</strong></Row>
                                            <Row><strong style={{
                                                'font-size': '10px',
                                                'font-weight': '50'
                                            }}>rs1799853</strong></Row>
                                        </Col>
                                    </Col>

                                </Button>
                                <Button
                                    theme={this.state.gen === constants.gen3 ? 'primary' : 'white'}
                                    onClick={() =>
                                        this.generate(constants.gen3)
                                    }
                                >
                                    <Col style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Col>
                                            <Row><strong style={{ 'font-size': '13px', 'font-weight': '80' }}>CYP2C9
                                                *3</strong></Row>
                                            <Row><strong style={{
                                                'font-size': '10px',
                                                'font-weight': '50'
                                            }}>rs1057910 </strong></Row>
                                        </Col>
                                    </Col>
                                </Button>
                                <Button
                                    theme={this.state.gen === constants.gen4 ? 'primary' : 'white'}
                                    onClick={() =>
                                        this.generate(constants.gen4)
                                    }
                                >
                                    <Col style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Col>
                                            <Row><strong
                                                style={{ 'font-size': '13px', 'font-weight': '80' }}>VKORC1</strong></Row>
                                            <Row><strong style={{
                                                'font-size': '10px',
                                                'font-weight': '50'
                                            }}>rs9923231</strong></Row>
                                        </Col>
                                    </Col>
                                </Button>
                            </ButtonGroup>
                        </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Row align="center">
                        <Col>
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type='boxPlot'
                                width='70%'
                                height='auto'
                            />
                        </Col>
                    </Row>
                    <CustomToggle openOut={this.state.error} toggle={this.toggle.bind(this, {})}
                        handler={this.handlerOpenDialog.bind(this)}
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
    error: false,
    gen: constants.gen2,
    title: "Análisis",
    chart: {
        width: '70%',
        height: 'auto'
    },
    options: {
        chart: {
            width: '70%',
            height: 'auto'
        },
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
            forceNiceScale: true,
            title: {
                text: 'Dosis semanal (mg/semana)'
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(2);
                }
            },
        },
    },
    series: [
        {
            name: 'box',
            type: 'boxPlot',
            data: []
        },
    ],

};
export default AnalisisDosisGen;
