import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import AnalisisDosisGen from "../components/analisis/analisis-dosis-gen";
import AnalisisDisGen from "../components/analisis/analisis-dis-gen";
import {esES} from '@material-ui/core/locale';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import pacienteService from "../services/paciente.service";

function parseUser(data) {
    var dataGenerated = {
        age: data.age,
        code: data.code,
        CYP2C9_2: data.genetics.CYP2C9_2,
        CYP2C9_3: data.genetics.CYP2C9_3,
        VKORC1: data.genetics.VKORC1,
        height: data.height,
        imc: data.imc,
        initialDate: data.initialDate,
        initialDose: data.initialDose,
        initialINR: data.initialINR,
        sex: data.sex,
        totalDays: data.totalDays,
        weeklyDoseInRange: data.weeklyDoseInRange,
        weight: data.weight,
    }
    return dataGenerated;
}

const theme = createMuiTheme({
    palette: {
        primary: {main: '#1976d2'},
    },
}, esES);

class Analisis extends Component {
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
                    <Container className="main-content-container px-4">
                        <Row>
                            <Col lg="12" className="py-4">
                                {this.props.dosisGen ?
                                    <AnalisisDosisGen title="Análisis de la dosis calculada entre genotipos"/>
                                    :
                                    <AnalisisDisGen title="Análisis de la frecuencia de distribución de genotipos"/>
                                }
                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </Container>

        );
    }
};

export default Analisis;
