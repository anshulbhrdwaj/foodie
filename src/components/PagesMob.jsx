import { drinks, checkout, foods, settings, dash } from "../assets/index";
import { useState } from "react";
import { styles } from "../assets/style";

const PagesMob = () => {
  const [isSelected, setSelected] = useState(0);
  const pages = [dash, foods, drinks, settings, checkout];

  return (
    <ul className={`flex w-full h-full justify-evenly`}>
      {pages.map((page, index) => (
        <li
          key={index}
          className={
            isSelected === index
              ? `${styles["bg-hero"]} rounded-b-xl h-[80%] w-[15%] flex items-start justify-center `
              : `bg-white rounded-b-xl h-[80%] w-[15%] flex items-start justify-center `
          }
          onClick={() => setSelected(index)}
        >
          <a
            href="#"
            className={`rounded-b-xl bg-white h-[90%] w-[80%] flex items-center justify-center  ${
              isSelected===index && `shadow-xl`
            }`}
        >
            {" "}
            <img src={page} alt="dashboard" className="object-contain h-[3vh]" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PagesMob;
