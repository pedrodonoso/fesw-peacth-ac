import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
} from "shards-react";
import {
  Link, Redirect
} from "react-router-dom";

import systemService from '../services/system.service';
import Ingresar from "../components/login/ingresar";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';
import constants from '../data/constants';

import CustomToggle from '../components/forms/CustomToggle';
import ChargingToggle from "../components/forms/ChargingToggle";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

const cookies = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [dialogBody, setDialogBody] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");

  
  useEffect(() => {
    if (isObjectEmpty(constants.user)) {
      console.log("no logueado")
      setRedirect(false);
    } else {
      console.log("loguedo")
      setRedirect(true);
    }
  }, []);

  function toggle(data) {
    if (data === {}) {
      setOpen(!open)
    } else {
      setOpen(!open)
      setTitle(data.title)
      setText(data.text)
    }
    //console.log({text:"toggle", open:this.state.open});
  }

  function toggleDialog(data) {
    if (data === {}) {
      setOpen(!dialogOpen)
    } else {
      setOpen(!dialogOpen)
      setDialogTitle(data.title)
      setDialogBody(data.text)
    }
  }

  function isObjectEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length === 0);

  }

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

        cookies.set('jwt', jwt);
        setRedirect(true);

      })
      .catch((error) => {
        console.log(error)
        setRedirect(false);
        toggle({
          title: "Error!",
          text: "No pudimos ingresar, asegurese de que sus datos estén bien escritos.",
        });

      })
  }

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <ThemeProvider theme={theme}>
        <Container fluid className="main-content-container px-4">
          <Col lg="6" className="py-4 m-auto">
            <Ingresar onSubmit={handleSubmit} />
          </Col>

          <CustomToggle openOut={open} toggle={toggle.bind(this, {})}
            text={text}
            title={title}
          />
          <ChargingToggle openOut={dialogOpen} toggle={toggleDialog.bind(this, {})}
            text={dialogBody}
            title={dialogTitle}
          />
        </Container>
      </ThemeProvider>
      {redirect ? (<Redirect push to="/calculo" />) : null}
    </Container>

  );
}

export default Login;