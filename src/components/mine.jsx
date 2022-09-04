import React from "react";

const Mine = () => {
  return (
    <div className="sm:py-20 sm:px-[10%] py-10 px-4 bg-[#2B076E] font-rubik">
      <div className="w-full h-fit sm:p-8 py-10 px-6 bg-[#3671E9] text-white rounded-lg flex sm:flex-row flex-col sm:items-center items-start justify-between">
        <div>
          <h4 className="font-bold text-2xl mb-4">Start mining now</h4>
          <p className="text-sm">Join now with CRAPPO to get the latest news</p>
          <p className="text-sm">and start mining now</p>
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-8 flex sm:flex-row flex-col items-center gap-4">
          <input
            className="sm:w-2/3 w-full pb-2 appearance-none border border-b-[#E0E0E0] border-t-0 border-l-0 border-r-0 text-white border-b-2  bg-[#3671E9] text-xs focus:outline-none"
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
