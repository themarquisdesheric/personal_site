import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';

class Bio extends Component {
  render() {
    return (
      <div ref={node => this.div = node} className="bio" >
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <section className="section">
                    <div className="content has-text-centered">
                      <p className="has-text-centered">
                        <span style={{ fontSize: '1.6em', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
                          yes,
                        </span> that was a joke. <br />
                        But it brings up a good point:
                      </p>
                      <h1 
                        className="is-size-1-mobile has-text-centered-mobile normal-text"
                        style={{ margin: '50px', fontSize: '100px' }} 
                      >
                        who is yuval?
                      </h1>
                      <p className="has-text-justified">
                        Lorem idivsum dolor sit amet consectetur adipisicing elit. Eos, non?<br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cupiditate amet debitis<br /> 
                        beataeeos eaque sequi assumenda a, veritatis perferendis autem. Saepe, tenetur fugit. Hic<br />
                          corporis sequi ducimus quis sunt.<br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a, harum ipsam dicta sapiente<br />
                          aliquam magnam eaque assumenda dignissimos voluptatibus, quibusdam temporibus, nesciunt optio<br />
                      </p>
                    </div>
                  </section>
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