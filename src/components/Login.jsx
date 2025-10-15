import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import Footer from "./Footer";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Page background with blur when menu is open */}
            <div
                className={`relative w-[700px] sm:w-[850px] md:w-full min-h-screen flex flex-col bg-cover bg-center transition-all duration-300 ${menuOpen ? "blur-sm brightness-90" : ""
                    }`}
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                }}
            >
                {/* Header */}
                <header className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white/70 backdrop-blur-sm relative z-50 w-full ">
                    <div className="text-2xl font-bold text-pink-600">💍 Made4Ever</div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-4 text-gray-700 font-medium text-sm md:text-base">
                        <a href="#" className="hover:text-pink-600 transition">Home</a>
                        <a href="#" className="hover:text-pink-600 transition">Register</a>
                        <a href="#" className="hover:text-pink-600 transition">MSP/ Marriage Bureau Login</a>
                        <a href="#" className="hover:text-pink-600 transition">Plans</a>
                        <a href="#" className="hover:text-pink-600 transition">Gallery</a>
                        <a href="#" className="hover:text-pink-600 transition">Contact us</a>
                    </nav>

                    {/* Hamburger button (mobile only) */}
                    <button
                        className="md:hidden text-2xl text-pink-600 z-50"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FiMenu />
                    </button>
                </header>

                {/* Main content */}
                <main className="flex flex-col justify-center px-4 sm:px-8 lg:px-16 mt-10">
                    <div className="flex items-center ml-2 sm:ml-10 text-white">
                        <CiHome className="text-red-500" />
                        <span className="ml-2 text-sm sm:text-base">
                            MSP/Marriage Bureau Login
                        </span>
                    </div>
                    {/* Login form */}
                    <div className="flex justify-center mt-8">
                        <form
                            className="w-full max-w-md bg-white bg-opacity-80 p-6 rounded-lg shadow-md border border-pink-400"
                            style={{ backdropFilter: "blur(10px)" }}
                        >
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative mb-4">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-2 right-3 text-pink-500 font-medium"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded transition duration-200 mb-4"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </main>
            </div>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-md">
                    <div className="w-64 sm:w-72 bg-white p-6 flex flex-col space-y-4 rounded-l-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-bold text-pink-600">💍 Made4Ever</div>
                            <button
                                className="text-2xl text-pink-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FiX />
                            </button>
                        </div>
                        <a href="#" className="hover:text-pink-600 transition">Home</a>
                        <a href="#" className="hover:text-pink-600 transition">Register</a>
                        <a href="#" className="hover:text-pink-600 transition">MSP/ Marriage Bureau Login</a>
                        <a href="#" className="hover:text-pink-600 transition">Plans</a>
                        <a href="#" className="hover:text-pink-600 transition">Gallery</a>
                        <a href="#" className="hover:text-pink-600 transition">Contact us</a>
                    </div>
                </div>
            )}


            <Footer />
        </>
    );
};

export default LoginPage;
