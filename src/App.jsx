// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import Signup from "./components/Signup";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
// import OtpLogin from "./components/OtpLogin";
// import ForgetPassword from "./components/ForgetPassword";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import ViewProfile from "./components/Profile/ViewProfile";
// import { UserContext } from "./Context/UserContext";
// import { useContext } from "react";
// import EmailConnection from "./components/Communication/EmailConnection";

// function App() {
//   const { isAuth } = useContext(UserContext);
//   return (
//     <>
//       <BrowserRouter>
//         <Menu />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/otpLogin" element={<OtpLogin />} />
//           <Route path="/forgetPassword" element={<ForgetPassword />} />
//           <Route path="/dashboard" element={isAuth ? <Dashboard /> : <LoginPage />} />
//           <Route path="/viewprofile/:id" element={isAuth ? <ViewProfile /> : <LoginPage />} />
//           {/* <Route path="/comunication" element={<EmailConnection />} /> */}
//         </Routes>
//         <>
//           <Route path="/comunication" element={<EmailConnection />} />
//         </>
//         <Footer />

//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import EmailConnection from "./components/Communication/EmailConnection";

function App() {
  const { isAuth } = useContext(UserContext);
  const location = useLocation();

  // Hide Menu and Footer on specific routes
  const hideLayoutPaths = ["/comunication"];
  const shouldShowLayout = !hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Menu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpLogin" element={<OtpLogin />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <LoginPage />}
        />
        <Route
          path="/viewprofile/:id"
          element={isAuth ? <ViewProfile /> : <LoginPage />}
        />
        <Route path="/comunication" element={<EmailConnection />} />
      </Routes>

      {shouldShowLayout && <Footer />}
    </>
  );
}

// Wrap App inside BrowserRouter so useLocation works
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
