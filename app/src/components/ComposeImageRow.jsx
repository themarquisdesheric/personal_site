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
    
    const { smallText, largeText, src, theme, textColor, children } = this.props;

    return (
      <div ref={node => this.div = node}>
        <Block>
          <Columns>
            <Column classes={theme}>
              <Hero classes="is-fullheight">
                {children ||
                  <Message italic={smallText} normal={largeText} classes={textColor} />
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
  theme: '',
  textColor: '',
  children: null
};

ComposeImageRow.propTypes = {
  smallText: PropTypes.string,
  largeText: PropTypes.string,
  src: PropTypes.string.isRequired,
  theme: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node
};

export default ComposeImageRow;