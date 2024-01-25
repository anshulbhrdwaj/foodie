import { styles } from "../assets/style";
import { logout, logo } from "../assets/index";
import { Link } from "react-router-dom";
import Pages from "./Pages";

const Navbar = () => {
  return (
    <nav
      className={`relative hidden h-[90%] flex-col items-center justify-between rounded-r-3xl py-[5vh] md:flex md:w-[10vw] lg:w-[7vw] xl:w-[6vw] 2xl:w-[5vw] ${styles["bg-nav"]} shadow-xl `}
    >
      <Link
        to="/"
        id="logo"
        className={` flex h-[6vh] w-[6vh] items-center justify-center overflow-hidden rounded-full`}
      >
        <img src={logo} alt="profile" />
      </Link>

      <div id="sections" className={`w-full overflow-hidden`}>
        <Pages />
      </div>

      <a
        id="logout"
        className={`flex h-[3vh] w-[3vh] -scale-x-100 cursor-pointer items-center justify-center overflow-hidden`}
      >
        <img src={logout} alt="logout" />
      </a>
    </nav>
  );
};

export default Navbar;
