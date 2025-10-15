import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Home1 from "../Pages/Home1.jsx";
import ErrorPage from "../Shared/ErrorPage/ErrorPage.jsx";
import Rooms from "../Components/Rooms/Rooms.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Facilities from "../Components/Facilities/Facilities.jsx";
import About from "../Pages/InnerPage/About.jsx";
// inner pages
import Room from "../Pages/InnerPage/Room";
import Services from "../Pages/InnerPage/Services.jsx";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails.jsx";

// Admin components
import AdminLayout from "../Admin/AdminLayout.jsx";
import AdminRooms from "../Admin/Pages/AdminRooms.jsx";
import AddRoom from "../Admin/Pages/AddRoom.jsx";
import RoomDisplay from "../Admin/Pages/RoomDisplay.jsx";
import EditRoom from "../Admin/Pages/EditRoom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home1 /> }, // homepage
      { path: "rooms", element: <Rooms /> }, // /rooms
      { path: "offers", element: <Offers /> }, // /offers
      { path: "facilities", element: <Facilities /> }, // /facilities
      { path: "room", element: <Room /> }, // /room
      { path: "about", element: <About /> }, // /about
      { path: "services", element: <Services /> }, // /services
      { path: "service_details", element: <ServiceDetails /> }, // /service_details
    ],
  },
  // Admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminRooms /> }, // /admin
      { path: "rooms", element: <AdminRooms /> }, // /admin/rooms
      { path: "add-room", element: <AddRoom /> }, // /admin/add-room
      { path: "room-display/:roomId", element: <RoomDisplay /> }, // /admin/room-display/:roomId
      { path: "edit-room/:roomId", element: <EditRoom /> }, // /admin/edit-room/:roomId
    ],
  },
]);

export default router;
