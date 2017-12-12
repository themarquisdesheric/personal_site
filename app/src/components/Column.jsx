import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, classes }) => (
  <div className={`column ${classes}`}>
    {children}
  </div>
);

Column.defaultProps = {
  classes: ''
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string
};

export default Column;