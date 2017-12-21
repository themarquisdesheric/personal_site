import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Card from '../components/Card';

class ComposeImageRow extends Component {
  render() {
    
    const { smallText, largeText, title, href, src, theme, textColor, classes, children } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes="dark-background">
              <Hero classes="is-fullheight">
                <Message italic={smallText} normal={largeText} classes={textColor} />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <Card
                    title={title}
                    href={href}
                    src={src}
                    classes={classes}
                  >
                    {children}
                  </Card>
                </div>
              </Hero>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

ComposeImageRow.defaultProps = {
  theme: '',
  textColor: ''
};

ComposeImageRow.propTypes = {
  smallText: PropTypes.string.isRequired,
  largeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  theme: PropTypes.string,
  textColor: PropTypes.string,
  classes: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default ComposeImageRow;