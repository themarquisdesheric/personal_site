import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ children }) => (
  <div className="image">
    {children}
  </div>
);

Image.propTypes = {
  children: PropTypes.node.isRequired
};

export default Image;