import React from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';
import ImageColumn from '../components/ImageColumn';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Image from '../components/Image';

const ComposeImageRow = ({ smallText, largeText, src, darkSide, classes, children }) => {    
  return (
    <div>
      <Block>
        <Columns>
          <TextColumn classes={darkSide === 'left' ? 'dark-background' : 'border'}>
            <Hero classes={`hero-text ${classes}`}>
              {children ||
                <Message italic={smallText} normal={largeText} classes={darkSide === 'left' ? 'has-text-light' : ''} />
              }
            </Hero>
          </TextColumn>
          <ImageColumn classes="is-paddingless">
            <Image>
              <img src={`${src}`} alt={src.slice(0, -4)} />
            </Image>
          </ImageColumn>
        </Columns>
      </Block>
    </div>
  );
};

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
