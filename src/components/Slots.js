import React from "react";

const Slots = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[18rem] mt-4 rounded-2xl w-[25rem] px-[2rem] py-[0.5rem] bg-gray-700 text-white">
      <h1 className="font-bold">Free Slots Available</h1>

      <div className="flex flex-wrap mt-8 space-x-4">
        <div className="flex flex-col justify-center items-center bg-red-500 w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">12</h1>
          <p>June</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">18</h1>
          <p>June</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">20</h1>
          <p>June</p>
        </div>
      </div>

      <div className="flex flex-wrap mt-4 space-x-4">
        <div className="flex flex-col justify-center items-center bg-black w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">02</h1>
          <p>July</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">10</h1>
          <p>July</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-black w-20 h-20 rounded-2xl">
          <h1 className="font-semibold text-2xl">15</h1>
          <p>July</p>
        </div>
      </div>
    </div>
  );
};

export default Slots;
