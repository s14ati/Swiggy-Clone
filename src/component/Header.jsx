import React, { useState } from "react";
import swiggy from "../../public/slogo.webp";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);
  function showSideMenu() {
    setToggle(true);
  }

  function hideSideMenu() {
    setToggle(false);
  }

  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: 1,
          backgroundColor: toggle ? "rgba(46, 46, 46, 0.7)" : "transparent",
        }}
      >
        <div
          onClick={handleClick}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>

      <div className="w-full fixed top-0 z-50 bg-white shadow-xl">
        <div className="w-[100%] h-[90px] flex justify-between items-center">
          <div className="w-[380px] ml-[125px]  gap-4 flex justify-center items-center">
            <img className="w-[80px]" src={swiggy} alt="swiggy-logo" />
            <div className="flex justify-center items-center ">
              <p className="text-[18px] font-bold">
                {" "}
                <FaLocationArrow className="inline text-orange-600  h-[20px] w-[25px] " />{" "}
                Setup Your precise location{" "}
                <sup>
                  <IoIosArrowDown
                    fontSize={25}
                    onClick={showSideMenu}
                    className="inline text-[17px] text-gray-400  mt-1.5 cursor-pointer "
                  />
                </sup>
              </p>
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
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-[17px] font-semibold"
                  : "hover:text-orange-500 text-[17px] font-semibold"
              }
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
              <sup className=" text-orange-400 font-bold text-[10px]  ">
                NEW
              </sup>
            </NavLink>

            <NavLink
              to="/help"
              className="hover:text-orange-500 text-[17px] font-semibold"
            >
              <IoHelpBuoyOutline className=" inline w-[25px] h-[20px] mr-2 mb-1  " />
              Help
            </NavLink>

            <NavLink
              className="hover:text-orange-500 text-[17px] font-semibold"
              to="/loginForm"
            >
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
      </div>
    </>
  );
}

export default Header;
