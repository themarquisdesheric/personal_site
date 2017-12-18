import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ italic, normal, classes = '' }) => (
  <div className="hero-body">
    <div className="block-titles">
      <h2 className={`is-size-5-mobile has-text-centered italic-text ${classes}`}>
        {italic}
      </h2>
      <h1 className={`is-size-1-mobile has-text-centered-mobile has-text-centered-mobile normal-text ${classes}`}>
        {normal}
      </h1>
    </div>
  </div>
);

Message.propTypes = {
  italic: PropTypes.string.isRequired,
  normal: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired
};

export default Message;