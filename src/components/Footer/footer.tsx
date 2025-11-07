

import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white">
          Sk Muaz Al Muttaki
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://github.com/muazalmuttaki" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Sk Muaz Al Muttaki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
