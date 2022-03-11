import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import churchBuilding from "../../photos/church-building.jpeg";

const MapContainer = () => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API;

  const mapStyles = {
    height: "60%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <div className="bg-[#eeeeee] mt-[50px] p-10">
      <h1 className=" text-[85px] text-[#DEC822] font-satisfy pb-10">
        location
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className=" flex-1 ">
          <img
            className=" w-[100%] h-[60%] m-auto"
            src={churchBuilding}
            alt=""
          />
          <h2 className=" font-satisfy text-[40px] pt-3 text-[#007b83]">Pace Campus</h2>
        </div>
        <div className=" flex-1 ml-[50px]">
          <LoadScript googleMapsApiKey={key}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
          </LoadScript>
          <h2 className="font-satisfy text-[40px] pt-3 text-[#007b83]">Google Maps</h2>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
