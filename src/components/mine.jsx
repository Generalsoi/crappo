import React from "react";

const Mine = () => {
  return (
    <div className="sm:py-20 sm:px-[10%] bg-[#2B076E] font-rubik">
      <div className="w-full h-fit sm:p-8 bg-[#3671E9] text-white rounded-lg flex sm:flex-row flex-col items-center justify-between">
        <div>
          <h4 className="font-bold text-2xl mb-4">Start mining now</h4>
          <p className="text-sm">Join now with CRAPPO to get the latest news</p>
          <p className="text-sm">and start mining now</p>
        </div>
        <div className="w-1/2 flex sm:flex-row flex-col items-center gap-4">
          <input
            className="w-2/3 border-b-white border-b-2 border-none bg-[#3671E9] text-xs"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-white text-[#0D0D2B] w-32 h-10 p-4 flex items-center justify-center rounded-full text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mine;
