import React, { Component } from 'react';
import './App.css';
import FirstRow from './layout/FirstRow';
import SecondRow from './layout/SecondRow';

class App extends Component {
  render() {
    return (
      <div>
        <FirstRow />
        <SecondRow />
      </div>
    );
  }
}

export default App;
