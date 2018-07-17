//////////// first version //////////////

import React, { Component } from 'react';
import { Calculator } from "./Calculator.js";

// using ES6 class:
class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0 // setting default display value in the component state
    }
     this.clearVar = this.clearFunction.bind(this);
     this.setOperatorVar = this.setOperator.bind(this);
     this.percentageVar = this.percentage.bind(this);
     this.setOperandVar = this.setOperand.bind(this);
     this.calculateVar = this.calculate.bind(this);
  }

  componentDidMount(){ // it will be called when the component is rendered in the DOM!
    this.calc = new Calculator; // this has to be called before other functions!
    // Here we are creating an instance of the Calculator Class so that we can have access to
    // all the methods and attributes of the class.
    // The instance is stored in this class (Button) calc attribute so we can use it anywhere
    // within this file.
  }


  updateDisplay(val) {
    // this is the function that updates the display attribute of the state.
    // After each step of the calculation, this.display changes and we need to update the state as well.
    this.setState({
      display: val// this.display will refer to the attribute created on line 12 //
    })
  }

  clearFunction() {
    //this.display = '0'; // line 12, this functions clears the display by setting this.display to '0'(default)
    //and then update state to default.
    this.updateDisplay(0); // the state is holding the value of display! when display the changes we need to call the updatedisplay function.
    this.calc.clearResult(); // c the online one will call the clearfunction! i want to reset the calculator!
    // We are calling the clearResult() method in the calculator class to reset the values of operand1,2 and operator.s
  }


  // getResult() {
  //   // this functions gets the result from Calculator class and then sets the value returned
  //   // to this.display. We need to call the updateDisplay function to update the state and
  //   // set display attribute to the value returned as result.
  //   const result = this.calc.getResult();
  //   this.display = result; // it can be shown in the display
  //   // this.updateDisplay();
  //   // we need to return the value of result in case some other parts need the value after calling the getResult()?
  //   // return result;
  // }


  setOperand(event) {
    //The event object returned from the onclick eventemitter callback
    const value = event.target.value; // in browsers: when u clicked there are some elements that records elements on them as example buttons!
    let display;
    console.log("this is the value of the operand", value);
    if (this.state.display === 0) {
      display = value;
      console.log("this is the this.state.display", this.state.display);
    } else if (this.operatorClicked){
      console.log("this is the this.operatorClicked", this.operatorClicked);
      display = value;
      this.operatorClicked = false;
      // to reset the operatorClicked the moment we recorded the second value!
    } else {
      display = this.state.display + value;
       // adding 2 numebrs 26, at this point display is not cero and we did not click operator!
    }
    this.updateDisplay(display);
  }


  setOperator(event) {
    //This function shows that we only want to perform calculation if we have an operand set => the number button has been clicked
    const value = event.target.value;
    let display;
    console.log("this is the value of the operator", value);
    if (value === '~') {
      display = -1 * this.state.display;
      this.updateDisplay(display); // added with Pooja!
    } else {

      const val = parseFloat(this.state.display); // parseFloat is converting this string into a decimal!
      this.calc.setOperand(val); // Calls the calculator setOperand function and passes the value of this.display to it
      this.calc.setOperator(value);
      this.operatorClicked = true;
    }
  }


 //This function is to calculate percentage when the (%) button is clicked
 percentage() {
    if (this.state.display !== '0') { // Make sure a number button has been clicked... this.operandClicked will be true
      this.calc.percentage(this.state.display); // Calls the percentage function on Calculator Class
   // Calls the getResult function to get the result of the just performed operation
      const result = this.calc.getResult();
      this.updateDisplay(result); // Updates the display to show the result
    }
  }


   //This function is to run the operation. The main calculate function. It is attached to the (=) button

  calculate() {
    this.calc.setOperand(parseFloat(this.state.display)); // Sets the operand from what is on the display as 2nd operand
    this.calc.calculate(); // Calls calculate function on the Calculator Class to calculate the operation
//    this.getResult(); // Gets the result from the last calculated operation

    const result = this.calc.getResult();
    //this.display = result; // it can be shown in the display

    this.updateDisplay(result); // Updates display
  }

  render() {
    // TODO: use a different onclick handler for operation and number buttons
    return (
      <div>
        <div className="display-screen">
          <div className="display-result">{this.state.display}</div>
        </div>
        <div>
          <button className="btn" type="button" value="C" onClick={this.clearVar}>C</button>
          <button className="btn" type="button" value="~" onClick={this.setOperatorVar}>+/-</button>
          <button className="btn" type="button" value="%" onClick={this.percentageVar}>%</button>
          <button className="btnOperational" type="button" value="/" onClick={this.setOperatorVar}>/</button>
        </div>
        <div>
          <button className="btn" type="button" value="7" onClick={this.setOperandVar}>7</button>
          <button className="btn" type="button" value="8" onClick={this.setOperandVar}>8</button>
          <button className="btn" type="button" value="9" onClick={this.setOperandVar}>9</button>
          <button className="btnOperational" type="button" value="*" onClick={this.setOperatorVar}>*</button>
        </div>
        <div>
          <button className="btn" type="button" value="4" onClick={this.setOperandVar}>4</button>
          <button className="btn" type="button" value="5" onClick={this.setOperandVar}>5</button>
          <button className="btn" type="button" value="6" onClick={this.setOperandVar}>6</button>
          <button className="btnOperational" type="button" value="-" onClick={this.setOperatorVar}>-</button>
        </div>
        <div>
          <button className="btn" type="button" value="1" onClick={this.setOperandVar}>1</button>
          <button className="btn" type="button" value="2" onClick={this.setOperandVar}>2</button>
          <button className="btn" type="button" value="3" onClick={this.setOperandVar}>3</button>
          <button className="btnOperational" type="button" value="+" onClick={this.setOperatorVar}>+</button>

        </div>
        <div>
          <button className="btnZero" type="button" value="0" onClick={this.setOperandVar}>0</button>
          <button className="btn" type="button" value="." onClick={this.setOperatorVar}>.</button>
          <button className="btnOperational" type="button" value="=" onClick={this.calculateVar}>=</button>
        </div>
      </div>
    );
  }
}

export default CalculatorComponent;
