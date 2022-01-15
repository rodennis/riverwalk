import React from "react";
import { Link } from "react-router-dom";
import betterTogether from "../../photos/betterTogether.jpeg";

function HomeScroll() {
  return (
    <div className=" absolute bg-white w-[100%] h-screen mt-[100vh]">
      <div className=" flex m-auto mt-[50px]">
        <div className=" flex-1 m-auto">
          <h2 className=" text-[50px] font-slab">Better Together</h2>
          <p className=" p-10 pl-20 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit
            enim rerum sapiente officiis iure sint. Molestias architecto debitis
            corrupti ipsa deserunt deleniti alias enim exercitationem. Commodi
            aliquid non accusamus?
          </p>
          <button className=" rounded-md p-3 bg-[#007b83] text-[white]">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
        <div className=" flex-1">
          <img className=" m-auto" src={betterTogether} alt="" />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HomeScroll;
