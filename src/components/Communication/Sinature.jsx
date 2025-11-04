import React, { useState } from "react";

const Signature = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [tempSelection, setTempSelection] = useState(null);
    const [showBox, setShowBox] = useState(false);

    const options = ["Simple Signature", "HTML"];

    const handleSelect = (label) => {
        setTempSelection(label);
        setShowBox(true);
    };

    const handleContinue = () => {
        setSelectedService(tempSelection);
        setShowBox(false);
    };

    const handleCancel = () => {
        setTempSelection(null);
        setShowBox(false);
    };

    return (
        <div className="p-5 relative">
            <h1 className="text-xl font-semibold mb-4">Email Signature</h1>

            {/* Radio Options */}
            {options.map((label) => (
                <div key={label} className="flex items-center gap-2 mb-2">
                    <input
                        type="radio"
                        id={label}
                        name="signatureType"
                        value={label}
                        checked={selectedService === label}
                        onChange={() => handleSelect(label)}
                        className="w-4 h-4 text-blue-500 border-gray-400 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor={label} className="cursor-pointer text-gray-700">
                        {label}
                    </label>
                </div>
            ))}


            {showBox && (
                <div className="absolute top-24 left-5 bg-white shadow-lg border border-gray-300 rounded-lg p-1 w-96 z-50">
                    <div className="flex justify-between items-center mb-2 border-b-1 border-gray-300 p-3">
                        <h2 className="font-medium text-gray-800">Switch to {tempSelection}</h2>
                        <button
                            onClick={handleCancel}
                            className="text-gray-500 hover:text-gray-800 text-sm"
                        >
                            ✕
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 p-2">
                        Your HTML signature will be deleted .you'll be able to create a simple signature using only basic text Formatting.
                    </p>

                    <div className="flex justify-between gap-2 border-t-2 border-gray-200 pt-3 pd-2 p-1  bg-gray-100">
                        <button
                            onClick={handleCancel}
                            className="px-3 py-1 border border-gray-400 rounded-md text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleContinue}
                            className="px-3 py-1 bg-blue-700 text-white rounded-md text-sm"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}


            <div className="mt-6">
                {selectedService === "Simple Signature" && (
                    <div className="p-2 flex gap-3 h-96 w-full">
                        <textarea
                            className="w-full h-20 p-2 outline-none resize-none border border-black flex-1"
                            placeholder="Enter text..."
                        ></textarea>
                    </div>
                )}

                {selectedService === "HTML" && (
                    <div>
                        <div className="p-2 flex gap-3 h-96 w-full">
                            <div className="border border-black flex-1">
                                <textarea
                                    className="w-full h-full p-2 outline-none resize-none"
                                    placeholder="Enter text..."
                                ></textarea>
                            </div>

                            <div className="border border-black flex-1">
                                <textarea
                                    className="w-full h-full p-2 outline-none resize-none"
                                    placeholder="Enter text..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end p-2">
                            <button className="bg-blue-700 px-4 py-2 text-white rounded-md">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signature;
