import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 bg-white/70 backdrop-blur-sm relative z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-pink-600">💍 Made4Ever</div>

            {/* Hamburger button (mobile only) */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 text-2xl focus:outline-none"
                >
                    {isOpen ? <HiX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-3 sm:space-x-4 text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                <a href="#">Home</a>
                <a href="#">Register</a>
                <a href="#">MSP/ Marriage Bureau Login</a>
                <a href="#">Plans</a>
                <a href="#">Gallery</a>
                <a href="#">Contact us</a>
            </nav>

            {/* Mobile sidebar menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                {/* Close button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700">
                        <HiX />
                    </button>
                </div>

                {/* Menu items */}
                <nav className="flex flex-col space-y-4 px-6 mt-4 text-black font-medium text-base bg-white rounded-md">
                    <a href="#" className="hover:text-pink-600">Home</a>
                    <a href="#" className="hover:text-pink-600">Register</a>
                    <a href="#" className="hover:text-pink-600">MSP/ Marriage Bureau Login</a>
                    <a href="#" className="hover:text-pink-600">Plans</a>
                    <a href="#" className="hover:text-pink-600">Gallery</a>
                    <a href="#" className="hover:text-pink-600">Contact us</a>
                </nav>
            </div>

            {/* Optional overlay */}
            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/30 z-40 md:hidden"
                ></div>
            )}
        </header>
    );
};

export default Header;
