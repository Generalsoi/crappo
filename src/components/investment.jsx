import React from "react";
import Chart from "../assets/images/Chart.png";
import Statistic from "../assets/images/Statistic.png";
import Table from "../assets/images/Table.png";

const Investment = () => {
  return (
    <div className="bg-[#2B076E] py-20 text-white font-rubik">
      <div className="text-center p-4">
        <h2 className="font-bold sm:text-3xl text-lg sm:mb-2 mb-1">
          Market sentiments, portfolio, and run
        </h2>
        <h2 className="font-bold sm:text-3xl text-lg sm:mb-2 mb-1">
          the infrastructure of your choice
        </h2>
      </div>

      <div className="flex sm:flex-row flex-col w-full sm:px-[7%] sm:py-10 p-6 pt-20 gap-20">
        <div className="sm:w-1/3">
          <h4 className="font-bold text-2xl">Invest Smart</h4>
          <p className="text-xs my-6">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <button className="flex items-center justify-center w-32 h-10 rounded-full bg-[#3671E9] text-white p-4">
            Learn more
          </button>
        </div>
        <img className="sm:w-[45%] w-full" src={Chart} alt="chart" />
      </div>

      <div className="flex sm:flex-row flex-col-reverse items-center w-full gap-20 sm:pr-[7%] sm:pl-0 p-6 mt-20">
        <img className="sm:w-[50%] w-full" src={Statistic} alt="statistic" />
        <div className="sm:w-1/3">
          <h4 className="font-bold text-2xl">Detailed Statistics</h4>
          <p className="text-xs my-6">
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <button className="flex items-center justify-center w-32 h-10 rounded-full bg-[#3671E9] text-white p-4">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col w-full sm:px-[7%] sm:py-10 p-6 gap-20 mt-20">
        <div className="sm:w-1/3">
          <h4 className="font-bold text-2xl">Grow your profit and track</h4>
          <h4 className="font-bold text-2xl">your investments</h4>
          <p className="text-xs my-6">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="flex items-center justify-center w-32 h-10 rounded-full bg-[#3671E9] text-white p-4">
            Learn more
          </button>
        </div>
        <img className="sm:w-[50%] w-full" src={Table} alt="table" />
      </div>
    </div>
  );
};

export default Investment;
