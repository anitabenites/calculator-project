import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// using ES6 class:
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
  }
  clickFunction(event) {
      console.log("you clicked me, thank you!");
  }
  render() {
    return (
      <div>
        <div>
          <button className="btn" type="button" onClick={this.clickFunction}>7</button>
          <button className="btn" type="button" onClick={this.clickFunction}>8</button>
          <button className="btn" type="button" onClick={this.clickFunction}>9</button>
        </div>
        <div>
          <button className="btn" type="button" onClick={this.clickFunction}>4</button>
          <button className="btn" type="button" onClick={this.clickFunction}>5</button>
          <button className="btn" type="button" onClick={this.clickFunction}>6</button>
        </div>
        <div>
          <button className="btn" type="button" onClick={this.clickFunction}>1</button>
          <button className="btn" type="button" onClick={this.clickFunction}>2</button>
          <button className="btn" type="button" onClick={this.clickFunction}>3</button>
        </div>
        <div>
          <button className="btnZero" type="button" onClick={this.clickFunction}>0</button>
        </div>
      </div>
    );
  }
}

export default Button;
