import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import OperationalButton from './OperationalButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {result:"0"};
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction(text) {
    this.setState((prev)=>({
      result: prev.result + text
    }));
  }

  render() {
    return (
      <div className="App">
        <Display result={this.state.result}/>
        <Button text="7" clickFunction={this.clickFunction} />
        <Button text="4" clickFunction={this.clickFunction} />
        <Button text="1" clickFunction={this.clickFunction} />
      </div>
    );
  }
}
