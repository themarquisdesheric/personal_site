import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import './App.css'; 
import ComposeImageRow from './components/ComposeImageRow';
import ComposeCardRow from './components/ComposeCardRow';
import ApacheText from './components/ApacheText';
import CollatzText from './components/CollatzText';
import Bio from './components/Bio';
import SeventhRow from './layout/SeventhRow';

// TODOS: 

// incorporate rest of content: linkedin certifications, etc
// make favicon
// remove unused components and refactor style attributes
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
          src="yuval-leaves"
          theme="dark-background"
          textColor="has-text-light"
          ref={row => this.firstRow = row} 
        />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.firstRow, this.secondRow)} />
        <ComposeImageRow
          smallText="a web developer who has"
          largeText="worn many hats"
          src="yuval-orange-hat"
          ref={row => this.secondRow = row} 
        />
        
        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.secondRow, this.thirdRow)} />
        <ComposeImageRow 
          smallText="you could say he"
          largeText="has vision"
          src="yuval-fake-fur"
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
        <SeventhRow ref={row => this.seventhRow = row} />

        <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.seventhRow, this.eighthRow)} />
        <ComposeCardRow 
          smallText="contact"
          largeText="yuval"
          title="Portland, OR"
          href="https://www.google.com/maps/@45.5293304,-122.677989,12.26"
          src="portland.png"
          darkSide="right"
          classes="contact"
          ref={row => this.eighthRow = row} 
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit excepturi quaerat voluptates provident, sequi praesentium illum facere, laborum mollitia necessitatibus! Accusantium reiciendis, aliquid similique doloribus dicta explicabo! Natus, ipsam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sit, hic quam accusantium harum, vero nihil 
          </div>
        </ComposeCardRow>
      </div>
    );
  }
}

Waypoint.propTypes = {
  onEnter: PropTypes.func.isRequired
};

export default App;
