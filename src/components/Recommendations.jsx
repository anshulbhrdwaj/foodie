import { styles } from "../assets/style";
import { moreThan } from "../assets";
import { image_url } from "../services/APIs";
import { Link } from "react-router-dom";
import React from "react";

const Recommendations = ({ restaurants }) => {
  return (
    <div
      id="restaurants"
      className={` ${styles["bg-gradient"]} relative min-h-[36vh] rounded-xl p-[3%] text-white`}
    >
      <div className=" flex h-[25%] items-center justify-between  ">
        <p
          className={` min-w-[50%] md:text-2xl md:tracking-wide 2xl:text-3xl 2xl:tracking-wider `}
        >
          CHOOSE
          <span className="ml-[1vH] font-extrabold">
            TODAYS'S RECOMMENDATIONS
          </span>{" "}
        </p>

        <div className="z-20 flex h-full w-[10%] items-center gap-2 justify-self-end opacity-80">
          <button className="flex h-[80%] w-[75%] cursor-pointer items-center justify-center rounded-md bg-white shadow-lg">
            <img src={moreThan} alt="more" className="h-[70%] -scale-100" />
          </button>
          <button className="flex h-[85%] w-[80%] cursor-pointer items-center justify-center rounded-md bg-white shadow-lg">
            <img src={moreThan} alt="more" className="h-[70%]" />
          </button>
        </div>
      </div>

      <div className="no-scrollbar relative mt-[1%] flex h-[80%] items-center gap-[2vw] overflow-x-scroll rounded-xl p-2 ">
        {restaurants?.map((restaurant) => (
          <RecommendedRestaurant
            key={restaurant?.info?.id}
            id={restaurant?.info?.id}
            name={restaurant?.info?.name}
            imageId={restaurant?.info?.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

const RecommendedRestaurant = ({ name, imageId, id }) => {
  return (
    <Link
      to={`/restaurants/${id}`}
      className="flex h-full min-w-[18%] flex-col gap-[1vh] hover:scale-105 "
    >
      <div className="relative flex h-[60%] w-full items-center justify-center overflow-hidden rounded-xl bg-white">
        <img src={image_url + imageId} alt="" className="w-full" />{" "}
      </div>
      <div className="flex grid-cols-5 flex-wrap gap-2">
        <p className="col-start-1 col-end-4 2xl:text-xl">{name}</p>
      </div>
    </Link>
  );
};

export default Recommendations;

