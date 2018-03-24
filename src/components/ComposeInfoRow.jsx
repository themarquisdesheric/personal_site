import React from 'react';
import PropTypes from 'prop-types';
import Block from '../components/Block';
import Columns from '../components/Columns';
import TextColumn from '../components/TextColumn';
import ImageColumn from '../components/ImageColumn';
import Hero from '../components/Hero';
import Message from '../components/Message';
import Card from '../components/Card';

const ComposeInfoRow = ({ smallText, largeText, title, href, src, darkSide, classes, children }) => (
  <div>
    <Block classes={darkSide % 2 === 0 ? 'border-light' : ''}>
      <Columns>
        <TextColumn classes={darkSide % 2 === 0 ? 'dark-background' : 'border'}>
          <Hero classes="hero-text">
            <Message italic={smallText} normal={largeText} classes={darkSide % 2 === 0 ? 'has-text-light' : ''} />
          </Hero>
        </TextColumn>
        <ImageColumn classes={`is-paddingless ${darkSide % 2 === 0 ? '' : 'dark-background'}`}>
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

ComposeInfoRow.defaultProps = {
  classes: ''
};

ComposeInfoRow.propTypes = {
  smallText: PropTypes.string.isRequired,
  largeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  darkSide: PropTypes.number.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ComposeInfoRow;
