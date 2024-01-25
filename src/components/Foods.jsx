import { Header, Categories, Recommendations, Shimmer, FoodItems } from "./index";
import useHeroData from "../hooks/useHeroData";

const Foods = () => {
  const [categories, restaurants] = useHeroData();

  return !categories || !restaurants ? (
    <Shimmer />
  ) : (
    <div className=" no-scrollbar flex h-screen max-w-full flex-col gap-[4vh] overflow-y-scroll px-[3vw] max-sm:pb-[6vh] max-sm:pt-[5vh] md:py-[5vh]">
      <Header />
      <Categories categories={categories} />
      <FoodItems />
    </div>
  );
};

export default Foods;
