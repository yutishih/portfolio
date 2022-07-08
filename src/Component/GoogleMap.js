import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'


const mapStyles = {
  width: '100%', 
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {}, 
    selectedPlace: {}
  };

  onMarkerClick = (props, marker) => 
    this.setState({
      selectedPlace: props, 
      activeMarker: marker, 
      showingInfoWindow: true
    });
  
  onInfoWindowClose = props => {
    if (this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false, 
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <Map
        google = {this.props.google}
        zoom = {14}
        style = {mapStyles}
        initialCenter = {{
          lat: -1.2884, 
          lng: 36.8233
        }}
      >
        <Marker name = "Hello There" onClick = {this.onMarkerClick} />
        <InfoWindow
          marker = {this.state.activeMarker}
          visible = {this.state.showingInfoWindow}
          onClose = {this.onInfoWindowClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtL4m0HWUbOQ_1fc-WwfCROT3nYMSAwmQ'
})(MapContainer);

