import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col, Navbar} from "shards-react";
import NavbarToggle from "../components/layout/MainNavbar/NavbarToggle";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const CustomGeneral = ({children, noNavbar, noFooter, footer_props, navbar_props, hideLogoText}) => (
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
                <div>
                    <Container className="p-0">
                        <Navbar type="light" className="align-items-stretch right">
                            <NavbarToggle/>
                        </Navbar>
                    </Container>
                </div>
                {children}
                {!noFooter && <MainFooter {...footer_props} />}
            </Col>
        </Row>
    </Container>
);

CustomGeneral.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

CustomGeneral.defaultProps = {
    noNavbar: false,
    noFooter: false,
};

export default CustomGeneral;
