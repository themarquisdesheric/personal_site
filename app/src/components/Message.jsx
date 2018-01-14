import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ italic, normal, classes }) => (
  <div className="hero-body">
    <div className="content has-text-centered">
      <h2 className={`is-size-5-mobile italic-text ${classes}`}>
        {italic}
      </h2>
      <h1 className={`is-size-1-mobile normal-text is-marginless ${classes}`}>
        {normal}
      </h1>
    </div>
  </div>
);

Message.defaultProps = {
  classes: ''
};

Message.propTypes = {
  italic: PropTypes.string.isRequired,
  normal: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Message;
