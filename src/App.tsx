import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Forgot from "./pages/auth/forgot";
import NewPassword from "./pages/auth/newpassword";
import Otp from "./pages/auth/opt";
import Success from "./pages/auth/Succes";
import Resume from "./pages/onboarding/resume";
import Personal from "./pages/onboarding/Personnal";
import Career from "./pages/onboarding/Career";
import Qualification from "./pages/onboarding/Qualification";
import Done from "./pages/onboarding/Done";
import Dashboard from "./pages/dashboard/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/personalInfo" element={<Personal />} />
        <Route path="/career" element={<Career />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/done" element={<Done />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
