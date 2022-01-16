import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

    const key = process.env.REACT_APP_GOOGLE_MAPS_API
  
  const mapStyles = {        
    height: "100%",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <div className=' h-[800px] bg-[#eeeeee] mt-[50px] p-10'>
      <h1 className=' text-[65px] text-[#DEC822] font-slab p-10'>location</h1>
      <div className='flex'>
        <div className=' flex-1'>
          {/* <img src= alt="" /> */}
        </div>
        <div className=' flex-1'>
     <LoadScript
       googleMapsApiKey={key} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
         />
     </LoadScript>
        </div>
      </div>
    </div>
  )
}

export default MapContainer;