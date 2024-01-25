import { UserContext } from "../utils/UserContext";
import { notification_bell, me } from "../assets/index";
import { styles } from "../assets/style";
import { useContext } from "react";

const ProfileSection = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="mb-[3vh] flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-[1vw] ">
        <a
          id="profile"
          className={`flex h-[6vh] w-[6vh] items-center justify-center overflow-hidden rounded-full bg-slate-600 shadow-lg `}
        >
          <img src={me} alt="profile" className="shadow-md " />
        </a>
        <p className=" text-xl ">{loggedInUser.name}</p>
      </div>

      <div
        id="notification"
        className={`h-[5vh] w-[5vh] ${styles["bg-hero"]} flex items-center justify-center rounded-lg shadow-sm`}
      >
        {" "}
        <img
          src={notification_bell}
          alt="notification_bell"
          className="h-[3vh] w-[3vh]"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
