import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const  DropdownOptions =({options,values,title,onSubmit}) => {
    function onSelect(e) {
        var selection = e.target.value
        onSubmit({
            'selected'  : selection,
            'title'     : title,
        })
    }

    return (
        <InputGroup className="mb-3">
            <InputGroupAddon type="prepend">
                <InputGroupText>{title}</InputGroupText>
            </InputGroupAddon>
            <FormSelect onChange={onSelect}>
                {options.map(function(option, i){
                    return <option value={values[i]}>{option}</option>;
                })}
            </FormSelect>
            {/*
             onSubmit({
                  'tag': tag.valid  ? tag.tag : {}, //TODO:verlo IMPORTANTE
                  'idlist': lista.lista  === [] ? {} : lista.lista //TODO:verlo IMPORTANTE
                })}
            */}
        </InputGroup>
    );
}

export default DropdownOptions;
