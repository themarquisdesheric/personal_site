import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

class FifthRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes="dark-background">
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <div className="block-titles">
                    <h2 className="is-size-5-mobile has-text-centered has-text-light italic-text">
                      and turned the
                      <a 
                        href="https://en.wikipedia.org/wiki/Collatz_conjecture" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &nbsp;Collatz Conjecture&nbsp;
                      </a>
                      into a
                    </h2>
                    <h1 className="is-size-1-mobile has-text-centered-mobile has-text-light normal-text">
                      melody machine
                    </h1>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://placehold.it/768x858/ffffff/" alt="collatz" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FifthRow;