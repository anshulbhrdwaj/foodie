// import {total, subtotal} from "../utils/cartOrders";
import { right } from "../assets/index";
import { styles } from "../assets/style";
import useCartItems from "../hooks/useCartItems";

const Checkout = () => {
  const { totalAmount, subTotalAmount } = useCartItems();

  return (
    <div className="h-1/3">
      <div className="mt-[1vh] flex w-full items-center justify-between opacity-70">
        <p
          className={`${styles["text-primary"]} md:text-md md:tracking-normal 2xl:text-lg 2xl:tracking-wide`}
        >
          SUB TOTAL
        </p>
        <p
          className={`${styles["text-primary"]} md:text-md md:tracking-normal 2xl:text-lg 2xl:tracking-wide`}
        >
          {subTotalAmount?.toFixed(0)}
        </p>
      </div>

      <div className="mt-[2vh] flex w-full items-center justify-between">
        <p
          className={`${styles["text-primary"]} md:text-lg md:tracking-wide 2xl:text-xl 2xl:tracking-wider`}
        >
          TOTAL
        </p>
        <p className="ml-1 font-extrabold md:text-lg md:tracking-wide 2xl:text-xl 2xl:tracking-wider">
          {totalAmount?.toFixed(0)}
        </p>
      </div>

      <button
        className={`text-lg font-bold text-white 2xl:text-xl ${styles["bg-gradient"]} mt-[4vh] flex h-[25%] w-full items-center justify-center rounded-full shadow-xl`}
      >
        CHECKOUT <img src={right} className="ml-[0.5vh] h-[60%]" />
      </button>
    </div>
  );
};

export default Checkout;
