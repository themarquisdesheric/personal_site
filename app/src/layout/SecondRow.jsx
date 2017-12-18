import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

class SecondRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <Message italic="a web developer who has" normal="worn many hats" />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="yuval-orange-hat.jpg" alt="yuval-orange-hat" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default SecondRow;