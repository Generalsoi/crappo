import React, { useEffect, useRef } from "react";
import Chart from "../assets/images/Chart.png";
import Statistic from "../assets/images/Statistic.png";
import Table from "../assets/images/Table.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Investment = () => {
  gsap.registerPlugin(ScrollTrigger);

  let chartRef = useRef();
  let statRef = useRef();
  let tableRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      chartRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 5,
        y: 0,
        scrollTrigger: {
          trigger: "#chart",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      statRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 5,
        y: 0,
        scrollTrigger: {
          trigger: "#stat",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      tableRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        duration: 5,
        x: 0,
        scrollTrigger: {
          trigger: "#table",
        },
      }
    );
  }, []);

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

      <div
        className="flex sm:flex-row flex-col w-full sm:px-[7%] sm:py-10 p-6 pt-20 gap-20"
        id="investment"
      >
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
        <img
          className="sm:w-[45%] w-full"
          src={Chart}
          alt="chart"
          ref={chartRef}
          id="chart"
        />
      </div>

      <div className="flex sm:flex-row flex-col-reverse items-center w-full gap-20 sm:pr-[7%] sm:pl-0 p-6 mt-20">
        <img
          className="sm:w-[50%] w-full"
          src={Statistic}
          alt="statistic"
          ref={statRef}
          id="stat"
        />
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
        <img
          className="sm:w-[50%] w-full"
          src={Table}
          alt="table"
          ref={tableRef}
          id="table"
        />
      </div>
    </div>
  );
};

export default Investment;
