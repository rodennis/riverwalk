import React from "react";
import { Link } from "react-router-dom";
import logo from "../../photos/logo.svg";

function Nav() {
  return (
    <nav className=" flex top-0 fixed w-[100%] z-[1]">
      <ul className=" flex-1 absolute text-left pt-5 pl-20 w-[100%] bg-nav-back pb-5">
        <img className=" w-10 inline-block mr-10" src={logo} alt="" />
        <li className=" inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/">HOME</Link>
        </li>
        <li className=" inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className=" inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/connect">CONNECT</Link>
        </li>
        <li className=" inline-block text-[20px] text-[#DEC822]">
          <Link to="/give">GIVE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
