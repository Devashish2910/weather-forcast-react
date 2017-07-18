import React, {Component} from 'react';
import GoogleMap from '';

export default class CityMap extends Component {

  componentDidMount() {
    console.log(this.props.data.coord);
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.data.coord.lat,
        lng: this.props.data.coord.lon
      }
    })
  }

  render() {

    return (
      <div ref="map" />
    );
  }
};
