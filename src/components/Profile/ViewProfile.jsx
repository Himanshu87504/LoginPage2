import React from "react";
import { useParams } from "react-router-dom";
import profiles from "../Data.json";
import ProfileDetails from "./ProfileDetails";
import { Link, useNavigate } from "react-router-dom";

const ViewProfile = () => {
    const { id } = useParams();
    const data = profiles.find((p) => p.id === Number(id));
    const match = profiles.filter((p) => p.gender !== data.gender);


    return (
        <div
            className="pt-20 pl-5 pr-5">

            <div className="md:flex w-full space-x-2">
                <div className="w-full space-x-5">
                    <div>
                        <div className="font-serif text-3xl">ProfileId:{id}</div>
                        <div className="text-xl">Name: {data.name}</div>
                    </div>
                    <div className=" border border-gray-200 border-t-4 border-t-red-600 p-4 w-full sm:flex space-x-7">
                        <div className=" p-6 pt-4">
                            <img src={data.profilePic} className="h-64 w-64 border-3 border-gray-200" alt="" />
                        </div>
                        <div className="flex flex-col justify-center space-y-3 pl-4 sm:pl-7 text-sm sm:text-base">
                            <div>
                                Age / Height:
                                <span className="ml-4 text-gray-700">
                                    {data.age} yrs / {data.height}
                                </span>
                            </div>
                            <div>
                                Religion:
                                <span className="ml-4 text-gray-700">{data.religion}</span>
                            </div>
                            <div>
                                Marital Status:
                                <span className="ml-4 text-gray-700">{data.maritalStatus}</span>
                            </div>
                            <div>
                                Location:
                                <span className="ml-4 text-gray-700">{data.location}</span>
                            </div>
                            <div>
                                Profile Created by:
                                <span className="ml-4 text-gray-700">{data.createdBy}</span>
                            </div>
                            <div>
                                Education:
                                <span className="ml-4 text-gray-700">{data.education}</span>
                            </div>
                            <div>
                                Profession:
                                <span className="ml-4 text-gray-700">{data.profession}</span>
                            </div>
                            <div>
                                Income:
                                <span className="ml-4 text-gray-700">{data.income}</span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <ProfileDetails id={data} />
                    </div>
                </div>

                <div className="border-4 border-gray-300 w-full md:w-1/3 p-3 rounded-lg">
                    <h1 className="font-serif text-2xl text-center mb-4">Get Match</h1>

                    {/* Scrollable list */}
                    <div className="flex flex-col gap-4 max-h-[500px] md:max-h-[900px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
                        {match.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-2 shadow-sm hover:shadow-md transition bg-white"
                            >
                                <p className="text-red-400 font-semibold mb-1">Profile ID: {item.id}</p>

                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">

                                    <div className="border-2 border-gray-200 rounded-lg overflow-hidden w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white">
                                        <img
                                            src={item.profilePic}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                    <div className="text-center sm:text-left">
                                        <h2 className="font-medium text-base  md:text-base mb-1">{item.name}</h2>

                                        <Link
                                            to={`/viewprofile/${item.id}`}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="inline-block mt-2 px-2 w-22  text-base sm:text-[10px] py-1 bg-pink-500 hover:bg-pink-600 text-white rounded text-[8px] sm:text-sm whitespace-nowrap"
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
    );
};

export default ViewProfile;
