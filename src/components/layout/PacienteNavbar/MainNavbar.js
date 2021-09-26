import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Container, Navbar, Row} from "shards-react";

import NavbarNavItems from "./NavbarNav/NavbarNavItems";
import NavbarToggle from "./NavbarToggle";
import NavbarSearch from "./NavbarSearch";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );
  function handleSearchSubmit(data) {
    console.log(`handleSearchSubmit : ${data.input}`);
  }

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch right">
          <NavbarSearch onSubmit={handleSearchSubmit}/>
          <NavbarToggle/>
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
    stickyTop: true
};

export default MainNavbar;
