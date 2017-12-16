import React from 'react';
import Block from './Block';
import Hero from './Hero';
import Tilt from './Tilt';
import Image from './Image';
import Navbar from './Navbar';

// position navbar absolutely so you can mouse over links with owl watching

const Owl = () => (
  <Block>
    <Hero classes="is-fullheight">
      <Navbar />
      <div className="hero-body">
        <Tilt>
          <Image>
            <img 
              src="https://mail.google.com/mail/u/0/?ui=2&ik=a76ce05d90&view=fimg&th=15b53a15ed6e4464&attid=0.1.2&disp=emb&attbid=ANGjdJ_vvPsKFlHXSYEB7oqJscfTYUoSFLCQRJe4fbckKjMUNsfuHFF2MSs2OwEEhIlWKSqYd5MF7D5DoqXB_eoPxoHpbkKh2tN-rODrRUu5xy9HbKDvaATE_gl2Yn4&sz=w1660-h2078&ats=1513037215326&rm=15b53a15ed6e4464&zw&atsh=1" 
              alt="owl"
            />
          </Image>
        </Tilt>
      </div>
    </Hero>
  </Block>
);

export default Owl;