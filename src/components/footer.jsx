import React from "react";
import Logo from "../assets/images/Logo.png";
import Visa from "../assets/images/Visa.png";
import MasterCard from "../assets/images/Mastercard.png";
import Bitcoin from "../assets/images/Bitcoinlogo.png";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <img src={Logo} alt="logo" />
          <h2>crappo</h2>
        </div>
        <div>
          <h4>Quick link</h4>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Download Whitepaper</li>
            <li>Smart Token</li>
            <li>Blockchain Explorer</li>
            <li>Crypto API</li>
            <li>Interest</li>
          </ul>
        </div>
        <div>
          <h6>We accept following</h6>
          <h6>payment systems</h6>
          <div>
            <img src={Visa} alt="visa" />
            <img src={MasterCard} alt="mastercard" />
            <img src={Bitcoin} alt="bitcoin" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
