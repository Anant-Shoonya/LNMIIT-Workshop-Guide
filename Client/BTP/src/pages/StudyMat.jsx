import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/StudyMat.css";

const StudyMaterial = () => {
  const navigate = useNavigate();

  const handleLabs = () => {
    navigate('/studyMat/labs');
  };

  return (
    <div className="study-material-container mx-auto w-full">
      {/* Header */}
      <h1 className="study-material-header">Study Material</h1>

      {/* Sections */}
      <div className="study-material-sections">
        {/* Labs Section */}
        <div className="study-section labs-section" onClick={handleLabs} >
          <h2>Labs</h2>
          <p>Hands-on resources and guides for workshop labs.</p>
        </div>

        {/* Theory Section */}
        <div className="study-section theory-section">
          <h2 className=" mt-[-8px] " >Theory</h2>
          <p>In-depth explanations, detailed analysis, and study notes.</p>
        </div>

        {/* Interview Section */}
        <div className="study-section interview-section">
          <h2>Interview Questions</h2>
          <p>Practice questions to prepare for interviews.</p>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
