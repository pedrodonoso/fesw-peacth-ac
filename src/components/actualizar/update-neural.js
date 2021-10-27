import React, { useState} from 'react';
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

const UpdateNeuralNetwork = () => {
    const [open, setOpen] = useState(false);
    const [charging, setCharging] = useState(true);
    const [dialogTitle, setDialogTitle] = useState("Por favor espere");
    const [dialogBody, setDialogBody] = useState("Cargando...");
    const [estadoRed, setEstadoRed] = useState(false);

    // const openDialog = () => setOpen(!open);
    function openDialog() {
        setOpen(!open);
        fetch("http://3.143.234.136:8000/api/LogWTDparameters/neural_network/")
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
                            <DialogContentText  id="alert-dialog-description" className="text-center">
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
                            <DialogContentText  id="alert-dialog-description" className="text-center">
                                {dialogBody}
                            </DialogContentText>
                        </DialogContent>
                            <DialogActions>
                                <Button onClick={closeDialog}>
                                    Cerrar
                                </Button>
                            </DialogActions>
                    </React.Fragment> : null }
            </Dialog>
            <Col>
                <Container>
                    <Col>
                        <Card small sm="12">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Actualizar Red Neuronal</h5>
                            </CardHeader>
                            <CardBody className="text-center">
                                <Button size="lg" onClick={() => {
                                    openDialog();
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

