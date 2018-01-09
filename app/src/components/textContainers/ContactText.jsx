import React from 'react';
import 'font-awesome/css/font-awesome.css';
import Icon from '../Icon';

const ContactText = () => {
  const icons = [
    {
      href: 'mailto:themarquisdesheric@gmail.com', 
      classes: 'fa fa-envelope-o'
    },
    {
      href: '/yuvalallweilresume.pdf',
      target: '_blank', 
      classes: 'fa fa-file-text-o'
    },
    {
      href: 'https://www.linkedin.com/in/yuval-allweil/',
      classes: 'fa fa-linkedin-square linkedin'
    },
    {
      href: 'https://github.com/themarquisdesheric', 
      classes: 'fa fa-github-square'
    }
  ];

  return (
    <div>
      <div className="content has-text-centered">
        <div className="icons">
          {icons.map(icon => 
            <Icon {...icon} key={icon.href} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactText;
