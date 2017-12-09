import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import SecondRow from '../layout/SecondRow';

class WhenInView extends Component {
  state = {
    inView: false
  };

  onEnter = ({ previousPosition }) => {
    this.setState({ inView: true });
  }

  render() {
    return (

      // TODO: PropTypes

      // TODO: classNames

      // TODO: get ref, scroll into view view.scrollIntoView({ behavior: 'smooth' })

      <div id="view">
        <Waypoint onEnter={this.onEnter} />
        {this.state.inView && <SecondRow />}
      </div>
    );
  }
}

export default WhenInView;