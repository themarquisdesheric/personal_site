import React from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

const FirstRow = () => (
  <Block>
    <Columns>
      <Column>
        <Hero classes="is-fullheight">
          <div className="hero-body">
            <div></div>
            <h1 className="title is-1">
              SECOND ROW
            </h1>
          </div>
        </Hero>
      </Column>
      <Column classes="is-paddingless">
        <Image>
          <img src="http://www.not-studio.com/images/not-studio-home.jpg" alt="img" />
        </Image>
      </Column>
    </Columns>
  </Block>
);

export default FirstRow;