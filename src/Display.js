import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

class Display extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input className="display-screen" type="text" value = {this.props.result}/>
    );
  }
}

export default Display;
