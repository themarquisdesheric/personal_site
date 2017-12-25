import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Waypoint from 'react-waypoint';

const DesktopScrolling = ({ scrollTo, prevNode, nextNode }) => {
  return (
    <MediaQuery minDeviceWidth={1065}>
      <Waypoint onEnter={({ previousPosition }) => 
        scrollTo(previousPosition, prevNode, nextNode)}
      />
    </MediaQuery>
  );
};

DesktopScrolling.propTypes = {
  scrollTo: PropTypes.func.isRequired,
  prevNode: PropTypes.number.isRequired,
  nextNode: PropTypes.number.isRequired
};

export default DesktopScrolling;
