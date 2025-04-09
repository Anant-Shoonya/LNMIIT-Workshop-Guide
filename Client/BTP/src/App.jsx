import { useState } from "react";
import "./index.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import RefreshHandler from "./pages/RefreshHandler";
import Machines from "./pages/Machines";
import About from "./pages/About";
import StudyMat from "./pages/StudyMat";
import EntreWorld from "./pages/EntreWorld";
import StudyMaterial from "./pages/StudyMat";
import Lab from "./pages/Lab";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/about" element={<About />} />
        <Route path="/studyMat" element={<StudyMat />} />
        <Route path="/entreWorld" element={<EntreWorld />} />
        <Route path="/studyMat/labs" element={<Lab />} />
      </Routes>
    </div>
  );
}

export default App;
