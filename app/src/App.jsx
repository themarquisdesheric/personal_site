import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Waypoint from 'react-waypoint';
import data from './data/content.json';
import ComposeImageRow from './components/ComposeImageRow';
import ComposeInfoRow from './components/ComposeInfoRow';
import Bio from './components/Bio';
import ApacheText from './components/textContainers/ApacheText';
import CollatzText from './components/textContainers/CollatzText';
import EducationText from './components/textContainers/EducationText';
import ContactText from './components/textContainers/ContactText';
import './App.css'; 


// TODOS: 

// deploy as gh user pages?
// refactor/remove MediaQuery components 

// make favicon
// try subtle bio animation

class App extends Component {
  rows = [];

  scrollToRow = (previousPosition, nodeAbove, nodeBelow) => {
    if (previousPosition === Waypoint.above) {
      nodeAbove.div.scrollIntoView({ behavior: 'smooth' });
    } else if (previousPosition === Waypoint.below) {
      nodeBelow.div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {

    const textContainers = [ApacheText, CollatzText, EducationText];

    return (
      <div>
        {data.images.map(row => (
          <React.Fragment key={row.id}>
            <ComposeImageRow {...row} ref={node => this.rows[row.id] = node} />

            <MediaQuery minDeviceWidth={1065}>
              <Waypoint onEnter={({ previousPosition }) => 
                this.scrollToRow(previousPosition, this.rows[row.id], this.rows[row.id + 1])}
              />
            </MediaQuery>
          </React.Fragment>
        ))}
        
        <Bio ref={row => this.rows[3] = row} />
        <MediaQuery minDeviceWidth={1065}>
          <Waypoint onEnter={({ previousPosition }) => this.scrollToRow(previousPosition, this.rows[3], this.rows[4])} />
        </MediaQuery>
        
        {data.info.map( (row, i) => {
          let Info = textContainers[i];

          return (
            <React.Fragment key={row.classes}>
              <ComposeInfoRow
                {...row}
                ref={node => this.rows[row.id] = node}
              >
                <Info />
              </ComposeInfoRow>
              <MediaQuery minDeviceWidth={1065}>
                <Waypoint onEnter={({ previousPosition }) => 
                  this.scrollToRow(previousPosition, this.rows[row.id], this.rows[row.id + 1])}
                />
              </MediaQuery>
            </React.Fragment>
          );})}

        <ComposeImageRow 
          src="portland.png"
          classes="contact"
          ref={row => this.rows[7] = row} 
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
