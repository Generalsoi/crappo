import React, { useEffect, useRef } from "react";
import Illustration from "../assets/images/Illustrationtwo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Whycrappo = () => {
  gsap.registerPlugin(ScrollTrigger);
  let bcRefTwo = useRef();
  let whycrappoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bcRefTwo.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: "#whycrappo",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      whycrappoRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: "#whycrappo",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className="flex sm:flex-row flex-col-reverse items-center w-full  font-rubik justify-center bg-[#0D0D2B] text-white"
      id="whycrappo"
    >
      <img ref={bcRefTwo} src={Illustration} alt="illustration-two" />

      <div className="px-2 py-10 sm:p-0" ref={whycrappoRef}>
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
