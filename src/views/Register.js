import React, { useState, useEffect } from "react";
import {
    Container,
    Col,
} from "shards-react";

import systemService from '../services/system.service';

import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Registrar from "../components/register/registrar";
import Cookies from 'universal-cookie';
import constants from '../data/constants';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (constants.user == {}) {
            console.log("no logueado")
            setRedirect(false);
        } else {
            console.log("logueeead")
            setRedirect(true);
        }
    }, []);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        // event.preventDefault();
        console.log(event.vars.user)
        console.log(event.vars.pass)

        systemService.login(event.vars)
            .then((result) => {
                console.log(result)
                var jwt = result.data.jwt

                constants.cookies.set('jwt', jwt);
                setRedirect(true);

            })
            .catch((error) => {
                console.log(error)
                setRedirect(false);

            })
    }
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <ThemeProvider theme={theme}>
                <Container fluid className="main-content-container px-4">
                    <Col lg="6" className="py-4 m-auto">
                        <Registrar />
                    </Col>
                </Container>
            </ThemeProvider>
        </Container>
    );
}

export default Register;