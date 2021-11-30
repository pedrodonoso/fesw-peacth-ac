

import React from 'react';
import { CSVLink } from 'react-csv';
import json2csv from "json2csv";
import axios from 'axios';
import { api } from '../../helpers';
import {
  Button,
  ButtonGroup,
  Row
} from "shards-react";
import pacienteService from '../../services/paciente.service';
import {
  CircularProgress
} from "@material-ui/core";

const headers = [
  { label: "Código Paciente", key: "code" },
  { label: "Fecha Inicial", key: "initialDate" },
  { label: "Edad", key: "age" },
  { label: "Altura", key: "height" },
  { label: "Peso", key: "weight" },
  { label: "Género", key: "sex" },
  { label: "IMC", key: "imc" },
  { label: "Dosis Inicial", key: "initialDose" },
  { label: "INR Inicial", key: "initialINR" },
  { label: "CYP2C9_2", key: "genetics.CYP2C9_2" },
  { label: "CYP2C9_3", key: "genetics.CYP2C9_3" },
  { label: "VKORC1", key: "genetics.VKORC1" },
  { label: "Total Días", key: "totalDays" }
];

class ExportCSV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "inicial",
      disabled: true
    }
  }
  /*
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

*/
  generateData() {
    pacienteService.getAllPatients()
      .then((response) => {
        console.log("ejecutado  ")
        console.log("DATA: ", response.data)

        this.setState({
          ...this.state,
          data: response.data,
          disabled: false,
        });

      })

      .catch((error) => {
        /*
                this.setState({
                  ...this.state,
                  data: "error",
                  disabled: true,
              });
              */
      })
  }

  componentDidMount() {
    this.generateData();
  }
  render() {

    return (
      <ButtonGroup>
        <CSVLink
          data={this.state.data}
          headers={headers}
          filename='reporte.csv'
          asyncOnClick={true}
        >
          <Button
            disabled={this.state.disabled}
          >
            Exportar CSV
          </Button>
        </CSVLink>

        <Button
          disabled={!this.state.disabled}
          onClick={this.generateData}
        >
          {
            this.state.disabled ?
              <CircularProgress size={12} color={'info'} />
              :
              <i class="material-icons">refresh</i>
          }
        </Button>
      </ButtonGroup>
    );
  }
}

//https://www.youtube.com/watch?v=o4JOysBWeos

export default ExportCSV;