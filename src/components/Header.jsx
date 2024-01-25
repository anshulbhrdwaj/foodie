import { search } from "../assets";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const {loggedInUser} = useContext(UserContext)

  return (
    <header className=" flex h-[10vh] items-center gap-2 ">
      <div className=" flex h-[80%] w-[80%] flex-col gap-1 justify-self-start lg:w-[50%]">
        <p className={`text-2xl font-bold tracking-wider xl:text-4xl`}>
          Hi, {loggedInUser.name}
        </p>
        <p className={`text-lg opacity-80 md:text-xl `}>
          Let's get some, Foodie Time!
        </p>
      </div>
      <div className=" flex h-[75%] w-[20%] flex-col items-end justify-center justify-self-start lg:w-[50%]">
        <div className="hidden h-[80%] w-[95%] items-center gap-1 justify-self-end rounded-full bg-white px-2 lg:flex">
          <input
            className=" h-[80%] w-[90%] justify-self-end rounded-full bg-[#E8E4FF] px-[5%] text-base outline-none 2xl:text-lg"
            placeholder="search for dish"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
          />
          <button
            className="flex h-[80%] w-[10%] items-center justify-center overflow-hidden rounded-full"
            onClick={() => {}}
          >
            <img src={search} alt="search" className="h-[65%]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
