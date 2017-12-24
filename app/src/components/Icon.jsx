import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ href, classes }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={classes} aria-hidden="true" />  
  </a>
);


Icon.propTypes = {
  href: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired
};

export default Icon;