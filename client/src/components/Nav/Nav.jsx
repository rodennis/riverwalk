import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../photos/logo.svg";
import menu from '../../photos/hamburger.svg'

function Nav() {

  const [open, setOpen] = useState(false)
  
  const handleHamburger = (e) => {
    e.preventDefault()
    setOpen(prevOpen => !prevOpen)
  }
  return (
    <nav className=" flex top-0 w-[100%] z-[1] bg-nav-back h-[80px]">
        <img className=" z-10 w-10 ml-10" src={logo} alt="logo" />
        <button className=" z-10 md:hidden absolute right-0 mt-5 mr-6" onClick={handleHamburger}>
          <img className=' w-10' src={menu} alt="hamburger menu" />
        </button>
        <ul className=" hidden md:block flex-1 md:absolute right-0 md:pt-6 md:pr-10">
        <li className=" md:inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/">HOME</Link>
        </li>
        <li className=" md:inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className=" md:inline-block pr-10 text-[20px] text-[#DEC822]">
          <Link to="/connect">CONNECT</Link>
        </li>
        <li className=" md:inline-block text-[20px] text-[#DEC822]">
          <Link to="/give">GIVE</Link>
        </li>
      </ul>
      {/* hamburger menu navbar items */}
      <ul className={open === true ? " flex flex-col justify-center h-[100%] w-[100%] bg-hamburger text-center absolute" : "hidden"}>
        <li onClick={handleHamburger} className="pb-5 pb text-[20px] text-[#DEC822]">
          <Link to="/">HOME</Link>
        </li>
        <li onClick={handleHamburger} className="pb-5 text-[20px] text-[#DEC822]">
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={handleHamburger} className="pb-5 text-[20px] text-[#DEC822]">
          <Link to="/connect">CONNECT</Link>
        </li>
        <li onClick={handleHamburger} className=" text-[20px] text-[#DEC822]">
          <Link to="/give">GIVE</Link>
        </li>
      </ul>
      {/* ////////////////////////////// */}
    </nav>
  );
}

export default Nav;
