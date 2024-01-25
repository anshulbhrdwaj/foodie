import { useEffect, useState } from "react";
import { data_url } from "../services/APIs";
import axios from "axios";

const useHeroData = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(data_url, { signal: controller.signal })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (data) {
      const categoriesIndex = data.cards.findIndex(
        (card) => card.card.card.id === "whats_on_your_mind",
      );

      const restaurantsIndex = data.cards.findIndex(
        (card) => card.card.card.id === "top_brands_for_you",
      );

      setCategories(
        data.cards[categoriesIndex]?.card?.card?.imageGridCards?.info,
      );
      setRestaurants(
        data.cards[restaurantsIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    }
  }, [data]);

  return [categories, restaurants];
};

export default useHeroData;
