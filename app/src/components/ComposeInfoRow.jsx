import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';
import ImageColumn from '../components/ImageColumn';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Card from '../components/Card';

class ComposeInfoRow extends Component {
  render() {
    
    const { smallText, largeText, title, href, src, darkSide, classes, children } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block classes={title === 'Education is important.' ? 'border-light' : ''}>
          <Columns>
            <TextColumn classes={darkSide === 'left' ? 'dark-background' : 'border'}>
              <Hero classes="hero-text">
                <Message italic={smallText} normal={largeText} classes={darkSide === 'left' ? 'has-text-light' : ''} />
              </Hero>
            </TextColumn>
            <ImageColumn classes={`is-paddingless ${darkSide === 'right' ? 'dark-background' : ''}`}>
              <Hero>
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
            </ImageColumn>
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