import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    Button,
} from "shards-react";

import AnalisisDosisGen from "../components/analisis/analisis-dosis-gen";
import AnalisisDisGen from "../components/analisis/analisis-dis-gen";
import formulaService from "../services/formula.service";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class Analisis extends Component {
  vars = {};
  coef = {};
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dosis: 0.0
    }
    this.handleCalculoSubmit = this.handleCalculoSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
    
  }

  //envía data a API
  handleCalculoSubmit(data) {
    console.log({nombre:"handleCalculoSubmit",data:data})
    //guarda variables ingresadas
    this.vars = data.vars
    console.log({nombre:"calculo dosis",data:this.vars,props:this.coef})
    var _dosis = formulaService.formula(this.coef,this.vars)
    this.setState({
      ...this.state,
      dosis: _dosis
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
    console.log({text:"toggle", open:this.state.open});
  }

  handlerOpenDialog(data) {
    this.setState({
      ...this.state,
      open: data
    });
    console.log({text:"handler", open:this.state.open});
  }


  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <ThemeProvider theme={theme}>
        <Container fluid className="main-content-container px-4">

      <Row>
        <Col lg="12" className="py-4">
        {this.props.dosisGen ? 
          <AnalisisDosisGen title="Análisis de la dosis calculada entre genotipos" onSubmit={this.handleCalculoSubmit} dosis={this.state.dosis}/>
          :
          <AnalisisDisGen title="Análisis de la frecuencia de distribución de genotipos " onSubmit={this.handleCalculoSubmit} dosis={this.state.dosis}/>
        }
        </Col>
      </Row>
      </Container>
      </ThemeProvider>
      </Container>
      
    );
  }
};

export default Analisis;
