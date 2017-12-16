import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

class SixthRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <div>
                    <p className="subtitle has-text-centered">
                      which brings us to an important point
                    </p>
                    <p className="title is-uppercase is-1">
                      who is yuval?
                    </p>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://placehold.it/768x858/ff00ff/" alt="collatz" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default SixthRow;