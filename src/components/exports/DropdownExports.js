import React, { Component } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from "shards-react";

import ExcelExport from './excel-export';
import PDFExport from './pdf-export';
import ExportCSV from './csv-export';
import ExportReactCSV from './csv-react-export';



class DropdownExports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            export_type: ["Excel", "PDF"],
        };

        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }


    render() {

        return (
            <div>
                {
                    this.props.type === 'excel' ?
                        <ExportCSV />
                        :
                        <PDFExport userdata={this.props.userdata} />
                }
            </div>
            /*<Dropdown open={this.state.open} toggle={this.toggle} group>
                <Button className="font-weight-bold">Exportar </Button>
                <DropdownToggle split />
                <DropdownMenu>
                    this.props.type === 'excel' ?
                       <DropdownItem><ExportCSV/> </DropdownItem>
                        :
                        <DropdownItem><PDFExport userdata={this.props.userdata} /></DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
            */
        );
    }
}

export default DropdownExports;
