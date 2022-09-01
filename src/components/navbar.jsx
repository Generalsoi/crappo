import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#0D0D2B] flex items-center justify-between py-8 px-16 font-rubik ">
      <div className="flex items-center gap-1">
        <img src={Logo} alt="crappo logo" />
        <h1 className="text-white uppercase">crappo</h1>
      </div>

      <div className="text-white flex items-center gap-3">
        <ul className="flex items-center gap-8 text-sm">
          <li className="cursor-pointer hover:border-b-2 hover:border-[#3671E9] hover:pb-1 transition-all duration-200">
            Product
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#3671E9] hover:pb-1 transition-all duration-200">
            Features
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#3671E9] hover:pb-1 transition-all duration-200">
            About
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#3671E9] hover:pb-1 transition-all duration-200">
            Contact
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#3671E9] hover:pb-1 transition-all duration-200">
            Login
          </li>
        </ul>
        <p>|</p>
        <button className="text-sm w-32 h-10 rounded-full bg-[#3671E9]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
