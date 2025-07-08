import React from "react";
import chipicon from "../images/chipicon1.png";

const Card = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium text-gray-800"></h2>
        <button className="text-black-900 hover:text-black-800 text-sm mb-2">See All</button>
      </div>
      
        {/* Top Section */}
        <div className="bg-white p-3 rounded-t-2xl flex justify-between items-center shadow-md">
          <div>
            <span className="text-[10px] text-blue-600">Balance</span>
            <h2 className="text-base font-semibold text-gray-900">$5,756</h2>
          </div>

          {/* Chip Icon */}
          <div className="w-9 h-9">
            <img 
              src={chipicon} 
              alt="Chip Icon" 
              className="w-full h-full object-contain filter invert brightness-75"
            />
          </div>
        </div>

        {/* Card Holder & Expiry */}
        <div className="bg-white p-3 grid grid-cols-2 gap-2 shadow-md border-b-2 border-gray-300">
          <div>
            <span className="text-[9px] text-blue-600 font-semibold">CARD HOLDER</span>
            <p className="text-xs font-medium text-gray-900">Eddy Cusuma</p>
          </div>
          <div>
            <span className="text-[9px] text-blue-600 font-semibold">VALID THRU</span>
            <p className="text-xs font-medium text-gray-900">12/22</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white p-3 rounded-b-2xl flex flex-col gap-2 shadow-md">
          {/* Card Number & Overlapping Circles */}
          <div className="flex justify-between items-center">
            {/* Masked Card Number */}
            <p className="text-sm font-semibold text-gray-900">3778 **** **** 1234</p>

            {/* Overlapping White Circles */}
            <div className="relative w-8 h-4 flex items-center justify-end">
              <div className="w-7 h-7 bg-gray-300 rounded-full absolute right-0 opacity-70"></div>
              <div className="w-7 h-7 bg-gray-300 rounded-full absolute right-4 opacity-70"></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;
