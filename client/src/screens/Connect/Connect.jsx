import React, { useLayoutEffect } from "react";
import ConnectForm from "../../components/ConnectForm/ConnectForm";
import Map from "../../components/Map/Map";

function Connect() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className=" w-full h-[100%] bg-[white] mt-[100vh]">
        <ConnectForm />
        <Map />
      </div>
    </>
  );
}

export default Connect;
