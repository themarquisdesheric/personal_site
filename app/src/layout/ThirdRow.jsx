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
                      you could say he is
                    </p>
                    <p className="title is-uppercase is-1">
                      artsy yet refined
                    </p>
                  </div>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://placehold.it/768x858/ffff00/" alt="img" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default ThirdRow;