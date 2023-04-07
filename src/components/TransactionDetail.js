import React from "react";

const TransactionDetail = () => {
  return (
    <div className="flex flex-col justify-center h-[15rem] px-[2rem] mt-4 rounded-2xl w-[35rem] bg-gray-700 text-white">
      <div className="flex gap-72">
        <h1 className="font-semibold">Transaction Detail</h1>
        <img
          src="https://i.pinimg.com/736x/9f/3b/9f/9f3b9fe4e1641a79237313cfd2664c23.jpg"
          className="w-12 h-12 rounded-full z-40"
          alt=""
        />
      </div>

      <p>Hi Hira</p>
      <div className="flex items-center gap-80">
        <div>
          <p className="font-bold mt-1">$4,763.40</p>
          <p className="text-xs">Available Balance</p>
        </div>
        <p>****3863</p>
      </div>

      <div className="flex mt-6">
        <img
          src="https://i2.wp.com/tilomitra.com/wp-content/uploads/2014/08/avatar-cartoon.png?ssl=1"
          className="w-7 h-7 rounded-full z-40"
          alt=""
        />
        <img
          src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
          className="w-9 h-7 rounded-full z-30 ml-1"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMukGFvfHnj9H8CFup92cRbCFQQ1k4UbGxzmeiqI2kDbuL6e_2vnVkQW1HnY-EhkIarIuJSS8wBbU&usqp=CAU&ec=48600112"
          className="w-7 h-7 rounded-full z-20 ml-1"
          alt=""
        />
        <img
          src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
          className="w-7 h-7 rounded-full z-10 ml-2"
          alt=""
        />
        <img
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
          className="w-7 h-7 rounded-full z-10 ml-2"
          alt=""
        />
      </div>
      <button className="px-2 py-1 bg-red-500 ml-96 rounded-2xl">Send</button>
    </div>
  );
};

export default TransactionDetail;
