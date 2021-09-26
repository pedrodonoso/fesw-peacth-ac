import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import DataUserVisit from "../components/registrar_visita/data-user-visit";
import calculoService from '../services/calculo.service';
import CustomToggle from '../components/forms/CustomToggle';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class RegistrarVisita extends Component {
  data = {};
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  //envía data a API
  handleRegisterSubmit(submited) {

    if(!submited.valid) {
      this.toggle({
        title: "Revisa los datos",
        text: "Algunos campos presentan errores o están vacíos",
        });
        return false;
    }

    //console.log({nombre:"handleRegisterSubmit",data:submited.data})
    //guarda variables ingresadas
    this.data = submited.vars
    //console.log(this.data)
    //subimos las variables ingresadas
    calculoService.postRegisterVisit(this.data)
    .then((response) => {
      ////console.log({title: 'postRegisterVisit', initialDose: response.data})
      //mostramos al usuario un toggle
        this.toggle({
        title: "Si se pudo!!😍 ",
        text: "Visita registrada correctamente!! 😘",
        });

    })
    .catch((error) => {
      ////console.log({title: 'error', error: error.response.data})
    //mostramos al usuario un toggle
      this.toggle({
        title: "No se pudo 😁",
        text: (<div>Ha ocurrido un problema, vuelve a intentarlo! <br/> <b> Intenta ingresando un usuario que ya exista </b></div>)
      });

   });

  }

  toggle(data) {
    if(data === {}) {
      this.setState({
        ...this.state,
        open: !this.state.open
      });
    } else {
      this.setState({
        ...this.state,
        open: !this.state.open,
        title: data.title,
        text: data.text,
      });
    }

    //console.log({text:"toggle", open:this.state.open});
  }

  handlerOpenDialog(data) {
    this.setState({
      ...this.state,
      open: data
    });
    //console.log({text:"handler", open:this.state.open});
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <ThemeProvider theme={theme}>
        <Container fluid className="main-content-container px-4">

      <Row>
        <Col lg="12" className="py-4">
        <DataUserVisit onSubmit={this.handleRegisterSubmit} />
        <CustomToggle openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
        </Col>
      </Row>
    </Container>
      </ThemeProvider>
      </Container>

    );
  }
};

export default RegistrarVisita;
