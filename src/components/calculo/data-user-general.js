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
  ListGroupItem
} from "shards-react";


import DropdownOptions from "./drop-options";
import constants from "../../data/constants";


const DataUserGeneral = ({onSubmit,dosis }) => {
    const [cod_paciente, setCodPaciente] = useState({value:'',valid:false});
    const [edad, setEdad] = useState({value:'',valid:false});
    const [peso, setPeso] = useState({value:'',valid:false});
    const [talla, setTalla] = useState({value:'',valid:false});
    const [sexo, setSexo] = useState({value:'F',valid:false});
    const [fumador, setFumador] = useState({value:false,valid:false});
    const [inr_inicial, setInrInicial] = useState({value:'',valid:false});
    const [t_p, setTP] = useState({value:false,valid:false});
    const [t_v_p, setTVP] = useState({value:false,valid:false});
    const [f_a, setFA] = useState({value:false,valid:false});
    const [v_c, setVC] = useState({value:false,valid:false});
    const [hepatica, setHepatica] = useState({value:false,valid:false});
    const [renal, setRenal] = useState({value:false,valid:false});
    const [cyp2c92, setCyp2c92] = useState({value:'',valid:false});
    const [cyp2c93, setCyp2c93] = useState({value:'',valid:false});
    const [vkorc1, setVkorc1] = useState({value:'',valid:false});
    const [inh_cyp, setInh_cyp] = useState({value:'',valid:false});
    const [ind_cyp, setInd_cyp] = useState({value:'',valid:false});
    const [blood, setBloodType] = useState({value:'',valid:false});
    const [imc, setIMC] = useState({value:'',valid:false});
    const [genetics, setGenetics] = useState({value: {[constants.gen2] : "*1/*1", [constants.gen3] : "*1/*1", [constants.gen4]: "A/A" },valid:false});

    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:false})); {/* code: "T-004" */}
        setEdad((prevState) => ({...prevState, value: '',valid:false}));        {/* age: 69 */}
        setPeso((prevState) => ({...prevState, value: '',valid:false}));        {/* weight: 80.5 */}
        setTalla((prevState) => ({...prevState, value: '',valid:false}));       {/* height: 1.56 */}
        setSexo((prevState) => ({...prevState, value: 'F',valid:false}));       {/* sex: "M" */}
        setFumador((prevState) => ({...prevState, value: false,valid:false}));  {/* "weight: 80" */}
        setInrInicial((prevState) => ({...prevState, value: '',valid:false}));  {/* "initialINR: 1.1" */}
        setTP((prevState) => ({...prevState, value: false,valid:false}));       {/* 4 diagnosis como una lista de cuatro elementos*/}
        setTVP((prevState) => ({...prevState, value: false,valid:false}));      {/* */}
        setFA((prevState) => ({...prevState, value: false,valid:false}));       {/* */}
        setVC((prevState) => ({...prevState, value: false,valid:false}));       {/* */}
        setHepatica((prevState) => ({...prevState, value: false,valid:false})); {/* */}   
        setRenal((prevState) => ({...prevState, value: false,valid:false}));    {/* */}  
        setCyp2c92((prevState) => ({...prevState, value: '*1/*1',valid:false}));     {/* *1/*1,*1/*2,*1/*3 */}
        setCyp2c93((prevState) => ({...prevState, value: '*1/*1',valid:false}));     {/* *1/*2 */}             
        setVkorc1((prevState) => ({...prevState, value: 'A/A',valid:false}));      {/* *A/*A (mut),*G/*G (wt), *G/*A (het) se guarda A/A (mut),G/G (wt), G/A (het) */}
        setInh_cyp((prevState) => ({...prevState, value: '',valid:false}));     {/* */}
        setInd_cyp((prevState) => ({...prevState, value: '',valid:false}));     {/* */}
        setBloodType((prevState) => ({...prevState, value: 'O+',valid:false}));   {/*O +/-,A +/-,B +/-, AB +/-*/}
        setIMC((prevState) => ({...prevState, value: '',valid:false}));   {/* imc: 24.4*/}
        setGenetics((prevState) => ({...prevState, value: {[constants.gen2] : "*1/*1", [constants.gen3] : "*1/*1", [constants.gen4]: "A/A" } ,valid:false}));   {/* imc: 24.4*/}
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
    
    console.log(genetics.value)
  }

  function handleBloodSubmit(data) {
    console.log({nombre:"handleBloodSubmit",data:data})
    var selected = data.selected
    setBloodType((prevState) => ({...prevState, value: selected}))
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
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="mb-4">
          <Card small lg="9">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Datos Clínicos del Paciente</h6>
            </CardHeader>
            <CardBody>

                 {/* Grupo sanguineo O +/-,A +/-,B +/-, AB +/- */}      
                <FormGroup>
                <strong className="text-muted d-block mb-2">
                 Grupo sanguineo
                </strong>
                <DropdownOptions title="" options={['O+', 'O-','A+', 'A-', 'B+','B-','AB+','AB-']} values={['O+', 'O-','A+', 'A-', 'B+','B-','AB+','AB-']} onSubmit={handleBloodSubmit}/>              
            
                <FormFeedback  valid={fumador.valid}>"Debes elegir una opción."</FormFeedback>
                </FormGroup>


                {/* Fumador */}                    
                <label>Fumador</label>
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2">
                  <Button theme={fumador.value === true ? 'primary' : 'white'} onClick={() => setFumador((prevState) => ({...prevState, value: true, valid:true}))}>Si</Button> 
                  <Button theme={fumador.value === false ? 'primary' : 'white'} onClick={() => setFumador((prevState) => ({...prevState, value: false, valid:true}))}>No</Button>
                </ButtonGroup>
                    {/*
                <FormInput
                    value={fumador.value}
                    valid={fumador.valid}
                    invalid={fumador.invalid}
                    //onChange={validTelefono}
                    size="lg"
                    className="mb-3"
                    placeholder="934669676" />*/}
                <FormFeedback  valid={fumador.valid}>"Debes ingresar una opción."</FormFeedback>
                </FormGroup>

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

                {/* Patologia */}
                {/* 
                <label>Patología indicadora</label>
                <FormGroup>
                <fieldset>
                    <FormCheckbox  small style ={{color: "#00e676",}} enabled defaultChecked>
                        Tromboempolismo Pulmonar
                    </FormCheckbox>
                    <FormCheckbox  small defaultChecked>
                        Trombosis venosa profunda
                    </FormCheckbox>
                    <FormCheckbox  small >
                        Fibrilación Auricular
                    </FormCheckbox>
                    <FormCheckbox  small defaultChecked >
                        Válvula Cardiaca
                    </FormCheckbox>
                    </fieldset>
                <FormInput
                    value={patologia.value}
                    valid={patologia.valid}
                    invalid={patologia.invalid}
                    //onChange={validTelefono}
                    size="lg"
                    className="mb-3"
                    placeholder="934669676" />
                <FormFeedback  valid={patologia.valid}>"Puedes ingresar un telefono que contenga solo números."</FormFeedback>
                </FormGroup>
              */}
                {/* Hepatica */}                    
                <label>Enfermedad Hepática</label>
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2">
                  <Button theme={hepatica.value === true ? 'primary' : 'white'} onClick={() => setHepatica((prevState) => ({...prevState, value: true, valid:true}))}>Si</Button> 
                  <Button theme={hepatica.value === false ? 'primary' : 'white'} onClick={() => setHepatica((prevState) => ({...prevState, value: false, valid:true}))}>No</Button>
                </ButtonGroup>
                <FormFeedback  valid={hepatica.valid}>"Debes ingresar una opción."</FormFeedback>
                </FormGroup>

                {/* Renal */}
                <label>Renal</label>
                <FormGroup>
                <ButtonGroup size="sm" className="mr-2">
                  <Button theme={renal.value === true ? 'primary' : 'white'} onClick={() => setRenal((prevState) => ({...prevState, value: true, valid:true}))}>Si</Button> 
                  <Button theme={renal.value === false ? 'primary' : 'white'} onClick={() => setRenal((prevState) => ({...prevState, value: false, valid:true}))}>No</Button>
                </ButtonGroup>
                <FormFeedback  valid={hepatica.valid}>"Debes ingresar una opción."</FormFeedback>
               </FormGroup>
            </CardBody>
          </Card>
        </Col>
          <Col lg="4" className="mb-4">
            <Row>
            {/* Genetica */}
              <Card small lg="9" className="mb-2">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Datos Farmacogenética del Paciente</h6>
                </CardHeader>
                <CardBody>
                    <Form className="add-new-post">
                      <ListGroup flush>
                        <ListGroupItem className="px-3">
                            <Form>
                            <strong className="text-muted d-block mb-3">
                            CYP2C9-2
                            </strong>
                            <DropdownOptions title={constants.gen2} options={['*1/*1','*1/*2','*1/*3']} values={['*1/*1','*1/*2','*1/*3']} onSubmit={handleSubmit}/>
                            <strong className="text-muted d-block mb-3">
                            CYP2C9-3
                            </strong>
                            <DropdownOptions title={constants.gen3} options={['*1/*1','*1/*2','*1/*3']} values={['*1/*1','*1/*2','*1/*3']} onSubmit={handleSubmit}/>
                            <strong className="text-muted d-block mb-2">
                            VKORC1
                            </strong>
                            <DropdownOptions title={constants.gen4} options={['*A/*A (mut)', '*G/*A (het)','*G/*G (wt)']} values={['A/A', 'G/A','G/G' ]} onSubmit={handleSubmit}/>
                            {/* 
                            <strong className="text-muted d-block mb-2">
                            Inhibidores CYP
                            </strong>
                            <DropdownOptions title="Inhibidores CYP" options={['*1/*1','*1/*2','*1/*3']}/>

                            <strong className="text-muted d-block mb-2">
                            Inductores CYP
                            </strong>
                            <DropdownOptions title="Inductores CYP" options={['*1/*1','*1/*2','*1/*3']}/>
                            */}
                            </Form>
                        </ListGroupItem>
                      </ListGroup>
                    </Form>
                </CardBody>
              </Card>
            </Row>
            <Row>
                  <Card small lg="12" className="mb-2">
                    <CardHeader className="border-bottom">
                    <h6 className="m-0"> Dosis </h6>
                    </CardHeader>
                    <CardBody className="md-3">
                        <t6> {isNaN(dosis) ? '-' : dosis} </t6> 
                    </CardBody>                      
                  </Card>
            </Row>
            <Row>
              <ListGroupItem lg="9" className="mb-2">                  
                <Button
                  theme="primary"
                  className="mb-2 mr-2"
                  onClick={(event) => {
                    onSubmit({
                      vars : {
                      'code': cod_paciente.valid ? cod_paciente.value : "",
                      'sex':  sexo.value ,
                      'bloodtype' : blood.value,
                      'initialDate': "2009-11-30", //preguntar
                      'initialDosis': 0,
                      'initialINR': inr_inicial.valid ? parseFloat(inr_inicial.value) : 0.0,
                      'weeklyDosisInRange': 10,
                      'totalDays': 534,
                      'weight': peso.valid ? peso.value : 0.0,
                      'height': talla.valid ? talla.value : 0.0,
                      'imc': calcImc(),
                      'age': edad.valid ? parseFloat(edad.value) : 0,
                      'genetics': genetics.value,
                      //'diagnosis': diagnosis.value,
                      }});
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
            </Row>
          </Col>
      </Row>
      </Col>
    );
  }

  DataUserGeneral.propTypes = {
  onSubmit: PropTypes.func,
}

DataUserGeneral.defaultProps = {
  onSubmit: () => {},
}



export default DataUserGeneral;
