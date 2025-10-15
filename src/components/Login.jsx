import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import Header from "./Header";
import Footer from "./Footer";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div
                className="w-[600px] sm:w-[850px] md:w-full   min-h-screen flex flex-col bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                }}
            >
                <Header />

                <main className="flex flex-col justify-center px-4 sm:px-8 lg:px-16">
                    <div>
                        <div className="flex items-center ml-2 sm:ml-10">
                            <CiHome className="text-red-500" />
                            <span className="text-white text-sm sm:text-base ml-2">
                                MSP/Marriage Bureau Login
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="w-full max-w-md bg-white bg-opacity-80 p-6 rounded-lg shadow-md border border-pink-400"
                            style={{ backdropFilter: "blur(10px)" }}
                        >
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold mb-1"
                            >
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />

                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-semibold mb-1"
                            >
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

                            <div className="text-center text-gray-600 mb-4">or</div>

                            <button
                                type="button"
                                className="w-full py-2 bg-pink-500 text-white font-semibold rounded transition duration-200"
                            >
                                Login with mobile
                            </button>

                            <div className="flex flex-col items-end text-pink-500 space-y-1 mt-4 text-sm">
                                <a href="#">Not registered? Start Your Business</a>
                                <a href="#">Forgot Password</a>
                            </div>
                        </form>
                    </div>
                </main>


            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
