import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      reverse: true,
      max: 35,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    });
  }

  render() {
    return (
      <div
        ref={node => this.rootNode = node}
        className="tilt-root"
      >
        <div className="tilt-child" style={{width: '60%', margin: '0 auto'}}>
          <div {...this.props} />
        </div>
      </div>
    );
  }
}

export default Tilt;
