import React, { Component } from 'react';
import CalculatorComponent from './CalculatorComponent.js';
// import Display from './Display';
// import CalculatorDisplay from './CalculatorDisplay';
// import OperationalButton from './OperationalButton';
// import updateDisplay from './CalculatorDisplay';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: null,
      operator: null,
      operand2: null
    }
  }

  render(){
    // TODO: Introduce ButtonPanel component to store Button components
    // TODO: Button component should display one button HTML element
    return(
      <div className="App">
        <CalculatorComponent />
      </div>
    );
  }
}
