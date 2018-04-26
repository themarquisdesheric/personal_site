import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';

class Bio extends Component {
  render() {
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
                      
                      <Waypoint 
                        onEnter={() => this.heading.classList.add('animate-bio')} 
                        onLeave={() => this.heading.classList.remove('animate-bio')} 
                      >
                        <h1 ref={heading => this.heading = heading} className="bio-title is-size-1-mobile normal-text">
                          who is yuval?
                        </h1>
                      </Waypoint>
                      
                      <p>
                        {"Yuval Allweil is an autodidact whose curiosity knows no bounds. This curiosity has taken him to the other side of the world, and not just once or twice. This unbridled passion has led him directly into the laboratories of some of today's most brilliant scientists, to distill their work for a more popular audience."}
                      </p>
                      <p>
                        His interviews with visionary thinkers like Judea Pearl and Nir Eyal have headlined Specimen Magazine, and his short fiction has been published in several anthologies. 
                      </p>
                      <p>
                        He has served on the management teams of several startups, from a record-breaking e-commerce outfit to a nationally-acclaimed science magazine.
                      </p>
                      <p>
                        {"Yuval loves helping others, and firmly believes that you won't get ahead without helping those around you. "}
                        He is a dedicated teacher whose training programs and workshops have been professionally recognized, and was most recently a Teaching Assistant at&nbsp;
                        <a 
                          href="http://alchemycodelab.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Alchemy Code Lab
                        </a>
                        , Portland's premier coding bootcamp. In his free time, he tutors students in all aspects of software development. 
                      </p>
                      <p>
                        {"Yuval's passion is front end development, and his favorite task is to bring a wireframe to pixel-perfect and responsive life. Whether it's React or vanilla JavaScript, you can be sure Yuval is having fun with it."} 
                      </p>
                      <p>
                        He is currently a freelance front end developer, and is spending the majority of his time building a video-based review app for a startup in stealth mode, along with design work for other clients. 
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
  }
}

export default Bio;
