import { styles } from "../assets/style";
import { ProfileSection, DeliveryDetails, Orders, Checkout } from "./index";

const Cart = () => {
  return (
    <div
      id="cart"
      className={`hidden h-[90%] flex-col items-start rounded-l-3xl px-[1.75vw] py-[0.5vh] pt-[3vh] md:flex md:w-[40vw] lg:w-[28vw] xl:w-[25vw] 2xl:w-[20vw] ${styles["bg-nav"]} shadow-xl ${styles["text-primary"]}`}
    >
      <ProfileSection />

      <div
        className={`flex h-[90%] w-full flex-col rounded-xl bg-transparent bg-gradient-to-b from-[#eceafd] to-transparent p-[8%]`}
      >
        <DeliveryDetails />
        <hr
          className={`h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#b2a9fc] to-transparent `}
        />
        <Orders />
        <hr
          className={`h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#b2a9fc] to-transparent `}
        />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
