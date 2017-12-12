import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ children }) => (
  <figure className="image">
    {children}
  </figure>
);

Image.propTypes = {
  children: PropTypes.node.isRequired
};

export default Image;