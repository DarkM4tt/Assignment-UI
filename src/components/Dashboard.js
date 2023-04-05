import React from "react";
import { RiFolderOpenLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineFileText,
} from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center pl-12 w-[15rem] h-[17rem] mt-4 rounded-2xl bg-gray-600">
      <div className="text-white space-x-4">
        <RiFolderOpenLine
          className="w-8 h-8 p-2 rounded-md inline bg-black"
          color="white"
        />
        <span className="font-bold">Dashboard</span>
      </div>
      <div className="text-white space-x-4 mt-6">
        <AiOutlineMail className="inline" color="white" />
        <span className="text-sm">Email</span>
      </div>
      <div className="text-white space-x-4 mt-6">
        <AiOutlineCalendar className="inline" color="white" />
        <span className="text-sm">Calendar</span>
      </div>
      <div className="text-white space-x-4 mt-6">
        <VscGraph className="inline" color="white" />
        <span className="text-sm">Graph</span>
      </div>
      <div className="text-white space-x-4 mt-6">
        <AiOutlineFileText className="inline" color="white" />
        <span className="text-sm">Forms</span>
      </div>
    </div>
  );
};

export default Dashboard;
