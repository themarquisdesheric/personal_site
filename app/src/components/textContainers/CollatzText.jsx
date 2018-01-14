import React from 'react';

const CollatzText = () => (
  <div className="content has-text-centered">
    The&nbsp;
    <a 
      href="https://en.wikipedia.org/wiki/Collatz_conjecture" 
      target="_blank"
      rel="noopener noreferrer"
    > 
      Collatz Conjecture
    </a>
    &nbsp;is one of the biggest unsolved problems in mathematics.<br />

    This is a tool I wrote to help people better understand it
    by providing an audio/visual representation of each sequence.

    The project was inspired by wondering if the resulting melody would sound like a slide whistle.
  </div>
);

export default CollatzText;
