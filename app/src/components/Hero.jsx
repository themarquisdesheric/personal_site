import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, classes }) => (
  <div className={`${classes}`}>
    <section className="hero">
      {children}
    </section>
  </div>
);

Hero.defaultProps = {
  classes: ''
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default Hero;