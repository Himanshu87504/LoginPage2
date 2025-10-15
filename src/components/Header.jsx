import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 bg-white/70 backdrop-blur-sm relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-pink-600">💍 Made4Ever</div>

            {/* Navigation – always visible */}
            <nav className="flex flex-wrap justify-end gap-4 text-gray-700 font-medium text-sm md:text-base">
                <a href="#" className="hover:text-pink-600 transition">Home</a>
                <a href="#" className="hover:text-pink-600 transition">Register</a>
                <a href="#" className="hover:text-pink-600 transition">MSP/ Marriage Bureau Login</a>
                <a href="#" className="hover:text-pink-600 transition">Plans</a>
                <a href="#" className="hover:text-pink-600 transition">Gallery</a>
                <a href="#" className="hover:text-pink-600 transition">Contact us</a>
            </nav>
        </header>
    );
};

export default Header;
