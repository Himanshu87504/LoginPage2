import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import OtpLogin from "./components/OtpLogin";
import ForgetPassword from "./components/ForgetPassword";

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otpLogin" element={<OtpLogin />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
