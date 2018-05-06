import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import Waypoint from 'react-waypoint';

class Icon extends PureComponent {
  handleAnalyticsEvent = () => {
    const { text } = this.props;

    window.gtag('event', 'click', {
      'event_category': 'Link clicked',
      'event_label': text
    });
  }

  render() {
    const { href, classes, text, i } = this.props;

    return (
      <Waypoint 
        onEnter={() => this.icon.classList.add('animate-icons')}
        onLeave={() => this.icon.classList.remove('animate-icons')}
      >
        <div 
          className="contact-icon" 
          ref={icon => this.icon = icon}
          style={{ transition: `600ms ${i * 350}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`}}
        >
          <Tooltip 
            title={text} 
            mouseEnterDelay={.3}
            placement={i % 2 === 0 ? 'left' : 'right'} 
          >
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.handleAnalyticsEvent}
            >
              <i className={classes} aria-hidden="true" />  
            </a>
          </Tooltip>
        </div>
      </Waypoint>
    );
  }
}


Icon.propTypes = {
  href: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired
};

export default Icon;
