import React, { useState } from 'react';
import {
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput
} from "shards-react";

import constants from "../../../data/constants";

export default (onSubmit) => {
  const [search_input, setSearchInput] = useState({value:''});
  
  function onChangeSearchInput(e) {
    var _cod = e.target.value;
    setSearchInput((prevState) => ({...prevState, value: _cod}));
    console.log(`onChange - Search input : ${_cod}`);
  }
  
  function onSubmitSearch(e) {
    console.log(`onSubmit - Search input :  ${search_input.value}, e: ${e}`);

  }

  return (
   // <input type="text" placeholder={constants.search_paciente} onKeyPress={onSubmitSearch}/>
  <Form  onKeyPress={console.log("FormOnSubmit - Search input :" + search_input.value)} className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup onKeyPress={console.log("InputGroupOnSubmit - Search input :" + search_input.value)} seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>

      <FormInput
        value={search_input.value}
        onChange={onChangeSearchInput}
        className="navbar-search"
        placeholder={constants.search_paciente}
        //onKeyPress={() => {onSubmit({input: search_input.value})}}
        onKeyPress={onSubmitSearch}
      />
    </InputGroup>
    <a>input</a>
    
  </Form>
);};
