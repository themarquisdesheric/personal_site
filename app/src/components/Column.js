import React from 'react';

const Column = ({ children, classes = '' }) => (
  <div className={`column ${classes}`}>
    {children}
  </div>
);

export default Column;