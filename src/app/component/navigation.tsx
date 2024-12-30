"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-8 py-3 relative sm:flex font-[open-sans]">
      <div className="flex justify-between items-center w-full">
        {/* Brand Logo */}
        <Link href="#" className="text-2xl font-bold whitespace-nowrap">
          Areeba Sheikh
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-2xl focus:outline-none z-50"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`sm:flex sm:items-center sm:space-x-8 absolute sm:static font-bold  left-0 
         w-full bg-gray-800
         sm:bg-transparent transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="block px-8 py-2 hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="block px-8 py-2 hover:text-gray-400">
          About
        </Link>
        <Link href="/contact" className="block px-8 py-2 hover:text-gray-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
