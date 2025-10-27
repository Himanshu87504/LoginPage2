import React, { useState } from "react";

const ProfileDetails = ({ id }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="p-6 bg-gray-50 ">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-2 mb-5">
                <button
                    className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition ${step === 1 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    onClick={() => setStep(1)}
                >
                    About Myself
                </button>
                <button
                    className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition ${step === 2 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    onClick={() => setStep(2)}
                >
                    Family Details
                </button>
                <button
                    className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition ${step === 3 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    onClick={() => setStep(3)}
                >
                    Partner Preference
                </button>
                <button
                    className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition ${step === 4 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    onClick={() => setStep(4)}
                >
                    Property Details
                </button>
                <button
                    className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition ${step === 5 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    onClick={() => setStep(5)}
                >
                    ID Details
                </button>
            </div>

            {/* Step Content */}
            <div className="bg-white p-6 rounded shadow-md">
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-3">About Myself</h2>
                        <p>personal details here...</p>
                        <h5>Name:  <span className="ml-8">{ }</span></h5>
                        <h5>Marital Status: <span className="ml-8">{ }</span></h5>
                        <h5>Height: <span className="ml-8">{ }</span></h5>
                        <h5>Profile Created By: <span className="ml-8">{ }</span></h5>
                        <h5>Marriage Bureau Contact No.:  <span className="ml-8">{ }</span></h5>
                        <h5>Drink: <span className="ml-8">{ }</span></h5>
                        <h5>Age: <span className="ml-8">{ }</span></h5>
                        <h5>Complexion: <span className="ml-8">{ }</span></h5>
                        <h5>Weight: <span className="ml-8">{ }</span></h5>
                        <h5>Diet: <span className="ml-8">{ }</span></h5>
                        <h5>Smoke: <span className="ml-8">{ }</span></h5>
                        <h5>NRI: <span className="ml-8">{ }</span></h5>
                        <h5>Anual-Incom: <span className="ml-8">{ }</span></h5>
                        <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded" onClick={nextStep}>
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Family Details</h2>
                        <div>
                            <h5>Fathers's Occupations: <span className="ml-8">{ }</span></h5>
                            <h5>Mother's Occupations: <span className="ml-8">{ }</span></h5>
                            <h5>Family Description: <span className="ml-8">{ }</span></h5>

                        </div>
                        <div className="mt-4 flex space-x-2.5">
                            <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-pink-500 text-white rounded" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Partner Preference</h2>
                        <h5>Age:  <span className="ml-8">{ }</span></h5>
                        <h5>Marital Status: <span className="ml-8">{ }</span></h5>
                        <h5>Complexion:  <span className="ml-8">{ }</span></h5>
                        <h5>Height:  <span className="ml-8">{ }</span></h5>
                        <h5>Diet:  <span className="ml-8">{ }</span></h5>
                        <h5>Kujadosham / Manglik:  <span className="ml-8">{ }</span></h5>
                        <h5>Religion:  <span className="ml-8">{ }</span></h5>
                        <h5>Caste: <span className="ml-8">{ }</span></h5>
                        <h5>Mother Tongue:  <span className="ml-8">{ }</span></h5>
                        <h5>Education:  <span className="ml-8">{ }</span></h5>
                        <h5>Occupation:  <span className="ml-8">{ }</span></h5>
                        <h5>Country of Residence:  <span className="ml-8">{ }</span></h5>
                        <h5>State:  <span className="ml-8">{ }</span></h5>
                        <h5>City:  <span className="ml-8">{ }</span></h5>
                        <h5>NRI:  <span className="ml-8">{ }</span></h5>
                        <div className="mt-4 flex justify-between">
                            <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-pink-500 text-white rounded" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Property Details</h2>
                        <h5>Property Type   <span className="ml-8">{ }</span></h5>
                        <h5>Residential Type  <span className="ml-8">{ }</span></h5>
                        <h5>Property Description  <span className="ml-8">{ }</span></h5>
                        <div className="mt-4 flex justify-between">
                            <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-pink-500 text-white rounded" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Identity Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p><strong>Id Type:</strong> Aadhaar</p>
                                <p><strong>Id No:</strong> 1234-5678-9012</p>
                                <p><strong>Id Photo:</strong></p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img
                                    src="https://cdn.zeebiz.com/sites/default/files/2023/12/15/272779-aadhar-card.jpg"
                                    alt="Id Proof"
                                    className="border rounded"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button className="px-4 py-2 bg-gray-300 rounded" onClick={prevStep}>
                                Previous
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileDetails;
