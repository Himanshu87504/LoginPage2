import React from 'react'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { TbXboxXFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <div
                className="text-black px-4 sm:px-6 md:px-8 lg:px-16 bg-white/80  w-[700px] sm:w-[850px] md:w-full"
                style={{
                    backgroundImage:
                        "url('https://png.pngtree.com/thumb_back/fh260/background/20220218/pngtree-light-bubble-minimalist-image_986487.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 py-8">
                    <div className="md:w-1/3 space-y-2">
                        <h2 className="text-lg font-semibold text-pink-400">About Us</h2>
                        <p className="text-black text-sm leading-relaxed">
                            A pioneer in the field for more than 20 years,<br />
                            Made4Ever is a leading matrimonial services provider<br />
                            that connects and supports your matrimonial business<br />
                            through our 2800+ pan-India network of Marriage Bureaus.
                        </p>
                        <button className="mt-2 bg-pink-500 px-4 py-1 rounded text-sm hover:bg-pink-600 transition duration-200">
                            Read More
                        </button>
                    </div>

                    <div className=" md:w-1/4 space-y-2">
                        <h2 className="text-lg font-semibold text-pink-400">Legal</h2>
                        <div className="text-sm text-black space-y-1">
                            <div>Terms and Conditions</div>
                            <div>Privacy Policy</div>
                            <div>FAQs</div>
                        </div>
                    </div>

                    <div className=" md:w-1/4 space-y-2 pl-2">
                        <h2 className="text-lg font-semibold text-pink-400">Social</h2>
                        <div className="flex space-x-4 text-xl cursor-pointer">
                            <CiFacebook />
                            <CiInstagram />
                            <TbXboxXFilled />
                        </div>
                        <div className="text-black text-sm mt-2">Payment</div>
                    </div>
                </div>
            </div>

            <div className=" px-4  bg-gray-600 py-3 text-center text-sm text-white  w-[700px] sm:w-[850px] md:w-full">
                copyright © 2016-2025{" "}
                <span className="text-red-600">Made4Ever.in</span> © All Rights Reserved.
            </div>

        </>
    )
}

export default Footer;
