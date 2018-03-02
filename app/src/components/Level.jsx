import React from 'react';

const Level = () => {
  const logos = ['mongo', 'express', 'react', 'redux', 'node', 'sass'];

  return (
    <nav className="level is-hidden-mobile" id="projects">
      {logos.map(logo => (
        <div key={logo} className="level-item has-text-centered">
          <img src={`${logo}.png`} alt={logo} />
        </div>
      ))}
    </nav>
  );
};

export default Level;
