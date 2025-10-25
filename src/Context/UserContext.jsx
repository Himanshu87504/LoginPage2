import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [loginTokenOtp, setLoginTokenOtp] = useState("");
    const [forgetTokenOtp, setForgetTokenOtp] = useState("");
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const server = "http://localhost:5001";
    // const server = "https://made4ever-server.onrender.com";

    // ------------------ Fetch User ------------------
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await axios.get(`${server}/api/me`, {
                headers: { Authorization: token },
            });

            setUser(res.data.user);
            setIsAuth(true);
        } catch (error) {
            console.error("Failed to fetch user:", error.response?.data || error.message);
            setUser(null);
            setIsAuth(false);
        }
    };

    // ------------------ Normal Login ------------------
    const loginUser = async (form) => {
        try {
            const response = await axios.post(`${server}/api/login`, form);
            if (response.data.token) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                await fetchUser();
                return true;
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
            await fetchUser(); // fetch user after OTP login
            return { message: "Login successful!", ...res.data };
        } catch (err) {
            throw new Error(err.response?.data?.message || "OTP verification failed");
        }
    };

    // ------------------ Forget Password ------------------
    const forgetPassword = async (email) => {
        try {
            const res = await axios.post(`${server}/api/forgot-password`, { email });
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

    // ------------------ Logout ------------------
    const logout = async () => {
        try {
            localStorage.removeItem("token");
            setUser(null);
            setIsAuth(false);
            setToken(null);
            alert("Logged out successfully!");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    // ------------------ Fetch user once on mount ------------------
    useEffect(() => {
        fetchUser();
    }, []);

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
                isAuth,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
