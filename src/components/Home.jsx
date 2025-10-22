import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>

            <div
                className="relative w-full h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                }}
            >
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        India's #1st online earning and matchmaking <br /> web portal for marriage bureaus
                    </h1>
                    <h4 className="text-pink-500 text-xl sm:text-2xl font-semibold mt-4">
                        Made4Ever
                    </h4>
                    <button
                        className="px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-50">

                <div className="w-full md:w-96 bg-pink-500 text-white flex flex-col rounded-lg shadow-lg p-6 space-y-6">

                    <div className="text-center space-y-2 flex justify-evenly">
                        <h2 className="text-4xl font-bold">Made4Ever</h2>
                        <p className="text-xl">
                            LET'S CHANGE THE WAY <br /> OF MATCH MAKING
                        </p>
                    </div>


                    <div className="flex items-center space-y-2 text-center justify-evenly">
                        <div className='flex flex-col'>
                            <div className="font-bold text-lg">MATCH</div>
                            <div className="text-sm">मतलब</div>
                            <div className="font-semibold">Made4Ever</div>
                            <div className="text-xs">Match-Making is not difficult</div>
                            <button className="mt-2 px-4 py-2 bg-white text-pink-500 font-semibold rounded hover:bg-pink-100 transition">
                                REGISTER NOW
                            </button>
                        </div>

                        <div className="flex flex-col items-center space-y-2 text-center">
                            <img
                                src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
                                alt="Ashise Narang"
                                className="w-40 h-40 object-cover rounded-full"
                            />
                            <div className="font-semibold">Ashise Narang</div>
                            <div className="text-sm">MADE4EVER App</div>
                            <div className="text-sm">CALL US: 9310315686</div>
                        </div>
                    </div>
                </div>



                <div className="w-full md:w-2/3 text-gray-800 space-y-4">
                    <h1 className="text-2xl font-bold">
                        Running a marriage bureau business? Go <br /> for Made4Ever web portal.
                    </h1>
                    <p>
                        Made4Ever software has growth mantra: "Our commitment to this noble business will be
                        the biggest reason for our mutual success." We guide you to select the right
                        technology & features which will help you grow your marriage bureau business:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Engage and build strong bonds with professional marriage bureaus.</li>
                        <li>Stay informed to get non-stop matches for your clients.</li>
                        <li>Reach the right professional marriage bureaus the right way with Made4Ever matchmaking portal.</li>
                        <li>Opportunity to earn ₹10,000-₹50,000+ per month at zero investment as the software is free and easy to use from home or anywhere on mobile, laptop, or desktop.</li>
                    </ul>
                    <p>
                        With 08 years of trust and complete data security, WE ARE THE REASON. Made4Ever is one of the most trusted names in India for complete matrimonial solutions for Marriage Bureaus.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
