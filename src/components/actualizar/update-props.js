import React, {useState} from 'react';
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
    CardHeader,
} from "shards-react";

const UpdateProps = ({onSubmit}) => {
    const [p_0, setP0] = useState({value: '', valid: undefined});
    const [p_men, setPMen] = useState({value: '', valid: undefined});
    const [p_age, setPAge] = useState({value: '', valid: undefined});
    const [p_initialINR, setPInitialINR] = useState({value: '', valid: undefined});
    const [p_imc, setPImc] = useState({value: '', valid: undefined});
    const [p_CYP2C9_12, setPCYP2C912] = useState({value: '', valid: undefined});
    const [p_CYP2C9_13, setPCYP2C913] = useState({value: '', valid: undefined});
    const [p_CYP2C9_33, setPCYP2C933] = useState({value: '', valid: undefined});
    const [p_VKORC1_GA, setPVKORC1GA] = useState({value: '', valid: undefined});
    const [p_VKORC1_AA, setPVKORC1AA] = useState({value: '', valid: undefined});

    function setForm() {
        setP0((prevState) => ({...prevState, value: '', valid: undefined}));
        setPMen((prevState) => ({...prevState, value: '', valid: undefined}));
        setPAge((prevState) => ({...prevState, value: '', valid: undefined}));
        setPInitialINR((prevState) => ({...prevState, value: '', valid: undefined}));
        setPImc((prevState) => ({...prevState, value: '', valid: undefined}));
        setPCYP2C912((prevState) => ({...prevState, value: '', valid: undefined}));
        setPCYP2C913((prevState) => ({...prevState, value: '', valid: undefined}));
        setPCYP2C933((prevState) => ({...prevState, value: '', valid: undefined}));
        setPVKORC1GA((prevState) => ({...prevState, value: '', valid: undefined}));
        setPVKORC1AA((prevState) => ({...prevState, value: '', valid: undefined}));
    }

    const validNumRegex =
        RegExp(/^([0-9])+[\.]?([0-9])*$/i);

    function allValid() {
        return (p_0.valid || !(p_0.valid === undefined)) && (p_men.valid || !(p_men.valid === undefined)) && (p_age.valid || !(p_age.valid === undefined)) && (p_initialINR.valid || !(p_initialINR.valid === undefined)) && (p_imc.valid || !(p_imc.valid === undefined)) && (p_CYP2C9_12.valid || !(p_CYP2C9_12.valid === undefined)) && (p_CYP2C9_13.valid || !(p_CYP2C9_13.valid === undefined)) && (p_CYP2C9_33.valid || !(p_CYP2C9_33.valid === undefined)) && (p_VKORC1_GA.valid || !(p_VKORC1_GA.valid === undefined)) && (p_VKORC1_AA.valid || !(p_VKORC1_AA.valid === undefined));
    }

    function onChangeP0(e) {
        var _po = e.target.value;
        setP0((prevState) => ({...prevState, value: _po}))
        if (validNumRegex.test(_po)) {
            setP0((prevState) => ({...prevState, valid: true}))
        } else {
            setP0((prevState) => ({...prevState, valid: false}))
        }
        if (_po === '') {
            setP0((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePMen(e) {
        var _pmen = e.target.value;
        setPMen((prevState) => ({...prevState, value: _pmen}))
        if (validNumRegex.test(_pmen)) {
            setPMen((prevState) => ({...prevState, valid: true}))
        } else {
            setPMen((prevState) => ({...prevState, valid: false}))
        }
        if (_pmen === '') {
            setPMen((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePAge(e) {
        var _page = e.target.value;
        setPAge((prevState) => ({...prevState, value: _page}))
        if (validNumRegex.test(_page)) {
            setPAge((prevState) => ({...prevState, valid: true}))
        } else {
            setPAge((prevState) => ({...prevState, valid: false}))
        }
        if (_page === '') {
            setPAge((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePInitialINR(e) {
        var _pinitialinr = e.target.value;
        setPInitialINR((prevState) => ({...prevState, value: _pinitialinr}))
        if (validNumRegex.test(_pinitialinr)) {
            setPInitialINR((prevState) => ({...prevState, valid: true}))
        } else {
            setPInitialINR((prevState) => ({...prevState, valid: false}))
        }
        if (_pinitialinr === '') {
            setPInitialINR((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePImc(e) {
        var _pimc = e.target.value;
        setPImc((prevState) => ({...prevState, value: _pimc}))
        if (validNumRegex.test(_pimc)) {
            setPImc((prevState) => ({...prevState, valid: true}))
        } else {
            setPImc((prevState) => ({...prevState, valid: false}))
        }
        if (_pimc === '') {
            setPImc((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePCYP2C912(e) {
        var _p12 = e.target.value;
        setPCYP2C912((prevState) => ({...prevState, value: _p12}))
        if (validNumRegex.test(_p12)) {
            setPCYP2C912((prevState) => ({...prevState, valid: true}))
        } else {
            setPCYP2C912((prevState) => ({...prevState, valid: false}))
        }
        if (_p12 === '') {
            setPCYP2C912((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePCYP2C913(e) {
        var _p13 = e.target.value;
        setPCYP2C913((prevState) => ({...prevState, value: _p13}))
        if (validNumRegex.test(_p13)) {
            setPCYP2C913((prevState) => ({...prevState, valid: true}))
        } else {
            setPCYP2C913((prevState) => ({...prevState, valid: false}))
        }
        if (_p13 === '') {
            setPCYP2C913((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangePCYP2C933(e) {
        var _p33 = e.target.value;
        setPCYP2C933((prevState) => ({...prevState, value: _p33}))
        if (validNumRegex.test(_p33)) {
            setPCYP2C933((prevState) => ({...prevState, valid: true}))
        } else {
            setPCYP2C933((prevState) => ({...prevState, valid: false}))
        }
        if (_p33 === '') {
            setPCYP2C933((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangeVKORC1GA(e) {
        var _pga = e.target.value;
        setPVKORC1GA((prevState) => ({...prevState, value: _pga}))
        if (validNumRegex.test(_pga)) {
            setPVKORC1GA((prevState) => ({...prevState, valid: true}))
        } else {
            setPVKORC1GA((prevState) => ({...prevState, valid: false}))
        }
        if (_pga === '') {
            setPVKORC1GA((prevState) => ({...prevState, valid: undefined}))
        }
    }

    function onChangeVKORC1AA(e) {
        var _paa = e.target.value;
        setPVKORC1AA((prevState) => ({...prevState, value: _paa}))
        if (validNumRegex.test(_paa)) {
            setPVKORC1AA((prevState) => ({...prevState, valid: true}))
        } else {
            setPVKORC1AA((prevState) => ({...prevState, valid: false}))
        }
        if (_paa === '') {
            setPVKORC1AA((prevState) => ({...prevState, valid: undefined}))
        }
    }

    return (
        <React.Fragment>
            <Col>
                <Row>
                    <Col lg="6" className="mb-4">
                        {/* Data general */}
                        <Card small lg="6">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Actualizar parametros de algoritmo</h6>
                            </CardHeader>
                            <CardBody>
                                <Form className="add-new-post">
                                    <Row>
                                        <Col>
                                            {/* Codigo Paciente */}
                                            <FormGroup check={false}>
                                                <label>Coeficiente inicial</label>
                                                <FormInput
                                                    value={p_0.value}
                                                    valid={p_0.valid}
                                                    invalid={p_0.valid === undefined ? undefined : !p_0.valid}
                                                    onChange={onChangeP0}
                                                    size="lg"
                                                    className="mb-3"
                                                    placeholder="3.042"/>
                                                <FormFeedback>Debes ingresar un número decimal, con punto. EJ:
                                                    1.0</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            {/* Dosis de llegada */}
                                            <FormGroup>
                                                <label>Coeficiente Hombre</label>
                                                <InputGroup className="mb-3">
                                                    <FormInput
                                                        value={p_men.value}
                                                        valid={p_men.valid}
                                                        invalid={p_men.valid === undefined ? undefined : !p_men.valid}
                                                        onChange={onChangePMen}
                                                        size="lg"
                                                        //className="mb-3 "
                                                        placeholder="0.169"
                                                    />
                                                    <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                        1.0 </FormFeedback>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>

                                        {/* Nueva dosis */}
                                        <Col>
                                            <FormGroup>
                                                <label>Coeficiente Edad</label>
                                                <InputGroup className="mb-3">
                                                    <FormInput
                                                        value={p_age.value}
                                                        valid={p_age.valid}
                                                        invalid={p_age.valid === undefined ? undefined : !p_age.valid}
                                                        onChange={onChangePAge}
                                                        size="lg"
                                                        //className="mb-3"
                                                        placeholder="0.0021"/>
                                                    <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                        1.0 </FormFeedback>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            {/* INR de llegada */}
                                            <FormGroup>
                                                <label>Coeficiente InitialINR</label>
                                                <InputGroup className="mb-3">
                                                    <FormInput
                                                        value={p_initialINR.value}
                                                        valid={p_initialINR.valid}
                                                        invalid={p_initialINR.valid === undefined ? undefined : !p_initialINR.valid}
                                                        onChange={onChangePInitialINR}
                                                        size="lg"
                                                        //className="mb-3"
                                                        placeholder="0.044"/>
                                                    <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                        1.0 </FormFeedback>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {/* Nueva dosis */}
                                        <Col>
                                            <FormGroup>
                                                <label>Coeficiente IMC</label>
                                                <InputGroup className="mb-3">
                                                    <FormInput
                                                        value={p_imc.value}
                                                        valid={p_imc.valid}
                                                        invalid={p_imc.valid === undefined ? undefined : !p_imc.valid}
                                                        onChange={onChangePImc}
                                                        size="lg"
                                                        //className="mb-3"
                                                        placeholder="0.013"/>
                                                    <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                        1.0 </FormFeedback>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            {/* INR de llegada */}
                                            <FormGroup>
                                                <label>Coeficiente CYP2C9 *1/*2</label>
                                                <InputGroup className="mb-3">
                                                    <FormInput
                                                        value={p_CYP2C9_12.value}
                                                        valid={p_CYP2C9_12.valid}
                                                        invalid={p_CYP2C9_12.valid === undefined ? undefined : !p_CYP2C9_12.valid}
                                                        onChange={onChangePCYP2C912}
                                                        size="lg"
                                                        //className="mb-3"
                                                        placeholder="0.106"/>
                                                    <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                        1.0 </FormFeedback>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" className="mb-4">
                        <Card small lg="6">
                            <CardBody>

                                <Row>
                                    {/* Nueva dosis */}
                                    <Col>
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *1/*3</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_CYP2C9_13.value}
                                                    valid={p_CYP2C9_13.valid}
                                                    invalid={p_CYP2C9_13.valid === undefined ? undefined : !p_CYP2C9_13.valid}
                                                    onChange={onChangePCYP2C913}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.334"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        {/* INR de llegada */}
                                        <FormGroup>
                                            <label>Coeficiente CYP2C9 *3/*3</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_CYP2C9_33.value}
                                                    valid={p_CYP2C9_33.valid}
                                                    invalid={p_CYP2C9_33.valid === undefined ? undefined : !p_CYP2C9_33.valid}
                                                    onChange={onChangePCYP2C933}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.784"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    {/* Nueva dosis */}
                                    <Col>
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *G/*A </label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_VKORC1_GA.value}
                                                    valid={p_VKORC1_GA.valid}
                                                    invalid={p_VKORC1_GA.valid === undefined ? undefined : !p_VKORC1_GA.valid}
                                                    onChange={onChangeVKORC1GA}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.26"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        {/* INR de llegada */}
                                        <FormGroup>
                                            <label>Coeficiente VKORC1 *A/*A</label>
                                            <InputGroup className="mb-3">
                                                <FormInput
                                                    value={p_VKORC1_AA.value}
                                                    valid={p_VKORC1_AA.valid}
                                                    invalid={p_VKORC1_AA.valid === undefined ? undefined : !p_VKORC1_AA.valid}
                                                    onChange={onChangeVKORC1AA}
                                                    size="lg"
                                                    //className="mb-3"
                                                    placeholder="0.705"/>
                                                <FormFeedback> Debes ingresar un número decimal, con punto. EJ:
                                                    1.0 </FormFeedback>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12" style={{
                        position: "sticky",
                        bottom: 0,
                        zIndex: 1
                    }}>
                        <Card small lg="12" className="mb-2 border-primary" style={{border: '#5A6169'}}>
                            <CardBody>
                                <Row>
                                    <Col xs="6" md="6">
                                        <InputGroup className="mb-2">
                                            <Button
                                                theme="primary"
                                                className="font-weight-bold"
                                                onClick={(event) => {
                                                    onSubmit({
                                                        valid: allValid(),
                                                        vars: {
                                                            "p_0": p_0.valid ? parseFloat(p_0.value) : 0.0,
                                                            "p_men": p_men.valid ? parseFloat(p_men.value) : 0.0,
                                                            "p_age": p_age.valid ? parseFloat(p_age.value) : 0.0,
                                                            "p_initialINR": p_initialINR.valid ? parseFloat(p_initialINR.value) : 0.0,
                                                            "p_imc": p_imc.valid ? parseFloat(p_imc.value) : 0.0,
                                                            "p_CYP2C9_12": p_CYP2C9_12.valid ? parseFloat(p_CYP2C9_12.value) : 0.0,
                                                            "p_CYP2C9_13": p_CYP2C9_13.valid ? parseFloat(p_CYP2C9_13.value) : 0.0,
                                                            "p_CYP2C9_33": p_CYP2C9_33.valid ? parseFloat(p_CYP2C9_33.value) : 0.0,
                                                            "p_VKORC1_GA": p_VKORC1_GA.valid ? parseFloat(p_VKORC1_GA.value) : 0.0,
                                                            "p_VKORC1_AA": p_VKORC1_AA.valid ? parseFloat(p_VKORC1_AA.value) : 0.0,
                                                        }
                                                    });

                                                }}
                                            >
                                                Guardar parámetros
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xs="6" md="6" className="text-right">
                                        <Button
                                            theme="secondary"
                                            className="mb-2"
                                            onClick={(event) => {
                                                setForm()
                                            }}>
                                            Limpiar campos
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
}

UpdateProps.propTypes = {
    onSubmit: PropTypes.func,
}

UpdateProps.defaultProps = {
    onSubmit: () => {
    },
}


export default UpdateProps;

