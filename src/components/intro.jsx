import React, { useRef, useEffect } from "react";
import BlockchainIllustration from "../assets/images/Illustration.png";
import ArrowRight from "../assets/images/Arrow.png";
import Bar from "../assets/images/bar.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Intro = () => {
  gsap.registerPlugin(ScrollTrigger);

  let bcRef = useRef();
  let introRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bcRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        duration: 5,
        y: 0,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        duration: 10,
        y: 0,
      }
    );
  }, []);

  return (
    <div
      className="flex relative sm:flex-row flex-col w-full px-4 py-10 sm:p-0 items-center bg-[#0D0D2B] gap-8 font-rubik text-white justify-center"
      id="intro"
    >
      <div ref={introRef}>
        <div
          className="flex items-center gap-2 relative w-fit rounded-full pr-2 text-xs h-8"
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <div className="w-fit h-8 bg-white text-[#0D0D2B] rounded-full px-4 flex items-center">
            75% SAVE
          </div>
          <p>For the Black Friday Weekend</p>
        </div>

        <p className="font-bold mb-3 mt-4 text-4xl sm:text-5xl">
          Fastest &#x26; secure
        </p>
        <p className="font-bold mb-3 text-4xl sm:text-5xl">
          platform to invest
        </p>
        <p className="font-bold mb-3 text-4xl sm:text-5xl">in crypto</p>

        <p className="mb-2 text-xs text-[#E0E0E0]">
          Buy and sell cryptocurrencies, trusted by 10M wallets
        </p>
        <p className="mb-2 text-xs text-[#E0E0E0]">
          with over $30 billion in transactions
        </p>

        <button className="w-36 mt-4 h-10 flex items-center justify-center rounded-full gap-2 bg-[#3671E9] text-white text-sm">
          Try for FREE <img src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
      <img
        ref={bcRef}
        src={BlockchainIllustration}
        alt="blockchain illustration"
      />

      <img src={Bar} className="fixed -z-10 top-1/2 right-1/3" alt="" />
    </div>
  );
};

export default Intro;
