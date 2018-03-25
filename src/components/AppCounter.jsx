import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppCounter extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.interval = window.setInterval(this.incrementCount, 65); 
  }

  incrementCount = () => {
    if (this.state.count === this.props.apps) {
      window.clearInterval(this.interval);
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  }

  render() {
    const { type } = this.props;
    const { count } = this.state;

    return (
      <div className={`app-counter ${type}`}>
        <span className="app-type">
          {type}
        </span>
        <span className="app-count">
          {count}
        </span>
        <span className="app-type">
          apps
        </span>
      </div>
    );
  }
}

AppCounter.propTypes = {
  type: PropTypes.string.isRequired,
  apps: PropTypes.number.isRequired
};

export default AppCounter;
