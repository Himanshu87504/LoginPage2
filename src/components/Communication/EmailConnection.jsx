import React, { useState } from "react";
import AddEmail from "./AddEmail";

const EmailConnection = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);

    const tabs = [
        "Connection",
        "Signature",
        "Visibility",
        "Block list",
        "Email templates",
    ];

    const services = [
        {
            name: "Google",
            img: "https://i.pinimg.com/564x/8b/54/2b/8b542b086433032d82e8bc082dab4e25.jpg",
        },
        {
            name: "Outlook",
            img: "https://i.pinimg.com/564x/8b/54/2b/8b542b086433032d82e8bc082dab4e25.jpg",
        },
        {
            name: "Yahoo",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiPp--3660MAcwCVvutXanYaGRpnxsJDAww&s",
        },
        {
            name: "Other",
            img: "https://i.pinimg.com/564x/8b/54/2b/8b542b086433032d82e8bc082dab4e25.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-white py-10 p-5">
            <div className="w-full border border-gray-300 rounded-lg shadow-sm p-1">

                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    EMAIL ACCOUNT
                </h1>
                <p className="text-sm text-gray-600 mb-2">
                    Connect your email to CRM and enable powerful features to elevate your sales.
                </p>

                {/* Tabs */}
                <div className="flex items-center gap-4 border-b mb-2 text-sm">
                    {tabs.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setStep(index + 1);
                                setSelectedService(null); // reset when tab changes
                            }}
                            className={`px-3 py-2 transition ${step === index + 1
                                ? "text-blue-500 border-b-2 border-blue-500"
                                : "text-gray-700 hover:text-blue-500"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Step 1 - Connection */}
                {step === 1 && (
                    <div>
                        <h2 className="text-base font-semibold mb-2">Choose your email service:</h2>
                        <div className="flex flex-wrap gap-3 items-center ">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedService(service.name)}
                                    className={`p-1 text-center cursor-pointer w-22
                                    ${selectedService === service.name
                                            ? "border-t-2 border-t-black border-l-2 border-l-black border-r-2 border-r-black border-b-2 border-b-white"
                                            : ""
                                        }`}
                                >
                                    <img
                                        src={service.img}
                                        alt={service.name}
                                        className="w-14 h-16 mx-auto mb-2"
                                    />
                                    <div className="text-[13px] font-medium pb-4">{service.name}</div>
                                </div>
                            ))}
                        </div>

                        {/* DIFFERENT BOX FOR EACH SERVICE */}
                        {selectedService === "Google" && (
                            <div>
                                <div className=" border-2 border-black p-2 text-sm text-gray-700 relative -top-1 z-1 w-full">
                                    <div className="absolute -top-[2px] left-0 w-21 h-[2px] bg-white z-20"></div>
                                    <div className="flex flex-col md:flex-row  items-start md:items-center gap-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">


                                        <div className="flex gap-7">
                                            <div className="font-bold text-gray-800">Email Address</div>
                                            <div>
                                                <div className="font-semibold text-gray-700">readeal@prperties.in@gmail.com</div>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    You can now email your contacts directly from CRM using this account.
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">

                                            <div className="flex gap-5 pl-30">
                                                <div className="flex  pt-1">
                                                    <div className="text-pink-500">Sync</div>
                                                </div>
                                                <button className=" py-1  font-semibold  text-green-400 rounded">
                                                    Connected
                                                </button>
                                                <button className="px-3 py-1 font-semibold">
                                                    Update Your Password
                                                </button>
                                                <button className="px-3 py-1  font-semibold text-red-600">
                                                    Disconnect Email Account
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <AddEmail />
                                </div>

                            </div>
                        )}

                        {selectedService === "Outlook" && (
                            <div className=" border-2 border-black p-4 text-sm text-gray-700 relative -top-1 z-1">
                                <div className="absolute -top-[2px] left-25 w-21 h-[2px] bg-white z-20"></div>

                            </div>
                        )}

                        {selectedService === "Yahoo" && (
                            <div className=" border-2 border-black p-4 text-sm text-gray-700 relative -top-1 z-1">
                                <div className="absolute -top-[2px] left-50 w-21 h-[2px] bg-white z-20"></div>

                            </div>
                        )}

                        {selectedService === "Other" && (
                            <div className=" border-2 border-black p-4 text-sm text-gray-700 relative -top-1 z-1">
                                <div className="absolute -top-[2px] left-75 w-21 h-[2px] bg-white z-20"></div>

                            </div>
                        )}
                    </div>
                )}

                {/* Other Steps */}
                {step === 2 && (
                    <div>
                        <h2 className="text-base font-semibold mb-4">Signature Settings</h2>
                        <p className="text-sm text-gray-600">Configure your email signature here.</p>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-base font-semibold mb-4">Visibility Options</h2>
                        <p className="text-sm text-gray-600">Set who can see your connected emails.</p>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-base font-semibold mb-4">Block List</h2>
                        <p className="text-sm text-gray-600">Manage blocked email addresses.</p>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <h2 className="text-base font-semibold mb-4">Email Templates</h2>
                        <p className="text-sm text-gray-600">Create and manage your email templates.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailConnection;
