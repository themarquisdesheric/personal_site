import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class ImageRow extends PureComponent {
  render() {
    const { row, index } = this.props;
    const { smallText, largeText, src } = row;

    return (
      <Fragment>
        <section className={`text-content ${index % 2 === 0 ? 'dark-background' : ''}`}>
          <div>
            <h2 className="small-text">
              {smallText}
            </h2>
          
            <h2 className="large-text">
              {largeText}
            </h2>
          </div>
        </section>
        
        <figure className="poster">
          <img src={src} alt={src.slice(0, -4)} />
        </figure>
      </Fragment>
    );
  }
}

ImageRow.propTypes = {
  row: PropTypes.shape({
    smallText: PropTypes.string.isRequired,
    largeText: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
};

class ComposeImageRows extends PureComponent {
  render() {
    const { content } = this.props;

    return (
      <div className="image-rows">
        {content.map( (row, index) => 
          <ImageRow key={row.src} row={row} index={index} />
        )}
      </div>
    );
  }
} 

ComposeImageRows.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ComposeImageRows;
