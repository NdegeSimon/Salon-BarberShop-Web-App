import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets";

// TeamMemberCard.jsx
function TeamMemberCard({ name, role, image }) {
  return (
    <div className="bg-black p-4 rounded-lg text-center w-64">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-red-500"
      />
      <h3 className="mt-4 text-red-500 text-lg font-bold">{name}</h3>
      <p className="text-red-500 text-sm">{role}</p>
    </div>
  );
}

export default TeamMemberCard;
// This component renders a card for each team member with their name, role, and image.