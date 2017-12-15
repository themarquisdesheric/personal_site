import React from 'react';
import PropTypes from 'prop-types';

const Block = ({ children }) => (
  <div className="block">
    {children}
  </div>
);

Block.propTypes = {
  children: PropTypes.node.isRequired
};

export default Block;