// SpecialOffersCard.jsx
import React from "react";

export default function SpecialOffersCard({ title, description, discount, image, onBook }) {
  return (
    <div className="max-w-md bg-red-700 text-white rounded-2xl overflow-hidden shadow-lg flex flex-col sm:flex-row">
      {/* Image Section */}
      <div className="w-full sm:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between p-6 sm:w-1/2">
        {/* Offer Tag */}
        <span className="bg-black text-red-500 px-3 py-1 rounded-full text-sm font-bold self-start">
          {discount}% OFF
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-3">{title}</h2>

        {/* Description */}
        <p className="text-sm mt-2 text-gray-200">{description}</p>

        {/* Button */}
        <button
          onClick={onBook}
          className="mt-4 bg-black hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
