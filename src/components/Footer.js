import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <Link to="/" className="text-white text-2xl font-bold mb-2 md:mb-0">
              Career-Canvas
            </Link>
            <nav className="flex flex-wrap md:ml-6">
              <Link to="/about" className="text-gray-300 hover:text-white mx-3">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white mx-3">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white mx-3">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">&copy; 2024 Career-Canvas. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
