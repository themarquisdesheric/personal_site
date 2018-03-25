import React from 'react';
import PropTypes from 'prop-types';

const AppCounter = ({ type, count }) => (
  <div className={`app-counter ${type}`}>
    <span className="app-type">
      {type}
    </span>
    <span className="app-count">
      {count}
    </span>
    <span className="app-type">
      apps
    </span>
  </div>
);

AppCounter.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default AppCounter;
