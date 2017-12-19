import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import './App.css'; 
import ComposeImageRow from './components/ComposeImageRow';
import FourthRow from './layout/FourthRow';
import FifthRow from './layout/FifthRow';
import Bio from './layout/Bio';
import SeventhRow from './layout/SeventhRow';
import EighthRow from './layout/EighthRow';

// TODOS: 

// use google map screenshot instead - faster loading
// incorporate rest of content: linkedin certifications, etc
// make gif of collatz
// remove unused components and refactor style attributes

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
        <ComposeImageRow 
          smallText="meet"
          largeText="yuval"
          src="yuval-leaves.jpg"
          alt="yuval-leaves"
          theme="dark-background"
          textColor="has-text-light"
          ref={row => this.firstRow = row} 
        />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.firstRow, this.secondRow)} />
        <ComposeImageRow
          smallText="a web developer who has"
          largeText="worn many hats"
          src="yuval-orange-hat.jpg"
          alt="yuval-orange-hat"
          ref={row => this.secondRow = row} 
        />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.secondRow, this.thirdRow)} />
        <ComposeImageRow 
          smallText="you could say he"
          largeText="has vision"
          src="yuval-fake-fur.jpg"
          alt="yuval-fake-fur"
          theme="dark-background"
          textColor="has-text-light"
          ref={row => this.thirdRow = row} 
        />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.thirdRow, this.fourthRow)} />
        <Bio ref={row => this.fourthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fourthRow, this.fifthRow)} />
        <FourthRow ref={row => this.fifthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fifthRow, this.sixthRow)} />
        <FifthRow ref={row => this.sixthRow = row} />
 
        {/* <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fifthRow, this.sixthRow)} />
        <Bio ref={row => this.sixthRow = row} /> */}
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.sixthRow, this.seventhRow)} />
        <SeventhRow ref={row => this.seventhRow = row} />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.seventhRow, this.eighthRow)} />
        <EighthRow ref={row => this.eighthRow = row} />
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
