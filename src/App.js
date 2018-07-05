import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
// import CalculatorDisplay from './CalculatorDisplay';
// import OperationalButton from './OperationalButton';
import updateDisplay from './CalculatorDisplay';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: null,
      operator: null,
      operand2: null
    }
    this.updateDisplayApp = this.updateDisplayApp.bind(this);
  }

   updateDisplayApp(event){
     // console.log("this is the event",event);
     // console.log("This is CalculatorDisplay", CalculatorDisplay);
      updateDisplay(event);

  }



  render(){
    // TODO: Introduce ButtonPanel component to store Button components
    // TODO: Button component should display one button HTML element
    return(
      <div className="App">
        <Display inputs={this.state}/>
        <Button triggerDisplayUpdate = {this.updateDisplayApp}/>
      </div>
    );
  }
}
