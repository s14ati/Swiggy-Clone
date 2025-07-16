import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useEffect, useState } from "react";
import Header from "./Header";
import { FcRating } from "react-icons/fc";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function RestaurantCardMenu() {
  const { restId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await response.json();
      const menuData = json?.data?.cards
        ?.find((obj) => obj?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (obj) =>
            obj?.card?.card["@type"]?.includes("ItemCategory") ||
            obj?.card?.card["@type"]?.includes("NestedItemCategory")
        );

      const organisedMenudata = menuData?.map((item) => {
        const type = item?.card?.card["@type"];
        const title = item?.card?.card?.title;

        const itemCards = item?.card?.card?.itemCards || [];
        const categories = item?.card?.card?.categories || [];

        if (type?.includes("NestedItemCategory")) {
          return {
            title,
            type: "nested",
            categories: categories.map((subcategory) => {
              return {
                title: subcategory?.title,
                itemCards: subcategory?.itemCards,
              };
            }),
          };
        } else {
          return {
            title,
            type: "item",
            itemCards,
          };
        }
      });

      const storeData = json?.data?.cards?.find((item) =>
        item?.card?.card["@type"]?.includes("food.v2.Restaurant")
      )?.card?.card?.info;
      setResInfo(storeData);

      setResMenu(organisedMenudata);
    }

    fetchMenu();
  }, [restId]);

  if (!resInfo) return <div>Loading...</div>;

  const { name, locality, avgRating } = resInfo;

  return (
    <>
      <div>
        <Header />
      </div>

      <div className=" mt-10 flex justify-center">
        <div className=" mt-10 w-[50%] ">
          <div className="container mx-auto mt-20 my-10 ">
            <h2 className="text-[30px] font-bold  ">{name} </h2>

            <div className="mb-10 mt-5 pt-5 pb-5 pl-5 rounded-3xl bg-white shadow-[0px_10px_10px_8px_rgba(0,0,0,0.2)]">
              <p className="text-[17px] font-semibold">
                <FcRating className="inline pr-2 w-8 pb-1 h-7" />
                {avgRating}{" "}
                <span className="text-gray-600 font-bold">
                  ({resInfo.totalRatingsString})
                </span>
                <span className="mx-2">•</span>
                {resInfo.costForTwoMessage}
              </p>
              <p className="cursor-pointer underline font-semibold mb-2 pl-2 text-orange-600 ">
                {resInfo.cuisines?.join(", ")}
              </p>
              <p className="text-[17px] text-gray-500">
                <span className="font-bold text-black text-[17px] pr-2 pl-7 ">
                  Outlet{" "}
                </span>{" "}
                {locality}
              </p>
              <p className="font-semibold mt-1 text-black text-[17px] pr-2 pl-7">
                {resInfo.sla?.minDeliveryTime}–{resInfo.sla?.maxDeliveryTime}{" "}
                mins
              </p>
            </div>
            <div className="mb-10 flex justify-center items-center text-[30px] font-semibold ">
              {" "}
              <MdOutlineRestaurantMenu className="mr-5 " />M E N U{" "}
              <MdOutlineRestaurantMenu className="ml-5 " />
            </div>

            {/* Restaurant Menu Categories */}
            {resMenu?.map((category) =>
              category?.type === "item" ? (
                <ItemCategory key={category?.title} data={category} />
              ) : (
                <NestedItemCategory key={category?.title} data={category} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// functional components
// RECOMMENDED PART

function ItemCategory({ data = {} }) {
  const { title, itemCards } = data;

  const [showCards, setShowCards] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setShowCards(!showCards)}>
      <h2 className="text-[19px] font-extrabold pt-2 pb-2 rounded-lg flex justify-between items-center cursor-pointer px-4">
        <span className="ml-[-18px]  ">
          {title} ({itemCards?.length})
        </span>
        {showCards ? (
          <IoIosArrowUp className="text-[20px]" />
        ) : (
          <IoIosArrowDown className="text-[20px]" />
        )}
      </h2>

      {showCards && (
        <ul className="px-10 py-5 space-y-10   ">
          {itemCards?.map((item) => (
            <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
          ))}
        </ul>
      )}
    </div>
  );
}

function NestedItemCategory(props) {
  const { data } = props || {};
  const { title, categories } = data || {};

  const [openIndexes, setOpenIndexes] = useState({});

  // toggle handler
  const toggleIndex = (title) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="">
      <h2 className=" text-[18px] font-extrabold pt-2 pb-3 rounded-lg">
        {title}
      </h2>
      <div className="w-[680px] ml-[38px]">
        {categories?.map((subcategory) => {
          const isOpen = openIndexes[subcategory?.title] ?? false;
          return (
            <div key={subcategory?.title} className="mb-4">
              <h3
                className="font-bold flex justify-between items-center text-[16px] py-2 px-4 cursor-pointer rounded-lg"
                onClick={() => toggleIndex(subcategory?.title)}
              >
                <span className="ml-[-55px]">
                  {subcategory?.title} ({subcategory?.itemCards?.length})
                </span>
                {isOpen ? (
                  <IoIosArrowUp className="text-[20px]" />
                ) : (
                  <IoIosArrowDown className="text-[20px]" />
                )}
              </h3>

              {isOpen && (
                <div className="mt-3  ">
                  <ul>
                    {subcategory?.itemCards?.map((item) => (
                      <MenuItem
                        key={item?.card?.info?.id}
                        menuInfo={item?.card?.info}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className=" w-[106%] bg-gray-100 p-1.5 ml-[-20px] mb-2"></div>
    </div>
  );
}

// UNDER RECOMMENDED ITEMS
function MenuItem(props) {
  const { menuInfo } = props || {};
  const dispatch = useDispatch();
  const { name, price, defaultPrice, description, imageId } = menuInfo || {};
  const [showFull, setShowFull] = useState(false);
  const words = description?.split(" ") || [];
  const isLong = words.length > 20;
  const shortDesc = words.slice(0, 20).join(" ");
  function toggleDesc() {
    setShowFull(!showFull);
  }

  const restaurantImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return (
    <div className="">
      <li className="list-disc flex">
        <div className="w-[900px] ml-[-40px] mr-[-40px] min-h-50 flex gap-10 items-center    ">
          <div className="w-[70%]">
            <h4 className="text-[19px] text-gray-700 font-semibold">{name}</h4>

            {(price || defaultPrice) && (
              <span className="text-[17px] text-gray-700 font-semibold">
                ₹ {Math.ceil((price ?? defaultPrice) / 100)}
              </span>
            )}

            {description && (
              <p className="text-[16px] text-gray-700 min-h-36 mt-2 w-[100%] font-serif">
                {isLong ? (
                  <>
                    {showFull ? description : shortDesc}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDesc();
                      }}
                      className="text-black pl-2 font-bold text-[16px] underline cursor-pointer"
                    >
                      {showFull ? "less" : "more"}
                    </span>
                  </>
                ) : (
                  description
                )}
              </p>
            )}
          </div>

          <div className="w-36 relative flex justify-center h-36 ">
            {imageId && (
              <img
                className="w-full h-full rounded-lg object-cover"
                src={restaurantImage + imageId}
              />
            )}

            <div
              onClick={(e) => {
                e.stopPropagation(); // ✅ prevents parent click
                dispatch(
                  addToCart({
                    id: menuInfo.id,
                    name,
                    price: price || defaultPrice,
                    description,
                    imageId,
                  })
                );
              }}
              className="cursor-pointer hover:bg-gray-200 transform transition-all ease-in-out delay-75 shadow-lg absolute bottom-[-15px] w-[110px] text-center p-1 text-[18px] rounded-lg text-green-700 font-semibold bg-white"
            >
              ADD
            </div>
          </div>
        </div>
      </li>
      <div className="border w-[112%] ml-[-40px] mt-5 border-gray-200    "></div>
    </div>
  );
}

export default RestaurantCardMenu;
