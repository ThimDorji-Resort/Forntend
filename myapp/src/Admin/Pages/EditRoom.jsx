import React, { useState, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const EditRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomId } = useParams();

  const baseRoom = useMemo(() => {
    if (location.state?.room) return location.state.room;
    const ls = JSON.parse(localStorage.getItem('rooms') || '[]');
    return ls.find((r) => String(r.id) === String(roomId)) || {
      id: Number(roomId) || 1,
      title: "Deluxe Double",
      size: "29 m²",
      occupancy: 3,
      beds: "2 x Super Single Bed(s)",
      location: "Riverside View",
      details:
        "Enjoy a relaxing stay in our Deluxe Double Room, featuring a scenic river view and a cozy, well-appointed space.",
      features: [
        "Individually controlled air-conditioning",
        "Carpeted flooring",
        "Bedhead USB chargers",
        "Cable TV",
        "Free WiFi",
        "Coffee/Tea facilities with kettle jug",
        "Bottled mineral water",
        "Universal power plugs",
      ],
      bathroomAmenities: [
        "Heated WC seat",
        "Compartmentalised shower",
        "Cold & hot water rain shower",
        "Shampoo & body liquid soap",
        "Hairdryer",
        "Bathroom heater",
        "Complimentary bathrobe, towels, and toiletries",
      ],
      optional: "Extra bed setup",
      image: "/images/home/heat.jpg",
    };
  }, [location.state, roomId]);

  const [updatedRoom, setUpdatedRoom] = useState({
    id: baseRoom.id,
    title: baseRoom.title,
    size: baseRoom.size,
    occupancy: baseRoom.occupancy,
    beds: baseRoom.beds,
    location: baseRoom.location,
    details: baseRoom.details,
    features: Array.isArray(baseRoom.features) ? baseRoom.features.join(", ") : baseRoom.features,
    bathroomAmenities: Array.isArray(baseRoom.bathroomAmenities)
      ? baseRoom.bathroomAmenities.join(", ")
      : baseRoom.bathroomAmenities,
    optional: baseRoom.optional || "",
    image: baseRoom.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Normalize features and bathroom amenities to arrays
    const normalized = {
      ...updatedRoom,
      features: String(updatedRoom.features)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      bathroomAmenities: String(updatedRoom.bathroomAmenities)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    // Show confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the room details?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
      confirmButtonColor: "#006600",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Save the updated room to localStorage
        const rooms = JSON.parse(localStorage.getItem('rooms') || '[]');
        const next = rooms.map((r) => (String(r.id) === String(normalized.id) ? normalized : r));
        localStorage.setItem('rooms', JSON.stringify(next));

        // Redirect back to RoomDisplay with updated room data
        navigate(`/admin/room-display/${normalized.id}`, { state: { room: normalized } });
      }
    });
  };

  return (
    <section className="py-0 bg-white text-black font-inter">
 <div className="max-w-6xl mx-auto">        <div className="col-span-1 md:col-span-2">
          <form onSubmit={handleUpdate}>
            <h2 className="text-4xl font-semibold py-5">Edit Room Details</h2>

            {/* Room Title */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="title">Room Title</label>
              <input
                id="title" name="title" type="text"
                value={updatedRoom.title} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Room Size */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="size">Room Size</label>
              <input
                id="size" name="size" type="text"
                value={updatedRoom.size} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Occupancy */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="occupancy">Occupancy</label>
              <input
                id="occupancy" name="occupancy" type="number"
                value={updatedRoom.occupancy} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Beds */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="beds">Beds</label>
              <input
                id="beds" name="beds" type="text"
                value={updatedRoom.beds} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="location">Location</label>
              <input
                id="location" name="location" type="text"
                value={updatedRoom.location} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Room Details */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="details">Room Details</label>
              <textarea
                id="details" name="details" rows="4"
                value={updatedRoom.details} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* Features */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="features">Room Features (comma separated)</label>
              <input
                id="features" name="features" type="text"
                value={updatedRoom.features} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Bathroom Amenities */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="bathroomAmenities">Bathroom Amenities (comma separated)</label>
              <input
                id="bathroomAmenities" name="bathroomAmenities" type="text"
                value={updatedRoom.bathroomAmenities} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Optional */}
            <div className="mb-4">
              <label className="block font-medium mb-2" htmlFor="optional">Optional</label>
              <input
                id="optional" name="optional" type="text"
                value={updatedRoom.optional} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Image URL */}
            <div className="mb-6">
              <label className="block font-medium mb-2" htmlFor="image">Image URL</label>
              <input
                id="image" name="image" type="text"
                value={updatedRoom.image} onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter image URL"
              />
            </div>

            <button
              type="submit"
              className="bg-[#006600] w-full h-11 text-white font-semibold rounded-md hover:bg-[#004d00] transition"
            >
              Update Room
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditRoom;
