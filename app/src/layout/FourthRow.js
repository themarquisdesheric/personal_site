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
                  <h1 className="title is-1">
                    <div>
                      <h2 className="subtitle has-text-centered">
                        subtitle
                      </h2>
                    </div>
                    FOURTH ROW
                  </h1>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Hero classes="is-fullheight is-dark">
                <div className="hero-body">
                  <Image>
                    <img src="https://www.apache.org/foundation/press/kit/feather.png" alt="apache-feather" />

                    {/* set width to ~ 400px for the feather */}

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