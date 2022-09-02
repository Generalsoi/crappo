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
    </div>
  );
};

export default Homepage;
