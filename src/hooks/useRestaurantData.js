import { restaurant_data_url } from "../services/APIs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRestaurantData = (resId) => {
  return useQuery({
    queryKey: ["RestaurantData"],
    queryFn: () =>
      axios
        .get(restaurant_data_url + resId)
        .then((res) => res.data.data)
        .catch((err) => {
          console.error(err);
          throw err;
        }),
  });
};

export default useRestaurantData;
