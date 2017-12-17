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
                  <div>
                    <p className="subtitle has-text-centered has-text-light">
                      and turned the
                      <a 
                        href="https://en.wikipedia.org/wiki/Collatz_conjecture" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &nbsp;Collatz Conjecture&nbsp;
                      </a>
                      into a
                    </p>
                    <p className="title is-uppercase is-1 has-text-light">
                      melody machine
                    </p>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://placehold.it/768x858/000000/" alt="collatz" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FifthRow;