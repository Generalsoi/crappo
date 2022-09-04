import React from "react";
import Intro from "./intro";
import Navbar from "./navbar";
import Details from "./details";
import Whycrappo from "./whycrappo";
import Coins from "./coins";
import Investment from "./investment";
import Mine from "./mine";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Details />
      <Whycrappo />

      <div className="bg-[#0D0D2B] text-center text-white font-rubik sm:py-32 px-4 py-20 relative">
        <h4 className="font-bold sm:text-3xl text-2xl mb-8">
          Check how much you can earn
        </h4>
        <p className="sm:text-sm text-[0.72rem] mb-1">
          Let's check your hash rate to see how much you will earn today,
        </p>
        <p className="sm:text-sm text-[0.72rem] mb-1">
          Exercitation veniam consequat sunt nostrud amet.
        </p>

        <div className="absolute sm:w-1/2 w-[90%] h-60 bg-white sm:left-[25%] left-4 mt-8 rounded-lg p-8 font-rubik">
          <div className="flex sm:flex-row flex-col sm:gap-3 gap-8 w-full">
            <input
              className="sm:w-3/5 w-full border-b-[#E0E0E0] border-b-2 text-sm text-[#0D0D2B]"
              type="text"
              placeholder="Enter your hash rate"
            />
            <select
              className="sm:w-1/5 w-full border-b-[#E0E0E0] border-b-2 text-sm text-[#0D0D2B]"
              name="rate-per-sec"
              id=""
            >
              <option value="th/s">TH/s</option>
              <option value="h/s">H/s</option>
              <option value="kh/s">KH/s</option>
              <option value="mh/s">MH/s</option>
            </select>
            <button className="w-fit h-8 bg-[#3671E9] text-white p-4 text-sm rounded-full flex justify-center items-center">
              Calculate
            </button>
          </div>

          <div className=" mt-16 w-full flex flex-col gap-4 items-start">
            <h5 className="uppercase text-[#3671E9] font-bold text-xs">
              Estimated 24hour revenue
            </h5>
            <p className="text-[#0D0D2B] font-bold sm:text-2xl text-xl">
              0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
            </p>
            <p className="text-[#828282] sm:text-sm text-xs ">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center sm:mt-52 mt-96 font-rubik">
        <p className="font-bold sm:text-3xl text-lg sm:mb-3 mb-2">
          Trade securely and market the high
        </p>
        <p className="font-bold sm:text-3xl text-lg sm:mb-3 mb-2">
          growth cryptocurrencies.
        </p>
      </div>

      <Coins />
      <Investment />
      <Mine />
    </div>
  );
};

export default Homepage;
