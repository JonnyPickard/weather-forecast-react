/* eslint-disable no-undef, no-new */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    return (
      <div ref={(ref) => { this.map = ref; }} />
    );
  }
}

GoogleMap.propTypes = {
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
};

export default GoogleMap;
