import React from "react";
import Header from "../component/Header";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="w-[100%] flex justify-center flex-col items-center mt-35     ">
        <div className=" w-[55%] relative ">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="border border-gray-300 rounded outline-0 w-[100%] pl-4 p-2.5 font-semibold  placeholder:text-gray-600"
          />
          <IoSearch className="inline absolute right-6 top-3 text-[22px]" />
        </div>

        <div className=" bg-gray-100 w-[55%] h-2 mt-5   "></div>
      </div>
    </>
  );
}

export default Search;
