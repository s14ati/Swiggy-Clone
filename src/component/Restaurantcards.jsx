import React from "react";
import { useEffect, useState } from "react";
import starRating from "../../public/starRating.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Restaurantcards() {
  const [res, setRestaurants] = useState([]);
  const [slider, setSlider] = useState(0);
  const cardsPerSlide = 4;

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const restaurantData = json?.data?.cards?.find((item) =>
          item?.card?.card?.id?.includes("top_brands")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurants(restaurantData);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchRestaurants();
  }, []);

  // restaurant card slider
  function resNextSlider() {
    if (slider >= res.length - cardsPerSlide) return;
    setSlider(slider + cardsPerSlide);
  }

  function resPrevSlider() {
    if (slider == 0) return;
    setSlider(slider - cardsPerSlide);
  }

  return (
    <div className="mt-10">
      <div className="flex gap-193">
        <p className="text-[20px] font-bold">
          Top restaurant chains in Bangalore
        </p>
        <div className="w-[80px] flex justify-end items-center gap-2">
          <IoIosArrowRoundBack
            onClick={resPrevSlider}
            className="w-[30px] h-[30px] rounded-2xl bg-gray-200 select-none cursor-pointer hover:bg-gray-300   "
          />{" "}
          <IoIosArrowRoundForward
            onClick={resNextSlider}
            className="w-[30px] h-[30px] rounded-2xl bg-gray-200 select-none cursor-pointer hover:bg-gray-300   "
          />
        </div>
      </div>
      <div className="flex transition-transform duration-500 ease-in-out gap-5 overflow-hidden">
        {res?.slice(slider, slider + cardsPerSlide).map((res, idx) => (
          <div
            key={idx}
            className="w-70 relative rounded-2xl cursor-pointer transform transition-transform duration-500 hover:scale-95"
          >
            <div className="relative w-[280px] h-[170px] mt-5 rounded-2xl overflow-hidden">
              <img
                className="w-[280px] h-[170px] object-center object-cover shrink-0 inline-block rounded-2xl"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
              />
              <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent opacity-80"></div>

              {res?.info?.aggregatedDiscountInfoV3?.header && (
                <div className="absolute bottom-0 w-full text-white px-2 py-1 text-[20px] font-bold ">
                  {res?.info?.aggregatedDiscountInfoV3?.header}
                  {res?.info?.aggregatedDiscountInfoV3?.subHeader && (
                    <span className="inline pl-2 text-[20px] font-bold">
                      {res?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </span>
                  )}
                </div>
              )}
            </div>

            <h3 className="mt-3 font-bold font-sans pl-3 text-[18px]    ">
              {res?.info?.name?.length > 24
                ? res.info.name.slice(0, 24) + "..."
                : res.info.name}
            </h3>
            <p className=" text-[17px] font-semibold  ">
              <img src={starRating} className="w-[30px] inline ml-1.5 pb-1 " />
              {res?.info?.avgRating} {"- "} {res?.info?.sla?.slaString}{" "}
            </p>
            <p className="pl-3 text-[16px] font-sans text-gray-600 mt-[-5px] ml-1.5   ">
              {res?.info?.cuisines?.join(", ")?.length > 30
                ? res.info.cuisines.join(", ").slice(0, 30) + "..."
                : res.info.cuisines.join(", ")}{" "}
            </p>
            <p className="pl-3 text-[16px] font-sans text-gray-600 ml-1.5  ">
              {res?.info?.areaName}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurantcards;
