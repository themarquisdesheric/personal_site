import React from 'react';
import PropTypes from 'prop-types';

const Block = ({ children, classes }) => (
  <div className={`block ${classes}`}>
    {children}
  </div>
);

Block.defaultProps = {
  classes: ''
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default Block;