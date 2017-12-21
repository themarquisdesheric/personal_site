import React from 'react';

const ApacheText = () => (
  <div className="content has-text-centered">
    <a 
      href="https://datafu.incubator.apache.org/" 
      target="_blank"
      rel="noopener noreferrer"
    > 
      Apache DataFu
    </a>
    &nbsp;is a project currently undergoing incubation at&nbsp;
    <a 
      href="https://www.apache.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
    The Apache Software Foundation
    </a>
    {". I updated their website so it would meet Apache's requirements for graduation."}
  </div>
);

export default ApacheText;