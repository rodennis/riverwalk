import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import betterTogether from "../../photos/betterTogether.jpeg";
import RecentSermon from "../../photos/recentsermon.jpeg";
import rwkids from "../../photos/riverwalkkids.jpeg";

function Home() {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div className=" w-full h-[100%] bg-[white] mt-[100vh]">
      <div className="flex flex-col">
        <div className=" flex mt-[50px] ml-[-50px] justify-center items-center">
          <div className="flex-1 ">
            <img className=" w-[500px] m-auto" src={rwkids} alt="" />
          </div>
          <div className=" flex-1 m-auto text-center ml-[-100px]">
            <h1 className=" text-[50px]  font-satisfy text-[#dec822]">
              JOIN US ONLINE OR IN PERSON <br />
              SUNDAYS AT 11:00AM
            </h1>
            <a href="https://www.facebook.com/riverwalkchurchmilton">
              <button className=" rounded-md p-3 pl-5 pr-5 bg-[#007b83] text-[white] mt-5">
                CLICK NOW TO WATCH
              </button>
            </a>
          </div>
        </div>
        <div className=" mt-[50px] bg-[#eeeeee]">
          <h2 className=" text-[50px] font-satisfy text-[#DEC822] mb-[-25px]">
            Recent Series
          </h2>
          <img
            className=" w-[90%] m-auto h-[400px] mt-[50px] pb-[50px]"
            src={RecentSermon}
            alt=""
          />
        </div>
        <div className=" flex mt-[50px]">
          <div className=" flex-1 m-auto text-center">
            <h2 className=" text-[50px] font-satisfy text-[#DEC822]">
              Better Together
            </h2>
            <p className=" p-10 pl-20 pr-20 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              velit enim rerum sapiente officiis iure sint. Molestias architecto
              debitis corrupti ipsa deserunt deleniti alias enim exercitationem.
              Commodi aliquid non accusamus?
            </p>
            <button className=" rounded-md p-3 bg-[#007b83] text-[white]">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
          <div className=" flex-1">
            <img className=" m-auto" src={betterTogether} alt="" />
          </div>
        </div>
        <div className=" flex mt-[50px] bg-[#eeeeee] mb-[50px]">
          <div className=" flex-1">
            <h1 className=" h-[300px]">Next Steps</h1>
          </div>
          <div className=" flex-1">
            <h1>Get Involved</h1>
          </div>
          <div className=" flex-1">
            <h1>RiverWalk Kids</h1>
          </div>
          <div className=" flex-1">
            <h1>Give</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
