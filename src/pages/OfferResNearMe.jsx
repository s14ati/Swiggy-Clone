import React, { useState } from "react";
import offerRes from "../../public/offerRes.avif";
import { LiaFilterSolid } from "react-icons/lia";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import rameo from "../../public/rameo-lane.avif";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import hukum from "../../public/hukum.jpg";
import chai from "../../public/chai-bar.avif";
import OfferFooter from "./OfferFooter";

// functional component that returns JSX
const RestaurantCard = ({
  image,
  Name,
  cuisine,
  price,
  location,
  distance,
  stars,
  offer,
}) => (
  <div className="relative rounded-2xl w-[33%] h-85 shadow cursor-pointer">
    <img src={image} className=" h-50 w-100 object-cover rounded-2xl" />

    <div className="absolute bottom-35 left-0 w-full h-1/5 bg-gradient-to-t from-gray-800 to-transparent text-white flex">
      <span className="absolute bottom-3 text-[21px] font-bold pl-2.5">
        {Name}
      </span>
      <span className="absolute bottom-3 right-3 text-[16px] font-bold">
        <FcRating className="inline pb-1 text-2xl" />
        {stars}
      </span>
    </div>

    <div className="mt-2 flex justify-between ml-4 mr-4 text-[15px] text-gray-500 font-semibold">
      <span>{cuisine}</span>
      <span>{price}</span>
    </div>
    <div className=" flex justify-between ml-4 mr-4 text-[15px] text-gray-500 font-semibold">
      <span>{location}</span>
      <span>{distance}</span>
    </div>

    <button className="pl-2 pb-0.5 pr-2 text-[13px] mt-2 ml-4 bg-gray-200 rounded-4xl">
      <IoMdCheckboxOutline className="inline mb-0.5" /> Table booking
    </button>

    <div className="ml-4 mt-3 mr-4 pl-3 pt-0.5 pb-0.5 font-semibold text-[17px] rounded-[10px] bg-green-200 text-green-600">
      <p>{offer} </p>
    </div>
  </div>
);

function OfferResNearMe() {
  const restaurants = [
    {
      Name: "Romeo Lane",
      image: rameo,
      cuisine: "Chinese - North Indian",
      price: "Rs2000 for two",
      location: "pallavpuram, Meerut",
      distance: "5.1Km",
      stars: "4.1",
      offer: "Up to 10% off with bank",
    },
    {
      Name: "Hukum The Family Restaurant",
      image: hukum,
      cuisine: "Chinese - North Indian",
      price: "Rs2000 for two",
      location: "Pallavpuram, Meerut",
      distance: "5.1Km",
      stars: "4.0",
      offer: "Up to 10% off with bank",
    },
    {
      Name: "Cha",
      image: chai,
      cuisine: "Continental - Desserts",
      price: "Rs1000 for two",
      location: "Cannaught Place, Delhi",
      distance: "1Km",
      stars: "4.1",
      offer: "Flat 15% off on pre-booking +2 more",
    },
  ];
  // for more details
  const [isExpanded, setIsExpanded] = useState(false);
  function isToggle() {
    setIsExpanded(!isExpanded);
  }
  const offerDeatils = `Get ready for a delicious adventure packed with unbeatable
                dining offers at your favorite restaurants. Whether youre
                craving a cheesy pizza, a juicy burger, or a delightful bowl of
                pasta, now is the perfect time to head out and indulge in your
                favorite meals—while saving big! <br /> All the top-rated
                restaurants and popular eateries are offering enticing deals
                that are too good to pass up. From buy-one-get-one-free offers
                to irresistible combo meals, theres something for everyone. And
                with a wide variety of restaurant deals near you, enjoying a
                delectable dining experience has never been more affordable.{" "}
                <br />
                Picture yourself dining out and savoring a juicy burger with
                crispy fries, or sharing an oven-fresh pizza topped with all
                your favorites—all at a fraction of the price. These incredible
                restaurant offers ensure that you can enjoy delicious meals
                without worrying about the cost. Whether youre looking for a
                casual bite or a special night out, these dining deals make it
                easy to experience the best without breaking the bank. <br />{" "}
                Planning a night out with friends, a family dinner, or a date
                night? Take advantage of these fantastic restaurant offers and
                make every dining experience unforgettable. With top-notch food
                at unbeatable prices, you can treat yourself and your loved ones
                to a feast without stretching your budget. Plus, youll be
                supporting local restaurants while enjoying a cost-effective
                meal out. <br /> Dont miss the chance to explore new dining
                spots and revisit old favorites—all while enjoying amazing
                discounts. Let your taste buds rejoice as you discover
                incredible dishes at unbeatable prices. With Swiggys restaurant
                deals, dining out is more affordable than ever, turning every
                meal into a celebration. So why wait? Embrace the joy of dining
                well and saving more today!`;

  return (
    <div>
    <div className="flex justify-center">
      <div className="mt-14 w-[80%]">
        <div className=" relative ">
          <img src={offerRes} />
          <div className=" absolute top-56 w-[600px] h-[100px] left-14">
            <p className="text-white text-[33px] font-semibold font-serif  ">
              Restaurants With Great Offers
            </p>
            <p className="text-white text-[33px] font-semibold font-serif  ">
              Near Me
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-[20px] text-gray-500">
            Order Online <span className="ml-10 font-bold">Dineout</span>
          </p>
          <div className=" w-[8%] h-1 bg-orange-600 rounded-3xl mt-1 border-orange-600 ml-38"></div>
          <div className="w-[100%] border border-gray-300"></div>

          {/* filter */}

          <div className=" flex items-center mt-5 w-[100%] h-[50px] gap-3   ">
            <div className="border w-[110px] bg-gray-200 flex cursor-pointer font-semibold items-center justify-center pt-1 pb-1 bg rounded-4xl text-[15px]">
              {" "}
              <TbSquareRoundedNumber1Filled className="w-9 h-6 text-orange-500" />{" "}
              Filter <LiaFilterSolid className=" w-7 h-5 " />
            </div>
            <div className="border border-gray-300 shadow w-[90px] cursor-pointer flex gap-1.5 items-center font-semibold pt-1 pl-2.5 pb-1 bg rounded-4xl text-[15px]">
              Sort By <IoIosArrowDown className="mt-1" />
            </div>
            <div className="border border-gray-300 shadow w-[105px] cursor-pointer text-center pt-1 pl-2.5 pr-2 pb-1 bg rounded-4xl text-[15px] font-semibold">
              Book a table
            </div>
            <div className="border border-gray-300 shadow w-[100px] cursor-pointer text-center pt-1  pl-2 pr-2 pb-1 bg rounded-4xl text-[15px] font-semibold">
              Within 5Km
            </div>
            <div className="border border-gray-300 shadow w-[90px] cursor-pointer text-center pt-1 pl-2 pr-1.5 pb-1 bg rounded-4xl text-[15px] font-semibold">
              Rating 4+
            </div>
            <div className="border border-gray-300 shadow w-[120px] cursor-pointer text-center p-1 bg rounded-4xl text-[15px] font-semibold">
              Serves Alcohol
            </div>
          </div>

          {/* cards */}
          {/* passing all the properties of the object .res(...res :- spread operator) as individual props */}
          <div className="mt-8 flex gap-7">
            {restaurants.map((res, idx) => (
              <RestaurantCard key={idx} {...res} />
            ))}
          </div>

          {/* offer Details  */}
          <div className="bg-white rounded-xl max-w-7xl mx-auto text-gray-700 border shadow border-gray-300 mt-15">
            <h1 className="text-[28px] font-bold text-gray-500 pl-4 pt-5   ">
              Get the Best Offers on Food from Top Restaurants Near You
            </h1>

            <div
              className={`transition-all duration-400 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-[500px]" : "max-h-[82px]"
              }`}
            >
              <p className="pt-2 leading-relaxed pl-4 text-[16px] font-semibold  ">
                {offerDeatils}
              </p>
            </div>

            {/* Toggle Button */}
            <button
              onClick={isToggle}
              className="text-orange-500  pl-4 font-bold mt-3 hover:underline"
            >
              {isExpanded ? "Show less" : "See more"}
            </button>
          </div>
        </div>
      </div>
    </div>
        <div>
          <OfferFooter />
        </div>
    </div>
  );
}

export default OfferResNearMe;
