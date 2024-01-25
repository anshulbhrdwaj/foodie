import { styles } from "../assets/style";
import PagesMob from "./PagesMob";

const NavbarMob = () => {
  return (
    <nav
      className={`flex md:hidden justify-center items-center w-[90%] h-[7vh] px-[1%] box-content rounded-t-3xl ${styles["bg-nav"]} absolute bottom-0 shadow-[3px_-3px_40px_-10px_rgba(0,0,0,0.2)] z-50 overflow-hidden`}
    >
      <PagesMob />
    </nav>
  );
};

export default NavbarMob;
