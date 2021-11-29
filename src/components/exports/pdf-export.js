import React, { useState } from 'react';
import jsPDF from 'jspdf';

class PDFExport extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            user_data: this.props.userdata,
        }
    };

    generateDataUser(doc, user) {
        
        //var nombre = "Juan Carlos Rojas Naranjo"
        var codigo = user.code
        var edad = user.age.toString()
        var peso = user.weight.toString()
        var talla = user.height.toString()
        var inr_inicial = user.initialINR.toString()
        var sexo = user.sex === "F" ? "Femenino" : "Masculino"
        var c_2 = user.genetics.CYP2C9_2
        var c_3 = user.genetics.CYP2C9_3
        var vk = user.genetics.VKORC1
        var dosis_inicial = user.initialDose.toString()
      
        var line1 = 20
        var line2 = 30
        var line3 = 40
        var line4 = 50
        var line5 = 60
        var line6 = 70
        var line7 = 80
        var line8 = 90
        var line9 = 100
        var line10 = 110
        var line11 = 120

        //doc.text("Nombre : ", 20, line1).setFont(undefined, 'bold');
        //doc.text(nombre, 80, line1).setFont(undefined, 'normal');
        doc.text("Codigo del Paciente : ", 20, line2).setFont(undefined, 'bold');
        doc.text(codigo, 80, line2).setFont(undefined, 'normal');

        var row_line_1 = line3
        doc.line(40, row_line_1, 170, row_line_1); // horizontal line

        doc.text("Edad : ", 20, line4).setFont(undefined, 'bold');
        doc.text(edad, 60, line4).setFont(undefined, 'normal');
        doc.text("años", 75, line4).setFont(undefined, 'normal');
        doc.text("Peso : ", 110, line4).setFont(undefined, 'bold');
        doc.text(peso, 140, line4).setFont(undefined, 'normal');
        doc.text("Kg", 150, line4).setFont(undefined, 'normal');
        doc.text("Talla : ", 20, line5).setFont(undefined, 'bold');
        doc.text(talla, 60, line5).setFont(undefined, 'normal');
        doc.text("m", 75, line5).setFont(undefined, 'normal');
        doc.text("Sexo : ", 110, line5).setFont(undefined, 'bold');
        doc.text(sexo, 140, line5).setFont(undefined, 'normal');
        doc.text("INR Inicial : ", 20, line6).setFont(undefined, 'bold');
        doc.text(inr_inicial, 60, line6).setFont(undefined, 'normal');

        var row_line_2 = line7
        doc.line(40, row_line_2, 170, row_line_2); // horizontal line
        
        doc.text("CYP2C9-2 : ", 20, line8).setFont(undefined, 'bold');
        doc.text(c_2, 60, line8).setFont(undefined, 'normal');
        doc.text("CYP2C9-3 : ", 100, line8).setFont(undefined, 'bold');
        doc.text(c_3, 140, line8).setFont(undefined, 'normal');
        doc.text("VKORC1 : ", 20, line9).setFont(undefined, 'bold');
        doc.text(vk, 60, line9).setFont(undefined, 'normal');

        var row_line_2 = line10
        doc.line(40, row_line_2, 170, row_line_2); // horizontal line
        
        
        doc.text("Dosis Inicial : ", 20, line11).setFont(undefined, 'bold');
        doc.text(dosis_inicial, 60, line11).setFont(undefined, 'normal');
        
    }

    generateTable(doc, historic) {

        /*var historicINR = {
            "dates": [
                "30/11/2009",
                "30/12/2009",
                "30/01/2010",
                "30/03/2010"
            ],
            "inrValues": [
                3.4,
                3.7,
                3.2,
                3.0
            ],
            "doseValues": [
                0,
                66.0,
                50.0,
                40.0
            ]
        }
        */
        var historicINR = historic;

        var getData = function(original_data,headers) {
            var result = [];
            var length_data = original_data[headers[0]].length;
            // console.log(headers);
            // console.log(length_data);

            var dates_title = headers[0];
            var inrValues_title = headers[1];
            var doseValues_title = headers[2];
        
        
            var dates = original_data[dates_title];
            var inrValues = original_data[inrValues_title];
            var doseValues = original_data[doseValues_title];

            for (var i = 0; i < length_data; i += 1) {
                var data_result_item = { 
                    id : (i + 1).toString(),
                    [dates_title] : dates[i],
                    [inrValues_title] : inrValues[i].toString(),
                    [doseValues_title] : doseValues[i].toString(),
                }
                
                // data_result_item.id = (i + 1).toString();
                result.push(Object.assign({}, data_result_item));
            }
            return result;
          };
          
          function createHeaders(keys, keys_alt) {
            var result = [];
            for (var i = 0; i < keys.length; i += 1) {
              result.push({
                id: keys[i],
                name: keys[i],
                prompt: keys_alt[i], //titulo que se muestra
                align: "center",
                padding: 0
              });
            }
            return result;
          }
          
        var _headers = Object.keys(historicINR);
        
        //dejar los espacios al final para que se ajuste el ancho de la celda
        var _headers_alt = ["Fecha ","Valor INR ", "Dosis recetada "]; 

        var _headers_table = createHeaders(_headers,_headers_alt);
        doc.table(50, 20, getData(historicINR,_headers), _headers_table, { autoSize: true });
    }
    generatePDF = (e) => {
        ////var doc = new jsPDF('p', 'pt');        
        var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "p" });

        console.log("generate PDF")

        var user = this.state.user_data.clinic
        var historic = this.state.user_data.historicINR 

        this.generateDataUser(doc, user);

        doc.addPage("a4", "p"); //letter

        this.generateTable(doc, historic);

        doc.save('demo.pdf')
        
        //// Set the document to automatically print via JS
        //// doc.autoPrint();
        //// doc.autoPrint({variant: 'javascript'});
        
    }   
    
   render() {
      return (
         <div onClick={this.generatePDF}> PDF </div>
      );
   }
}

export default PDFExport;