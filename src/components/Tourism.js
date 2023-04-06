import React from "react";

const Tourism = () => {
  return (
    <div className="flex space-x-5 text-white">
      <div className="flex flex-col justify-center h-[12rem] mt-4 rounded-2xl w-[12rem] px-[2rem] py-[0.5rem] bg-gray-700">
        <h1 className="font-bold">Travel</h1>
        <p className="text-sm mt-2">Mobile Application</p>
        <p className="text-xs mt-2">Seen by</p>
        <div className="flex mt-2">
          <img
            src="https://i2.wp.com/tilomitra.com/wp-content/uploads/2014/08/avatar-cartoon.png?ssl=1"
            className="w-6 h-6 rounded-full z-40"
            alt=""
          />
          <img
            src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
            className="w-8 h-6 relative rounded-full z-30 right-4"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMukGFvfHnj9H8CFup92cRbCFQQ1k4UbGxzmeiqI2kDbuL6e_2vnVkQW1HnY-EhkIarIuJSS8wBbU&usqp=CAU&ec=48600112"
            className="w-6 h-6 relative rounded-full z-20 right-8"
            alt=""
          />
          <img
            src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
            className="w-6 h-6 relative rounded-full z-10 right-12"
            alt=""
          />
        </div>
        <div className="mt-2 space-x-4">
          <button className="bg-indigo-800 text-xs px-4 py-1 rounded-xl">
            Tour
          </button>
          <button className="bg-black px-4 py-1 text-xs rounded-xl">
            Trip
          </button>
        </div>

        <button className="bg-black w-16 py-1 text-xs rounded-xl mt-1">
          Transport
        </button>
      </div>

      <div className="flex flex-col justify-center h-[12rem] mt-4 rounded-2xl w-[12rem] px-[2rem] py-[0.5rem] bg-gray-700">
        <h1 className="font-bold">Hotel</h1>
        <p className="text-sm mt-2">Dashboard</p>
        <p className="text-xs mt-2">Seen by</p>
        <div className="flex mt-2">
          <img
            src="https://i2.wp.com/tilomitra.com/wp-content/uploads/2014/08/avatar-cartoon.png?ssl=1"
            className="w-6 h-6 rounded-full z-40"
            alt=""
          />
          <img
            src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
            className="w-8 h-6 relative rounded-full z-30 right-4"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMukGFvfHnj9H8CFup92cRbCFQQ1k4UbGxzmeiqI2kDbuL6e_2vnVkQW1HnY-EhkIarIuJSS8wBbU&usqp=CAU&ec=48600112"
            className="w-6 h-6 relative rounded-full z-20 right-8"
            alt=""
          />
          <img
            src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
            className="w-6 h-6 relative rounded-full z-10 right-12"
            alt=""
          />
        </div>
        <div className="mt-2 space-x-4">
          <button className="bg-indigo-800 text-xs px-4 py-1 rounded-xl">
            Tour
          </button>
          <button className="bg-black px-4 py-1 text-xs rounded-xl">
            Trip
          </button>
        </div>

        <button className="bg-black w-16 py-1 text-xs rounded-xl mt-1">
          Transport
        </button>
      </div>
    </div>
  );
};

export default Tourism;
