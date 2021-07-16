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

import DataUserGeneral from "../components/calculo/data-user-general";
import Test from '../components/forms/Test';
import teamsService from '../services/teams.service';
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
import DropdownOptions from "../components/calculo/drop-options";
import formulaService from "../services/formula.service";
import calculoService from "../services/calculo.service";


const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

class Calculo extends Component {
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
    var ifResponse = false
    console.log({nombre:"handleCalculoSubmit",data:data})
    //guarda variables ingresadas
    this.vars = data.vars
    
    // this.setState({
    //   ...this.state,
    //   vars: data.vars
    // });


    //subimos las variables ingresadas
    
    calculoService.getDosePatient(this.vars)
    .then((response) => {
      var _dosis = response.data.initialDose;
      console.log({title: 'initialDose', initialDose: _dosis})
      //guardamos las variables
        ifResponse = true
        this.setState({
          ...this.state,
          dosis: _dosis
        }); 

      //mostramos al usuario un toggle
      
        // this.toggle({
        // text: "Equipo creado correctamente!! 😘",
        // title: "Si se pudo!!😍 "
        // });
      
    })
    .catch((error) => {
      console.log({title: 'error', error: error})

      //calculamos sin internet con las últimas variables
      this.setState({
          ...this.state,
          coef: {} //vacío para que formula service ejecute las últimas variables
        }); 
    //mostramos al usuario un toggle
    
      this.toggle({
        title: "No se pudo 😁",
        text: "Ha ocurrido un problema, vuelve a intentarlo! \n Se calculará la dosis con los último parametros guardados localmente.",
      });
    
   }); 

    /*     
    teamsService.create(data.tag,data.idlist)
    .then((response) => this.toggle({
      text: "Equipo creado correctamente!! 😘",
      title: "Si se pudo!!😍 "
    }))
    .catch((error) => this.toggle({
      text: "Debes ingresar Personal de Servicio que no esté asignado a un Equipo!! ✋",
      title: "No se pudo 😁"
    }) ); 
    */
    console.log({nombre:"calculo dosis",data:this.vars,props:this.coef})
    if(!ifResponse) {
      var _Dosis = formulaService.formula(this.coef,this.vars)
      this.setState({
        ...this.state,
        dosis: _Dosis
      });
    }
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

        <Team onSubmit={this.handleCalculoSubmit}></Team>

        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
          */}
        <Container fluid className="main-content-container px-4">

      <Row>
        <Col lg="12" className="py-4">
        <DataUserGeneral onSubmit={this.handleCalculoSubmit} dosis={this.state.dosis}/>
        <Test openOut={this.state.open} toggle={this.toggle.bind(this,{})} handler={this.handlerOpenDialog.bind(this)}
          text={this.state.text}
          title={this.state.title}
        />
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

export default Calculo;
