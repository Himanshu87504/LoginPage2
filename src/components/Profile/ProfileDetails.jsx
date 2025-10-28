import React, { useState } from "react";

const ProfileDetails = ({ profile }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    if (!profile) {
        return <div className="p-6 text-center text-gray-500">Profile not found.</div>;
    }

    return (
        <div className="p-6 bg-gradient-to-b from-pink-50 to-white min-h-screen">
            {/* Step Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6">
                {["About Myself", "Family Details", "Partner Preference", "Property Details", "ID Details"].map(
                    (label, index) => (
                        <button
                            key={index}
                            className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 shadow-sm ${step === index + 1
                                ? "bg-pink-500 text-white shadow-pink-200"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            onClick={() => setStep(index + 1)}
                        >
                            {label}
                        </button>
                    )
                )}
            </div>

            {/* Step Content */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto transition-all duration-300">
                {/* ------------------ STEP 1: About Myself ------------------ */}
                {step === 1 && (
                    <div>
                        <h2 className="text-3xl font-bold text-pink-600 mb-6 border-b-2 border-pink-100 pb-2">
                            About Myself
                        </h2>

                        <p className="text-gray-600 italic mb-5">
                            Get to know {profile.name} better — details about personal, educational, and social background.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-800">
                            <h5><strong>Name:</strong> {profile.name}</h5>
                            <h5><strong>Marital Status:</strong> {profile.maritalStatus}</h5>
                            <h5><strong>Height:</strong> {profile.height}</h5>
                            <h5><strong>Profile Created By:</strong> {profile.createdBy}</h5>
                            <h5><strong>Marriage Bureau Contact No.:</strong> +91-9876543210</h5>
                            <h5><strong>Drink:</strong> {profile.drink}</h5>
                            <h5><strong>Age:</strong> {profile.age}</h5>
                            <h5><strong>Complexion:</strong> {profile.complexion}</h5>
                            <h5><strong>Weight:</strong> {profile.weight}</h5>
                            <h5><strong>Diet:</strong> {profile.diet}</h5>
                            <h5><strong>Smoke:</strong> {profile.smoke}</h5>
                            <h5><strong>NRI:</strong> {profile.nri}</h5>
                            <h5><strong>Annual Income:</strong> {profile.income}</h5>
                        </div>

                        <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-3 border-b border-pink-100 pb-1">
                            Religious / Social & Astro Background
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-800">
                            <h5><strong>Date of Birth:</strong> {profile.dateOfBirth}</h5>
                            <h5><strong>Time of Birth:</strong> {profile.timeOfBirth}</h5>
                            <h5><strong>Place of Birth:</strong> {profile.placeOfBirth}</h5>
                            <h5><strong>Caste:</strong> {profile.caste}</h5>
                            <h5><strong>Religion:</strong> {profile.religion}</h5>
                            <h5><strong>Gothra:</strong> {profile.gothra}</h5>
                        </div>

                        <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-3 border-b border-pink-100 pb-1">
                            Education & Career
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-800">
                            <h5><strong>Education:</strong> {profile.education}</h5>
                            <h5><strong>Profession:</strong> {profile.profession}</h5>
                            <h5><strong>Income:</strong> {profile.income}</h5>
                            <h5><strong>Location:</strong> {profile.location}</h5>
                        </div>

                        <div className="text-center mt-8">
                            <button
                                className="px-8 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
                                onClick={nextStep}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* ------------------ STEP 2: Family Details ------------------ */}
                {step === 2 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-2 border-pink-100 pb-2">
                            Family Details
                        </h2>

                        <div className="space-y-4 text-gray-800 leading-relaxed">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Father's Occupation:</span>
                                <span className="text-gray-600">Businessman</span>
                            </div>

                            <div className="flex justify-between border-b pb-2">
                                <span className="font-medium">Mother's Occupation:</span>
                                <span className="text-gray-600">Homemaker</span>
                            </div>

                            <div className="pt-2">
                                <span className="font-medium block mb-1">Family Description:</span>
                                <p className="text-gray-600">
                                    We are a close-knit Brahmin family based in Mumbai. Our family values education,
                                    respect, and cultural traditions while embracing modern thinking.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end space-x-3">
                            <button
                                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-full transition"
                                onClick={prevStep}
                            >
                                Previous
                            </button>
                            <button
                                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow transition"
                                onClick={nextStep}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* ------------------ STEP 3: Partner Preference ------------------ */}
                {step === 3 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-2 border-pink-100 pb-2">
                            Partner Preference
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-800">
                            <h5><strong>Age:</strong> 24–29 years</h5>
                            <h5><strong>Marital Status:</strong> Never Married</h5>
                            <h5><strong>Complexion:</strong> Fair</h5>
                            <h5><strong>Height:</strong> 5'2" – 5'7"</h5>
                            <h5><strong>Diet:</strong> Vegetarian</h5>
                            <h5><strong>Kujadosham / Manglik:</strong> No</h5>
                            <h5><strong>Religion:</strong> Hindu</h5>
                            <h5><strong>Caste:</strong> Brahmin</h5>
                            <h5><strong>Mother Tongue:</strong> Hindi</h5>
                            <h5><strong>Education:</strong> Graduate or higher</h5>
                            <h5><strong>Occupation:</strong> Working professional</h5>
                            <h5><strong>Country of Residence:</strong> India</h5>
                            <h5><strong>State:</strong> Maharashtra</h5>
                            <h5><strong>City:</strong> Mumbai</h5>
                            <h5><strong>NRI:</strong> No</h5>
                        </div>

                        <div className="mt-8 flex justify-end space-x-3">
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* ------------------ STEP 4: Property Details ------------------ */}
                {step === 4 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-2 border-pink-100 pb-2">
                            Property Details
                        </h2>

                        <div className="space-y-3 text-gray-800">
                            <h5><strong>Property Type:</strong> Residential Apartment</h5>
                            <h5><strong>Residential Type:</strong> Owned</h5>
                            <h5><strong>Property Description:</strong> 3 BHK flat in Mumbai suburb.</h5>
                        </div>

                        <div className="mt-8 flex justify-end space-x-3">
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* ------------------ STEP 5: ID Details ------------------ */}
                {step === 5 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-pink-600 border-b-2 border-pink-100 pb-2">
                            Identity Details
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
                            <div className="space-y-2">
                                <p><strong>Id Type:</strong> Aadhaar</p>
                                <p><strong>Id No:</strong> 1234-5678-9012</p>
                                <p><strong>Id Photo:</strong></p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://cdn.zeebiz.com/sites/default/files/2023/12/15/272779-aadhar-card.jpg"
                                    alt="Id Proof"
                                    className="border rounded-lg w-64 h-auto shadow-md"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-800" onClick={prevStep}>
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
