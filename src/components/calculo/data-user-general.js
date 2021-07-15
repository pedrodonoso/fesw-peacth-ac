import React, { useState } from 'react';
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
  FormCheckbox
} from "shards-react";

const DataUserGeneral = ({onSubmit }) => {
    const [cod_paciente, setCodPaciente] = useState({value:'',valid:false,invalid:false});
    const [edad, setEdad] = useState({value:'',valid:false,invalid:false});
    const [peso, setPeso] = useState({value:'',valid:false,invalid:false});
    const [talla, setTalla] = useState({value:'',valid:false,invalid:false});
    const [sexo, setSexo] = useState({value:'',valid:false,invalid:false});
    const [fumador, setFumador] = useState({value:'',valid:false,invalid:false});
    const [inr_inicial, setInrInicial] = useState({value:'',valid:false,invalid:false});
    const [t_p, setTP] = useState({value:false,valid:false,invalid:false});
    const [t_v_p, setTVP] = useState({value:false,valid:false,invalid:false});
    const [f_a, setFA] = useState({value:false,valid:false,invalid:false});
    const [v_c, setVC] = useState({value:false,valid:false,invalid:false});
    const [hepatica, setHepatica] = useState({value:'',valid:false,invalid:false});
    const [renal, setRenal] = useState({value:'',valid:false,invalid:false});


    function setForm() {
        setCodPaciente((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setEdad((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setPeso((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setTalla((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setSexo((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setFumador((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setInrInicial((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setTP((prevState) => ({...prevState, value: false,valid:false,invalid:false}));
        setTVP((prevState) => ({...prevState, value: false,valid:false,invalid:false}));
        setFA((prevState) => ({...prevState, value: false,valid:false,invalid:false}));
        setVC((prevState) => ({...prevState, value: false,valid:false,invalid:false}));
        setHepatica((prevState) => ({...prevState, value: '',valid:false,invalid:false}));
        setRenal((prevState) => ({...prevState, value: '',valid:false,invalid:false}));

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
    const validTelefonoRegex =
    RegExp(/^([0-9])*$/i);
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

    const validApellido = (e) =>{
      var input = e.target.value;
      setApellidos((prevState) => ({...prevState, apellidos: input}));
      if(validApellidoRegex.test(input))  {
          setApellidos((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setApellidos((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }


    const validRut = (e) =>{
      var input = e.target.value;
      setRut((prevState) => ({...prevState, rut: input}));
      if(validRutRegex.test(input))  {
          setRut((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else if(input === "") {
        setRut((prevState) => ({...prevState, valid: null, invalid: false}));
      } else {
          setRut((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }
    const validProfesion = (e) =>{
      var input = e.target.value;
      setProfesion((prevState) => ({...prevState, profesion: input}));
      if(validProfesionRegex.test(input))  {
          setProfesion((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setProfesion((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validCorreo = (e) => {
      var input = e.target.value;
      setCorreo((prevState) => ({...prevState, correo: input}));
      if(validEmailRegex.test(input))  {
          setCorreo((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else if(input === "") {
        setCorreo((prevState) => ({...prevState, valid: null, invalid: false}));
      } else {
          setCorreo((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validTelefono = (e) =>{
      var input = e.target.value;
      console.log(input === "")
      setTelefono((prevState) => ({...prevState, telefono: input}));
      if(validTelefonoRegex.test(input))  {
          setTelefono((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else if(input === "") {
        setTelefono((prevState) => ({...prevState, valid: null, invalid: false}));
      } else {
          setTelefono((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }
*/
    return(
          <Card small lg="9" >
            <CardBody>
                <Form className="add-new-post">

                    {/* Codigo Paciente */}
                    <FormGroup check={false}>
                    <label>Código del paciente</label>
                    <FormInput
                        value= {cod_paciente.value}
                        valid={cod_paciente.valid}
                        invalid={cod_paciente.invalid}
                        //onChange={validNombre}
                        size="lg"
                        className="mb-3"
                        placeholder="#347635" />
                    <FormFeedback   valid={cod_paciente.valid}>"Ej: W345603"</FormFeedback>
                    </FormGroup>

                    {/* Edad */}
                    <FormGroup>
                    <label>Edad</label>
                        <InputGroup className="mb-3">
                        <FormInput
                        value={edad.value}
                        valid={edad.valid}
                        invalid={edad.invalid}
                        //onChange={ validApellido}
                        size="lg"
                        //className="mb-3 "
                        placeholder="74"
                        />
                        <InputGroupAddon type="prepend">
                            <InputGroupText>años</InputGroupText>
                        </InputGroupAddon>
                        <FormFeedback  valid={edad.valid}>"Debes ingresar su edad que contengan solo números."</FormFeedback>
                        </InputGroup>
                    </FormGroup>

                    {/* Peso */}
                    <FormGroup>
                    <label>Peso</label>
                    <InputGroup className="mb-3">
                    <FormInput
                        value={peso.value}
                        valid={peso.valid}
                        invalid={peso.invalid}
                        //onChange={ validProfesion}
                        size="lg"
                        //className="mb-3"
                        placeholder="78" />
                    <InputGroupAddon type="prepend">
                        <InputGroupText>Kg</InputGroupText>
                    </InputGroupAddon>
                    <FormFeedback  valid={peso.valid}>"Debes ingresar una profesion que contenga solo letras."</FormFeedback>
                    </InputGroup>
                    </FormGroup>

                    {/* Talla */}
                    <FormGroup>
                    <label>Talla</label>
                    <InputGroup className="mb-3">
                    <FormInput
                        value={talla.value}
                        valid={talla.valid}
                        invalid={talla.invalid}
                        //onChange={validRut}
                        size="lg"
                        //className="mb-3"
                        placeholder="65" />
                    <InputGroupAddon type="prepend">
                        <InputGroupText>cm</InputGroupText>
                    </InputGroupAddon>
                    <FormFeedback  valid={talla.valid}>"Puedes ingresar un rut válido, de la forma 12234245-k"</FormFeedback>
                    </InputGroup>
                    </FormGroup>

                    {/* Sexo */}
                    <label>Sexo</label> 
                    <FormGroup>
                    <ButtonGroup size="sm" className="mr-2">
                        <Button theme="primary">Femenino</Button>
                        <Button theme="white">Masculino</Button>
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

                    {/* Fumador */}                    
                    <label>Fumador</label>
                    <FormGroup>
                    <ButtonGroup size="sm" className="mr-2">
                        <Button theme="primary">Si</Button>
                        <Button theme="white">No</Button>
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
                    <FormFeedback  valid={fumador.valid}>"Puedes ingresar un telefono que contenga solo números."</FormFeedback>
                    </FormGroup>

                    {/* INR Inicial */}
                    <FormGroup>
                    <label>INR Inicial</label>
                    <FormInput
                        value={inr_inicial.value}
                        valid={inr_inicial.valid}
                        invalid={inr_inicial.invalid}
                        //onChange={validTelefono}
                        size="lg"
                        className="mb-3"
                        placeholder="2.4" />
                    <FormFeedback  valid={inr_inicial.valid}>"Puedes ingresar un valor decimal."</FormFeedback>
                    </FormGroup>

                    {/* Patologia */}
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
                        {/*
                    <FormInput
                        value={patologia.value}
                        valid={patologia.valid}
                        invalid={patologia.invalid}
                        //onChange={validTelefono}
                        size="lg"
                        className="mb-3"
                        placeholder="934669676" />
                        */}
                    {/*<FormFeedback  valid={patologia.valid}>"Puedes ingresar un telefono que contenga solo números."</FormFeedback>*/}
                    </FormGroup>

                    {/* Hepatica */}                    
                    <label>Enfermedad Hepática</label>
                    <FormGroup>
                    <ButtonGroup size="sm" className="mr-2">
                        <Button theme="primary">Si</Button>
                        <Button theme="white">No</Button>
                    </ButtonGroup>
                    {/* 
                    <FormInput
                        value={hepatica.value}
                        valid={hepatica.valid}
                        invalid={hepatica.invalid}
                        //onChange={validTelefono}
                        size="lg"
                        className="mb-3"
                        placeholder="934669676" />
                    */}
                    <FormFeedback  valid={hepatica.valid}>"Debes ingresar una opción."</FormFeedback>
                    </FormGroup>

                    {/* Renal */}
                    <label>Renal</label>
                    <FormGroup>
                    <ButtonGroup size="sm" className="mr-2">
                        <Button theme="primary">Si</Button>
                        <Button theme="white">No</Button>
                    </ButtonGroup>
                    {/*
                    <FormInput
                        value={renal.value}
                        valid={renal.valid}
                        invalid={renal.invalid}
                        //onChange={validTelefono}
                        size="lg"
                        className="mb-3"
                        placeholder="934669676" />
                    */}
                    <FormFeedback  valid={renal.valid}>"Puedes ingresar un telefono que contenga solo números."</FormFeedback>
                    </FormGroup>
                </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => {
                  onSubmit({
                    'cod_paciente': cod_paciente.valid ? cod_paciente.value : {},
                    'edad': edad.valid ? edad.value : {},
                    'talla': talla.valid ? talla.value : {},
                    'sexo': sexo.valid === true ? sexo.value : (sexo.valid === null ? {}: ""),
                    'fumador':  fumador.valid === true ? fumador.value : (fumador.valid === null ? {} :"" ),
                    'inr_inicial': inr_inicial.valid === true ? inr_inicial.value : (inr_inicial.valid === null ? {}:""),
                    //'patologia': patologia.valid === true ? patologia.value : (patologia.valid === null ? {}:""),
                    'hepatica': hepatica.valid === true ? hepatica.value : (hepatica.valid === null ? {}:""),
                    'renal': renal.valid === true ? renal.value : (renal.valid === null ? {}:""),
                    });
                  setForm();
              }}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
    );
  }

  DataUserGeneral.propTypes = {
  onSubmit: PropTypes.func,
}

DataUserGeneral.defaultProps = {
  onSubmit: () => {},
}

export default DataUserGeneral;
