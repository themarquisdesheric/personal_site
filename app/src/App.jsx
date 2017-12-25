import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import data from './data/content.json';
import DesktopScrolling from './components/DesktopScrolling';
import ComposeImageRow from './components/ComposeImageRow';
import ComposeInfoRow from './components/ComposeInfoRow';
import Bio from './components/Bio';
import ApacheText from './components/textContainers/ApacheText';
import CollatzText from './components/textContainers/CollatzText';
import EducationText from './components/textContainers/EducationText';
import ContactText from './components/textContainers/ContactText';
import Footer from './components/Footer';
import './App.css'; 

// TODOS: 

// deploy as gh user pages?
// make favicon
// try subtle bio animation

class App extends Component {
  rows = [];

  scrollToRow = (previousPosition, nodeAbove, nodeBelow) => {
    if (previousPosition === Waypoint.above) {
      this.rows[nodeAbove].div.scrollIntoView({ behavior: 'smooth' });
    } else if (previousPosition === Waypoint.below) {
      this.rows[nodeBelow].div.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {

    const textContainers = [ApacheText, CollatzText, EducationText];

    return (
      <div>
        {data.images.map(row => (
          <React.Fragment key={row.id}>
            <ComposeImageRow {...row} ref={node => this.rows[row.id] = node} />
            <DesktopScrolling scrollTo={this.scrollToRow} prevNode={row.id} nextNode={row.id + 1} />
          </React.Fragment>
        ))}
        
        <Bio ref={row => this.rows[3] = row} />
        <DesktopScrolling scrollTo={this.scrollToRow} prevNode={3} nextNode={4} />
        
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
              <DesktopScrolling scrollTo={this.scrollToRow} prevNode={row.id} nextNode={row.id + 1} />
            </React.Fragment>
          );
        })}

        <ComposeImageRow 
          src="portland.png"
          classes="contact"
          ref={row => this.rows[7] = row} 
        >
          <ContactText />
        </ComposeImageRow>
        <Footer />
      </div>
    );
  }
}

export default App;
