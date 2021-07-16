import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col , Navbar} from "shards-react";
import NavbarToggle from "../components/layout/MainNavbar/NavbarToggle";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const Custom = ({ children, noNavbar, noFooter, footer_props}) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter {...footer_props} />}
      </Col>
    </Row>
  </Container>
);

Custom.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

Custom.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default Custom;
