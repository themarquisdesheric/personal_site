import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Icon from '../Icon';

const Contact = () => {
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
      <div className="content has-text-centered">
        <div className="icons">
          {icons.map( (icon, i) => 
            <Icon {...icon} key={icon.text} i={i} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
