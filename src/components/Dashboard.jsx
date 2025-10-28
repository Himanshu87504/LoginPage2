import React, { useContext } from "react";
import profiles from "../components/Data.json";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
    // const { user } = useContext(UserContext);

    return (
        <div className="w-full min-h-screen relative px-5 md:px-20 py-8 space-y-8 bg-gray-50">
            {/* 🔍 Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">MSP All User</h1>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter profile ID"
                        className="border border-gray-300 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-52"
                    />
                    <button className="bg-pink-500 text-white px-5 py-1.5 rounded-lg hover:bg-pink-600 transition">
                        Search
                    </button>
                </div>
            </div>

            {/* 📊 Info Bar */}
            <div className="w-full h-10 bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center text-gray-800 font-medium rounded-lg shadow-sm">
                36,500+ Matches | 2,800+ Registered Marriage Bureaus
            </div>

            {/* 🎥 How to Use + News Section */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left - Videos */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        How to use Made4ever Software
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <video
                            src="https://www.w3schools.com/html/movie.mp4"
                            className="w-full md:w-60 h-60 rounded-lg shadow-md"
                            controls
                        ></video>
                        <video
                            src="https://www.w3schools.com/html/movie.mp4"
                            className="w-full md:w-60 h-60 rounded-lg shadow-md"
                            controls
                        ></video>
                    </div>
                </div>

                {/* Right - News/Seminar */}
                <div className="flex-1 border border-pink-100 rounded-2xl p-6 space-y-4 bg-white shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                        News / Seminar
                    </h2>
                    <div className="space-y-1 text-center">
                        <h3 className="text-lg font-semibold text-gray-700">
                            EXCITING PLANS
                        </h3>
                        <p>
                            For finding the best matches at{" "}
                            <span className="font-bold text-pink-500">Made4ever</span>
                        </p>
                    </div>

                    <div className="p-2 rounded flex flex-wrap gap-5 justify-center">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="border border-gray-200 rounded-tr-3xl rounded-bl-3xl w-32 p-3 bg-pink-50 shadow-sm hover:shadow-md transition"
                            >
                                <h4 className="text-blue-500 font-medium">Classic</h4>
                                <div className="bg-red-500 rounded-tr-xl rounded-bl-xl text-white text-center text-lg font-semibold my-1">
                                    Rs 300
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                    <div>hello1</div>
                                    <div>hello1</div>
                                    <div>hello1</div>
                                    <div>hello1</div>
                                </div>
                                <h4 className="text-blue-500 font-medium mt-2 text-center cursor-pointer hover:underline">
                                    Get Now
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[2px] bg-gray-200 rounded-full"></div>

            {/* 👤 Profiles Grid */}
            <div className="p-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col sm:flex-row items-center sm:items-start"
                        >
                            {/* 🖼️ Profile Image */}
                            <img
                                src={profile.profilePic}
                                alt={profile.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-2xl shadow"
                            />

                            {/* 🧩 Profile Info */}
                            <div className="sm:pl-5 mt-4 sm:mt-0 text-center sm:text-left space-y-3 w-full">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {profile.name}
                                </h3>

                                {/* Row 1 */}
                                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                    <button className="rounded-full bg-pink-500 text-white px-4 py-1.5 text-sm hover:bg-pink-600 transition">
                                        Add/Edit Profile Details
                                    </button>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                    <Link
                                        to={`/viewprofile/${profile.id}`}
                                        className="rounded-full bg-pink-500 text-white px-4 py-1.5 text-sm hover:bg-pink-600 transition"
                                    >
                                        Get Matches
                                    </Link>
                                    <button className="rounded-full bg-pink-500 text-white px-4 py-1.5 text-sm hover:bg-pink-600 transition">
                                        Perfect Matches
                                    </button>
                                </div>

                                {/* Row 3 */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mt-2">
                                    <div className="font-medium text-gray-700 text-sm">
                                        Get match:
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="rounded-full bg-gray-400 text-white px-4 py-1.5 text-sm hover:bg-gray-500 transition">
                                            Stop
                                        </button>
                                        <button className="rounded-full bg-amber-600 text-white px-4 py-1.5 text-sm hover:bg-amber-700 transition">
                                            Block
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
