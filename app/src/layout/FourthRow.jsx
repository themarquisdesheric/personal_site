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
                  <div>
                    <p className="subtitle has-text-centered">
                      he has contributed to
                    </p>
                    <p className="title is-uppercase is-1">
                      open source
                    </p>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Hero classes="is-fullheight is-dark">
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

export default ThirdRow;