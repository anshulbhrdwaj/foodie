import { UserContext } from "../utils/UserContext";
import { pen, clock, location, call } from "../assets/index";
import { styles } from "../assets/style";
import { useContext } from "react";

const DeliveryDetails = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="mb-[2vh] h-1/3">
      <div className="flex w-full items-center justify-between">
        <p
          className={`${styles["text-primary"]} min-w-[50%] md:text-lg md:tracking-wide 2xl:text-xl 2xl:tracking-wider `}
        >
          DELIVERY
          <span className="ml-1 font-extrabold">DETAILS</span>{" "}
        </p>
        <button className="ml-[0.5vw]">
          <img src={pen} alt="edit" className="h-[2vh] opacity-80" />
        </button>
      </div>

      <div className="mt-[1vh] flex h-[75%] w-[90%] flex-col items-start justify-evenly">
        <div id="eta" className="flex items-center gap-2">
          <div className="flex h-[2.5vh] w-[2.5vh] items-center justify-center rounded-full bg-white">
            <img src={clock} alt="clock" className="h-[1.5vh]" />
          </div>
          <p className="opacity-70 md:text-xs 2xl:text-sm">
            {loggedInUser.deliveryData.eta}
          </p>
        </div>

        <div id="address" className="flex items-center gap-2">
          <div className="flex h-[2.5vh] w-[2.5vh] items-center justify-center rounded-full bg-white">
            <img src={location} alt="clock" className="h-[1.5vh]" />
          </div>
          <p className="opacity-70 md:text-xs 2xl:text-sm">
            {loggedInUser.deliveryData.address}
          </p>
        </div>

        <div id="address" className="flex items-center gap-2">
          <div className="flex h-[2.5vh] w-[2.5vh] items-center justify-center rounded-full bg-white">
            <img src={call} alt="clock" className="h-[1.5vh]" />
          </div>
          <p className="opacity-70 md:text-xs 2xl:text-sm">
            {loggedInUser.deliveryData.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
