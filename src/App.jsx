import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import OtpLogin from "./components/OtpLogin";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ViewProfile from "./components/Profile/ViewProfile";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";

function App() {
  const { isAuth } = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpLogin" element={<OtpLogin />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/dashboard" element={isAuth ? <Dashboard /> : <LoginPage />} />
          <Route path="/viewprofile/:id" element={isAuth ? <ViewProfile /> : <LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
