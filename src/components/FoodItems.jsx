import useFoodItems from "../hooks/useFoodItems";
import { FoodItemCard } from "./";
import { useState, useEffect } from "react";
import { bestSeller } from "./FoodItemCard";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const foodItems = useFoodItems();
  const BestSellerItem = bestSeller(FoodItemCard);
  const cartItems = useSelector((store) => store.cart.items);
  const [cartItemsIds, setCartItemsIds] = useState([]);

  useEffect(() => {
    setCartItemsIds(cartItems.map((item) => item.info.id));
  }, [cartItems]);

  return (
    <div className=" grid h-auto w-full justify-items-center px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 2xl:gap-14">
      {foodItems.map(
        (foodItem) =>
          foodItem.info.showImage &&
          (foodItem.info.ribbon?.text ? (
            <BestSellerItem
              key={foodItem.info.id}
              foodItem={foodItem}
              ribbon={foodItem.info.ribbon}
              cartItemsIds = {cartItemsIds}
            />
          ) : (
            <FoodItemCard key={foodItem.info.id} foodItem={foodItem} cartItemsIds = {cartItemsIds}/>
          )),
      )}
    </div>
  );
};

export default FoodItems;
