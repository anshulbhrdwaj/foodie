import { Shimmer } from "./index";
import MenuItem, { inCartMenuItem } from "./MenuItem";
import { useParams, useOutletContext } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData";
import { styles } from "../assets/style";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { data, isLoading } = useRestaurantData(resId);
  const cartItems = useSelector((store) => store.cart.items);
  const [cartItemsIds, setCartItemsIds] = useState([]);
  const InCartMenuItem = inCartMenuItem(MenuItem);

  useEffect(() => {
    setCartItemsIds(cartItems.map((item) => item.info.id));
  }, [cartItems]);

  if (isLoading) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } = data?.cards[0]?.card?.card?.info;
  const menuCategories =
    data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((c) =>
      c.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ? c.card.card
        : null,
    );

  return (
    <div
      id="menu"
      className="flex h-screen max-w-full flex-col px-[3vw] max-sm:pb-[6vh] max-sm:pt-[5vh] md:py-[5vh]"
    >
      <div id="info" className="mb-[3.5vh] flex h-[10vh] items-center gap-5">
        <div className="flex h-[80%] w-[90%] flex-col gap-1 justify-self-start">
          <p className={`text-2xl font-bold tracking-wider xl:text-4xl`}>
            {name}
          </p>
          <p className={`text-lg opacity-80 md:text-xl `}>
            {`Yummm! Delicious ${cuisines.join(", ")}!`}
          </p>
        </div>
        <div
          id="rating"
          className={`flex h-[5.5vh] w-[5.5vh] items-center justify-center rounded-lg bg-[#c7c1fd] shadow-sm`}
        >
          {avgRating}
        </div>
      </div>

      <hr
        className={`min-h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#b2a9fc] to-transparent`}
      />

      <div
        id="menu"
        className="flex h-full w-full flex-col items-center overflow-y-scroll pt-[1vh]"
      >
        <p className={`text-2xl font-bold tracking-wider xl:text-4xl`}>Menu</p>
        <hr
          className={`mt-3 min-h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#b2a9fc] to-transparent`}
        />

        <div
          id="menuItems"
          className="no-scrollbar flex h-full w-full flex-col items-center overflow-x-visible overflow-y-scroll pt-[3vh]"
        >
          {menuCategories?.map(
            (category) =>
              category?.itemCards && (
                <div className="w-full" key={category?.title}>
                  <p
                    className={`py-[2vh] text-center text-2xl font-semibold tracking-wider xl:text-4xl`}
                  >
                    {category?.title}
                  </p>

                  {category?.itemCards.map((item) =>
                    cartItemsIds.includes(item.card.info.id) ? (
                      <InCartMenuItem
                        key={item.card.info.id}
                        item={item.card}
                      />
                    ) : (
                      <MenuItem key={item.card.info.id} item={item.card} />
                    ),
                  )}
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
