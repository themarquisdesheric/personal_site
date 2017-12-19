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
    
    const { smallText, largeText, src, alt, theme, textColor } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes={theme}>
              <Hero classes="is-fullheight">
                <Message italic={smallText} normal={largeText} classes={textColor} />
              </Hero>
            </Column>
            <Column classes="is-paddingless">
              <Image>
                <img src={src} alt={alt} />
              </Image>
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  theme: PropTypes.string,
  textColor: PropTypes.string
};

export default ComposeImageRow;