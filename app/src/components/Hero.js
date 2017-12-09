import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children, classes = '' }) => (
  <section className={`hero ${classes}`}>
    {children}
  </section>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;