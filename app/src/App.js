import React, { Component } from 'react';
import './App.css'; 
import FirstRow from './layout/FirstRow';
import SecondRow from './layout/SecondRow';
import ThirdRow from './layout/ThirdRow';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

class App extends Component {
  scrollToNode = (previousPosition, node) => {
    if (previousPosition === Waypoint.below) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div>
        <FirstRow />
        <div ref={row => this.secondRow = row}>
          <Waypoint onEnter={({ previousPosition }) => this.scrollToNode(previousPosition, this.secondRow)} />
          <SecondRow />
        </div>
        <div ref={row => this.thirdRow = row}>
          <Waypoint onEnter={({ previousPosition }) => this.scrollToNode(previousPosition, this.thirdRow)} />
          <ThirdRow />
        </div>
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
