import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';

class Bio extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <div className="level" style={{margin: 'auto'}}>
                    <div className="level-item has-text-justified">
                      <div className="block-titles">
                        <p className="subtitle has-text-centered">
                          which brings us to an important point
                        </p>
                        <p className="title is-uppercase is-size-1-mobile has-text-centered-mobile">
                          who is yuval?
                        </p>
                      </div>

                      Lorem idivsum dolor sit amet consectetur adipisicing elit. Eos, non?<br />

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cupiditate amet debitis<br /> 
                      beataeeos eaque sequi assumenda a, veritatis perferendis autem. Saepe, tenetur fugit. Hic<br />
                        corporis sequi ducimus quis sunt.<br />

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a, harum ipsam dicta sapiente<br />
                        aliquam magnam eaque assumenda dignissimos voluptatibus, quibusdam temporibus, nesciunt optio<br />
                        autem quo sequi cum consequatur culpa?
                    </div>
                  </div>
                </div>
              </Hero>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default Bio;