import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing profile icon

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-6 shadow-md">
      {/* Left Side: Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800"></h1>
      </div>

      {/* Right Side: Profile Icon and Name */}
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-3xl text-gray-600" /> {/* Profile Icon */}
        <div>
          <div className="text-lg font-semibold text-gray-800">RINZIN DORJI</div>
          <div className="text-sm text-gray-600">ADMIN</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
