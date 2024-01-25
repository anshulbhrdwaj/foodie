import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/slices/cartSlice";
import { image_url } from "../services/APIs";
import Rating from "./Rating";
import { styles } from "../assets/style";

const FoodItemCard = ({ foodItem, cartItemsIds }) => {
  const dispatch = useDispatch();
  const { showImage, imageId, id, price, defaultPrice, name, ratings, ribbon } =
    foodItem.info;
  const isInCart = cartItemsIds.includes(id);
  const rating = ratings?.aggregatedRating.rating
    ? parseFloat(ratings?.aggregatedRating.rating)
    : 0;
  // console.log(foodItem);

  return (
    <div
      className={`relative flex flex-col rounded-xl bg-transparent bg-gradient-to-b from-transparent via-[#d2d3f53f] to-[#d2d3f5] ${
        !ribbon.text && "hover:scale-105"
      } max-2xl:h-[35vh] md:w-[34vw] lg:w-[18vw] xl:w-[15vw] 2xl:h-[39vh]`}
    >
      <div className={"h-[85%]"}>
        <div className="flex h-[50%] w-full items-center overflow-hidden rounded-t-xl bg-[#d2d3f5]">
          <img
            src={showImage && image_url + imageId}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-[5%]">
          <div>
            <p className="md:text-md font-semibold 2xl:text-xl">{name}</p>
            <div className="pb-[5%] pt-[1%]">{<Rating rating={rating} />}</div>
          </div>
          <p className=" md:text-sm 2xl:text-lg ">
            {"₹" + (price || defaultPrice) / 100}
          </p>
        </div>
      </div>

      {isInCart ? (
        <div className="w-3/4 mx-auto flex h-[10%] items-center justify-center text-white ">
          <button
            onClick={() => dispatch(removeItem(foodItem))}
            className={`flex w-1/2 items-center justify-center rounded-l-full ${styles["bg-gradient"]}  text-2xl shadow-lg`}
          >
            -
          </button>
          <button
            onClick={() => dispatch(addItem({ ...foodItem, quantity: 1 }))}
            className={`flex w-1/2 items-center justify-center rounded-r-full ${
              isInCart ? styles["bg-gradient"] : "bg-white"
            }  text-2xl shadow-lg`}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addItem({ ...foodItem, quantity: 1 }))}
          className={`mx-auto flex h-[10%] w-3/4 items-center justify-center rounded-full ${
            isInCart ? styles["bg-gradient"] : "bg-white"
          }  text-2xl shadow-lg`}
        >
          +
        </button>
      )}
    </div>
  );
};

export default FoodItemCard;

export const bestSeller = (FoodItemCard) => {
  return ({ foodItem, ribbon, cartItemsIds }) => {
    return (
      <div className="relative h-auto hover:scale-105">
        <div>
          <FoodItemCard foodItem={foodItem} cartItemsIds={cartItemsIds} />
        </div>
        <p
          className={`md:text-md absolute top-0 z-10 h-[10%] overflow-hidden rounded-tl-lg  p-2 ${styles["bg-gradient"]} px-4 font-semibold tracking-wide backdrop-blur-md 2xl:text-lg`}
        >
          {ribbon.text}
        </p>
      </div>
    );
  };
};
