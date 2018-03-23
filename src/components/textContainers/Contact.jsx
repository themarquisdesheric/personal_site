import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import 'font-awesome/css/font-awesome.css';
import Icon from '../Icon';

class Contact extends Component {
  render() {
    const icons = [
      {
        href: 'mailto:themarquisdesheric@gmail.com', 
        classes: 'fa fa-envelope-o',
        text: 'themarquisdesheric@gmail.com'
      },
      {
        href: '/YuvalAllweilResume.pdf',
        target: '_blank', 
        classes: 'fa fa-file-text-o',
        text: 'Resume'
      },
      {
        href: 'https://www.linkedin.com/in/yuval-allweil/',
        classes: 'fa fa-linkedin-square linkedin',
        text: 'LinkedIn'
      },
      {
        href: 'https://github.com/themarquisdesheric', 
        classes: 'fa fa-github-square',
        text: 'GitHub'
      }
    ];
    
    return (
      <div>
        <Waypoint 
          onEnter={() => this.heading.classList.add('animate-contact')}
          onLeave={() => this.heading.classList.remove('animate-contact')}
        >
          <p ref={heading => this.heading = heading} className="contact-heading">get in touch</p>
        </Waypoint>
        <div className="icons content has-text-centered">
          {icons.map( (icon, i) => 
            <Icon {...icon} key={icon.text} i={i} />
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
