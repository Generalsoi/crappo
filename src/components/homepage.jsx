import React from "react";
import Intro from "./intro";
import Navbar from "./navbar";
import Details from "./details";
import Whycrappo from "./whycrappo";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Details />
      <Whycrappo />

      <div className="bg-[#0D0D2B] text-center text-white font-rubik sm:py-32 px-4 py-20 relative">
        <h4 className="font-bold sm:text-3xl text-2xl mb-8">
          Check how much you can learn
        </h4>
        <p className="sm:text-sm text-[0.72rem] mb-1">
          Let's check your hash rate to see how much you will earn today,
        </p>
        <p className="sm:text-sm text-[0.72rem] mb-1">
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
