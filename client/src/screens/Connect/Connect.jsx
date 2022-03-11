import React, { useLayoutEffect } from "react";
import ConnectForm from "../../components/ConnectForm/ConnectForm";
import Map from "../../components/Map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Connect() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className=" w-full h-[100%] bg-[white] mt-[100vh]">
        <ConnectForm />
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
          <Map />
        </Wrapper>
      </div>
    </>
  );
}

export default Connect;
