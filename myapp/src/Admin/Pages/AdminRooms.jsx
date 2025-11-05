import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const roomData = [
      {
        id: 1,
        title: "Deluxe Double",
        availability: "20 Rooms Available",
        price: "$90 | Nu 7600",
        image: "/images/rooms/deluxe-double.jpg",
      },
      {
        id: 2,
        title: "Junior Suite",
        availability: "2 Rooms Available",
        price: "$95 | Nu 8200",
        image: "/images/rooms/junior-suite.jpg",
      },
    ];
    setRooms(roomData);
  }, []);

  // Navigate to Room Display page
  const handleViewClick = (roomId) => {
    navigate(`/admin/room-display/${roomId}`);
  };

  const RoomCard = ({ room, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-[#004d00] hover:shadow-xl transition-all duration-500 transform ${
          isHovered ? "scale-105 -translate-y-2" : "scale-100"
        }`}
        style={{ animationDelay: `${index * 200}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex">
          {/* Room Image */}
          <div className="w-2/5">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop";
              }}
            />
          </div>

          {/* Room Details */}
          <div className="w-3/5 p-6">
            <h3 className="text-xl font-semibold text-black mb-2">
              {room.title}
            </h3>
            {room.price && (
              <p className="text-lg font-semibold text-black mb-2">
                {room.price}
              </p>
            )}
            <p className="text-lightblack mb-6">{room.availability}</p>
            <button
              onClick={() => handleViewClick(room.id)}
              className="w-full bg-[#004d00] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#003300] transition-colors duration-300"
            >
              VIEW
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto pl-16"> {/* ⬅ added padding-left */}
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-lightblack">
              ROOM MANAGEMENT
            </h1>
            <p className="text-[#006600] mt-2">
              Manage your resort rooms and availability
            </p>
          </div>

          {/* Add Room Button */}
          <div className="ml-auto">
            <button
              className="bg-[#006600] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#004d00] transition-colors duration-300"
              onClick={() => navigate("/admin/add-room")}
            >
              ADD ROOM
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="space-y-6 mt-4">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminRooms;
