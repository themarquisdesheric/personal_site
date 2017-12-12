import React, { Component } from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';
import Navbar from '../components/Navbar';

class FirstRow extends Component {
  render() {
    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column>
              <Hero classes="is-fullheight">
                <div className="hero-head">
                  <Navbar /> 
                </div>
                <div className="hero-body">
                  <h1 className="title is-1">
                    <div>
                      <h2 className="subtitle has-text-centered">
                        subtitle
                      </h2>
                    </div>
                    title
                  </h1>
                </div>
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src="https://mail.google.com/mail/u/0/?ui=2&ik=a76ce05d90&view=fimg&th=16027c965ab0fc1a&attid=0.1.1&disp=emb&attbid=ANGjdJ8p8SZdyaWw6f_drmgSatWu34TGXoGppCMd2SvMvojaEEjy0uphApcrLQqIEXMXSVIBoyC_NiWszrL_uV6pzHgKyQy8tAOOsoUEzSfk8qti64UBLP0BBYjK7TY&sz=w1660-h1856&ats=1512506761317&rm=16027c965ab0fc1a&zw&atsh=1" alt="yuval-leaves" />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

export default FirstRow;