import React, { useState, useContext } from "react";
import { CiHome } from "react-icons/ci";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
    const { signup, verifySignupOtp } = useContext(UserContext);

    // Step 1 form data
    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    
    const [otp, setOtp] = useState("");

    const [step, setStep] = useState(1); // 1 = Signup form, 2 = OTP verification
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (step === 1) {
               
                const res = await signup(form);
                alert(res.message || "OTP sent successfully! Check your email/console.");

              
                localStorage.setItem("activationToken", res.activationToken);
                setStep(2);
            } else {
               
                const token = localStorage.getItem("activationToken");
                if (!token) throw new Error("Activation token not found. Please signup again.");

                const res = await verifySignupOtp(otp, token);
                alert(res.message || "Signup successful!");

    
                localStorage.removeItem("activationToken");

                navigate("/login");
            }
        } catch (err) {
            setError(err.message || "Something went wrong");
        }

        setLoading(false);
    };

    return (
        <>
            <div
                className="relative w-full min-h-screen flex flex-col bg-cover bg-center transition-all duration-300"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7')",
                }}
            >
                <main className="flex flex-col justify-center px-4 sm:px-8 lg:px-16 mt-10 pt-13">
                    <div className="flex items-center ml-2 sm:ml-10 text-white">
                        <CiHome className="text-red-500" />
                        <span className="ml-2 text-sm sm:text-base">Signup Page</span>
                    </div>

                    <div className="flex justify-center mt-8">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-md bg-white bg-opacity-80 p-6 rounded-2xl shadow-md border border-pink-400"
                            style={{ backdropFilter: "blur(10px)" }}
                        >
                            {error && (
                                <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
                            )}

                            {step === 1 ? (
                                <>
                                    {/* Name */}
                                    <label className="block text-gray-700 font-semibold mb-1">Name *</label>
                                    <input
                                        name="name"
                                        placeholder="Enter your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />

                                    {/* Username */}
                                    <label className="block text-gray-700 font-semibold mb-1">Username *</label>
                                    <input
                                        name="username"
                                        placeholder="Enter your username"
                                        value={form.username}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />

                                    {/* Email */}
                                    <label className="block text-gray-700 font-semibold mb-1">Email *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />

                                    {/* Password */}
                                    <label className="block text-gray-700 font-semibold mb-1">Password *</label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />


                                    <label className="block text-gray-700 font-semibold mb-1">Confirm Password *</label>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />
                                </>
                            ) : (
                                <>

                                    <label className="block text-gray-700 font-semibold mb-1 pt-10">Enter OTP *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter 6-digit OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
                                    />
                                </>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-2 ${step === 1
                                    ? "bg-pink-500 hover:bg-pink-600"
                                    : "bg-green-500 hover:bg-green-600"
                                    } text-white font-semibold rounded transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading
                                    ? "Processing..."
                                    : step === 1
                                        ? "Request OTP"
                                        : "Verify OTP"}
                            </button>
                            <div className="items-end">
                                {step == 1 ? (<Link
                                    to="/"
                                    className="text-sm text-blue-600 hover:underline font-medium"
                                >
                                    Back to Login
                                </Link>) : null}
                            </div>

                        </form>
                    </div>
                </main>
            </div>
            <Menu />
        </>
    );
};

export default SignupPage;
