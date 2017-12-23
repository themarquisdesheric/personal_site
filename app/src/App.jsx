import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import './App.css'; 
import ComposeImageRow from './components/ComposeImageRow';
import ComposeCardRow from './components/ComposeCardRow';
import ApacheText from './components/ApacheText';
import CollatzText from './components/CollatzText';
import Bio from './components/Bio';
import EducationText from './components/EducationText';
import ContactText from './components/ContactText';

// TODOS: 

// use content.json file to map content

// make favicon
// refactor style attributes
// try subtle bio animation

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
          theme="dark-background"
          textColor="has-text-light"
          ref={row => this.firstRow = row} 
        />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.firstRow, this.secondRow)} />
        <ComposeImageRow
          smallText="a web developer who has"
          largeText="worn many hats"
          src="yuval-orange-hat.jpg"
          ref={row => this.secondRow = row} 
        />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.secondRow, this.thirdRow)} />
        <ComposeImageRow 
          smallText="you could say he"
          largeText="has vision"
          src="yuval-fake-fur.jpg"
          theme="dark-background"
          textColor="has-text-light"
          ref={row => this.thirdRow = row} 
        />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.thirdRow, this.fourthRow)} />
        <Bio ref={row => this.fourthRow = row} />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fourthRow, this.fifthRow)} />
        <ComposeCardRow 
          smallText="he has contributed to"
          largeText="open source"
          title="Apache DataFu"
          href="https://datafu.incubator.apache.org/"
          src="apache-feather.png"
          darkSide="left"
          classes="apache"
          ref={row => this.fifthRow = row} 
        >
          <ApacheText />
        </ComposeCardRow>
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.fifthRow, this.sixthRow)} />
        <ComposeCardRow 
          smallText="and turned the collatz conjecture into a"
          largeText="melody machine"
          title="Collatz Music"
          href="https://themarquisdesheric.github.io/collatz-conjecture-music/"
          src="collatz.gif"
          darkSide="right"
          classes="collatz"
          ref={row => this.sixthRow = row} 
        >
          <CollatzText />
        </ComposeCardRow>
 
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.sixthRow, this.seventhRow)} />
        <ComposeCardRow
          smallText="someone who is"
          largeText="always learning"
          title="Education is important."
          href="https://www.linkedin.com/in/yuval-allweil/"
          src="linkedin.png"
          darkSide="left"
          classes="education"
          ref={row => this.seventhRow = row}
        >
          <EducationText />
        </ComposeCardRow>

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.seventhRow, this.eighthRow)} />
        <ComposeImageRow 
          src="portland.png"
          classes="contact"
          ref={row => this.eighthRow = row} 
        >
          <ContactText />
        </ComposeImageRow>
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
