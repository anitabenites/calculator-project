// import React from 'react';

export default function
   updateDisplay(event) {
    // TODO: split this function into smaller parts, for example extract functionalities into separate functions

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
       // TODO calculate new state and then call setState() once in the end
       // TODO use local variables to store intermediate values
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
   // TODO extract this into a new function
   if(this.state.operand1 && this.state.operand2 && this.state.operator){
     if(this.state.operator == "+"){
       // set state once after the conditions
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

// module.exports =  CalculatorDisplay
// export default CalculatorDisplay;

//ToDo:
// in CD make separate functions for each calculation, and manage the state in App.js
