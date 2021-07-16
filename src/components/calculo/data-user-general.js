import React, { useState} from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
  FormFeedback,
  InputGroup,
  InputGroupAddon,
  InputGroupText,  
  ButtonGroup,
  FormCheckbox,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "shards-react";


import DropdownOptions from "./drop-options";
import constants from "../../data/constants";
import Divider from "@material-ui/core/Divider";

const DataUserGeneral = ({onSubmit , dosis}) => {
    const today = new Date();
    const [cod_paciente, setCodPaciente] = useState({value:'',valid:false});
    const [edad, setEdad] = useState({value:'',valid:false});
    const [peso, setPeso] = useState({value:'',valid:false});
    const [talla, setTalla] = useState({value:'',valid:false});
    const [sexo, setSexo] = useState({value:'F',valid:false});
    const [inr_inicial, setInrInicial] = useState({value:'',valid:false});
    const [imc, setIMC] = useState({value:'',valid:false}); // [constants.gen11,constants.gen12,constants.gen22]
    const [genetics, setGenetics] = useState({value: {[constants.gen2] : constants.gen11, [constants.gen3] : constants.gen12, [constants.gen4]: constants.genaa },valid:false});

    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:false})); {/* code: "T-004" */}
        setEdad((prevState) => ({...prevState, value: 0.0,valid:false}));        {/* age: 69 */}
        setPeso((prevState) => ({...prevState, value: 0.0,valid:false}));        {/* weight: 80.5 */}
        setTalla((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* height: 1.56 */}
        setSexo((prevState) => ({...prevState, value: 'F',valid:false}));       {/* sex: "M" */}
        setInrInicial((prevState) => ({...prevState, value: '',valid:false}));  {/* "initialINR: 1.1" */}
        setIMC((prevState) => ({...prevState, value: '',valid:false}));   {/* imc: 24.4*/}
        setGenetics((prevState) => ({...prevState, value: {[constants.gen2] : constants.gen11, [constants.gen3] : constants.gen12, [constants.gen4]: constants.genaa } ,valid:false}));   {/* imc: 24.4*/}
    }
    
    
    const validEmailRegex =
    RegExp(/^((([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})|)$/i
    );
    const validRutRegex =
    //RegExp(/^(([0-9])+\-([kK0-9])|)$/i);
    RegExp(/^(([0-9])+|)$/i);
    const validNombreRegex =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validApellidoRegex =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validProfesionRegex  =
    RegExp(/^[a-z A-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-z A-ZÀ-ÿ\u00f1\u00d1]*)*[a-z A-ZÀ-ÿ\u00f1\u00d1]+$/i);
    //RegExp(/^([a-z A-Z])+$/i);
    const validNumRegex =
    RegExp(/^([0-9])*[\.]?([0-9])*$/i);
    const validPacienteRegex =
    RegExp(/^(T-)([0-9])*$/i);
/*
    const validNombre = (e) =>{
      var input = e.target.value;
      setNombres((prevState) => ({...prevState, nombres: input}));
      if(validNombreRegex.test(input))  {
          setNombres((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setNombres((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

*/

 function handleSubmit(data) {
    console.log({nombre:"handleSubmit",data:data})
    var title = data.title
    var selected = data.selected
    var dic = genetics.value
    dic = { ...dic, [title] : selected}
    setGenetics((prevState) => ({...prevState, value: dic}))
  
  }
  function calcImc() {
    var _imc = peso.value/Math.pow(talla.value*0.01,2);
    setIMC((prevState) => ({...prevState, value: _imc}))
    return _imc;
  }
  function onChangeCodPaciente(e) {
    var _cod = e.target.value;
    setCodPaciente((prevState) => ({...prevState, value: _cod}))
    console.log(validPacienteRegex.test(_cod))
    if(validPacienteRegex.test(_cod)) {
      
      setCodPaciente((prevState) => ({...prevState, valid: true}))
    } else {
      setCodPaciente((prevState) => ({...prevState, valid: false}))
    }

    return true
  }
  function onChangeEdad(e) {
    var _edad = e.target.value;
    setEdad((prevState) => ({...prevState, value: _edad}))
    if(validNumRegex.test(_edad)) {
      setEdad((prevState) => ({...prevState, valid: true}))
    } else {
      setEdad((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  function onChangePeso(e) {
    var _peso = e.target.value;
    setPeso((prevState) => ({...prevState, value: _peso}))
    if(validNumRegex.test(_peso)) {
      setPeso((prevState) => ({...prevState, valid: true}))
    } else {
      setPeso((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  function onChangeTalla(e) {
    var _talla = e.target.value;
    setTalla((prevState) => ({...prevState, value: _talla}))
    if(validNumRegex.test(_talla)) {
      setTalla((prevState) => ({...prevState, valid: true}))
    } else {
      setTalla((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
  function onChangeINRInicial(e) {
    var _inr = e.target.value;
    setInrInicial((prevState) => ({...prevState, value: _inr}))
    if(validNumRegex.test(_inr)) {
      setInrInicial((prevState) => ({...prevState, valid: true}))
    } else {
      setInrInicial((prevState) => ({...prevState, valid: false}))
    }
    return true
  }
    return(
      <Col>
      <Row>
        <Col lg="4" className="mb-4">
          {/* Data general */}
          <Card small lg="9" >
            <CardHeader className="border-bottom">
              <h6 className="m-0">Datos Clínicos del Paciente</h6>
            </CardHeader>
            <CardBody>
              <Form className="add-new-post">

                {/* Codigo Paciente */}
                <FormGroup check={false}>
                <label>Código del paciente</label>
                <FormInput
                    value= {cod_paciente.value}
                    valid={cod_paciente.valid}
                    invalid={!cod_paciente.valid}
                    onChange={onChangeCodPaciente}
                    size="lg"
                    className="mb-3"
                    placeholder="#347635" />
                <FormFeedback   valid={cod_paciente.valid}>"Ej: T-002"</FormFeedback>
                </FormGroup>

                {/* Edad */}
                <FormGroup>
                <label>Edad</label>
                    <InputGroup className="mb-3">
                    <FormInput
                    value={edad.value}
                    valid={edad.valid}
                    invalid={!edad.valid}
                    onChange={onChangeEdad}
                    size="lg"
                    //className="mb-3 "
                    placeholder="74"
                    />
                    <InputGroupAddon type="prepend">
                        <InputGroupText>años</InputGroupText>
                    </InputGroupAddon>
                    <FormFeedback  valid={edad.valid}>"Debes ingresar solo números."</FormFeedback>
                    </InputGroup>
                </FormGroup>

                {/* Peso */}
                <FormGroup>
                <label>Peso</label>
                <InputGroup className="mb-3">
                <FormInput
                    value={peso.value}
                    valid={peso.valid}
                    invalid={!peso.valid}
                    onChange={onChangePeso}
                    size="lg"
                    //className="mb-3"
                    placeholder="78" />
                <InputGroupAddon type="prepend">
                    <InputGroupText>Kg</InputGroupText>
                </InputGroupAddon>
                <FormFeedback  valid={peso.valid}>"Debes ingresar solo números."</FormFeedback>
                </InputGroup>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="mb-4">
          <Card small lg="9">
            {/*
            <CardHeader className="border-bottom">
              <h6 className="m-0">Datos Clínicos del Paciente</h6>
            </CardHeader>
            */}
            <ListGroup flush >
              <ListGroupItem className="px-3"> 
                {/* Talla */}
                <FormGroup>
                <label>Talla</label>
                <InputGroup className="mb-3">
                <FormInput
                    value={talla.value}
                    valid={talla.valid}
                    invalid={!talla.valid}
                    onChange={onChangeTalla}
                    size="lg"
                    //className="mb-3"
                    placeholder="65" />
                <InputGroupAddon type="prepend">
                    <InputGroupText>cm</InputGroupText>
                </InputGroupAddon>
                <FormFeedback  valid={talla.valid}>"Debes ingresar solo números"</FormFeedback>
                </InputGroup>
                </FormGroup>

               
                {/* Sexo */}
                <label>Sexo</label> 
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2" >
                    <Button theme={sexo.value === 'F' ? 'primary' : 'white'} onClick={() => setSexo((prevState) => ({...prevState, value: 'F', valid:true}))}>Femenino</Button> 
                    <Button theme={sexo.value === 'M' ? 'primary' : 'white'} onClick={() => setSexo((prevState) => ({...prevState, value: 'M', valid:true}))}>Masculino</Button>
                </ButtonGroup>
                    {/*
                <FormInput
                    value={sexo.value}
                    valid={sexo.valid}
                    invalid={sexo.invalid}
                    //onChange={validCorreo}
                    size="lg"
                    className="mb-3"
                    placeholder="juan@gmail.com" />
                    */}
                </FormGroup>
                </ListGroupItem>
                <CardHeader className="border-bottom">
                <h6 className="m-0">Datos Clínicos del Paciente</h6>
              </CardHeader>
                <ListGroupItem className="px-3">
                  {/* INR Inicial */}
                  <FormGroup>
                  <label>INR Inicial</label>
                  <FormInput
                      value={inr_inicial.value}
                      valid={inr_inicial.valid}
                      invalid={!inr_inicial.valid}
                      onChange={onChangeINRInicial}
                      size="lg"
                      className="mb-3"
                      placeholder="2.4" />
                  <FormFeedback  valid={inr_inicial.valid}>"Debes ingresar un valor decimal. EJ: 2.4"</FormFeedback>
                  </FormGroup>
                </ListGroupItem>
                </ListGroup>
          </Card>
        </Col>
          <Col lg="4" className="mb-4">
            {/* Genetica */}
              <Card small lg="9" >
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Datos Farmacogenética del Paciente</h6>
                </CardHeader>
                <CardBody>
                    <Form className="add-new-post">
                      <ListGroup flush>
                        <ListGroupItem className="px-3">
                            <Form>
                              <label>CYP2C9-2</label>
                              <DropdownOptions 
                                title={constants.gen2} 
                                options={[constants.gen11,constants.gen12,constants.gen22]} 
                                values={[constants.gen11,constants.gen12,constants.gen22]} 
                                onSubmit={handleSubmit}
                              />
                              <label>CYP2C9-3</label>
                              <DropdownOptions 
                                title={constants.gen3} 
                                options={[constants.gen11,constants.gen13,constants.gen33]} 
                                values={[constants.gen11,constants.gen13,constants.gen33]} 
                                onSubmit={handleSubmit}
                              />
                              <label>VKORC1</label>
                              <DropdownOptions 
                                title={constants.gen4} 
                                options={['*A/*A', '*G/*A','*G/*G']} 
                                values={[constants.genaa,constants.genga,constants.gengg]} 
                                onSubmit={handleSubmit}
                              />
                            </Form>
                        </ListGroupItem>
                      </ListGroup>
                    </Form>
                </CardBody>
              </Card>
            <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
              <Card  lg="9" className="mb-2">
                <CardHeader className="border-bottom">
                <h6 className="m-0"> Dosis </h6>
                </CardHeader>
                <CardBody className="md-3">
                    <t6> {(dosis === -999.0) ? '-' : (isNaN(dosis)? '-': dosis)} </t6> 
                </CardBody>                      
              </Card>
              </div>
              <ListGroupItem lg="9" className="mb-2">                  
                <Button
                  theme="primary"
                  className="mb-2 mr-2"
                  onClick={(event) => {
                    onSubmit({
                      vars : {
                        'code': cod_paciente.valid ? cod_paciente.value : "",
                        'sex':  sexo.value ,
                        //'bloodtype' : blood.value,
                        'initialDate': "2009-11-30", //preguntar
                        'initialDose': 0,
                        'initialINR': inr_inicial.valid ? parseFloat(inr_inicial.value) : 0.0,
                        'weeklyDoseInRange': 10.0,
                        'totalDays': 534,
                        'weight': peso.valid ? peso.value : 0.0,
                        'height': talla.valid ? talla.value : 0.0,
                        'imc': calcImc(),
                        'age': edad.valid ? parseFloat(edad.value) : 0,
                        'genetics': genetics.value,
                      }
                    });
                  }}
                  >
                    Calcular dosis
                </Button>
                <Button 
                  theme="secondary"
                  className="mb-2 mr-2"
                  onClick={(event) => {setForm()}}>
                    Nuevo Paciente
                </Button>
              </ListGroupItem>
          </Col>
      </Row>
      </Col>
    );
  }

  DataUserGeneral.propTypes = {
    onSubmit: PropTypes.func,
    dosis: PropTypes.number
  }

DataUserGeneral.defaultProps = {
    onSubmit: () => {},
    dosis: -999.0,
  }

export default DataUserGeneral;

