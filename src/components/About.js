import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center h-[10rem] mt-4 rounded-2xl w-[15rem] px-[2rem] py-[0.5rem] bg-gray-700">
      <h1 className="text-red-400 text-lg font-bold">Hira R.</h1>
      <p className="text-white text-xs">UX/UI Designer</p>

      <div className="mt-4 space-x-14 text-white">
        <span className="font-bold">125</span>
        <span className="font-bold">$124</span>
      </div>

      <div className="space-x-8 text-white text-sm">
        <span>Projects</span>
        <span>Revenue</span>
      </div>
    </div>
  );
};

export default About;
