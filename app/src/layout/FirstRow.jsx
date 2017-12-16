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
                  <div>
                    <p className="subtitle has-text-centered">
                      meet
                    </p>
                    <p className="title is-uppercase is-1">
                      yuval
                    </p>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://placehold.it/768x858/000000/" alt="yuval-leaves" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FirstRow;