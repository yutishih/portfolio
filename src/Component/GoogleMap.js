import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%', 
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google = {this.props.google}
        zoom = {14}
        style = {mapStyles}
        initialCenter = {{
          lat: -1.2884, 
          lng: 3.68233
        }}
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtL4m0HWUbOQ_1fc-WwfCROT3nYMSAwmQ'
})(MapContainer);

