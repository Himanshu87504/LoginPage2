import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
