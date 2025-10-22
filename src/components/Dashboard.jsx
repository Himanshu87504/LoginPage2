import React from 'react';
import profiles from "../components/Data.json";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen relative px-5 md:px-20 py-5 space-y-6">

            {/* Top Section: Header + Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-15">
                <div className="text-xl semi-bold">MSP -- All User</div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter profile ID"
                        className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 transition">
                        Search
                    </button>
                </div>
            </div>


            <div className="w-full h-10 bg-red-200 flex items-center justify-center rounded">
                36,500+ Matches | 2,800+ Registered Marriage Bureaus
            </div>


            <div className="flex flex-col lg:flex-row gap-6">


                <div className="flex-1 space-y-4">
                    <h1 className="text-2xl font-bold">How to use Made4ever Software</h1>
                    <div className="flex flex-wrap gap-4">
                        <video
                            src="https://www.w3schools.com/html/movie.mp4"
                            className="w-full md:w-60 h-60"
                            controls
                        ></video>
                        <video
                            src="https://www.w3schools.com/html/movie.mp4"
                            className="w-full md:w-60 h-60"
                            controls
                        ></video>
                    </div>
                </div>


                <div className="flex-1 border rounded p-4 space-y-4 items-center justify-center">
                    <h1 className="text-2xl font-bold">News / Seminar</h1>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold flex justify-center">EXCITING PLANS</h2>
                        <p className='flex justify-center'>For finding the best matches at <span className="font-bold text-pink-500">Made4ever</span></p>
                    </div>
                    <div className=" p-2 rounded flex space-x-5 justify-center">
                        <div className='border rounded-tr-4xl rounded-bl-4xl w-30 p-3'>
                            <h4 className='text-blue-500'>Classic</h4>
                            <div className='bg-red-500 rounded-tr-xl rounded-bl-xl relative right-8 text-xl pl-2 text-white '>Rs 300</div>
                            <div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                            </div>
                            <h4 className='text-blue-500'>Get Now</h4>
                        </div>
                        <div className='border rounded-tr-4xl rounded-bl-4xl w-30 p-3 '>
                            <h4 className='text-blue-500'>Classic</h4>
                            <div className='bg-red-500 rounded-tr-xl rounded-bl-xl relative right-8 text-xl pl-2 text-white '>Rs 300</div>
                            <div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                            </div>
                            <h4 className='text-blue-500'>Get Now</h4>
                        </div>
                        <div className='border rounded-tr-4xl rounded-bl-4xl w-30 p-3'>
                            <h4 className='text-blue-500'>Classic</h4>
                            <div className='bg-red-500 rounded-tr-xl rounded-bl-xl relative right-8 text-xl pl-2 text-white '>Rs 300</div>
                            <div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                                <div>hello1</div>
                            </div>
                            <h4 className='text-blue-500'>Get Now</h4>
                        </div>

                    </div>
                </div>

            </div>

            <div className='w-full h-10 bg-gray-300'></div>

            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {profiles.map((profile) => (
                        <div key={profile.id} className="bg-white rounded shadow p-1 text-center flex">
                            <img
                                src={profile.profilePic}
                                alt={profile.name}
                                className="w-35 h-50 rounded-2xl"
                            />
                            <div className="pl-3 space-y-2">


                                <div className="pl-3 space-y-2">
                                    <h2 className="mt-2 font-semibold">{profile.name}</h2>

                                    <div className="flex flex-wrap gap-2">
                                        <button className="rounded-full bg-red-400 text-white px-3 py-1 hover:bg-red-500 transition">
                                            Add/Edit Profile Details
                                        </button>
                                        <div className='flex flex-col gap-2'>
                                            <button className="rounded-full bg-red-400 text-white px-3 py-1 hover:bg-red-500 transition">
                                                Get Matches
                                            </button>
                                            <button className="rounded-full bg-red-400 text-white px-3 py-1 hover:bg-red-500 transition">
                                                Perfect Matches
                                            </button>
                                        </div>
                                    </div>


                                    <div className=" flex space-y-2">
                                        <div>Get match:</div>
                                        <div className="flex gap-2 pl-2">
                                            <button className="rounded-full bg-red-400 text-white px-3 py-1 hover:bg-red-500 transition">
                                                Stop
                                            </button>
                                            <button className="rounded-full bg-amber-600 text-white px-3 py-1 hover:bg-amber-700 transition">
                                                Block
                                            </button>
                                        </div>
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
