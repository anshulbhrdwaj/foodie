import { useEffect, useState } from "react";
import { data_url, restaurant_data_url } from "../services/APIs";
import axios from "axios";

const useFoodItems = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [resIds, setResIds] = useState([]);
  const [resData, setResData] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(data_url, { signal: controller.signal })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!data) return;

    const categoriesIndex = data.cards.findIndex(
      (card) => card.card.card.id === "whats_on_your_mind"
    );

    const restaurantsIndex = data.cards.findIndex(
      (card) => card.card.card.id === "top_brands_for_you"
    );

    setCategories(
      data.cards[categoriesIndex]?.card?.card?.imageGridCards?.info || []
    );
    setRestaurants(
      data.cards[restaurantsIndex]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  }, [data]);

  useEffect(() => {
    const restaurantsIds =
      restaurants?.map((restaurant) => restaurant.info.id) || [];
    setResIds(restaurantsIds);
  }, [restaurants]);

  useEffect(() => {
    const fetchDataForAllRestaurants = () => {
      if (resIds.length === 0) return;

      const promises = resIds.map((resId) =>
        axios
          .get(restaurant_data_url + resId)
          .then((res) => res.data.data)
          .catch((err) => console.error("Error fetching restaurant data:", err))
      );

      Promise.all(promises)
        .then((data) => setResData(data))
        .catch((error) => console.error("Error fetching restaurant data:", error));
    };

    fetchDataForAllRestaurants();
  }, [resIds]);

  useEffect(() => {
    const menuItemsData = resData.map(
      (res) =>
        res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || []
    );

    setMenuItems(menuItemsData);
  }, [resData]);

  useEffect(() => {
    const uniqueItemsSet = new Set();
    const items = menuItems
      .map((category) =>
        category?.map(
          (c) => c.card?.card?.itemCards.map((item) => item.card) || []
        )
      )
      .flat(2) // Flatten the nested arrays two levels deep
      .filter((item) => {
        // Check if the item id is not already in the set, if not, add it to the set
        const isUnique = !uniqueItemsSet.has(item.info.id);
        if (isUnique) uniqueItemsSet.add(item.info.id);
        return isUnique;
      });

    setFoodItems(items);
    // console.log(items)
  }, [menuItems]);

  return foodItems;
};

export default useFoodItems;
