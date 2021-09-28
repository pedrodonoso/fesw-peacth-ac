import React, { useState } from 'react';
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  FormGroup,
  CardBody,
  Card, Col, Row, Button, ButtonGroup, ButtonToolbar
} from "shards-react";

import constants from "../../data/constants";

const SearchBar = ({ onSearchSubmit }) => {
  const [search_input, setSearchInput] = useState({ query: '' });

  function onChangeSearchInput(e) {
    var _cod = e.target.value;
    setSearchInput((prevState) => ({ ...prevState, query: _cod }));
  }

  function onSubmitSearch(e) {
    if (e.key == "Enter") {
      onSearchSubmit({
        query: search_input.query,
      });
    }
  }
  return (
    <InputGroup seamless className=" ml-3 main-navbar__search d-none  d-md-flex d-lg-flex"> {/* w-100 main-navbar__search d-none  d-md-flex d-lg-flex*/}

      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>

      <FormInput
        value={search_input.query}
        onChange={onChangeSearchInput}
        id="#navbar-search-input"
        placeholder={constants.search_paciente}
        onKeyUp={onSubmitSearch}
      />

      <InputGroupAddon type="append">
        <Button
          theme="light"
          onClick={() => onSearchSubmit({
            query: search_input.query,
          })}
        >
          <i className="material-icons" style={{ color: "#1976d2" }}>send</i>
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchBar;