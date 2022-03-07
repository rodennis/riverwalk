import React, { useLayoutEffect } from "react";
import { fundamentals } from "../../components/Fundamentals/Fundamentals";
import familyPhoto from "../../photos/pjfamily.jpeg";
import Leaders from "../../components/Leaders/Leaders";
import SundayExperience from "../../components/SundayExperience/SundayExperience";

function About() {
  // useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  return (
    <div className=" w-full h-[100%] bg-[white] mt-[100vh]">
      <>
        <h1 className=" text-[50px] font-satisfy text-[#DEC822] pt-10">
          Who We Are
        </h1>
        <p className=" m-auto w-[80%] text-[#007b83] md:w-[60%] md:p-10">
          Riverwalk Church is a life giving and community driven church plant in
          Milton Florida. Located in the heart and soul of Santa Rosa County,
          Riverwalk is in the process of building a dream team.
        </p>
        <img className=" mt-5 w-[90%] m-auto md:mt-0 md:w-[60%]" src={familyPhoto} alt="" />
        <h1 className=" text-[50px] font-satisfy text-[#DEC822] pt-10">
          Why We Exist
        </h1>
        <p className=" text-[#007b83] m-auto w-[80%] md:w-[60%] md:p-10">
          Whether you’re new to church, have been a Christian for many years, or
          are looking for a fresh start, there is a place for you here. Our
          heart is to provide a place where you and your family can come to
          discover God and to connect to a community. We are here to help people
          to Discover Christ, to Build Community, Walk With Purpose, and Make a
          Difference.
        </p>
      </>
      <SundayExperience />
      <>
        <h1 className=" text-[50px] font-satisfy text-[#DEC822] p-10">
          What we Believe
        </h1>
        <div className=" flex flex-wrap">
          {fundamentals.map((fund) => (
            <div className=" flex-1 border-2 border-[#007b83] m-3 shadow-cardShadow">
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
      <Leaders />
    </div>
  );
}

export default About;
