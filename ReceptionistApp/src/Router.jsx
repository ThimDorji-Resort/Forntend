// src/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Booking from "./Pages/Booking";
import BookingDetails from "./Pages/BookingDetails"; // <-- new
import AdminLayout from "./Components/AdminLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

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

        {/* Add more admin pages here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
