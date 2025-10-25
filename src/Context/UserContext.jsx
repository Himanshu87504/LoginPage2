import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loginTokenOtp, setLoginTokenOtp] = useState("");
    const [forgetTokenOtp, setForgetTokenOtp] = useState("");

    // const server = "http://localhost:5001";
    const server = "https://made4ever-server.onrender.com";

    // ------------------ Normal Login ------------------
    const loginUser = async (form) => {
        try {
            const response = await axios.post(`${server}/api/login`, form);
            if (response.data.token) {

                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                return true; // success
            }
            return false;
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            return false;
        }
    };

    // ------------------ Signup ------------------
    const signup = async (formData) => {
        try {
            const res = await axios.post(`${server}/api/signup`, formData);
            console.log(res);
            localStorage.setItem("activationToken", res.data.activationToken);
            return res.data;
        } catch (err) {
            throw new Error(err.response?.data?.message || "Failed to request signup OTP");
        }
    };

    const verifySignupOtp = async (otp, activationToken) => {
        try {
            const token = activationToken || localStorage.getItem("activationToken");
            if (!token) throw new Error("Activation token not found. Please signup again.");

            const res = await axios.post(`${server}/api/verify-signup`, { otp, activationToken: token });
            localStorage.removeItem("activationToken");
            return res.data;
        } catch (err) {
            throw new Error(err.response?.data?.message || "Failed to verify OTP");
        }
    };

    // ------------------ OTP Login ------------------
    const requestOtpLogin = async (email) => {
        try {
            const res = await axios.post(`${server}/api/request-otp-login`, { email });
            console.log(res);
            setLoginTokenOtp(res.data.loginToken);
            return { message: "OTP sent successfully!" };
        } catch (err) {
            throw new Error(err.response?.data?.message || "Failed to send OTP");
        }
    };

    const verifyOtpLogin = async (otp) => {
        try {
            if (!loginTokenOtp) throw new Error("No OTP token available. Request OTP first.");

            const res = await axios.post(`${server}/api/verify-otp-login`, {
                otp,
                loginToken: loginTokenOtp,
            });

            setLoginTokenOtp("");
            localStorage.setItem("token", res.data.token);
            return { message: "Login successful!", ...res.data };
        } catch (err) {
            throw new Error(err.response?.data?.message || "OTP verification failed");
        }
    };


    // ------------------ Forget Password ------------------
    const forgetPassword = async (email) => {
        try {
            const res = await axios.post(`${server}/api/forgot-password`, { email });
            console.log(res);
            setForgetTokenOtp(res.data.resetToken);
            return res.data;
        } catch (err) {
            console.error("Error in ForgetPassword:", err);
            throw new Error(err.response?.data?.message || "Failed to send OTP");
        }
    };

    const verifyPasswordOtp = async (otp, newPassword) => {
        try {
            if (!forgetTokenOtp) throw new Error("No OTP token available. Request OTP first.");

            const res = await axios.post(`${server}/api/reset-password`, {
                otp,
                resetToken: forgetTokenOtp,
                newPassword,
            });

            alert("Password changed successfully!");
            setForgetTokenOtp(""); // Clear token after reset
            return res.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Failed to reset password");
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                token,
                loginUser,
                signup,
                verifySignupOtp,
                requestOtpLogin,
                verifyOtpLogin,
                loginTokenOtp,
                forgetPassword,
                verifyPasswordOtp,
                forgetTokenOtp,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
