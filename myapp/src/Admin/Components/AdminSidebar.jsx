import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../public/images/home/logologo.png";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: '📊', label: 'DASHBOARD' },
    { path: '/admin/rooms', icon: '🛏️', label: 'ROOM' },
    { path: '/admin/booking', icon: '📅', label: 'BOOKING' },
    { path: '/admin/facilities', icon: '🏊', label: 'FACILITIES' },
    { path: '/admin/testimonials', icon: '💬', label: 'TESTIMONIALS' },
    { path: '/admin/receptionist', icon: '👨‍💼', label: 'RECEPTIONIST' },
  ];

  return (
    <div className={`bg-white text-black transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-72'} h-screen fixed shadow-xl font-inter`}>
      {/* Header with Big Logo */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center justify-center w-full">
              {/* Bigger Logo */}
             <img 
  src={logo} 
  alt="Resort Thim-Dorji Logo" 
  className="w-40 h-40 object-contain" // 10rem ≈ 160px
/>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              {/* Bigger Logo */}
              <img 
                src={logo} 
                alt="Resort Thim-Dorji Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 text-gray-600 font-inter"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 font-inter ${
                  location.pathname === item.path 
                    ? 'bg-[#006600] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={`text-lg mr-3 ${
                  location.pathname === item.path ? 'text-white' : 'text-gray-600'
                }`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className={`font-medium ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-700'
                  }`}>
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button at the bottom with green background */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button className="w-full flex items-center justify-center p-4 rounded-lg bg-[#006600] text-white hover:bg-green-800 transition-colors font-inter shadow-lg">
          <span className="text-lg mr-3">🚪</span>
          {!isCollapsed && <span className="font-medium">LOG OUT</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
