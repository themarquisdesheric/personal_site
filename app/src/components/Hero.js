import React from 'react';

const Hero = ({ children, classes = '' }) => (
  <section className={`hero ${classes}`}>
    {children}
  </section>
);

export default Hero;