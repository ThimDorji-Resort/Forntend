import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const AddRoom = () => {
  const [roomType, setRoomType] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [size, setSize] = useState('');
  const [beds, setBeds] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [location, setLocation] = useState('');
  const [roomDetails, setRoomDetails] = useState('');
  const [roomFeatures, setRoomFeatures] = useState('');
  const [bathroomAmenities, setBathroomAmenities] = useState('');
  const [optional, setOptional] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);  // State for modal visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !roomType || !numberOfRooms || !size || !beds || !occupancy || !location || !roomDetails
    ) {
      setIsValid(false);
    } else {
      // Show SweetAlert2 confirmation modal
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to add this new room?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, add it!',
        cancelButtonText: 'No, cancel',
        confirmButtonColor: '#006600',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          // After confirmation, navigate back to the admin page
          // You can also save the room to localStorage or an API here
          setShowModal(true); // Show success modal

          // Redirect after a short delay (for UX)
          setTimeout(() => {
            navigate('/admin');  // Redirect to the admin page after success
          }, 2000);
        }
      });
    }
  };

  const handleModalClose = () => {
    setShowModal(false);  // Close modal when "OK" is clicked
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#006600]">ADD ROOM</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Type and Number of Rooms */}
          <div className="flex space-x-6">
            <div className="w-full">
              <label className="block text-lg font-semibold text-[#006600]">Room Type</label>
              <input
                type="text"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter room type"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold text-[#006600]">Number of Rooms</label>
              <input
                type="number"
                value={numberOfRooms}
                onChange={(e) => setNumberOfRooms(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter number of rooms"
              />
            </div>
          </div>

          {/* Size, Beds, and Occupancy */}
          <div className="flex space-x-6">
            <div className="w-full">
              <label className="block text-lg font-semibold text-[#006600]">Size (Sq/M)</label>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter size in Sq/M"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold text-[#006600]">Beds</label>
              <input
                type="text"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter bed configuration"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold text-[#006600]">Occupancy</label>
              <input
                type="number"
                value={occupancy}
                onChange={(e) => setOccupancy(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter occupancy"
              />
            </div>
          </div>

          {/* Fields aligned in a single column */}
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-[#006600]">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter room location"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-[#006600]">Room Details</label>
              <textarea
                rows="4"
                value={roomDetails}
                onChange={(e) => setRoomDetails(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter room details"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-[#006600]">Room Features</label>
              <textarea
                rows="2"
                value={roomFeatures}
                onChange={(e) => setRoomFeatures(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter room features"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-[#006600]">Bathroom Amenities</label>
              <textarea
                rows="2"
                value={bathroomAmenities}
                onChange={(e) => setBathroomAmenities(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Enter bathroom amenities"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-[#006600]">Optional</label>
              <textarea
                rows="2"
                value={optional}
                onChange={(e) => setOptional(e.target.value)}
                className={`w-full px-4 py-2 rounded-none border-2 ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } transition-colors duration-300`}
                placeholder="Optional details"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-[#006600]">Images</label>
              <input
                type="file"
                className="w-full px-4 py-2 rounded-none border-2 border-gray-300"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#006600] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#004d00] transition-colors duration-300"
            >
              Confirm
            </button>
            <button
              type="button"
              className="text-[#006600] py-3 px-6 rounded-md font-semibold hover:bg-[#004d00] transition-colors duration-300"
              onClick={() => navigate('/admin')}
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-opacity-75 flex justify-center items-center">
            <div className="bg-[#006600] p-8 rounded-md text-center">
              <div className="text-5xl text-[#006600] mb-4">✔️</div>
              <h2 className="text-2xl font-semibold text-balck mb-4">New Room Added</h2>
              <button
                onClick={handleModalClose}
                className="bg-[#006600] text-white px-6 py-2 rounded-md"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRoom;
