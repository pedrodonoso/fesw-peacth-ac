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
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DataUserGeneral from "../components/calculo/data-user-general";
import Team from "../components/forms/Team";
import teamsService from '../services/teams.service';
import Test from "../components/forms/Test";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import Colors from "../components/components-overview/Colors";
import Checkboxes from "../components/components-overview/Checkboxes";
import RadioButtons from "../components/components-overview/RadioButtons";
import ToggleButtons from "../components/components-overview/ToggleButtons";
import SmallButtons from "../components/components-overview/SmallButtons";
import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
import NormalButtons from "../components/components-overview/NormalButtons";
import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
import Forms from "../components/components-overview/Forms";
import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import Sliders from "../components/components-overview/Sliders";
import ProgressBars from "../components/components-overview/ProgressBars";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
import CustomSelect from "../components/components-overview/CustomSelect";


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class Calculo extends Component {

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
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Calcular primera dosis" subtitle="acenocumarol" className="text-sm-left" />
        </Row>

        <Team onSubmit={this.handleTeamSubmit}></Team>

        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
        <Container fluid className="main-content-container px-4">

      <Row>
        <Col lg="12" className="py-4">
          <Card>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Datos Generales</h6>
              <Row>
                  <Col lg="4" className="mb-4">
                    {/* Data general */}
                    <Card small>
                        <CardHeader className="border-bottom">
                        <h6 className="m-0">Información Clínica del Paciente</h6>
                        </CardHeader>
                        <DataUserGeneral />
                    </Card>
                  </Col>
                  <Col lg="4" className="mb-4">
                    {/* Groups */}
                    <Card small>
                        <CardHeader className="border-bottom">
                        <h6 className="m-0">Información Farmacogenética del Paciente</h6>
                        </CardHeader>

                        <ListGroup flush>
                        <ListGroupItem className="px-3">
                            <Form>
                            <strong className="text-muted d-block mb-3">
                                Button Groups
                            </strong>
                            <ButtonGroups />

                            <strong className="text-muted d-block mb-2">
                                Input Groups
                            </strong>
                            <InputGroups />

                            <strong className="text-muted d-block mb-2">
                                Seamless Input Groups
                            </strong>
                            <SeamlessInputGroups />
                            </Form>
                        </ListGroupItem>
                        </ListGroup>
                    </Card>
                  </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </Container>
      </ThemeProvider>
      </Container>
      
    );
  }
};

export default Calculo;
