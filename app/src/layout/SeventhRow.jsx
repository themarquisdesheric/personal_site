import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';

class SeventhRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes="dark-background">
              <Hero classes="is-fullheight">
                <Message italic="get" normal="in touch" classes="has-text-light" />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <div className="map-responsive">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178838.2773407469!2d-122.79450557331654!3d45.54332289210889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C+OR!5e0!3m2!1sen!2sus!4v1513453910848" 
                  width="712.5" 
                  height="795.98"
                  title="portland-or"
                  frameBorder="0" 
                  style={{ border:0 }} 
                  allowFullScreen
                />
              </div>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default SeventhRow;