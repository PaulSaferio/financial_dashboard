import React from "react";
import chipicon from "../images/chipicon1.png";

const Card = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-medium text-black">My Cards</h2>
      </div>

        {/* Top Section */}
        <div className="bg-gray-800 p-3 rounded-t-2xl flex justify-between items-center">
          <div>
            <span className="text-[10px] text-white">Balance</span>
            <h2 className="text-base font-semibold text-white">$5,756</h2>
          </div>

          {/* Chip Icon */}
          <div className="w-9 h-9">
            <img 
              src={chipicon} 
              alt="Chip Icon" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Card Holder & Expiry */}
        <div className="bg-gray-800 p-3 grid grid-cols-2 gap-2">
          <div>
            <span className="text-[9px] text-white">CARD HOLDER</span>
            <p className="text-xs font-medium text-white">Eddy Cusuma</p>
          </div>
          <div>
            <span className="text-[9px] text-white">VALID THRU</span>
            <p className="text-xs font-medium text-white">12/22</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-700 p-3 rounded-b-2xl flex flex-col gap-2">
          {/* Card Number & Overlapping Circles */}
          <div className="flex justify-between items-center ">
            {/* Masked Card Number */}
            <p className="text-sm font-semibold text-white">3778 **** **** 1234</p>

            {/* Overlapping White Circles */}
            <div className="relative w-8 h-4 flex items-center justify-end">
              <div className="w-7 h-7 bg-white rounded-full absolute right-0 opacity-70"></div>
              <div className="w-7 h-7 bg-white rounded-full absolute right-4 opacity-70"></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;