import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loginTokenotp, setLoginTokenotp] = useState("");
    const [ForgetTokenotp, setForgetTokenotp] = useState("");
    // const server = "https://made4ever-server.onrender.com"
    const server = "http://localhost:5001";

    // Normal login
    const loginUser = async (form) => {
        try {
            const response = await axios.post(`${server}/api/login`, form);
            if (response.data.token) {
                setUser(response.data.user);
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed");
        }
    };

    const signup = async (formData) => {
        try {
            const res = await axios.post(`${server}/api/signup`, formData);
            alert(res.data.otp);
            // Save activation token in localStorage
            localStorage.setItem("activationToken", res.data.activationToken);
            return res.data;
        } catch (err) {
            throw new Error(
                err.response?.data?.message || "Failed to request signup OTP"
            );
        }
    };

    // Step 2: Verify OTP to complete signup
    const verifySignupOtp = async (otp, activationToken) => {
        try {
            const token = activationToken || localStorage.getItem("activationToken");
            if (!token) throw new Error("Activation token not found. Please signup again.");

            const res = await axios.post(`${server}/api/verify-signup`, {
                otp,
                activationToken: token,
            });

            // Clear token after successful verification
            localStorage.removeItem("activationToken");

            return res.data;
        } catch (err) {
            throw new Error(
                err.response?.data?.message || "Failed to verify OTP"
            );
        }
    };

    // Request OTP
    const requestOtpLogin = async (email) => {
        try {
            const res = await axios.post(`${server}/api/request-otp-login`, { email });
            setLoginTokenotp(res.data.loginToken);
            alert(res.data.otp);
            return res.data;
        } catch (err) {
            throw new Error(err.response?.data?.message || "Failed to send OTP");
        }
    };


    const verifyOtpLogin = async (otp) => {
        try {
            if (!loginTokenotp) throw new Error("No OTP token available. Request OTP first.");
            const res = await axios.post(`${server}/api/verify-otp-login`, {
                otp,
                loginToken: loginTokenotp,
            });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user || null);
            setLoginTokenotp("");
            return res.data;
        } catch (err) {
            throw new Error(err.response?.data?.message || "OTP verification failed");
        }
    };

    // Step 1: Request OTP
    const ForgetPassword = async (email) => {
        try {
            console.log("Requesting OTP for:", email);
            const res = await axios.post(`${server}/api/forgot-password`, { email });

            // Save token for next step
            setForgetTokenotp(res.data.resetToken);
            alert(res.data.otp);

            console.log("OTP response:", res.data);
            return res.data;
        } catch (err) {
            console.error("Error in ForgetPassword:", err);
            throw new Error(err.response?.data?.message || "Failed to send OTP");
        }
    };

    const verifypasswordotp = async (otp, newPassword) => {
        try {
            if (!ForgetTokenotp) throw new Error("No OTP token available. Request OTP first.");
            const res = await axios.post(`${server}/api/reset-password`, {
                otp,
                resetToken: ForgetTokenotp,
                newPassword
            });
            alert("password change succesfully")
            return res.data;
        } catch (error) {

        }
    }

    return (
        <UserContext.Provider
            value={{ user, token, loginUser, signup, requestOtpLogin, verifyOtpLogin, loginTokenotp, ForgetPassword, verifypasswordotp, ForgetTokenotp, verifySignupOtp }}
        >
            {children}
        </UserContext.Provider>
    );
};
