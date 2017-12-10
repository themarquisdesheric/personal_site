import React from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Image from '../components/Image';

const SecondRow = () => (
  <div>
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
                SECOND ROW
              </h1>
            </div>
          </Hero>
        </Column>
        <Column classes="is-paddingless">
          <Image>
            <img src="https://mail.google.com/mail/u/0/?ui=2&ik=a76ce05d90&view=fimg&th=16037b0c49e02aae&attid=0.1.1&disp=emb&attbid=ANGjdJ9R2GTAi4ZuI_nD5nwqBdsV4__Kxy_wvHQwfz7FlMmQyB35LUwwSpxvBrhUGT1eTPbEEIJlHEKa2l_cON1WeFFwOvQLW7Oz0oM1DkRaZ_HpJoscPzx6aTYSY1w&sz=w1660-h2076&ats=1512878331006&rm=16037b0c49e02aae&zw&atsh=1" alt="yuval-orange-hat" />
          </Image>
        </Column>
      </Columns>
    </Block>
  </div>
);

export default SecondRow;