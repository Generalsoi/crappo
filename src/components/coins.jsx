import React, { useState } from "react";
import Bitcoin from "../assets/images/bitcoin.png";
import Ethereum from "../assets/images/ethereum.png";
import Litecoin from "../assets/images/litecoin.png";
import ArrowRight from "../assets/images/rightarrow.png";
import Arrow from "../assets/images/Arrow.png";

const Coins = () => {
  const [hover, setHover] = useState(false);
  const [hovertwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  return (
    <div className="flex sm:flex-row flex-col items-center justify-center gap-16 sm:gap-8 sm:px-8 sm:py-10 p-4 font-rubik bg-gray-50">
      <div
        className="cursor-pointer sm:w-64 w-[90%] h-fit px-4 sm:py-10 py-16 rounded-lg text-center bg-white hover:bg-[#2B076E] hover:text-white "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex items-center justify-center mb-8">
          <img className="w-10 h-10" src={Bitcoin} alt="bitcoin" />
        </div>
        <div className="flex items-start justify-center">
          <h3 className="font-bold text-xl">Bitcoin</h3>{" "}
          <span className="text-xs text-[#BDBDBD]">BTC</span>
        </div>

        <p className="text-xs text-[#828282] my-4">
          Digital currency in which a record of transactions is maintained.
        </p>

        {hover ? (
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-36 h-10 rounded-full bg-[#3671E9] text-white text-xs p-2 gap-4">
              Start mining <img className="w-6 h-6" src={Arrow} alt="" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full w-10 h-10"
              style={{ border: "2px solid rgba(43, 7, 110, 0.2)" }}
            >
              <img src={ArrowRight} alt="arrow" />
            </div>
          </div>
        )}
      </div>

      <div
        className="cursor-pointer sm:w-64 w-[90%] h-fit px-4 sm:py-10 py-16 rounded-lg text-center bg-white hover:bg-[#2B076E] hover:text-white "
        onMouseEnter={() => setHoverTwo(true)}
        onMouseLeave={() => setHoverTwo(false)}
      >
        <div className="flex items-center justify-center mb-8">
          <img className="w-10 h-10" src={Ethereum} alt="ethereum" />
        </div>
        <div className="flex items-start justify-center">
          <h3 className="font-bold text-xl">Ethereum </h3>
          <span className="text-xs text-[#BDBDBD]">ETH</span>
        </div>

        <p className="text-xs text-[#828282] my-4">
          Blockchain technology to create and run decentralized digital
          applications.
        </p>

        {hovertwo ? (
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-36 h-10 rounded-full bg-[#3671E9] text-white text-xs p-2 gap-4">
              Start mining <img className="w-6 h-6" src={Arrow} alt="" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full w-10 h-10"
              style={{ border: "2px solid rgba(43, 7, 110, 0.2)" }}
            >
              <img src={ArrowRight} alt="arrow" />
            </div>
          </div>
        )}
      </div>

      <div
        className="cursor-pointer sm:w-64 w-[90%] h-fit px-4 sm:py-10 py-16 rounded-lg text-center bg-white hover:bg-[#2B076E] hover:text-white"
        onMouseEnter={() => setHoverThree(true)}
        onMouseLeave={() => setHoverThree(false)}
      >
        <div className="flex items-center justify-center mb-8">
          <img className="w-10 h-10" src={Litecoin} alt="litecoin" />
        </div>
        <div className="flex items-start justify-center">
          <h3 className="font-bold text-xl">Litecoin</h3>
          <span className="text-xs text-[#BDBDBD]">LTC</span>
        </div>

        <p className="text-xs text-[#828282] my-4">
          Cryptocurrency that enables instant payments to anyone in the world.
        </p>

        {hoverThree ? (
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-36 h-10 rounded-full bg-[#3671E9] text-white text-xs p-2 gap-4">
              Start mining <img className="w-6 h-6" src={Arrow} alt="" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div
              className="flex items-center justify-center rounded-full w-10 h-10"
              style={{ border: "2px solid rgba(43, 7, 110, 0.2)" }}
            >
              <img src={ArrowRight} alt="arrow" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coins;
