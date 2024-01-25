import { pen, delivery, deleteIcon } from "../assets/index";
import { styles } from "../assets/style";
import { image_url } from "../services/APIs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/slices/cartSlice";
import useCartItems from "../hooks/useCartItems";

const Orders = () => {
  const dispatch = useDispatch();
  const { deliveryAmount } = useCartItems();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="no-scrollbar mb-[0vh] h-[67%] overflow-y-scroll">
      <div className="mt-[2vh] flex w-full items-center justify-between">
        <p
          className={`${styles["text-primary"]} min-w-[50%] md:text-lg md:tracking-wide 2xl:text-xl 2xl:tracking-wider `}
        >
          MY
          <span className="ml-1 font-extrabold">CART</span>{" "}
        </p>
        <button className="ml-[0.5vw]" onClick={() => dispatch(clearCart())}>
          <img src={deleteIcon} alt="edit" className="h-[2vh] opacity-80" />
        </button>
      </div>

      {cartItems.map(
        (item, index) =>
          item &&
          item.quantity !== 0 && (
            <div
              key={item?.info?.id || index}
              className="mt-[1vh] grid w-full grid-cols-6 items-center gap-2"
            >
              <div className="col-start-1 col-end-3 flex min-w-[80%] items-center gap-2">
                <div className="h-[5vh] w-[5vh] overflow-hidden rounded-full">
                  <img
                    src={item?.info?.imageId && image_url + item?.info?.imageId}
                    alt={item?.info?.name}
                    className="h-[5vh] w-[5vh] rounded-full"
                  />
                </div>
                <p className="min-w-[110px] flex-wrap justify-start font-bold md:text-xs 2xl:text-sm">
                  {item?.info?.name}
                </p>
              </div>

              <div
                id="quantity"
                className="col-start-4 col-end-6 flex items-center gap-1 justify-self-center opacity-80"
              >
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="flex h-[1.25vh] w-[1.25vh] items-center justify-center rounded-sm bg-white shadow-lg"
                >
                  -
                </button>
                <p className="text-xs ">{item?.quantity}</p>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="flex h-[1.75vh] w-[1.75vh] items-center justify-center rounded-sm bg-white shadow-lg"
                >
                  +
                </button>
              </div>

              {item && (
                <p
                  id="amount"
                  className="col-start-6 justify-self-end opacity-80"
                >
                  {"₹" +
                    (
                      (item?.info?.price || item?.info?.defaultPrice) / 100
                    ).toFixed(0)}
                </p>
              )}
            </div>
          ),
      )}

      {cartItems.length !== 0 ? (
        <div className="ml-[1vh] mt-[1.5vh] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={delivery}
              alt="delivery"
              className="h-[3vh] w-[3vh] rounded-full"
            />
            <p className="max-w-[110px] flex-wrap font-bold opacity-70 md:text-xs 2xl:text-sm ">
              Delivery Cost
            </p>
          </div>

          <p className="justify-end text-sm opacity-80">{deliveryAmount}</p>
        </div>
      ): <p className="flex justify-center items-center w-full h-[80%] opacity-60"> No Yumminess Added!! </p>}
    </div>
  );
};

export default Orders;
