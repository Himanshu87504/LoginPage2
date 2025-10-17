import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const OtpLogin = () => {
    const { loginTokenotp, requestOtpLogin, verifyOtpLogin } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!loginTokenotp) {
                const res = await requestOtpLogin(email);
                alert(res.message); // OTP sent
            } else {
                const res = await verifyOtpLogin(otp);
                alert(res.message || "✅ Login successful!");
                navigate("/");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-pink-100 to-white">
            <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6 border border-pink-300">
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">OTP Login</h2>

                <form onSubmit={handleSubmit}>
                    {!loginTokenotp ? (
                        <>
                            <label className="block text-gray-700 font-semibold mb-1">Email or Username</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </>
                    ) : (
                        <>
                            <label className="block text-gray-700 font-semibold mb-1">Enter OTP</label>
                            <input
                                type="number"
                                placeholder="Enter 6-digit OTP"
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className={`w-full ${loginTokenotp ? "bg-green-500 hover:bg-green-600" : "bg-pink-500 hover:bg-pink-600"
                            } text-white font-semibold py-2 rounded`}
                    >
                        {loginTokenotp ? "Verify OTP" : "Request OTP"}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link to="/login" className="text-sm text-blue-600 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OtpLogin;
