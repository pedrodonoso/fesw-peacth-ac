import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import DataUserVisit from "../components/registrar_visita/data-user-visit";
import teamsService from '../services/teams.service';
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class RegistrarVisita extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
    this.handlerOpenDialog = this.handlerOpenDialog.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  //envía data a API
  handleTeamSubmit(data) {
    console.log({nombre:"handleTeamSubmit",data:data})
    teamsService.create(data.tag,data.idlist)
    .then((response) => this.toggle({
      text: "Equipo creado correctamente!! 😘",
      title: "Si se pudo!!😍 "
    }))
    .catch((error) => this.toggle({
      text: "Debes ingresar Personal de Servicio que no esté asignado a un Equipo!! ✋",
      title: "No se pudo 😁"
    }) );
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
          {/*
        <Row noGutters className="page-header py-4">
           
          <PageTitle sm="4" title="Calcular primera dosis" subtitle="acenocumarol" className="text-sm-left" />
        </Row>

        <Team onSubmit={this.handleTeamSubmit}></Team>

        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
          */}
        <Container fluid className="main-content-container px-4">

      <Row>
        <Col lg="12" className="py-4">
        <DataUserVisit onSubmit={this.handleTeamSubmit} />
        {/*
          <Card>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Datos del Paciente</h6>
            </CardHeader>
              <Row>
                  <Col lg="4" className="mb-4">
                    <Card small>
                        <CardHeader className="border-bottom">
                        <h6 className="m-0">Datos Clínicos del Paciente</h6>
                        </CardHeader>
                        <DataUserGeneral />
                    </Card>
                  </Col>
                  <Col lg="4" className="mb-4">
                    <Card small>
                        <CardHeader className="border-bottom">
                        <h6 className="m-0">Datos Farmacogenética del Paciente</h6>
                        </CardHeader>
                    </Card>
                  </Col>
              </Row>
          </Card>
        */}
        </Col>
      </Row>
    </Container>
      </ThemeProvider>
      </Container>
      
    );
  }
};

export default RegistrarVisita;