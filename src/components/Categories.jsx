import { image_url } from "../services/APIs";
import { moreThan } from "../assets";
import { styles } from "../assets/style";

const Categories = ({ categories }) => {
  return (
    <div
      id="categories"
      className=" flex min-h-[34vh] w-full flex-col p-[1vh] "
    >
      <div className=" flex h-[20%] items-center justify-between ">
        <p
          className={`${styles["text-primary"]} min-w-[50%] md:text-2xl md:tracking-wide 2xl:text-3xl 2xl:tracking-wider `}
        >
          FOOD
          <span className="ml-[1vH] font-extrabold">CATEGORIES</span>{" "}
        </p>

        <div className="flex h-full w-[10%] items-center gap-2 justify-self-end opacity-80">
          <button className="flex h-[70%] w-[65%] cursor-pointer items-center justify-center rounded-md bg-white shadow-lg">
            <img src={moreThan} alt="more" className="h-[70%] -scale-100" />
          </button>
          <button className="flex h-[75%] w-[70%] cursor-pointer items-center justify-center rounded-md bg-white shadow-lg">
            <img src={moreThan} alt="more" className="h-[70%]" />
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex h-[80%] w-full items-center gap-[3.5%] overflow-x-scroll px-[1vw] pt-[3vh]">
        {categories?.map((category) => (
          <Category
            key={category?.id}
            imageId={category?.imageId}
            categoryName={category?.action?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

const Category = ({ imageId, categoryName }) => {
  return (
    <div className=" relative flex h-[16vh] min-w-[12vh] flex-col items-center rounded-xl bg-transparent bg-gradient-to-b from-[#d2d3f5]">
      <div className=" absolute -left-[5%] -top-[28%] flex h-[13vh] w-[13vh] origin-center items-start justify-center overflow-hidden rounded-full bg-white shadow-xl">
        <img
          src={image_url + imageId}
          alt="food category"
          className="relative bottom-2 h-[143%] w-full rounded-full object-cover"
        />
      </div>
      <div className="mt-[75%] flex flex-col items-center justify-center font-bold">
        <p className=" text-xs text-[#b8baf3] opacity-70">|</p>
        <p className=" text-center text-sm ">{categoryName}</p>
      </div>
    </div>
  );
};
