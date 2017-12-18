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
            <Column classes="dark-background">
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  
                {/* always coding
                
                  github

                */}

                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
           
                {/* always learning
                
                  linkedin
                */}
           
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default SixthRow;