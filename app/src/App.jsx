import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import './App.css'; 
import FirstRow from './layout/FirstRow';
import SecondRow from './layout/SecondRow';
import ThirdRow from './layout/ThirdRow';
import FourthRow from './layout/FourthRow';
import FifthRow from './layout/FifthRow';
import SixthRow from './layout/SixthRow';
import SeventhRow from './layout/SeventhRow';

// TODOS: 
// make open source section left side black, right side white - or switch to black for lower rows / switch content side
// incorporate rest of content: linkedin certifications, etc
// make gif of collatz

class App extends Component {
  scrollToRow = (previousPosition, nodeAbove, nodeBelow) => {
    if (previousPosition === Waypoint.above) {
      nodeAbove.div.scrollIntoView({ behavior: 'smooth' });
    } else if (previousPosition === Waypoint.below) {
      nodeBelow.div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div>
        <FirstRow ref={row => this.firstRow = row} />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.firstRow, this.secondRow)} />
        <SecondRow ref={row => this.secondRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.secondRow, this.thirdRow)} />
        <ThirdRow ref={row => this.thirdRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.thirdRow, this.fourthRow)} />
        <FourthRow ref={row => this.fourthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fourthRow, this.fifthRow)} />
        <FifthRow ref={row => this.fifthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fifthRow, this.sixthRow)} />
        <SixthRow ref={row => this.sixthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.sixthRow, this.seventhRow)} />
        <SeventhRow ref={row => this.seventhRow = row} />
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
