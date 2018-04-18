import React from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';
import Hero from '../components/Hero';
import ContactText from './textContainers/Contact';

const Contact = () => (
  <div className="contact">
    <Block>
      <Columns>
        <TextColumn>
          <Hero>
            <ContactText />
          </Hero>
        </TextColumn>
      </Columns>
    </Block>
  </div>
);

export default Contact;
