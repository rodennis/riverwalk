import React from "react";
import instagram from '../../photos/instagram.png'
import facebook from '../../photos/facebook.png'
import youtube from '../../photos/youtube.png'

function Footer() {
  return (
    <footer className=" flex flex-row relative top-[100vh] bg-[#eeeeee]">
      <div className=" flex-1 "></div>
      <div className=" flex-1 text-left p-[50px] ">
        <h1 className=" text-[20px] ml-[25%] font-slab pb-3">Contact Us</h1>
        <h3 className="ml-[25%] font-slab pb-2">
          Address: <span>4289 Berryhill Rd, Pace, FL 32571</span>
        </h3>
        <h3 className="ml-[25%] font-slab pb-2">
          Email: <span>info@riverwalkchurch.com</span>
        </h3>
        <h3 className="ml-[25%] font-slab">
          Phone: <span>850-261-5855</span>
        </h3>
      </div>
      <div className=" flex-1 p-[50px]">
        <h2 className="text-[20px] pb-4 font-slab">Follow Us</h2>
        <img className=' w-[50px] inline-block mr-3' src={instagram} alt="" />
        <img className=' w-[50px] inline-block mr-3' src={youtube} alt="" />
        <img className=' w-[50px] inline-block' src={facebook} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
