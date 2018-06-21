import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// using ES6 class:
class Button extends React.Component {
  constructor() {
    super();
    this.state = {result:"0"}
    this.clickFunction = this.clickFunction.bind(this);
  }
  clickFunction() {
      console.log("you clicked me, thank you!");
      this.props.clickFunction(this.props.text);
  }
  render() {
    return (
      <div>
        <div>
          <button className="btn" type="button" onClick={this.clickFunction}>{this.props.text}</button>
        </div>
      </div>
    );
  }
}

export default Button;
