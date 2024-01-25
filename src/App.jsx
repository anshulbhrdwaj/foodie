import {
  Navbar,
  Hero,
  Cart,
  NavbarMob,
  Error,
  Shimmer,
  RestaurantMenu,
} from "./components";
import { styles } from "./assets/style";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Foods = lazy(() => import("./components/Foods"));
// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

function App() {
  return (
    <Provider store={appStore}>
      
      <div
        className={`${styles["bg-hero"]} ${styles["text-primary"]} relative flex h-screen w-screen flex-col items-center font-sans md:flex-row`}
      >
        <div className="flex h-screen items-center justify-start md:flex-row ">
          <Navbar />
        </div>

        {/* <div className="flex h-screen w-screen items-center justify-center md:hidden md:flex-row">
          <NavbarMob />
        </div> */}

        <div className="h-screen w-full overflow-hidden">
          <Outlet />
        </div>

        <div className="hidden h-screen items-center justify-end lg:flex lg:flex-row">
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/foods", element: <Suspense fallback={<Shimmer />}><Foods /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default App;
