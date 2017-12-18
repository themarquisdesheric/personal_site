import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

class FourthRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes="dark-background">
              <Hero classes="is-fullheight">
                <Message italic="he has contributed to" normal="open source" classes="has-text-light" />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <Image>
                    <img src="https://www.apache.org/foundation/press/kit/feather.png" alt="apache-feather" style={{width: 400}} />
                  </Image>
                </div>
              </Hero>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FourthRow;