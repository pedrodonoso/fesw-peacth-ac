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
                                    <AnalisisDisGen title="Análisis de la frecuencia de distribución de genotipos "/>
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
