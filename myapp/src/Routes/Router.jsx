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
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import RoomDetails2 from "../Pages/InnerPage/RoomDetails2";
import Contact from "../Pages/InnerPage/Contact";
import BookingDetails from "../Pages/InnerPage/BookingDetails.jsx";
import TermsAndConditions from "../Pages/InnerPage/TermsAndConditions.jsx";
import Gallery from "../Pages/InnerPage/Gallery.jsx";

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
        path: "/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/room_details2",
        element: <RoomDetails2 />,
      },
      {
        path: "/booking_details",
        element: <BookingDetails />,
      },
      {
        path: "/terms_and_conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
       {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
