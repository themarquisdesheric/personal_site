import React, { Component } from 'react';
import './App.css'; 
import FirstRow from './layout/FirstRow';
import SecondRow from './layout/SecondRow';
import ThirdRow from './layout/ThirdRow';
import FourthRow from './layout/FourthRow';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

// TODOS: 
// create owl splash page
// make open source section left side black, right side white
// resize and select images, text
// replace owl navlink with LI / github icons
// style layout
// incorporate rest of content: projects/links/contact/map
// make gif of collatz

class App extends Component {
  scrollToRow = (previousPosition, node) => {
    if (previousPosition === Waypoint.below) {
      node.div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    return (
      <div>
        <FirstRow />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.secondRow)} />
        <SecondRow ref={row => this.secondRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.thirdRow)} />
        <ThirdRow ref={row => this.thirdRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fourthRow)} />
        <FourthRow ref={row => this.fourthRow = row} />
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
