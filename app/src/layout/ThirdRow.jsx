import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

class ThirdRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <div className="block-titles">
                    <h2 className="is-size-5-mobile has-text-centered italic-text">
                      you could say he
                    </h2>
                    <h1 className="is-size-1-mobile has-text-centered-mobile normal-text">
                      has vision
                    </h1>
                  </div>
                </div>
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