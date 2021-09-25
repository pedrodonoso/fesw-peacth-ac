import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import PacienteGeneral from "../components/paciente/paciente-general";
import PacienteGenetico from "../components/paciente/paciente-genetico";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class Paciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
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
          <PacienteGeneral title="Perfil médico del paciente"/>
          :
          <PacienteGenetico title="Perfil genético del paciente"/>
        }
        </Col>
      </Row>
      </Container>
      </ThemeProvider>
      </Container>
      
    );
  }
};

export default Paciente;
