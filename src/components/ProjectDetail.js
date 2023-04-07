import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProjectDetail = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col justify-center px-[2rem] h-[14rem] mt-4 rounded-2xl w-[17rem] bg-gray-700 text-white">
        <div className="flex gap-20">
          <p className="inline">Project Details</p>
          <BsThreeDotsVertical />
        </div>

        <h1 className="text-red-400 text-lg font-bold mt-2">Hira R.</h1>
        <p className="text-white text-xs mt-2">UX/UI Designer</p>

        <p className="font-semibold mt-4">Project Progress</p>
        <span className="text-sm ml-44 font-semibold">75%</span>
        <progress
          value="0.75"
          color="indigo"
          className="h-3 w-full mt-1"
        ></progress>
      </div>

      <div className="flex flex-col justify-center items-center h-[14rem] mt-4 rounded-2xl w-[17rem] bg-gray-700 text-white">
        <div className="flex gap-20">
          <p className="inline">Project Progress</p>
          <BsThreeDotsVertical />
        </div>

        <div class="relative flex justify-center items-center bg-red-500 mt-5 w-20 h-20 rounded-full">
          <p class="font-bold">75%</p>
        </div>

        <p className="mt-5 text-xs">3 Remaining Projects</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
