import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './Components/AdminSidebar';
import Header from './Components/Header'; // Import Header component

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {/* Add Header here */}
        <Header />

        {/* Outlet for nested routes */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
