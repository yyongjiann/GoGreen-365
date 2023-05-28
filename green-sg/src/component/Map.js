import React from "react";
import GoogleMapReact from 'google-map-react';


export default function Map(){
  const defaultProps = {
    center: {
      lat: 1.353644,
      lng: 103.810563
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDJOVE7t9BsVB-48HEmCR3BYBm1aPV2JMo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        
      </GoogleMapReact>
    </div>
  );
}