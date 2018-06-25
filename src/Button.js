import React, { Component } from 'react';

// using ES6 class:
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
  }
  clickFunction() {
      console.log("you clicked me, thank you!");
  }
  render() {
    return (
      <div>
        <div>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>C</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}><p>+/-</p></button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>%</button>
          <button className="btnOperational" type="button" onClick={this.props.triggerDisplayUpdate}>/</button>
        </div>
        <div>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>7</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>8</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>9</button>
          <button className="btnOperational" type="button" onClick={this.props.triggerDisplayUpdate}>*</button>
        </div>
        <div>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>4</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>5</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>6</button>
          <button className="btnOperational" type="button" onClick={this.props.triggerDisplayUpdate}>-</button>
        </div>
        <div>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>1</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>2</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>3</button>
          <button className="btnOperational" type="button" onClick={this.props.triggerDisplayUpdate}>+</button>

        </div>
        <div>
          <button className="btnZero" type="button" onClick={this.props.triggerDisplayUpdate}>0</button>
          <button className="btn" type="button" onClick={this.props.triggerDisplayUpdate}>.</button>
          <button className="btnOperational" type="button" onClick={this.props.triggerDisplayUpdate}>=</button>
        </div>
      </div>
    );
  }
}

export default Button;
