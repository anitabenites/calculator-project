import React from 'react';
import ReactDOM from 'react-dom';

// using ES6 class:
class OperationalButton extends React.Component {
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
          <button className="btn" type="button" onClick={this.clickFunction}>C</button>
          <button className="btn" type="button" onClick={this.clickFunction}>+</button>
          <button className="btn" type="button" onClick={this.clickFunction}>%</button>
          <button className="btn" type="button" onClick={this.clickFunction}>÷</button>
        </div>
      </div>
    );
  }
}

export default OperationalButton;
