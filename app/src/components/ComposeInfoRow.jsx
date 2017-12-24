import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Card from '../components/Card';

class ComposeInfoRow extends Component {
  render() {
    
    const { smallText, largeText, title, href, src, darkSide, classes, children } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes={darkSide === 'left' ? 'dark-background' : ''}>
              <Hero classes="is-fullheight">
                <Message italic={smallText} normal={largeText} classes={darkSide === 'left' ? 'has-text-light' : ''} />
              </Hero>
            </Column>
            <Column classes={`is-paddingless ${darkSide === 'right' ? 'dark-background' : ''}`}>
              <Hero classes="is-fullheight">
                <div className="hero-body">
                  <Card
                    title={title}
                    href={href}
                    src={src}
                    classes={classes}
                    darkSide={darkSide}
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

ComposeInfoRow.defaultProps = {
  darkSide: '',
};

ComposeInfoRow.propTypes = {
  smallText: PropTypes.string.isRequired,
  largeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  darkSide: PropTypes.string,
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ComposeInfoRow;