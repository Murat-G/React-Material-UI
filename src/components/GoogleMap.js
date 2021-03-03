import React,{useState} from 'react';
import { GoogleMap, LoadScript, Marker,InfoWindow } from '@react-google-maps/api';


const devConfig = {
  apikey: process.env.REACT_APP_API_KEY
}

const MapContainer = () => {

  const mapStyles = {        
    position: "relative",
    width: '53vh',
    height: '50vh',
    margin: '0px auto 0px'
  };
  
  const defaultCenter = {
    lat: 40.988345, lng: 29.035702
  }
  const [ selected, setSelected ] = useState({});
  const onSelect = item => {
    setSelected(item);
  }
  const locations = [ {
    name: "Archerson , Kadıköy",
    number: "+90 850 885 26 86",
    location: { 
      lat: 40.988345,
      lng: 29.035702 
    },
  }]
  return (
     <LoadScript
       googleMapsApiKey={devConfig.apikey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}
        >
          {
            locations.map(item => {
              return (
              <Marker 
                key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <>
              <p>{selected.name} </p> 
              <p>{selected.number} </p>
              </>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;