import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import Column from '../components/Column';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

class ComposeImageRow extends Component {
  render() {
    
    const { smallText, largeText, src, darkSide, classes, children } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes={darkSide === 'left' ? 'dark-background' : 'border'}>
              <Hero classes={`hero-text ${classes}`}>
                {children ||
                  <Message italic={smallText} normal={largeText} classes={darkSide === 'left' ? 'has-text-light' : ''} />
                }
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src={`${src}`} alt={src.slice(0, -4)} />
              </Image>
            </Column>
          </Columns>
        </Block>
      </div>
    );
  }
}

ComposeImageRow.defaultProps = {
  smallText: '',
  largeText: '',
  darkSide: '',
  classes: '',
  children: null
};

ComposeImageRow.propTypes = {
  smallText: PropTypes.string,
  largeText: PropTypes.string,
  src: PropTypes.string.isRequired,
  darkSide: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node
};

export default ComposeImageRow;