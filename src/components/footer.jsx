import React from "react";
import Logo from "../assets/images/Logo.png";
import Visa from "../assets/images/Visa.png";
import MasterCard from "../assets/images/Mastercard.png";
import Bitcoin from "../assets/images/Bitcoinlogo.png";
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";
import Youtube from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <div className="bg-[#0D0D2B] text-white font-rubik sm:p-[7%] sm:pb-16 py-10 px-6">
      <div className="flex sm:flex-row flex-col sm:items-start sm:justify-between">
        <div className="flex gap-3 items-center">
          <img src={Logo} alt="logo" />
          <h2 className="uppercase text-lg font-bold">crappo</h2>
        </div>
        <div className="sm:mt-0 mt-8">
          <h4 className="font-bold text-lg mb-4">Quick link</h4>
          <ul>
            <li className="text-xs mb-3">Home</li>
            <li className="text-xs mb-3">Product</li>
            <li className="text-xs mb-3">About</li>
            <li className="text-xs mb-3">Features</li>
            <li className="text-xs mb-3">Contact</li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-8">
          <h4 className="font-bold text-lg mb-4">Resources</h4>
          <ul>
            <li className="text-xs mb-3">Download Whitepaper</li>
            <li className="text-xs mb-3">Smart Token</li>
            <li className="text-xs mb-3">Blockchain Explorer</li>
            <li className="text-xs mb-3">Crypto API</li>
            <li className="text-xs mb-3">Interest</li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-8 flex flex-col items-center">
          <h6 className="font-bold text-2xl">We accept following</h6>
          <h6 className="font-bold text-2xl">payment systems</h6>
          <div className="flex gap-8 items-center mt-8">
            <img className="w-12 h-8" src={Visa} alt="visa" />
            <img className="w-12 h-8" src={MasterCard} alt="mastercard" />
            <img className="w-12 h-8" src={Bitcoin} alt="bitcoin" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col mt-20 items-center justify-between">
        <p>&#169;2022. All rights reserved</p>
        <div className="flex items-center gap-2 sm:mt-0 mt-4">
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Youtube} alt="youtube" />
          <img src={Twitter} alt="twitter" />
          <img src={Linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
