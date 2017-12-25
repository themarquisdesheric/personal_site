import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';

class Bio extends Component {
  render() {
    return (
      <div ref={node => this.div = node} className="bio" >
        <Block>
          <Columns>
            <Column>
              <section className="hero is-fullheight">
                <div className="hero-body">
                  <section className="section">
                    <div className="content has-text-centered">
                      <p className="has-text-centered is-marginless">
                        <span className="dropcap">
                          ok,
                        </span> so that was a bit over the top. <br />
                        But it brings up a good point:
                      </p>
                      <h1 className="bio-title is-size-1-mobile has-text-centered normal-text">
                        who is yuval?
                      </h1>
                      <p className="has-text-justified">
                        Yuval is a <span className="is-strikethrough">terrible</span> charming young man.
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
              </section>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default Bio;