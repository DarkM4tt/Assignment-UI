import React from "react";

const Revenue = () => {
  return (
    <div className="flex justify-center items-center h-[7rem] mt-4 rounded-2xl w-[25rem] px-[2rem] py-[2rem] bg-gray-600 space-x-5">
      <div>
        <span className="text-white font-bold bg-black p-2 rounded-full">
          $
        </span>
      </div>
      <div className="bg-black text-white">
        <p className="">Total Revenue</p>
        <p>$92,983</p>
      </div>
    </div>
  );
};

export default Revenue;
