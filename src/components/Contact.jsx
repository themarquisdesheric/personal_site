import React from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';
import ImageColumn from '../components/ImageColumn';
import Hero from '../components/Hero';
import Image from '../components/Image';
import ContactText from './textContainers/Contact';

const Contact = () => {
  return (
    <div>
      <Block>
        <Columns>
          <TextColumn classes="border">
            <Hero>
              <ContactText />
            </Hero>
          </TextColumn>
          <ImageColumn classes="is-paddingless">
            <Image>
              <img src="leaves.jpg" alt="leaves" />
            </Image>
          </ImageColumn>
        </Columns>
      </Block>
    </div>
  );
};

export default Contact;
