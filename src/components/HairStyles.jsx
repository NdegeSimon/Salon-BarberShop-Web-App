// BookingForm.jsx
import React, { useState } from "react";

const BookingForm = ({ selectedService }) => {
  const [service, setService] = useState(selectedService || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Booking submitted for ${service}!`);
  };

  return (
    <div className="booking-form">
      <h2 className="text-2xl font-bold mb-4">Book Your Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Hair Coloring">Hair Coloring</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Makeup">Makeup</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>
        <button type="submit" className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
