import React, { useState } from "react";
import { useEffect } from "react";
import starRating from "../../public/starRating.png";
import { LiaFilterSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Cards() {
  const [dishes, setDishes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCards() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const dishCard = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("top_brands")
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setDishes(dishCard);
    }
    fetchCards();
  }, []);

  return (
    <div>
      <div className="mt-5 text-gray-200"></div>
      <div className="">
        <div className="mt-6 text-[25px] font-bold font-sans">
          <h1>Restaurants with online food delivery</h1>
        </div>

        <div className="mt-4 gap-2 flex overflow-x-auto">
          <div className="w-[80px] rounded-3xl cursor-pointer gap-1 border border-gray-300 flex items-center pl-3 shadow pt-1 pb-1">
            Filter <LiaFilterSolid className="text-[19px] " />
          </div>
          <div className="w-[90px] rounded-3xl gap-1 border border-gray-300 flex items-center pl-3 shadow pt-1 pb-1  ">
            Sort By <IoIosArrowDown className="text-[15px] mt-0.5" />
          </div>
          <div className="w-[112px] flex justify-center items-center rounded-3xl border border-gray-300 shadow ">
            Fast Delivery
          </div>
          <div className="w-[130px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            New on Swiggy
          </div>
          <div className="w-[100px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            Rating 4.0+
          </div>
          <div className="w-[85px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            Pure veg
          </div>
          <div className="w-[70px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            Offers
          </div>
          <div className="w-[120px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            Rs.300-Rs.600
          </div>
          <div className="w-[135px] flex justify-center items-center rounded-3xl border border-gray-300 shadow  ">
            Less than Rs.300
          </div>
        </div>
      </div>

      {/*  cards */}
      <div className="mt-5 h-full gap-5 overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((res, idx) => (
          <div
            key={idx}
            className="w-70 rounded-2xl cursor-pointer transform transition-transform duration-300 hover:scale-95"
            onClick={() => navigate(`/restaurants/menu/${res.info?.id}`)}
          >
            <div className="relative w-[280px] h-[170px] mt-5 rounded-2xl overflow-hidden">
              <img
                className="w-[280px] h-[170px] object-center object-cover shrink-0 inline-block rounded-2xl "
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
              />
              {res?.info?.avgRating > 4.5 && (
                <div className="absolute top-0 pr-1 font-semibold visible bg-white text-green-800 text-[25px]">
                  Promoted
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent opacity-80"></div>

              {res?.info?.aggregatedDiscountInfoV3?.header && (
                <div className="absolute  bottom-0 w-full text-white px-2 py-1 text-[20px] font-bold ">
                  {res?.info?.aggregatedDiscountInfoV3?.header}
                  {res?.info?.aggregatedDiscountInfoV3?.subHeader && (
                    <span className="inline pl-2 text-[20px] font-bold">
                      {res?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </span>
                  )}
                </div>
              )}
            </div>

            <h3 className="mt-3 font-bold font-sans pl-3 text-[18px]">
              {res?.info?.name?.length > 24
                ? res.info.name.slice(0, 24) + "..."
                : res.info.name}
            </h3>
            <p className="text-[17px] font-semibold">
              <img src={starRating} className="w-[30px] inline ml-1.5 pb-1" />
              {res?.info?.avgRating} {"- "} {res?.info?.sla?.slaString}{" "}
            </p>
            <p className="pl-3 text-[16px] font-sans text-gray-600 mt-[-5px] ml-1.5">
              {res?.info?.cuisines?.join(", ")?.length > 30
                ? res.info.cuisines.join(", ").slice(0, 30) + "..."
                : res.info.cuisines.join(", ")}{" "}
            </p>
            <p className="pl-3 text-[16px] font-sans text-gray-600 ml-1.5">
              {res?.info?.areaName}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
