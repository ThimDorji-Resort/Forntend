import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Home1 from "../Pages/Home1.jsx";
import ErrorPage from "../Shared/ErrorPage/ErrorPage.jsx";
import Rooms from "../Components/Rooms/Rooms.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Facilities from "../Components/Facilities/Facilities.jsx";
import About from "../Pages/InnerPage/About.jsx";
//inner pages
import Room from "../Pages/InnerPage/Room";
import Services from "../Pages/InnerPage/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home1 /> },       // ✅ homepage
      { path: "rooms", element: <Rooms /> },     // ✅ /rooms
      { path: "offers", element: <Offers /> },   // ✅ /offers
      { path: "facilities", element: <Facilities /> }, // ✅ /facilities
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/about",
        element: <About />,
      },
       {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default router;
