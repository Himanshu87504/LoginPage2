import React, { useState } from "react";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        "Home",
        "Register",
        "MSP/ Marriage Bureau Login",
        "Plans",
        "Gallery",
        "Contact us",
    ];

    return (
        <header className="w-full bg-white/50 backdrop-blur-sm shadow-sm fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-pink-600">💍 Made4Ever</div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-sm md:text-base">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:text-pink-600 transition duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Hamburger for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none text-gray-700 hover:text-pink-600 transition"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col px-6 pb-4 space-y-2 text-gray-700 font-medium bg-white/50 backdrop-blur-sm">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded hover:bg-pink-50 hover:text-pink-600 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}

                    <div className="flex items-center gap-2 ml-4">
                        <button className="px-4 py-1 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition">
                            Login
                        </button>
                        <button className="px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                            Signup
                        </button>
                    </div>

                </ul>
            </div>
        </header>
    );
};

export default Menu;
