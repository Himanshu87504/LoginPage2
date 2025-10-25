import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const ForgetPassword = () => {
    const { forgetPassword, verifyPasswordOtp, forgetTokenOtp } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload
        try {
            if (!forgetTokenOtp) {
                const res = await forgetPassword(email);
                alert(res?.message || "OTP sent successfully to your email!");
            } else if (forgetTokenOtp && !newPassword) {
                alert("Please enter a new password to reset your account.");
            } else {
                const res = await verifyPasswordOtp(otp, newPassword);
                // alert(res?.message || "Password changed successfully!");
                navigate("/login");
            }
        } catch (err) {
            alert(err?.message || "Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-pink-100 to-white px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-pink-300">
                <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
                    Forgot Password
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!forgetTokenOtp ? (
                        <>
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </>
                    ) : (
                        <>
                            <label className="block text-gray-700 font-semibold">
                                Enter OTP
                            </label>
                            <input
                                type="number"
                                placeholder="Enter 6-digit OTP"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />

                            <label className="block text-gray-700 font-semibold">
                                New Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className={`w-full ${forgetTokenOtp
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-pink-500 hover:bg-pink-600"
                            } text-white font-semibold py-2 rounded-lg transition-all`}
                    >
                        {forgetTokenOtp ? "Change Password" : "Request OTP"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/"
                        className="text-sm text-blue-600 hover:underline font-medium"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
