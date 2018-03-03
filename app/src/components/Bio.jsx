import React from 'react';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';

const Bio = () => {
  return (
    <div className="bio" >
      <Block>
        <Columns>
          <TextColumn>
            <section className="hero is-fullheight">
              <div className="hero-body">
                <section className="section">
                  <div className="content has-text-centered">
                    <p className="has-text-centered is-marginless">
                      <span className="dropcap">
                        ok,
                      </span> that was a bit over the top. <br />
                      But it brings up a good point:
                    </p>
                    <h1 className="bio-title is-size-1-mobile normal-text">
                      who is yuval?
                    </h1>
                    <p>
                      {"Yuval Allweil is an autodidact whose curiosity knows no bounds. This curiosity has taken him to the other side of the world, and not just once or twice. It has inspired him to pore over the words of the dead in the hopes of unlocking the secrets of tomorrow, and to engage with the living for the same end. This unbridled passion has led him directly into the laboratories of some of today's most brilliant scientists, so their work could be distilled for a more popular audience."}
                    </p>
                    <p>
                      His interviews with visionary thinkers like Judea Pearl and Nir Eyal have headlined Specimen Magazine, and his short fiction has been published in several anthologies. 
                    </p>
                    <p>
                      He has served on the management teams of several startups, from a record-breaking e-commerce outfit to a nationally-acclaimed science magazine.
                    </p>
                    <p>
                      {"Yuval's passion is in frontend development, and his favorite task is to bring a wireframe to pixel-perfect and responsive life. Whether it's React or vanilla JavaScript, you can be sure Yuval is having fun with it."} 
                    </p>
                    <p>
                      {"He loves helping others, and firmly believes that you won't get ahead without helping those around you. "}
                      He is a dedicated teacher whose training programs and workshops have been professionally recognized, and is currently at&nbsp;
                      <a 
                        href="http://alchemycodelab.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alchemy Code Lab
                      </a>
                      , where he is helping students learn web development using the following technologies:
                    </p>
                  </div>
                </section>
              </div>
            </section>
          </TextColumn>
        </Columns>
      </Block>
    </div>
  );
};

export default Bio;
