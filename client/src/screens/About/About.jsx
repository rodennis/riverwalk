import React, { useLayoutEffect } from "react";
import {
  fundamentals,
  pillars,
} from "../../components/Fundamentals/Fundamentals";
import familyPhoto from "../../photos/pjfamily.jpeg";
import pjhead from '../../photos/PJheadshot.jpeg'
import daphHead from '../../photos/daphneheadshot.jpeg'

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
        <p className=" m-auto w-[60%] p-10 text-[#007b83]">
          Riverwalk Church is a life giving and community driven church plant in
          Milton Florida. Located in the heart and soul of Santa Rosa County,
          Riverwalk is in the process of building a dream team.
        </p>
        <img className=" w-[60%] m-auto" src={familyPhoto} alt="" />
        <h1 className=" text-[50px] font-satisfy text-[#DEC822] pt-10">
          Why We Exist
        </h1>
        <p className=" text-[#007b83] w-[60%] p-10 m-auto">
          Whether you’re new to church, have been a Christian for many years, or
          are looking for a fresh start, there is a place for you here. Our
          heart is to provide a place where you and your family can come to
          discover God and to connect to a community. We are here to help people
          to Discover Christ, to Build Community, Walk With Purpose, and Make a
          Difference.
        </p>
      </>
      <>
        <h1 className="text-[50px] font-satisfy text-[#DEC822] pt-10">
          Sunday Morning Experience
        </h1>
        <p className=" text-[#007b83] w-[60%] p-10 m-auto">
          Riverwalk Church has four pillars to make a great Sunday morning
          experience for you and your family. First, we believe that everyone
          should have a warm and friendly welcome. From the moment you drive
          unto the campus property until you find your way to your seat we want
          you to feel like you belong here at Riverwalk Church. <br /> Next, we not
          only want you to feel like you belong here with us but we also want
          the same experience for your children. We want them to feel like they
          belong here as they learn and grow in a safe, clean, and loving
          environment. <br /> Third, our goal is for you to have an engaging worship
          expierence. We value worship and we want to have an atmosphere where
          everyone can express their worship to Jesus. Finally, we want to be
          able to present a message that is relevant and practical to your
          everyday life. We want to encourage and uplift you to prepare you for
          the week ahead of you each and every Sunday.
        </p>
        <div className=" flex flex-wrap">
          {pillars.map((pillar) => (
            <div className=" flex-1 border-2 border-[#007b83] m-3 shadow-cardShadow">
              <h2 className=" text-[25px] font-satisfy p-3 text-[#DEC822]">
                {pillar.title}
              </h2>
              <p className=" w-[300px] h-[200px] m-auto font-slab text-[#007b83]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </>
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
            <h1 className="text-[50px] font-satisfy text-[#DEC822] p-10">Our Team</h1>
      <div className=" flex">
          <div className=" flex-1">
            <img className=" w-[200px] m-auto" src={pjhead} alt="" />
            <h2 className=" text-xl text-[#DEC822]">Lead Pastor</h2>
            <p className=" text-[#007b83]">Steve Rhodes</p>
          </div>
          <div className=" flex-1">
            <img className=" w-[200px] h-[200px] m-auto" src={daphHead} alt="" />
            <h2 className=" text-xl text-[#DEC822]">Worship Leader</h2>
            <p className="text-[#007b83]">Daphne Laymon</p>
          </div>
      </div>
            
    </div>
  );
}

export default About;
