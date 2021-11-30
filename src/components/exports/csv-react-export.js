import React, { Component } from "react";
import { ExportCSV } from 'react-export-csv'

class ExportReactCSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            export_type: ["Excel", "PDF"],
            download: false,
            data: { "name": "test" }
        };

        this.toggle = this.toggle.bind(this);
    }

    generateCSV = () => {
        fetch("https://peacth-ac-backend.rj.r.appspot.com/api/patients/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result[0])
                    this.setState({
                        ...this.state,
                        download: true,
                        data: result
                    })
                    // setData((prevState) => ({ ...prevState, value: result }));
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    console.log("Tenemos problemas, porfavor intente más tarde.")
                    this.setState({
                        ...this.state,
                        download: false,
                    })
                }
            );
    }

    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    componentDidUpdate() {
        this.generateCSV()
    }

    render() {

        return (
            <ExportCSV
                header={[
                    {
                        name: "Col 1",
                        key: "col_1"
                    },
                    {
                        name: "Col 2",
                        key: "col_2"
                    }
                ]}
                data={this.state.data}
                separator={';'}
                callback={(res) => {
                    console.log({result: res})
                    /*
                    this.setState({
                        ...this.state,
                        download: !this.state.download,
                    })
                    */
                }}
                isDownload={false}
                filename={"test.csv"}
            />

        )
    }
}

export default ExportReactCSV;
