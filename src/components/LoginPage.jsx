import React, { useContext, useState } from "react";
import { CiHome } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import { UserContext } from "../Context/UserContext";

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const { loginUser } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handelonchange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitbutton = (e) => {
        e.preventDefault();
        loginUser(form);
        navigate("/dashboard")
        setForm({ email: "", password: "" });
    };

    return (
        <>
            <div
                className="relative w-full min-h-[70vh] sm:h-[80vh] md:h-screen flex flex-col bg-cover bg-center transition-all duration-300"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                }}
            >
                <Menu />

                <main className="flex flex-col justify-center px-4 sm:px-8 lg:px-16 mt-10">
                    <div className="flex items-center ml-2 sm:ml-10 text-white">
                        <CiHome className="text-red-500" />
                        <span className="ml-2 text-sm sm:text-base ">
                            MSP/Marriage Bureau Login
                        </span>
                    </div>

                    <div className="flex justify-center mt-8">
                        <form
                            onSubmit={submitbutton}
                            className="w-full max-w-md md:mt-[50px] bg-white bg-opacity-80 p-6 rounded-lg shadow-md border border-pink-400"
                            style={{ backdropFilter: "blur(10px)" }}
                        >
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                                Email *
                            </label>
                            <input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handelonchange}
                                required
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
                                    name="password"
                                    value={form.password}
                                    onChange={handelonchange}
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
                            <div className="space-x-4 flex flex-col items-end">
                                <Link to="/otpLogin" className="text-red-500">Otp Trough Login</Link>
                                <Link to="/forgetPassword " className="text-red-500"> ForgotePassword</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default LoginPage;


