import React, { useState } from 'react';
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  FormGroup,
  Card, Col
} from "shards-react";

import constants from "../../data/constants";

const SearchBar = ({onSearchSubmit}) => {
  const [search_input, setSearchInput] = useState({query:''});
  
  function onChangeSearchInput(e) {
    var _cod = e.target.value;
    setSearchInput((prevState) => ({...prevState, query: _cod}));
    
    //var input = document.getElementById("#navbar-search-input");
    //console.log(input);
    //console.log(`onChange - Search input : ${_cod}`);
  }
  
  function onSubmitSearch(e) {
    if(e.key == "Enter") {
      onSearchSubmit({
        query: search_input.query,
      });
    }
    //console.log(`onSubmit - Search input :  ${search_input.value}, e: ${e.input}`);
  }

 /*

    var input = document.getElementById("#navbar-search-input");
    console.log(input);
  
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        console.log("ENTER press");
        //document.getElementById("myBtn").click();
      }
    });
    */ 

  return (
   <Card small >
     <Col lg="11">
     <InputGroup seamless className="ml-3 main-navbar__search d-none  d-md-flex d-lg-flex w-100">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>

      <FormInput
        value={search_input.query}
        onChange={onChangeSearchInput}
        id="#navbar-search-input"
        className="navbar-search-input"
        placeholder={constants.search_paciente}
        onKeyUp={onSubmitSearch}
      />
    </InputGroup>
    </Col>
   </Card>
);};

export default SearchBar;