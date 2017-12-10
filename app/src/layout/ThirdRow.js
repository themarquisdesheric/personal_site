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
                    THIRD ROW
                  </h1>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="http://www.not-studio.com/images/not-studio-home.jpg" alt="img" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default ThirdRow;