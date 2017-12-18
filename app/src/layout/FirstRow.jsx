import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

class FirstRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-head">
                  {/* Real life stories &#8470; 1 */}
                </div>
                <div className="hero-body">
                  <div className="block-titles">
                    <h2 className="is-size-5-mobile has-text-centered italic-text">
                      meet
                    </h2>
                    <h1 className="is-size-1-mobile has-text-centered-mobile has-text-centered-mobile normal-text">
                      yuval
                    </h1>
                  </div>
                </div>
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