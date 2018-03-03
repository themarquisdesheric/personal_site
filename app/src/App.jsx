import React from 'react';
import data from './data/content.json';
import ComposeImageRow from './components/ComposeImageRow';
import ComposeInfoRow from './components/ComposeInfoRow';
import Bio from './components/Bio';
import Level from './components/Level';
import ApacheText from './components/textContainers/ApacheText';
import Drumkit from './components/textContainers/Drumkit';
import Bookify from './components/textContainers/Bookify';
import CollatzText from './components/textContainers/CollatzText';
import EducationText from './components/textContainers/EducationText';
import Footer from './components/Footer';
import './App.css'; 
import Contact from './components/Contact';

const App = () => (
  <main>
    {data.images.map(row => 
      <ComposeImageRow {...row} key={row.src} />
    )}
    
    <Bio />
    <Level />
    
    {data.info.map( (row, i) => {
      const textContainers = [ApacheText, Drumkit, Bookify, CollatzText, EducationText];
      let Info = textContainers[i];
      
      return (
        <ComposeInfoRow {...row} key={row.src}>
          <Info />
        </ComposeInfoRow>
      );
    })}

    <Contact />
    <Footer />
  </main>
);

export default App;
