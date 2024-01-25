import { image_url } from "../services/APIs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/slices/cartSlice";
import { tick } from "../assets";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, imageId, name, price, defaultPrice } = item.info;

  return (
    <div
      key={id}
      className="grid min-h-[10vh] w-full grid-cols-6 items-center gap-2 pl-[2vh] pt-[1vh]"
    >
      <div className="col-start-1 col-end-3 flex min-w-[80%] items-center gap-5">
        <img
          src={imageId && image_url + imageId}
          className="h-[5vh] w-[5vh] rounded-full"
        />
        <p className="min-w-[110px] flex-wrap justify-start font-semibold md:text-lg 2xl:text-xl">
          {name}
        </p>
      </div>

      <div
        id="quantity"
        className="col-start-5 flex items-center gap-3 justify-self-end opacity-80"
      >
        <button
          onClick={() => dispatch(removeItem(item))}
          className="flex h-[3.25vh] w-[3.25vh] items-center justify-center rounded-sm bg-white text-2xl shadow-lg"
        >
          -
        </button>
        <button
          onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}
          className="flex h-[3.75vh] w-[3.75vh] items-center justify-center rounded-sm bg-white text-2xl shadow-lg"
        >
          +
        </button>
      </div>

      <p id="amount" className="col-start-6 justify-self-center opacity-80">
        {"₹" + (price || defaultPrice) / 100}
      </p>

      <hr
        className={`col-start-1 col-end-7 min-h-[1px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#b2a9fc] to-transparent`}
      />
    </div>
  );
};

export default MenuItem;

export const inCartMenuItem = (MenuItem) => {
  return ({ item }) => {
    return (
      <div className="flex w-full items-center">
        <div className="w-[97.5%]">
          <MenuItem item={item} />
        </div>
        <img src={tick} className="w-[2.5%]" />
      </div>
    );
  };
};
