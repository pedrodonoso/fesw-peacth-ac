import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import PacienteGeneral from "../components/paciente/paciente-general";
import SearchBar from "../components/paciente/search-bar";
import {esES} from '@material-ui/core/locale';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'},
    },
}, esES);

class Paciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handlerSearch(data) {
    console.log(data.query);
  }

  
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <ThemeProvider theme={theme}>
        <Container fluid className="main-content-container px-4">

        <Col lg="12" className="py-4">
            <Row>
                <Col lg="12" className="mb-2"> 
                    <SearchBar onSearchSubmit={this.handlerSearch}/>
                </Col>
            </Row>
            <Row>
                <PacienteGeneral title="Perfil médico del paciente"/>
            </Row>
        </Col>
      </Container>
      </ThemeProvider>
      </Container>
      
    );
  }
};

export default Paciente;
