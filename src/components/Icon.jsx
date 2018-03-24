import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';

const Icon = ({ href, classes, text, i }) => (
  <Tooltip 
    title={text} 
    mouseEnterDelay={.3}
    placement={i % 2 === 0 ? 'left' : 'right'} 
  >
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={classes} aria-hidden="true" />  
    </a>
  </Tooltip>
);


Icon.propTypes = {
  href: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired
};

export default Icon;
