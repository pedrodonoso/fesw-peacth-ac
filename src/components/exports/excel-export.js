import React from "react";
import ReactExport from "react-export-excel";
import {
    Button
} from "shards-react";

import pacienteService from "../../services/paciente.service";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];

function parseUser(data) {
    var dataGenerated = {
        age: data.age,
        code: data.code,
        CYP2C9_2: data.genetics.CYP2C9_2,
        CYP2C9_3: data.genetics.CYP2C9_3,
        VKORC1: data.genetics.VKORC1,
        height: data.height,
        imc: data.imc,
        initialDate: data.initialDate,
        initialDose: data.initialDose,
        initialINR: data.initialINR,
        sex: data.sex,
        totalDays: data.totalDays,
        weeklyDoseInRange: data.weeklyDoseInRange,
        weight: data.weight,
    }
    return dataGenerated;
}

class ExcelExport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            export_type: ["Excel", "PDF"],
            data: {}
        };
    }
    render() {
        return (
            <ExcelFile element={<div>Excel</div>}>
                <ExcelSheet data={this.props.data} name="Pacientes">
                    <ExcelColumn label="Código Paciente" value="code" />
                    <ExcelColumn label="Fecha Inicial" value="initialDate" />
                    <ExcelColumn label="Edad" value="age" />
                    <ExcelColumn label="Altura" value="height" />
                    <ExcelColumn label="Peso" value="weight" />
                    <ExcelColumn label="Género" value="sex" />
                    <ExcelColumn label="IMC" value="imc" />
                    <ExcelColumn label="Dosis Inicial" value="initialDose" />
                    <ExcelColumn label="INR Inicial" value="initialINR" />
                    <ExcelColumn label="CYP2C9_2" value="CYP2C9_2" />
                    <ExcelColumn label="CYP2C9_3" value="CYP2C9_3" />
                    <ExcelColumn label="VKORC1" value="VKORC1" />
                    <ExcelColumn label="Total Días" value="totalDays" />
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
export default ExcelExport;