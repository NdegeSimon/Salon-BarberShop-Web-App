import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flex layout: brand + menu */}
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand Name */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-wide"
          >
            ✂ Salon & Barber
          </Link>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link to="/booking" className="hover:text-gray-300 transition-colors">Booking</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="block hover:text-gray-300" onClick={toggleMenu}>Services</Link>
          <Link to="/booking" className="block hover:text-gray-300" onClick={toggleMenu}>Booking</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
// This component provides a responsive navigation bar with links to different sections of the salon and barber website.
// It includes a logo, desktop navigation links, and a mobile dropdown menu that toggles visibility on smaller screens. 
// The design is styled using Tailwind CSS classes for a modern look.
// The component uses React's useState hook to manage the open/closed state of the mobile menu.