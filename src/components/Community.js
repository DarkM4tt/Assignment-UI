import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Community = () => {
  return (
    <div className="flex justify-center items-center h-[8rem] mt-4 rounded-2xl w-[35rem] bg-gray-700 gap-12">
      <div className="w-20 h-20">
        <img
          src="https://png.pngtree.com/png-clipart/20201208/ourmid/pngtree-red-leaf-decoration-material-png-image_2520393.jpg"
          alt=""
        />
      </div>

      <div className="text-white">
        <div className="flex gap-52">
          <h1>Dear Client</h1>
          <RiArrowDropDownLine className="text-3xl" />
        </div>
        <p>Join our online community. It helps</p>
        <p>In managing your projects</p>
      </div>
    </div>
  );
};

export default Community;
