import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {
    Col,
    Card,
    CardBody,
    Button,
    CardHeader, Container
} from "shards-react";

import {
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, DialogTitle
} from "@material-ui/core";
import calculoService from '../../services/calculo.service';

const UpdateNeuralNetwork = () => {
    const [open, setOpen] = useState(false);
    const [charging, setCharging] = useState(true);
    const [dialogTitle, setDialogTitle] = useState("Por favor espere");
    const [dialogBody, setDialogBody] = useState("Cargando...");
    const [estadoRed, setEstadoRed] = useState(false);
    const [loss, setLoss] = useState('-');
    const [created_at, setCreatedAt] = useState('');

    useEffect(() => {
        loadLastNeural();
    });

    //load last neural network
    function loadLastNeural() {
        calculoService.getLastNeuralNetwork()
            .then((response) => {
                console.log({ title: 'getLastNeuralNetwork', data: response.data });
                setLoss(response.data.loss);
                setCreatedAt(response.data.created_at);

            })
            .catch((error) => {
                console.log({ title: 'error getLastNeuralNetwork', data: error })
                setOpen(true);
                setDialogTitle("Error de conexión:")
                setDialogBody("Tenemos problemas, porfavor intente más tarde.")
            });
    }

    // const openDialog = () => setOpen(!open);
    function openDialog() {
        setOpen(!open);
        fetch("https://peacth-ac-backend.rj.r.appspot.com/api/LogWTDparameters/neural_network/")
            .then(res => res.json())
            .then(
                (result) => {
                    setEstadoRed(true);
                    setCharging(false);

                    setDialogBody(result.message)
                    result.is_updated ? setDialogTitle("Exito") : setDialogTitle("No se puede actualizar")
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    setCharging(false);
                    setEstadoRed(true);
                    setDialogTitle("Error de conexión:")
                    setDialogBody("Tenemos problemas, porfavor intente más tarde.")
                }
            );
    }
    const estadoDesactualizado = () => setEstadoRed(false);
    function closeDialog() {
        setOpen(!open);
        estadoDesactualizado();
        setTimeout(function () {
            setDialogBody("Cargando...");
            setDialogTitle("Por favor espere");
            setCharging(true);
        }, 200);
    }

    return (
        <React.Fragment>
            <Dialog open={open}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                {/* Cargando */}
                {charging ?
                    <React.Fragment>
                        <DialogTitle id="alert-dialog-title">
                            {dialogTitle}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" className="text-center">
                                {dialogBody}
                            </DialogContentText>
                            <DialogContentText className="text-center">
                                <CircularProgress />
                            </DialogContentText>
                        </DialogContent>
                    </React.Fragment> : null}
                {/* Con respuesta */}
                {estadoRed ?
                    <React.Fragment>
                        <DialogTitle id="alert-dialog-title">
                            {dialogTitle}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" className="text-center">
                                {dialogBody}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>
                                Cerrar
                            </Button>
                        </DialogActions>
                    </React.Fragment> : null}
            </Dialog>
            <Col>
                <Container>
                    <Col>
                        <Card small sm="12">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Actualizar Red Neuronal</h5>
                            </CardHeader>
                            <CardBody className="text-left">

                                <Card
                                    small
                                    className={`stats-small--60 mb-4`}

                                >
                                    <CardBody className={" d-flex"}>
                                        <div className={"d-flex flex-column m-auto"}>
                                            <div className={"text-center"}>
                                                <span className={"stats-small__label text-uppercase mb-1"}>Error del último modelo de Red Neuronal</span>
                                                <h6 className={"stats-small__value count my-3"}>{loss}</h6>
                                            </div>
                                            <div className={"text-center"}>
                                                <span className={"stats-small__label text-uppercase mb-1"}>Fecha de última actualización del modelo</span>
                                                <h6 className={"stats-small__value count my-3"}>{created_at.split(" ")[0]}</h6>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>


                                <Button size="s" onClick={() => {
                                    openDialog();
                                    loadLastNeural();
                                }}>Actualizar</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </Col>
        </React.Fragment>
    );
}

UpdateNeuralNetwork.propTypes = {
    onSubmitManual: PropTypes.func,
}

UpdateNeuralNetwork.defaultProps = {
    onSubmitManual: () => {
    },
}


export default UpdateNeuralNetwork;

