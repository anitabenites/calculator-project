
//<==== first version ===>

import React from 'react';

export class Calculator {
 constructor() {
   this.result = 0;
   this.operand1 = null; // because false line 28, evaluate to false
   this.operand2 = null;
   this.operator = null;
 }

 add() {
   return this.operand1 + this.operand2;
 }
 subtract() {
   return this.operand1 - this.operand2;
 }
 divide() {
   return this.operand1 * 1/this.operand2;
 }
 multiply() {
   return this.operand1 * this.operand2;
 }
 setOperator(value) { // 106 of CalculatorComponent.js
   this.operator = value;
   //this.operatorClicked = true;
 }
 // whenever user click the button we are passing values to this function!! no need to validation!
 setOperand(val) { //83 CalculatorComponent, the function is passing something!!
   if (this.operand1 && this.operator) {
     this.operand2 = val;
     // this.operatorClicked = false; // at this point i already have the second operand!! there is no point to keep the flag that operator is clicked!
   } else {
     this.operand1 = val;
   }

   if (this.operator && this.operand2) {
     this.result = this.calculate();
   }
 }
 percentage(value) {
   this.result = value/100;
 }
 calculate() {
   let result;
   switch (this.operator) {
     case '+':
       result = this.add()
       break;
     case '-':
       result = this.subtract()
       break;
     case '/':
       result = this.divide()
       break;
     case '*':
       result = this.multiply()
       break;
     default:
       result = 0;
       break;
   }
   this.operand1 = result; // 1 + 2 = 3
   this.operand2 = null; // we are reseting operand 2 otherwise it will take the last value!
   return result
 }
 getResult() {
   return this.result; // to respond the value of the last calculation!
 }
 clearResult() {
   this.result = 0;
   this.operand1 = null;
   this.operand2 = null;
   this.operator = null;
 }
}

// var calc = new Calculator;
// calc.process(1,2,"+");
// calc.process(5,2,"-");
