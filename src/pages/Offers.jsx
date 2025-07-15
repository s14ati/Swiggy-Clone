import React, { useState } from "react";
import swiggy from "../../public/swiggy-logo.webp";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import OfferResNearMe from "./OfferResNearMe";

function Offers() {
  const [isFocused, setIsFocused] = useState(false);
  const downArrowicon = (
    <sup>
      <IoIosArrowDown className="inline text-[17px] text-gray-400  mt-1.5" />
    </sup>
  );
  const inputClasses = `border-0 w-[500px] p-4 rounded-xl transition duration-200 text-[18px] font-semibold 
  ${
    isFocused
      ? "bg-white shadow-lg outline-0 pl-10"
      : "bg-gray-200 cursor-pointer"
  }`;

  return (
    <div>
      <div className="shadow-xl">
        <div className="w-[100%] h-[90px] flex justify-between items-center">
          <div className=" w-[500px] ml-[125px]  gap-4 flex justify-center items-center">
            <img className="w-[150px]" src={swiggy} alt="swiggy-logo" />
            <div className="flex justify-center items-center">
              <p className="text-[18px] font-bold">
                {" "}
                <FaLocationArrow className="inline text-orange-600  h-[20px] w-[25px]" />{" "}
                Setup Your precise location {downArrowicon}
              </p>
            </div>
          </div>

          <div className=" relative w-[700px] mr-12 h-[80px] flex items-center gap-4">
            {isFocused && (
              <GoArrowLeft className="absolute left-2 text-[20px] font-bold text-gray-600 cursor-pointer" />
            )}

            <input
              className={inputClasses}
              type="text"
              placeholder={
                isFocused
                  ? "Search for Restaurants "
                  : "Search for restaurant and food"
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <MdAccountCircle className=" w-[80px] h-[60px] text-gray-600  " />
          </div>
        </div>
      </div>

      <div>
        <OfferResNearMe />
      </div>
    </div>
  );
}

export default Offers;
