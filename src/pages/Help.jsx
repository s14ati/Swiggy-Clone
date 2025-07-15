import React from "react";
import swiggy from "../../public/slogo.webp"
import { NavLink } from "react-router-dom";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import HelpSupport from "./HelpSupport";

function Help() {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="w-[100%] h-[90px] flex justify-between items-center">
        <div className="w-[180px] ml-[115px] gap-4 flex justify-center items-center">
          <img className="w-[80px]" src={swiggy} alt="swiggy-logo" />
          <div className="flex justify-center items-center  ">
            <p className="text-[16px] font-bold">HELP</p>
          </div>
        </div>

        <div className="w-[915px]  flex  gap-10 relative">
          <NavLink
            to="/swiggy_corporate"
            className=" hover:text-orange-500 text-[17px] font-semibold"
          >
            <PiHandbagSimpleBold className=" inline w-[25px] h-[22px] mr-2   " />
            Swiggy Corporate
          </NavLink>

          <NavLink
            to="/search"
            className="hover:text-orange-500 text-[17px]  font-semibold"
          >
            <IoSearchSharp className=" inline w-[25px] h-[20px] mr-2 mb-1  " />
            Search
          </NavLink>

          <NavLink
            to="/offers"
            className="hover:text-orange-500 text-[17px] font-semibold"
          >
            <BiSolidOffer className=" inline w-[25px] h-[20px] mr-2 mb-1  " />
            Offers{" "}
            <sup className=" text-orange-400 font-bold text-[10px]  ">NEW</sup>
          </NavLink>

          <NavLink
            to="/help"
            className="text-orange-500 text-[17px] font-semibold"
          >
            <IoHelpBuoyOutline className=" inline w-[25px] h-[20px] mr-2 mb-1  " />
            Help
          </NavLink>

          <NavLink className="hover:text-orange-500 text-[17px] font-semibold">
            <MdOutlineAccountCircle className=" inline w-[30px] h-[28px] mr-2   " />
            Sign In
          </NavLink>

          <NavLink
            to="/cart"
            className="hover:text-orange-500 text-[17px] font-semibold"
          >
            <MdOutlineShoppingCart className=" inline w-[25px] h-[24px] mr-2   " />
            Cart
          </NavLink>
        </div>
      </div>
      <div>
        <HelpSupport/>
      </div>
    </div>
  );
}

export default Help;
