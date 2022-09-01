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
          <li>Product</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
        <p>|</p>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
