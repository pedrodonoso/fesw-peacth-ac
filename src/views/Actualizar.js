import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import calculoService from '../services/calculo.service';
import CustomToggle from '../components/forms/CustomToggle';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UpdateProps from "../components/actualizar/update-props";
import formulaService from "../services/formula.service";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class Actualizar extends Component {
  data = {};
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  //envía data a API
  handleUpdateSubmit(submited) {

    if(!submited.valid) {
      this.toggle({
        title: "Alto ahí 😁",
        text: "Debes ingresar los datos correctamente!! 😘",
        });
        return false;
    }

    //console.log({nombre:"handleUpdateSubmit",data:submited.vars})
    //guarda variables ingresadas
    this.data = submited.vars
    //console.log(this.data)
    //subimos las variables ingresadas


    
    calculoService.updatePropsAlgorithm(this.data)
    .then((response) => {
      ////console.log({title: 'postRegisterVisit', initialDose: response.data})
        formulaService.updateLocalProps(this.data);
      //mostramos al usuario un toggle
        this.toggle({
        title: "Si se pudo!!😍 ",
        text: "Algoritmo actualizado correctamente!! 😘",
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
        <UpdateProps onSubmit={this.handleUpdateSubmit} />
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

export default Actualizar;