import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {React, Component} from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
     <div className="container section map" style={{width: 950, height: 20, padding: 20, color: 'white'}}>
         <h5 className="card z-depth-0 map" style={{height: 70, padding: 20, color:'black'}}><strong>Google Maps </strong><small>Nairobi</small></h5>
    <div className="card z-depth-0 map">
      <Map google={this.props.google} zoom={14} initialCenter={{ lat: -1.286389, lng: 36.817223 }} style={{position: 'center', width: 910, height: 500}}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={{ lat: -1.286389, lng: 36.817223 }} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Location</h1>
            </div>
        </InfoWindow>
      </Map>
    </div>
    </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA7h992JSys30KTi7Iqs2zvuV10eyQ-bV8")
})(MapContainer)