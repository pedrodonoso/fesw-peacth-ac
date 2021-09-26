import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col} from "shards-react";
import PacienteNavbar from "../components/layout/PacienteNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const CustomPaciente = ({children, noNavbar, noFooter, footer_props, navbar_props, hideLogoText}) => (
    <Container fluid>
        <Row>
            <MainSidebar hideLogoText={hideLogoText}/>
            <Col
                className="main-content p-0"
                lg={{size: 10, offset: 2}}
                md={{size: 9, offset: 3}}
                sm="12"
                tag="main"
            >
                {!noNavbar && <PacienteNavbar {...navbar_props} />}
                {children}
                {!noFooter && <MainFooter {...footer_props} />}
            </Col>
        </Row>
    </Container>
);

CustomPaciente.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

CustomPaciente.defaultProps = {
    noNavbar: false,
    noFooter: false,
};

export default CustomPaciente;
