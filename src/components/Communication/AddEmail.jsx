import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddEmail = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-4">

            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition"
                onClick={() => setShowForm(true)}
            >
                Add New Email
            </button>

            {/* Form Section */}
            {showForm && (
                <div className="absolute top-20 left-50 mt-6 max-w-2xl mx-auto   bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-5">
                    {/* Header */}
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">
                            Add your email address
                        </h1>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            Connecting your email to CRM helps you track and share conversations,
                            know when an email is viewed, <br /> and send personalized messages from
                            templates. Enter your email credentials below to get started.
                        </p>
                    </div>

                    {/* Sign-in Options */}
                    <div className="flex gap-3 ">
                        {[
                            { name: "Sign in Google", img: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" },
                            { name: "Sign in Microsoft", img: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
                            { name: "Sign in Yahoo", img: "https://cdn-icons-png.flaticon.com/512/732/732200.png" },
                            { name: "Sign in Other", img: "https://cdn-icons-png.flaticon.com/512/732/732223.png" },
                        ].map((item) => (
                            <Link key={item.name} className="flex items-center border border-blue-500 rounded-md overflow-hidden hover:bg-blue-50 transition">
                                <img src={item.img} alt={item.name} className="w-6 h-6 m-1" />
                                <div className="bg-blue-600 text-white text-sm px-2 py-1 font-medium">
                                    {item.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className=" text-gray-700 font-semibold">or</div>

                    {/* Form Fields */}
                    <form className="space-y-4 pl-6">
                        {/* Email */}
                        <div className="space-x-3">
                            <label htmlFor="email" className="text-gray-700 font-medium">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                className="w-96 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Custom Username */}
                        <div className="flex items-center gap-2 pl-5">
                            <input
                                type="checkbox"
                                id="customUsername"
                                className="w-5 h-5 border-2 border-gray-400 rounded-sm appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500 hover:border-blue-400 transition"
                            />
                            <label htmlFor="customUsername" className="text-gray-700 font-medium">
                                Custom Username
                            </label>
                        </div>

                        {/* Password */}
                        <div className="space-x-3">
                            <label htmlFor="password" className=" text-gray-700 font-medium">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-96 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                🔒 Your credentials are encrypted and never shared.
                            </p>
                        </div>

                        {/* Sync Options */}
                        <div>
                            <h3 className="text-gray-800 font-semibold mb-2 pr-17">Sync Options</h3>
                            <div className="flex gap-4">
                                {["Sign in Email", "Sign in Contact", " Sign in Calendar"].map((option) => (
                                    <label key={option} className="flex items-center gap-2 text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 border-2 border-gray-400 rounded-sm appearance-none cursor-pointer
                                 checked:bg-blue-500 checked:border-blue-500 hover:border-blue-400 transition"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="p-2 bg-blue-500 rounded-md text-white flex items-center">
                                Connect
                            </button>
                        </div>

                    </form>
                </div>
            )}
        </div>
    );
};

export default AddEmail;
