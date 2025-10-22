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
import AdminProfile from "../Admin/Pages/AdminProfile.jsx";
import AdminFacilities from "../Admin/Pages/AdminFacilities.jsx";
import AddFacility from "../Admin/Pages/AddFacility.jsx";
import EditFacility from "../Admin/Pages/EditFacility.jsx";
import AdminTestimonials from "../Admin/Pages/AdminTestimonials.jsx";
import AddTestimonial from "../Admin/Pages/AddTestimonial.jsx";
import EditTestimonial from "../Admin/Pages/EditTestimonial.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home1 /> },
      { path: "rooms", element: <Rooms /> },
      { path: "offers", element: <Offers /> },
      { path: "facilities", element: <Facilities /> },
      { path: "room", element: <Room /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminRooms /> },
      { path: "rooms", element: <AdminRooms /> },
      { path: "add-room", element: <AddRoom /> },
      { path: "room-display/:roomId", element: <RoomDisplay /> },
      { path: "edit-room/:roomId", element: <EditRoom /> },
      { path: "profile", element: <AdminProfile /> }, // <-- NEW: /admin/profile
      { path: "facilities", element: <AdminFacilities /> },
      { path: "facilities/new", element: <AddFacility /> },
      { path: "facilities/edit/:id", element: <EditFacility /> },
      { path: "testimonials", element: <AdminTestimonials /> },
      { path: "testimonials/new", element: <AddTestimonial /> },
      { path: "testimonials/edit/:id", element: <EditTestimonial /> },
    ],
  },
]);

export default router;
