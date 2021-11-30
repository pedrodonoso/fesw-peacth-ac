import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
} from "shards-react";

import Compare from "../components/comparar/compare";
import { esES } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
        primary: { main: '#1976d2' },
    },
}, esES);

class Comparar extends Component {

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <ThemeProvider theme={theme}>

                    <Container fluid className="main-content-container px-4">
                        <Row >
                            <Col lg="12" className="py-4">
                                <Compare/>

                            </Col>
                        </Row>
                    </Container>
                </ThemeProvider>
            </Container>

        );
    }
}

export default Comparar;
