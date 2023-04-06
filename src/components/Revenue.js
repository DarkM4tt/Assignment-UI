import React from "react";

const Revenue = () => {
  return (
    <div className="flex justify-center items-center h-[7rem] mt-4 rounded-2xl w-[25rem] px-[2rem] py-[2rem] bg-gray-700 space-x-20">
      <div>
        <span className="text-white text-xl font-semibold bg-black p-3 rounded-full">
          $
        </span>
      </div>
      <div className="text-white">
        <p>Total Revenue</p>
        <p className="font-extrabold">$92,983</p>
        <progress value="0.75" color="indigo" className="mt-4 h-3"></progress>
      </div>
    </div>
  );
};

export default Revenue;
