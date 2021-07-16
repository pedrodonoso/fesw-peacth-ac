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
  ButtonGroup,
  CardHeader,
  ListGroupItem,
  ListGroup,
  InputGroupAddon,
  InputGroupText,
} from "shards-react";

const VariablesInfo = ({onSubmit }) => {

    const today = new Date();
    const [p_1, setp1] = useState({value:'',valid:false});
    const [p_2, setp2] = useState({value:'',valid:false});
    const [p_3, setp3] = useState({value:'',valid:false});
    const [p_4, setp4] = useState({value:'',valid:false});
    const [p_5, setp5] = useState({value:false,valid:false});
    const [p_6, setp6] = useState({value:'',valid:false});
    const [p_7, setp7] = useState({value:'',valid:false});
    const [p_8, setp8] = useState({value:'',valid:false});
    const [p_9, setp9] = useState({value:'',valid:false});
    const [p_10, setp10] = useState({value:false,valid:false});
    

    function setForm() {
        setp1((prevState) => ({...prevState, value: 0.0,valid:false})); {/* code: "T-004" */}       {/* age: 69 */}
        setp2((prevState) => ({...prevState, value: 0.0,valid:false}));        {/* weight: 80.5 */}
        setp3((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* height: 1.56 */}
        setp4((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* sex: "M" */}
        setp5((prevState) => ({...prevState, value: 0.0,valid:false}));  {/* "weight: 80" */}
        setp6((prevState) => ({...prevState, value: 0.0,valid:false})); {/* code: "T-004" */}       {/* age: 69 */}
        setp7((prevState) => ({...prevState, value: 0.0,valid:false}));        {/* weight: 80.5 */}
        setp8((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* height: 1.56 */}
        setp9((prevState) => ({...prevState, value: 0.0,valid:false}));       {/* sex: "M" */}
        setp10((prevState) => ({...prevState, value: 0.0,valid:false}));  {/* "weight: 80" */}
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

/*
 function handleSubmit(data) {
    console.log({nombre:"handleSubmit",data:data})
    var title = data.title
    var selected = data.selected
    var dic = genetics.value
    dic = { ...dic, [title] : selected}
    setGenetics((prevState) => ({...prevState, value: dic}))
    
    console.log(genetics.value)
  }

  function onChangecontrolDate(e) {
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
  */

  function onChangep1(e) {
    var _p1 = e.target.value;
    setp1((prevState) => ({...prevState, value: _p1}))
    if(validNumRegex.test(_p1)) {
      setp1((prevState) => ({...prevState, valid: true}))
    } else {
      setp1((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep2(e) {
    var _p2 = e.target.value;
    setp2((prevState) => ({...prevState, value: _p2}))
    if(validNumRegex.test(_p2)) {
      setp2((prevState) => ({...prevState, valid: true}))
    } else {
      setp2((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep3(e) {
    var _p3 = e.target.value;
    setp3((prevState) => ({...prevState, value: _p3}))
    if(validNumRegex.test(_p3)) {
      setp3((prevState) => ({...prevState, valid: true}))
    } else {
      setp3((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep4(e) {
    var _p4 = e.target.value;
    setp4((prevState) => ({...prevState, value: _p4}))
    if(validNumRegex.test(_p4)) {
      setp4((prevState) => ({...prevState, valid: true}))
    } else {
      setp4((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep5(e) {
    var _p5 = e.target.value;
    setp5((prevState) => ({...prevState, value: _p5}))
    if(validNumRegex.test(_p5)) {
      setp5((prevState) => ({...prevState, valid: true}))
    } else {
      setp5((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep6(e) {
    var _p6 = e.target.value;
    setp6((prevState) => ({...prevState, value: _p6}))
    if(validNumRegex.test(_p6)) {
      setp6((prevState) => ({...prevState, valid: true}))
    } else {
      setp6((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep7(e) {
    var _p7 = e.target.value;
    setp1((prevState) => ({...prevState, value: _p7}))
    if(validNumRegex.test(_p7)) {
      setp7((prevState) => ({...prevState, valid: true}))
    } else {
      setp7((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep8(e) {
    var _p8 = e.target.value;
    setp8((prevState) => ({...prevState, value: _p8}))
    if(validNumRegex.test(_p8)) {
      setp8((prevState) => ({...prevState, valid: true}))
    } else {
      setp8((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep9(e) {
    var _p9 = e.target.value;
    setp9((prevState) => ({...prevState, value: _p9}))
    if(validNumRegex.test(_p9)) {
      setp9((prevState) => ({...prevState, valid: true}))
    } else {
      setp9((prevState) => ({...prevState, valid: false}))
    }

    return true
  }

  function onChangep10(e) {
    var _p10 = e.target.value;
    setp10((prevState) => ({...prevState, value: _p10}))
    if(validNumRegex.test(_p10)) {
      setp10((prevState) => ({...prevState, valid: true}))
    } else {
      setp10((prevState) => ({...prevState, valid: false}))
    }

    return true
  }
  
    return(
    <Col sm="8" md="5">
    <strong className="text-muted d-block mb-2">Modificar variables fórmula farmacogenética</strong>
    <Form>
    <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Username" />
        </InputGroup>
      <Row form>
        <Col className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_1.valid}
            invalid={!p_1.valid}
            onChange={onChangep1}
          />
        </Col>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_2.valid}
            invalid={!p_2.valid}
            onChange={onChangep2}
          />
        </Col>
      </Row>
      <Row form>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_3.valid}
            invalid={!p_3.valid}
            onChange={onChangep3}
          />
        </Col>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_4.valid}
            invalid={!p_4.valid}
            onChange={onChangep4}
          />
        </Col>
      </Row>
      <Row form>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_5.valid}
            invalid={!p_5.valid}
            onChange={onChangep5}
          />
        </Col>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_6.valid}
            invalid={!p_6.valid}
            onChange={onChangep6}
          />
        </Col>
      </Row>
      <Row form>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_7.valid}
            invalid={!p_7.valid}
            onChange={onChangep7}
          />
        </Col>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_8.valid}
            invalid={!p_8.valid}
            onChange={onChangep8}
          />
        </Col>
      </Row>
      <Row form>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_9.valid}
            invalid={!p_9.valid}
            onChange={onChangep9}
          />
        </Col>
        <Col  className="form-group">
          <FormInput
            placeholder=""
            required
            valid={p_10.valid}
            invalid={!p_10.valid}
            onChange={onChangep10}
          />
        </Col>
      </Row>
      <Button
          theme="primary"
          className="mb-2 mr-1"
          >
            Agregar
        </Button>
    </Form>
  </Col>
  
    );
  }

  VariablesInfo.propTypes = {
  onSubmit: PropTypes.func,
}

VariablesInfo.defaultProps = {
  onSubmit: () => {},
}



export default VariablesInfo;