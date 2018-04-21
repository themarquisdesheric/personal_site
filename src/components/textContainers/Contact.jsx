import React from 'react';
import Icon from '../Icon';
import 'font-awesome/css/font-awesome.css';

const Contact = () => {
  const icons = [
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
      href: 'mailto:themarquisdesheric@gmail.com', 
      classes: 'fa fa-envelope-o',
      text: 'themarquisdesheric@gmail.com'
    },
    {
      href: 'https://github.com/themarquisdesheric', 
      classes: 'fa fa-github-square',
      text: 'GitHub'
    }
  ];
  
  return (
    <div>
      <h2 id="contact-heading">Resume &amp; Contact</h2>
      <div className="icons content has-text-centered">
        {icons.map( (icon, i) => 
          <Icon {...icon} key={icon.text} i={i} />
        )}
      </div>
    </div>
  );
}

export default Contact;
