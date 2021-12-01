import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    FormInput,
    Button,
    FormFeedback,
    InputGroup,
    CardHeader,
    InputGroupAddon,
    InputGroupText, Container
} from "shards-react";

import ReactDOM from "react-dom";
import {
    Link,
} from "react-router-dom";

import constants from "../../data/constants";

const Ingresar = ({ onSubmit }) => {

    // const today = new Date();
    const [email, setEmail] = useState({ value: '', valid: undefined });
    const [password, setPassword] = useState({ value: '', valid: undefined });


    const routeChange = () => {
        let path = `/register`;
        this.props.history.push(path);
    }

    function setForm() {
        setEmail((prevState) => ({ ...prevState, value: '', valid: undefined }));
        setPassword((prevState) => ({ ...prevState, value: '', valid: undefined }));
    }

    function allValid() {
        return (password.valid || !(password.valid === undefined) && (email.valid || !(email.valid === undefined)));
    }

    function onChangeEmail(e) {
        var _email = e.target.value;
        setEmail((prevState) => ({ ...prevState, value: _email }))
        if (_email === '') {
            setEmail((prevState) => ({ ...prevState, valid: undefined }))
        }
    }
    function onChangePassword(e) {
        var _pass = e.target.value;
        setPassword((prevState) => ({ ...prevState, value: _pass }))
        if (_pass === '') {
            setPassword((prevState) => ({ ...prevState, valid: undefined }))
        }
    }

    return (
        <React.Fragment>
            <Container className="mb-4">
                {/* Data general */}
                <Card small lg="4">
                    <CardHeader className="border-bottom bg-light">
                        <h5 className="m-0 font-weight-bold text-center">Ingresar</h5>
                    </CardHeader>
                    <CardBody>
                        <Col>
                            {/* correo */}
                            <FormGroup check={false}>
                                <label>Correo</label>
                                <FormInput
                                    type={"email"}
                                    value={email.value}
                                    onChange={onChangeEmail}
                                    size="lg"
                                    className="mb-3"
                                    placeholder="juan@sanjuan.cl" />
                                <FormFeedback tooltip={true}>"Ej: T-002"</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col>
                            {/* contraseña */}
                            <FormGroup>
                                <label>Contraseña </label>
                                <InputGroup className="mb-3">
                                    <FormInput
                                        type={"password"}
                                        value={password.value}
                                        onChange={onChangePassword}
                                        size="lg"
                                        placeholder="********"
                                    />
                                </InputGroup>

                            </FormGroup>
                        </Col>
                    </CardBody>
                </Card>
            </Container>
            <Container className="mb-4" style={{
                position: "center",
                bottom: 0,
                zIndex: 1
            }}>
                <Card small lg="7" className="mb-2 border-primary" style={{ border: '#5A6169' }}>
                    <CardBody>
                        <Row>
                            <Col xs="6" md="6">
                                <InputGroup>
                                    <Button
                                        theme="primary"
                                        className="font-weight-bold"
                                        onClick={() => {

                                            onSubmit({
                                                valid: {},
                                                vars: {
                                                    email: email.value,
                                                    password: password.value
                                                }
                                            });
                                        }}
                                    >
                                        Ingresar
                                    </Button>
                                </InputGroup>
                            </Col>
                            <Col xs="6" md="6" className="text-right">
                                <Link to="/register" >
                                    <Button
                                        outline
                                        theme="secondary"
                                        className="mb-2"
                                    >

                                        Registrarse
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row>


                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </React.Fragment>
    );
}

Ingresar.propTypes = {
    onSubmit: PropTypes.func,
}

Ingresar.defaultProps = {
    onSubmit: () => {
    },
}


export default Ingresar;

