import React from 'react';

const Collatz = () => (
  <div className="content has-text-centered">
    <p>
      The&nbsp;
      <a 
        href="https://en.wikipedia.org/wiki/Collatz_conjecture" 
        target="_blank"
        rel="noopener noreferrer"
      > 
        Collatz Conjecture
      </a>
      &nbsp;is one of the biggest unsolved problems in mathematics.
    </p>

    <p>
      This is a tool I created to help people better understand it
      by providing an audio/visual representation of each sequence.
    </p>

    <p>
      It is written in HTML, CSS, and JS, and was developed in Node. It is built in React and Styled Components, uses Chart.js for the graph, and uses the Audio Context API to create the melodies.
    </p>
  </div>
);

export default Collatz;
