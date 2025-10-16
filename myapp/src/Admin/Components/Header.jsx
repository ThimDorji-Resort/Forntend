import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  // Navigate to profile page when admin section is clicked
  const handleProfileClick = () => {
    navigate('/admin/profile'); // ✅ go to the route, not a file path
  };

  return (
    <div className="flex justify-between items-center bg-white p-6 shadow-md">
      {/* Left Side: Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800"></h1>
      </div>

      {/* Right Side: Profile Icon and Name */}
      <button
        type="button"
        onClick={handleProfileClick}
        className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300"
        aria-label="Open admin profile"
      >
        <FaUserCircle className="text-3xl text-gray-600" />
        <div className="text-left">
          <div className="text-lg font-semibold text-gray-800">RINZIN DORJI</div>
          <div className="text-sm text-gray-600">ADMIN</div>
        </div>
      </button>
    </div>
  );
};

export default Header;
