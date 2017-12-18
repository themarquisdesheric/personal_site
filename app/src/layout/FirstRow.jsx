import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

class FirstRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <Message italic="meet" normal="yuval" />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="yuval-leaves.jpg" alt="yuval-leaves" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FirstRow;