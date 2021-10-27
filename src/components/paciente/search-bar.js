import React, {useState} from 'react';
import {
    InputGroup,
    InputGroupAddon,
    FormInput,
    Button,
} from "shards-react";

import constants from "../../data/constants";

const SearchBar = ({onSearchSubmit}) => {
    const [search_input, setSearchInput] = useState({query: ''});

    function onChangeSearchInput(e) {
        var _cod = e.target.value.toUpperCase();
        setSearchInput((prevState) => ({...prevState, query: _cod}));
    }

    function onSubmitSearch(e) {
        if (e.key === "Enter") {
            onSearchSubmit({
                query: search_input.query,
            });
        }
    }

    return (
        <InputGroup seamless> {/* w-100 main-navbar__search d-none  d-md-flex d-lg-flex*/}

            {/*<InputGroupAddon type="prepend">*/}
            {/*    <InputGroupText>*/}
            {/*        <i className="material-icons">search</i>*/}
            {/*    </InputGroupText>*/}
            {/*</InputGroupAddon>*/}

            <FormInput
                value={search_input.query}
                onChange={onChangeSearchInput}
                id="#navbar-search-input"
                placeholder={constants.search_paciente}
                onKeyUp={onSubmitSearch}
            />

            <InputGroupAddon type="append">
                <Button
                    theme="secondary"
                    onClick={() => onSearchSubmit({
                        query: search_input.query,
                    })}
                >
                    <i className="material-icons">search</i>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default SearchBar;
