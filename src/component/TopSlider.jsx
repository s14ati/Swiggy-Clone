import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Restaurantcards from "./Restaurantcards";
import Cards from "./Cards";

function TopSlider() {
  const [dishes, setDishes] = useState([]);

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const imageCard = json?.data?.cards?.find(
          (item) => item?.card?.card?.imageGridCards?.info
        );

        const dishes = imageCard?.card?.card?.imageGridCards?.info?.map(
          (dish) => ({
            id: dish.id,
            imageId: dish.imageId,
          })
        );

        setDishes(dishes);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchDishes();
  }, []);

  function nextSlider() {
    if (slider + 7 >= dishes.length) return;
    const next = slider + 3;
    // don't go beyond the last full set of 7
    setSlider(Math.min(next, dishes.length - 7));
  }

  function prevSlider() {
    if (slider === 0) return;
    const prev = slider - 3;
    setSlider(Math.max(0, prev));
  }

  return (
    <div className="p-4 h-full w-[80%] ml-40">
      <div className=" w-[100%] mt-10 flex gap-218">
        <p className="text-[22px] font-bold    ">What's on your mind?</p>
        <div className="  w-[80px]  flex justify-end items-center gap-2">
          <IoIosArrowRoundBack
            onClick={prevSlider}
            className="w-[30px] h-[30px] rounded-2xl bg-gray-200 select-none cursor-pointer hover:bg-gray-300"
          />{" "}
          <IoIosArrowRoundForward
            onClick={nextSlider}
            className="w-[30px] h-[30px] rounded-2xl bg-gray-200 select-none cursor-pointer hover:bg-gray-300"
          />
        </div>
      </div>

      <div className="overflow-hidden  mt-5">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${slider * 170}px)`, // 150px width + 10px gap
          }}
        >
          {dishes.map((dish) => (
            <div key={dish.id} className="min-w-[150px] shrink-0 ">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${dish.imageId}`}
                alt={dish.id}
                className="w-[150px] h-35 object-cover  mt-2 rounded select-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border border-gray-200 mt-20 "></div>

      {/* Restaurant Cards */}
      <div className=" mt-10    ">
        <Restaurantcards />
        <Cards />
      </div>
    </div>
  );
}

export default TopSlider;
