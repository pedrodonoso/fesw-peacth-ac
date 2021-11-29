import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
} from "shards-react";
import formulaService from "../../services/formula.service";
import constants from "../../data/constants";
import {CircularProgress} from "@material-ui/core";
import MaterialTable from "material-table";

const Compare = () => {

    const headers = [
        "Paciente",
        "Resultado Red",
        "Error Red",
        "Resultado Modelo",
        "Error Modelo",
        "Dosis Final"
    ];

    const [dataModels, setData] = useState([]);

    function fetch_data() {
        formulaService.getModelsTable()
            .then((response) => {
                try{
                    const dataTable = response.data
                    console.log({ title: "Fetch", response: dataTable });
                    setData((prevState) => ({...prevState, dataTable}))
                    console.log({ title: "Fetch2", response: dataModels });
                } catch (e) {
                    console.log({
                        title: response,
                        error: e
                    })
                }
            })
            .catch((error) => {
                if(error.message === 'Network Error') {
                    this.setState({
                        ...this.state,
                        bad_response: true,
                        error: true,
                        errortitle: constants.mensaje_error_network_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_network_perfil_paciente_mensaje,
                    });
                } else {
                    this.setState({
                        ...this.state,
                        bad_response: true,
                        error: true,
                        errortitle: constants.mensaje_error_perfil_paciente_titulo,
                        errortext: constants.mensaje_error_perfil_paciente_mensaje,
                    });
                }

            })
    }

    const columns = [
        { title: 'Paciente', field: 'code' },
        { title: 'Dosis Final', field: 'final_dose' },
        { title: 'Dosis Red', field: 'network_result' },
        { title: 'Dosis Regresión', field: 'regression_result' },
        { title: 'Error Red', field: 'network_error' },
        { title: 'Error Regresión', field: 'regression_error' },
    ]

    useEffect(() => {
        fetch_data()
    }, [])
    // fetch_data()
    console.log({title: "data", datos: dataModels})


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Comparación de Modelos</h5>
                            </CardHeader>
                            <CardBody className={"text-center"}>
                                {/*<button onClick={fetch_data}>Fetch</button>*/}
                                {dataModels.length === 0 ? <CircularProgress /> :
                                  <MaterialTable
                                      title=""
                                      columns={columns}
                                      data={dataModels.dataTable}
                                      options={{
                                          filtering: true
                                      }}
                                  />}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
}

Compare.propTypes =
    {
        onSubmit: PropTypes.func,
        dosis: PropTypes.any
    }

Compare.defaultProps =
    {
        onSubmit: () => {
        },
        dosis: -999.0,
    }

export default Compare;
