import React from "react";
import Intro from "./intro";
import Navbar from "./navbar";
import Details from "./details";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Details />
    </div>
  );
};

export default Homepage;
