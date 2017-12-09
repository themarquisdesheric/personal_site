import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, classes = '' }) => (
  <div className={`column ${classes}`}>
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;