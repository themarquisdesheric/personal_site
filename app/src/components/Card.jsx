import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, href, src, classes, children }) => (
  <div className="card">
    <div className="card-image">
      <figure className={`image ${classes}`}>
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src} alt={title} />
        </a>
      </figure>
    </div>
    <div className="card-content">
      <p className="is-size-3 title has-text-centered">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
      
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Card;