import React from 'react';
import data from './data/content.json';
import ComposeImageRow from './components/ComposeImageRow';
import ComposeInfoRow from './components/ComposeInfoRow';
import Bio from './components/Bio';
import ApacheText from './components/textContainers/ApacheText';
import CollatzText from './components/textContainers/CollatzText';
import EducationText from './components/textContainers/EducationText';
import Footer from './components/Footer';
import './App.css'; 
import Contact from './components/Contact';

import Level from './components/Level';

const App = () => {
  const textContainers = [ApacheText, CollatzText, EducationText];

  return (
    <div>
      {data.images.map(row => (
        <ComposeImageRow {...row} key={row.src} />
      ))}
      
      <Bio />
      <Level />
      
      {data.info.map( (row, i) => {
        let Info = textContainers[i];
        
        return (
          <ComposeInfoRow {...row} key={row.src}>
            <Info />
          </ComposeInfoRow>
        );
      })}

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
