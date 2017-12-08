import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import SecondRow from '../layout/SecondRow';

class WhenInView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    this.setState({ inView: true });
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} />
        {this.state.inView && <SecondRow />}
      </div>
    );
  }
}

export default WhenInView;