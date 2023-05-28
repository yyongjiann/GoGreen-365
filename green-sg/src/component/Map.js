import React, {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react';




export default function Map(){

    let Props = {
        center: {
          lat: 1.850064,
          lng: 103.955459
        },
        zoom: 11
    }
 
    const [defaultProps, setDefaultProps] = useState(Props)
    


  useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
     (position) => {
        setDefaultProps(prevState => (
            {...prevState, 
            center: {lat: position.coords.latitude, lng: position.coords.longitude}}))})}
    else {
   console.log("browser doesnt support geolocation");
   
 }}, [])
    
 console.log(defaultProps.center)


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyDJOVE7t9BsVB-48HEmCR3BYBm1aPV2JMo" }}
        defaultCenter={[1.850064, 103.955459]}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
       />
    </div>

  );
}