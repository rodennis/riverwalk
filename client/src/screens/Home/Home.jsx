import React, { useLayoutEffect } from "react";
import HomeScroll from "../../components/HomeScroll/HomeScroll";

function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}); 

  return (
    <div className=" w-full h-screen bg-home-background bg-cover bg-center bg-fixed">
      <HomeScroll />
    </div>
  );
}

export default Home;
