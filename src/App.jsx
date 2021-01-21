import React from 'react';
import data from './data/content.json';
import ComposeImageRow from './components/ComposeImageRow';
import ComposeInfoRow from './components/ComposeInfoRow';
import Bio from './components/Bio';
import Level from './components/Level';
import Apache from './components/textContainers/Apache';
import Drumkit from './components/textContainers/Drumkit';
import Bookify from './components/textContainers/Bookify';
import Collatz from './components/textContainers/Collatz';
import Education from './components/textContainers/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

const App = () => (
  <main className="wrapper">
    {data.images.map( (row, i) => 
      <ComposeImageRow {...row} darkSide={i} key={row.src} />
    )}
    
    <Bio />
    <Level />
    
    {data.info.map( (row, i) => {
      const textContainers = [Apache, Drumkit, Bookify, Collatz, Education];
      let Info = textContainers[i];
      
      return (
        <ComposeInfoRow {...row} darkSide={i} key={row.src}>
          <Info />
        </ComposeInfoRow>
      );
    })}

    
    {/* 
      need to fix Dashboard, Svelte weighed the whole thing towards HTML and the API must have changed because it's broken now
      <Dashboard /> 
    */}
    <Contact />
    <Footer />
  </main>
);

export default App;
