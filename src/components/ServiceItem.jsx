// src/components/ServiceItem.jsx
import React from "react";

/**
 * ServiceItem
 * - icon: URL or imported image (ideally square, transparent PNG or SVG)
 * - name: service title shown beneath the icon
 * - onClick: function when user taps the service (open booking/modal/filter)
 */
export default function ServiceItem({ icon, name, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Book ${name}`}
      className="flex flex-col items-center space-y-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      style={{ minWidth: 92 }} // keeps consistent width in horizontal list
    >
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border-2 border-red-500 shadow-sm">
        {/* icon should be centered and use object-contain */}
        <img src={icon} alt={`${name} icon`} className="w-10 h-10 object-contain" />
      </div>

      <span className="text-red-500 text-sm font-medium leading-tight text-center">
        {name}
      </span>
    </button>
  );
}
