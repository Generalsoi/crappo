import React from "react";
import Illustration from "../assets/images/Illustrationtwo.png";

const Whycrappo = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse items-center w-full  font-rubik justify-center bg-[#0D0D2B] text-white">
      <img src={Illustration} alt="illustration-two" />

      <div className="px-2 py-10 sm:p-0">
        <p className="font-bold text-3xl sm:text-4xl mb-2">
          Why you should choose
        </p>
        <p className="font-bold text-3xl sm:text-4xl mb-2">crappo</p>

        <p className="text-xs text-[#E0E0E0] mb-2 mt-8">
          Experience the next generation cryptocurrency
        </p>
        <p className="text-xs text-[#E0E0E0] mb-2">
          platform. No financial borders, extra fees, and fake
        </p>
        <p className="text-xs text-[#E0E0E0] mb-8">reviews.</p>

        <button className="w-32 h-8 bg-[#3671E9] text-white text-xs rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Whycrappo;
