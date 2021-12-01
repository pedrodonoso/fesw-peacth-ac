import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Navbar } from "shards-react";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const CustomVoid = ({ children, noNavbar, noFooter, footer_props, navbar_props, hideLogoText }) => (
    <Container fluid>
        <Row>
                       {!noNavbar && <MainNavbar />}
            <Col>
                <Row>
                    {children}
                </Row>
                <Row>
                    {!noFooter && <MainFooter {...footer_props} />}
                </Row>

            </Col>
        </Row>
    </Container>
);

CustomVoid.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

CustomVoid.defaultProps = {
    noNavbar: false,
    noFooter: false,
};

export default CustomVoid;
