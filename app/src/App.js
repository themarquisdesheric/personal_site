import React, { Component } from 'react';
import './App.css'; 
import FirstRow from './layout/FirstRow';
import WhenInView from './components/WhenInView';

class App extends Component {
  render() {
    return (
      <div>
        <FirstRow />
        <WhenInView />
      </div>
    );
  }
}

export default App;
