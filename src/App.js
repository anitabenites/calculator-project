import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import OperationalButton from './OperationalButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Display/>
        <OperationalButton />
        <Button />
      </div>
    );
  }
}
