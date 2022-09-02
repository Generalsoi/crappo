import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="bg-[#0D0D2B] flex sm:flex-row flex-col sm:items-center items-start justify-between sm:py-8 sm:px-16 p-4 font-rubik relative ">
      <div
        className={`${!mobile && " top-4"} ${
          mobile && "sm:top-4"
        } flex items-center gap-1`}
      >
        <img src={Logo} alt="crappo logo" />
        <h1 className="text-white uppercase text-lg sm:text-base">crappo</h1>
      </div>

      <div
        className={` ${
          mobile
            ? " translate-x-0 top-0 right-0 "
            : "fixed sm:static translate-x-full sm:translate-x-0"
        } text-white flex sm:flex-row flex-col items-center justify-center w-full h-screen sm:h-auto sm:w-auto gap-3 sm:mt-0 mt-8 transition-all duration-500 z-30 sm:z-1 `}
      >
        <ul className="flex sm:flex-row flex-col items-center sm:gap-8 gap-10 sm:text-sm text-2xl sm:z-1 ">
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

      {!mobile ? (
        <div
          className="fixed top-6 right-4 sm:hidden z-50"
          onClick={() => {
            setMobile(true);
          }}
        >
          <div className={`w-7 h-1 mb-1 rounded-full bg-[#3671E9] `}></div>
          <div className={`w-7 h-1 mb-1 rounded-full bg-[#3671E9] `}></div>
          <div className={`w-7 h-1 mb-1 rounded-full bg-[#3671E9] `}></div>
        </div>
      ) : (
        <div
          className="fixed top-6 right-3 sm:hidden z-50 "
          onClick={() => {
            setMobile(false);
          }}
        >
          <div className="w-7 h-1 rounded-full bg-[#3671E9] rotate-45 ease-in-out  duration-500 -translate-x-1"></div>
          <div className="w-7 h-1 rounded-full bg-[#3671E9] -rotate-45 ease-in-out  duration-500 -translate-y-1 -translate-x-1"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
