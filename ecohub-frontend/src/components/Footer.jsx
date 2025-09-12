import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-secondary py-12 px-4 sm:px-6 lg:px-8 mt-10 rounded-t-2xl shadow-inner font-sans border-t border-accent z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-darkAccent tracking-wide">EcoHub</h3>
          <p className="mt-4 text-sm text-secondary max-w-sm">
            Sustainable Products for all. Shop from us for a better, eco-friendly lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-xl font-semibold text-darkAccent">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary">
            <li><Link to="/" className="hover:text-accent transition-all">Home</Link></li>
            <li><Link to="/" className="hover:text-accent transition-all">Shop</Link></li>
            <li><Link to="/AboutPage" className="hover:text-accent transition-all">About</Link></li>
          </ul>
        </div>

        {/* Social Media + Newsletter */}
        <div>
          <h4 className="text-xl font-semibold text-darkAccent">Stay Connected</h4>
          <div className="flex space-x-4 mt-4 text-secondary text-lg">
            <a href="#" className="hover:text-accent transition-transform hover:scale-110"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-transform hover:scale-110"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-transform hover:scale-110"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-transform hover:scale-110"><Linkedin size={20} /></a>
          </div>

          <form className="flex items-center mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-full bg-white text-secondary placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-white px-4 py-2 rounded-r-full hover:bg-darkAccent transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>&copy; 2025 EcoHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
