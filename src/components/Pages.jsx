import { drinks, foods, settings, dash } from "../assets/index";
import { useState } from "react";
import { styles } from "../assets/style";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { id: "/dash", icon: dash, to: "/" },
  { id: "/foods", icon: foods, to: "/foods" },
  { id: "/drinks", icon: drinks, to: "/drinks" },
  { id: "/settings", icon: settings, to: "/settings" },
];

const Pages = () => {
  const { pathname } = useLocation();
  const [isSelected, setSelected] = useState(
    pathname === "/" ? "/dash" : pathname,
  );

  const handleItemClick = (to) => {
    setSelected(to);
  };

  return (
    <ul className={`flex w-[85%] flex-col gap-[2vh]`}>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`${
            isSelected === item.id ? styles["bg-hero"] : ""
          } relative left-[20%] right-0 flex h-[6vh] items-center justify-start rounded-l-xl pl-[10%]`}
          onClick={() => handleItemClick(item.id)}
        >
          <Link
            to={item.to}
            className={`flex h-[4.5vh] w-full items-center justify-center rounded-l-xl bg-white ${
              isSelected === item.id && "shadow-lg"
            }`}
          >
            <img
              src={item.icon}
              alt={item.id}
              className="h-[3vh] object-contain"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pages;
