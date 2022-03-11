import React from "react";
import instagram from "../../photos/instagram.png";
import facebook from "../../photos/facebook.png";
import youtube from "../../photos/youtube.png";

function Footer() {
  return (
    <footer className=" border-t-[1px] border-t-nav-back flex flex-col w-[100%] bottom-0 relative bg-[#eeeeee] md:flex-row">
      <div className=" text-center flex-1 md:text-left p-[50px] ">
        <h1 className=" text-[20px] md:ml-[25%] font-slab pb-3">Contact Us</h1>
        <h3 className=" md:ml-[25%] font-slab pb-2">
          Address: <span>4289 Berryhill Rd, Pace, FL 32571</span>
        </h3>
        <h3 className=" md:ml-[25%] font-slab pb-2">
          Email: <span>info@riverwalkchurch.com</span>
        </h3>
        <h3 className=" md:ml-[25%] font-slab">
          Phone: <span>850-261-5855</span>
        </h3>
      </div>
      <div className=" flex-1 p-[50px]">
        <h2 className=" text-[20px] pb-4 font-slab">Follow Us</h2>
        <a
          href="https://www.instagram.com/riverwalk_church/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img className=" w-[50px] inline-block mr-3" src={instagram} alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC-kZi2y7hf3I43EffbZXQCg"
          target="_blank"
          rel="noreferrer"
        >
          <img className=" w-[50px] inline-block mr-3" src={youtube} alt="" />
        </a>
        <a
          href="https://www.facebook.com/riverwalkchurchmilton"
          target="_blank"
          rel="noreferrer"
        >
          <img className=" w-[50px] inline-block" src={facebook} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
