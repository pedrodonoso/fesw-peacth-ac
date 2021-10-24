import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import ActualizarNavbar from "../components/layout/ActualizarNavbar/ActualizarNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const CustomActualizar = ({ children, noNavbar, noFooter, footer_props, navbar_props,hideLogoText}) => (
  <Container fluid>
    <Row>
      <MainSidebar hideLogoText={hideLogoText}/>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <ActualizarNavbar {...navbar_props} />}
        {children}
        {!noFooter && <MainFooter {...footer_props} />}
      </Col>
    </Row>
  </Container>
);

CustomActualizar.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

CustomActualizar.defaultProps = {
  noNavbar: false,
  noFooter: false,
};

export default CustomActualizar;
