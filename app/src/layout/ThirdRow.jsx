import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

class ThirdRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <Message italic="people have said he" normal="has vision" />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="yuval-fake-fur.jpg" alt="yuval-fake-fur" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default ThirdRow;