
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const AdminProfile = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    setMessage("✅ Password successfully updated!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    // Full viewport height, no scrollbars
    <div className="h-screen w-full bg-gray-50 flex justify-start items-start pt-2 px-6 overflow-x-hidden overflow-y-hidden">
      {/* a little left shift */}
      <div className="ml-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-gray-500 mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">RINZIN DORJI</h2>
          <p className="text-gray-500 text-sm">
            Admin ID: <span className="font-medium">ADM001</span>
          </p>
          <p className="text-green-700 text-sm mt-1 font-semibold">ADMIN</p>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Change Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
            Change Password
          </h3>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter old password"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Re-enter new password"
            />
          </div>

          {message && (
            <p
              className={`text-sm text-center ${
                message.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#006600] text-white py-2 rounded-md font-semibold hover:bg-[#004d00] transition duration-300"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
