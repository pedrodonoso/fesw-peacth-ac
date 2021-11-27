import React, { useState } from 'react';
import {FormCheckbox,
} from "shards-react";

class SmallToggleExamples extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        checked: false,
        title: props.title,
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange() {
      this.setState({
        checked: !this.state.checked
      });
    }
  
    render() {
      return (
        <FormCheckbox
          toggle
          small
          checked={this.state.checked}
          onChange={this.handleChange}>
          {this.state.title}
        </FormCheckbox>
      );
    }
  }
  
  export default SmallToggleExamples;