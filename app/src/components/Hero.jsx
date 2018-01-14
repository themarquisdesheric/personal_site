import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, classes }) => (
  <section className={`${classes}`}>
    {children}
  </section>
);

Hero.defaultProps = {
  classes: ''
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default Hero;
