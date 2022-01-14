import React from "react";

function Nav() {
  return (
    <nav className=" w-[100%] h-[75px] bg-[#DEC822]">
      <ul className=" text-left pt-5 pl-20">
        <li className=" inline-block pr-10 text-[20px] text-[#007b83]">Home</li>
        <li className=" inline-block pr-10 text-[20px] text-[#007b83]">About</li>
        <li className=" inline-block pr-10 text-[20px] text-[#007b83]">Connect</li>
        <li className=" inline-block text-[20px] text-[#007b83]">Give</li>
      </ul>
    </nav>
  );
}

export default Nav;
