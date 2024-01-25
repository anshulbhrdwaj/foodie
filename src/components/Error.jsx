import { useRouteError } from "react-router-dom";
import { styles } from "../assets/style";

const Error = () => {
  const err = useRouteError();
  return <div className={`h-screen w-screen flex justify-center items-center font-bold text-5xl ${styles["text-primary"]} ${styles["bg-hero"]}`}>Error {`${err.status}: ${err.statusText}`}</div>;
};

export default Error;
