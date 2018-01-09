import React from 'react';
import PropTypes from 'prop-types';

const TextColumn = ({ children, classes }) => (
  <div className={`column has-vertical-center ${classes}`}>
    {children}
  </div>
);

TextColumn.defaultProps = {
  classes: ''
};

TextColumn.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default TextColumn;