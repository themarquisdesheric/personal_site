import React from 'react';
import PropTypes from 'prop-types';

const ImageColumn = ({ children, classes }) => (
  <div className={`column ${classes}`}>
    {children}
  </div>
);

ImageColumn.defaultProps = {
  classes: ''
};

ImageColumn.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default ImageColumn;
