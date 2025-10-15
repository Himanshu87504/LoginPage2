import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import Header from "./Header";
import Footer from "./Footer";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="w-screen h-screen flex flex-col bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
            }}
        >

            <Header />

            <div className="space-y-8 pt-3 px-4 sm:px-8 lg:px-16">
                <div>
                    <div className="flex items-center ml-2 sm:ml-10">
                        <div>
                            <CiHome className="text-red-500" />
                        </div>
                        <div className="text-white text-sm sm:text-base">
                            Msp/Marriage Bureau Login
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto min-h-[600px] flex justify-center px-2 sm:px-0">
                    <div className="flex flex-1 justify-center w-full max-w-[600px] h-auto max-h-[400px] z-1 rounded-md">
                        <form
                            action=""
                            className="flex flex-col space-y-4 w-full bg-white/80 p-4 sm:p-6 rounded-lg shadow-md border border-l-4 border-r-4 border-pink-400"
                        >
                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div className="flex flex-col relative">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-semibold text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-[35px] text-sm text-pink-500 font-medium"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <button
                                className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded transition duration-200"
                            >
                                Login
                            </button>

                            <div className="text-center text-gray-500 text-sm">or</div>

                            <button
                                className="w-full py-2 bg-pink-500 text-white font-semibold rounded transition duration-200"
                            >
                                Login with mobile
                            </button>

                            <div className="flex flex-col items-end text-pink-500 space-y-1">
                                <a href="#">Not registered? Start Your Business</a>
                                <a href="#">Forgot Password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default LoginPage;


