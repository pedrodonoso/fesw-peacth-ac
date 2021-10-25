import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    Badge,
    FormGroup,
    FormInput,
    Button,
    FormFeedback,
    Progress,
    CardHeader, Container, FormCheckbox,
} from "shards-react";

import constants from "../../data/constants";
import {
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText
} from "@material-ui/core";
import {ProgressCircle} from "@react-spectrum/progress";


const UpdateNeuralNetwork = ({ data_local, data_model, onSubmitManual, onSubmitGetRegresion, progressBar }) => {

    const themeMap = ['info', 'success', 'danger']; //azul,verde, rojo

    function getTheme(index) {
        return themeMap[(index + themeMap.length) % themeMap.length];
    }
    const [open, setOpen] = useState(false)
    const [estadoRed, setEstadoRed] = useState(false);

    const openDialog = () => setOpen(!open);
    const estadoDesactualizado = () => setEstadoRed(false);
    const estadoActualizado = () => setEstadoRed(true);
    function closeDialog() {
        openDialog();
        estadoDesactualizado();
    }

    return (
        <React.Fragment>
            <Dialog open={open}
                    onClose={closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                {estadoRed ?
                    <React.Fragment>
                        <DialogContent>
                            <DialogContentText  id="alert-dialog-description" className="text-justify">
                                Se ha actualizado el modelo neuronal correctamente
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeDialog}>
                                Cerrar
                            </Button>
                        </DialogActions>
                    </React.Fragment> : null}
                {!estadoRed === open ?
                    <React.Fragment>
                        <DialogContent>
                            <DialogContentText  id="alert-dialog-description" className="text-center">
                                Cargando...
                            </DialogContentText>
                            <DialogContentText className="text-center">
                                <CircularProgress />
                            </DialogContentText>
                            <Button onClick={estadoActualizado}>
                                Actualizar
                            </Button>
                        </DialogContent>
                    </React.Fragment>: null}
            </Dialog>
            <Col>
                <Container>
                    <Col>
                        <Card small sm="12">
                            <CardHeader className="border-bottom bg-light">
                                <h5 className="m-0 font-weight-bold text-center">Actualizar Red Neuronal</h5>
                            </CardHeader>
                            <CardBody className="text-center">
                                <Button size="lg" onClick={openDialog}>Actualizar</Button>
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

