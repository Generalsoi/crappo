import React from "react";
import BarChart from "../assets/images/BarChart.png";
import Earth from "../assets/images/Earth.png";
import Person from "../assets/images/Person.png";

const Details = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start sm:gap-0 gap-16 bg-[#0D0D2B] sm:p-20 py-4 pl-10 text-white font-rubik">
      <div className="flex items-center gap-2">
        <div
          className="flex justify-center items-center w-14 h-14 rounded-full "
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <img src={BarChart} alt="bar-chart" className="w-6 h-6 " />
        </div>
        <div>
          <h2 className="font-bold text-3xl">$30B</h2>
          <p className="text-xs text-[#E0E0E0]">Digital Currency Exchanged</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="flex justify-center items-center w-14 h-14 rounded-full "
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <img src={Person} alt="person" className="w-6 h-6 " />
        </div>
        <div>
          <h2 className="font-bold text-3xl">10M+</h2>
          <p className="text-xs text-[#E0E0E0]">Trusted Wallets Investors</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="flex justify-center items-center w-14 h-14 rounded-full "
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <img src={Earth} alt="earth" className="w-6 h-6 " />
        </div>
        <div>
          <h2 className="font-bold text-3xl">195</h2>
          <p className="text-xs text-[#E0E0E0]">Countries supported</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
