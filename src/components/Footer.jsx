import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { TbXboxXFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            {/* Main Footer Section */}
            <div
                className="w-full text-black bg-white/80"
                style={{
                    backgroundImage:
                        "url('https://png.pngtree.com/thumb_back/fh260/background/20220218/pngtree-light-bubble-minimalist-image_986487.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* About Us */}
                        <div className="flex-1 space-y-3">
                            <h2 className="text-lg font-semibold text-pink-500">About Us</h2>
                            <p className="text-sm leading-relaxed">
                                A pioneer in the field for more than 20 years,
                                <br />
                                Made4Ever is a leading matrimonial services provider
                                <br />
                                that connects and supports your matrimonial business
                                <br />
                                through our 2800+ pan-India network of Marriage Bureaus.
                            </p>
                            <button className="mt-2 bg-pink-500 px-4 py-1 rounded text-sm text-white hover:bg-pink-600 transition duration-200">
                                Read More
                            </button>
                        </div>

                        {/* Legal */}
                        <div className="flex-1 space-y-3">
                            <h2 className="text-lg font-semibold text-pink-500">Legal</h2>
                            <div className="text-sm space-y-1">
                                <div>Terms and Conditions</div>
                                <div>Privacy Policy</div>
                                <div>FAQs</div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex-1 space-y-3">
                            <h2 className="text-lg font-semibold text-pink-500">Social</h2>
                            <div className="flex space-x-4 text-xl text-gray-800">
                                <CiFacebook className="hover:text-pink-500 transition" />
                                <CiInstagram className="hover:text-pink-500 transition" />
                                <TbXboxXFilled className="hover:text-pink-500 transition" />
                            </div>
                            <div className="text-sm mt-2">Payment</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-700 py-3 text-center text-sm text-white w-full">
                © 2016-2025{" "}
                <span className="text-red-500">Made4Ever.in</span> — All Rights Reserved.
            </div>
        </>
    );
};

export default Footer;
