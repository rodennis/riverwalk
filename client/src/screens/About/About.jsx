import React, { useLayoutEffect } from "react";
import { fundamentals } from "../../components/Fundamentals/Fundamentals";

function About() {
  // useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  return (
    <div className=" w-full h-[100%] bg-[white] mt-[100vh]">
      <>
        <h1 className=" text-[50px] font-satisfy text-[#DEC822]">
          What we Believe
        </h1>
        <div className=" flex flex-wrap">
          {fundamentals.map((fund) => (
            <div className=" flex-1 border-2 m-3 shadow-cardShadow">
              <h2 className=" text-[25px] font-satisfy p-3 text-[#DEC822]">
                {fund.title}
              </h2>
              <p className=" w-[300px] h-[200px] m-auto font-slab text-[#007b83]">
                {fund.body}
              </p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default About;
