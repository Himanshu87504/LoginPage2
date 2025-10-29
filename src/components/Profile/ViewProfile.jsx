import React from "react";
import { useParams, Link } from "react-router-dom";
import profiles from "../Data.json";
import ProfileDetails from "./ProfileDetails";

const ViewProfile = () => {
    const { id } = useParams();
    const data = profiles.find((p) => p.id === Number(id));
    const match = profiles.filter((p) => p.gender !== data.gender);

    return (
        <div className="pt-24 px-5 md:px-10 bg-gray-50 min-h-screen">
            {/* Main Container */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Profile Info */}
                <div className="w-full md:w-2/3 space-y-6">
                    {/* Profile Header */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-100">
                        <h1 className="font-serif text-3xl text-pink-600 mb-2">
                            Profile ID: {id}
                        </h1>
                        <p className="text-xl text-gray-800 font-medium">{data.name}</p>
                    </div>

                    {/* Basic Info Card */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col sm:flex-row gap-6">
                        {/* Profile Image */}
                        <div className="flex justify-center sm:justify-start">
                            <img
                                src={data.profilePic}
                                alt={data.name}
                                className="h-64 w-64 object-cover rounded-xl border-4 border-pink-200 shadow"
                            />
                        </div>

                        {/* Profile Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-sm sm:text-base font-[500] flex-1">
                            <div>
                                <span className="font-semibold text-gray-700">Age / Height:</span>{" "}
                                {data.age} yrs / {data.height}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Religion:</span>{" "}
                                {data.religion}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Marital Status:</span>{" "}
                                {data.maritalStatus}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Location:</span>{" "}
                                {data.location}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Created By:</span>{" "}
                                {data.createdBy}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Education:</span>{" "}
                                {data.education}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Profession:</span>{" "}
                                {data.profession}
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Income:</span>{" "}
                                {data.income}
                            </div>
                        </div>
                    </div>

                    {/* Additional Profile Details */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-1 sm:p-6">
                        <ProfileDetails profile={data} />
                    </div>
                </div>

                {/* Right: Match Suggestions */}
                <div className="w-full md:w-1/3 h-screen sticky top-20">
                    <div className="bg-white border border-pink-100 rounded-2xl shadow-md p-5 h-full flex flex-col">
                        <h2 className="font-serif text-2xl text-center text-pink-600 mb-4 border-b border-gray-200 pb-2">
                            Potential Matches 💕
                        </h2>

                        <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-pink-50 pr-2">
                            {match.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-3 bg-gray-50 hover:bg-pink-50 hover:shadow transition duration-200"
                                >
                                    <p className="text-pink-600 font-semibold text-sm mb-1">
                                        Profile ID: {item.id}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.profilePic}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg border-2 border-pink-100"
                                        />

                                        <div>
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            <Link
                                                to={`/viewprofile/${item.id}`}
                                                onClick={() => window.scrollTo(0, 0)}
                                                className="inline-block mt-2 px-3 py-1 bg-pink-500 hover:bg-pink-600 text-white text-xs font-medium rounded-lg transition duration-200"
                                            >
                                                View Full Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ViewProfile;
