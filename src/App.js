import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import OperationalButton from './OperationalButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: null,
      operator: null,
      operand2: null
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(event) {
    var inputNumber = event.target.innerHTML; // whatever I click in the calculator will be saved in inputNumber
    //event.target.innerHTML gives me a string.
    //fetching = get something
    if(parseInt(inputNumber)>= 0 && parseInt(inputNumber)<= 9){
      if(!this.state.operand1){ // it gives true/false
        this.setState(
          {operand1: parseInt(event.target.innerHTML)}, // state object as a first parameter
          function() {console.log(this.state)} // is a callback function, once the first object is completed the other ones works
        )
      }
      else if(this.state.operand1 && !this.state.operator) {
        console.log(this.state.operand1);
        console.log(inputNumber);
        this.setState({operand1: parseInt(this.state.operand1*10+parseInt(event.target.innerHTML))}, function(){console.log(this.state)})
      }
      else if(this.state.operand1 && this.state.operator && !this.state.operand2) {
        this.setState({operand2: parseInt(event.target.innerHTML)}, function(){console.log(this.state)})
      }
      else if(this.state.operand1 && this.state.operator && this.state.operand2){
        this.setState({operand2: parseInt(this.state.operand2*10+parseInt(event.target.innerHTML))}, function(){console.log(this.state)})
      }
    }
  else if(inputNumber==='C'){
    this.setState({
      operand1:null,
      operator: null,
      operand2: null
    }, function() {console.log(this.state)})
  }
  else if(inputNumber=='=') {
    if(this.state.operand1 && this.state.operand2 && this.state.operator){
      if(this.state.operator == "+"){
        this.setState({
          operand1: this.state.operand1 + this.state.operand2,
          operator: null,
          operand2: null
        }, function(){console.log(this.state)})
      }
      else if(this.state.operator=="-"){
        this.setState({
          operand1: this.state.operand1 - this.state.operand2,
          operator: null,
          operand2: null
        }, function(){console.log(this.state)})
      }
      else if(this.state.operator=="*"){
        this.setState({
          operand1:this.state.operand1*this.state.operand2,
          operator:null,
          operand2:null
        }, function(){console.log(this.state)})
      }
      else if(this.state.operator=="/"){
        this.setState({
          operand1: this.state.operand1/this.state.operand2,
          operator: null,
          operand2: null
        }, function() {console.log(this.state)})
      }
      else if(this.state.operator=="%"){
        this.setState({
          operand1: this.state.operand1%this.state.operand2,
          operator: null,
          operand2: null
        }, function(){console.log(this.state)})
      }
    }
  }
  else if(inputNumber == '+/-'){
    if(this.state.operand1 && !this.state.operator && !this.state.operand2){
      if(this.state.operand1){
        this.setState({operand1: -this.state.operand1}, function(){console.log(this.state)})
      }
    }
  }
  else if(inputNumber=='+' || inputNumber == '-' || inputNumber == '*' || inputNumber == '/' || inputNumber == '%') {
    if(this.state.operand1){
      this.setState({operator: event.target.innerHTML}, function(){console.log(this.state)})
    }
  }
}

  render(){
    return(
      <div className="App">
        <Display inputs={this.state}/>
        <Button triggerDisplayUpdate = {this.updateDisplay}/>
      </div>
    );
  }
}
