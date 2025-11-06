// src/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Booking from "./Pages/Booking";
import BookingDetails from "./Pages/BookingDetails";
import Receptionists from "./Pages/Receptionist"; // <-- new page
import AdminLayout from "./Components/AdminLayout";
import ReceptionistDetails from "./Pages/ReceptionistDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Pages using Layout */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <AdminLayout>
              <Booking />
            </AdminLayout>
          }
        />
        <Route
          path="/booking-details"
          element={
            <AdminLayout>
              <BookingDetails />
            </AdminLayout>
          }
        />
        <Route
          path="/receptionists"
          element={
            <AdminLayout>
              <Receptionists />
            </AdminLayout>
          }
        />
<Route
  path="/receptionist-details"
  element={
    <AdminLayout>
      <ReceptionistDetails />
    </AdminLayout>
  }
/>
        {/* Add more admin pages here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
