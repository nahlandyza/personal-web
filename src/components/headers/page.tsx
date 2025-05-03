"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFC0CB] w-full py-3 px-4 md:px-10 fixed top-0 left-0 right-0 z-50 text-[#222222] font-semibold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Home */}
        <Link
          className="hover:bg-[#FF69B4] transition-colors p-2 rounded-full"
          href="#home"
        >
          <FaHome size={24} />
        </Link>

        {/* Hamburger menu button (mobile only) */}
        <button
          className="md:hidden text-[#222] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Main nav - visible on md+ screens */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#about"
          >
            About
          </Link>
          <Link
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#testi"
          >
            Testimonial
          </Link>
          <Link
            className="bg-[#222222] text-[#FFC0CB] hover:bg-[#FF69B4] transition-colors px-3 py-1 rounded-full"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Dropdown nav - visible only when open on mobile */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-3 bg-[#FFE4EC] p-4 rounded-lg shadow">
          <Link
            onClick={() => setMenuOpen(false)}
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#about"
          >
            About
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="hover:bg-[#FF69B4] transition-colors px-2 py-1 rounded"
            href="#testi"
          >
            Testimonial
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="bg-[#222222] text-[#FFC0CB] hover:bg-[#FF69B4] transition-colors px-3 py-1 rounded-full"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
