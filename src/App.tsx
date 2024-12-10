import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
