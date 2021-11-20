import React, {Component} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "shards-react";

import ExcelExport from './excel-export';
import PDFExport from './pdf-export';

class DropdownExports extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {open: false, export_type: ["Excel", "PDF"]};
    }

    toggle() {
        this.setState(prevState => {
            return {open: !prevState.open};
        });
    }

    /*execute(input) {
        input = input.target.innerText;

        if(input == this.state.export_type[0]) { //excel
            <ExcelExport/>
        } else {
            <PDFExport/>
        }
    }*/

    render() {
        return (
            <Dropdown open={this.state.open} toggle={this.toggle}>
                <DropdownToggle>Exportar</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><ExcelExport/></DropdownItem>
                    <DropdownItem><PDFExport/></DropdownItem>
                    {/*
                    this.state.export_type.map((item) => {
                        return (
                            <DropdownItem onClick={(e)=>this.execute(e)} > {insertion}</DropdownItem>
                        )
                    })
                */}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownExports;
