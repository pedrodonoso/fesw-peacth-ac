import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Container, Navbar} from "shards-react";

import NavbarNavItems from "./NavbarNav/NavbarNavItems";
import NavbarToggle from "./NavbarToggle";

import NavbarNav from "../MainNavbarDefault/NavbarNav/NavbarNav"

const ActualizarNavbar = ({ stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch right">
          <NavbarNavItems/>
          <NavbarToggle/>
          <NavbarNav />
        </Navbar>
      </Container>
    </div>
  );
};

ActualizarNavbar.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

ActualizarNavbar.defaultProps = {
    stickyTop: true
};

export default ActualizarNavbar;
