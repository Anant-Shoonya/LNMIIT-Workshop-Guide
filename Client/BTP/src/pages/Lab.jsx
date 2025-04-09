import React from "react";
import "../styles/Lab.css";

const Labs = () => {
  const labNames = [
    "Engineer Graphics Lab",
    "MOS Lab",
    "MT-1 Lab",
    "FMM Lab",
    "KOM Lab",
    "Metic Lab",
    "CAD/CAM Lab",
    "Heat Transfer Lab",
    "IC Engine Lab",
  ];

  return (
    <div className="labs-container">
      <h1 className="labs-header">Labs</h1>
      <div className="labs-grid">
        {labNames.map((lab, index) => (
          <div key={index} className="lab-card">
            <h2 className="lab-title">{lab}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
