import React from "react";
import "../styles/Machines.css";
import { useNavigate } from "react-router-dom";

const machinesData = [
  {
    name: "Vertical Machining Center",
    description:
      "A VMC is a CNC machine tool where the spindle is vertically oriented, primarily used for precise milling, drilling, and tapping operations on metal parts. It offers high-speed and automated multi-axis machining capabilities.",
    image: "/assets/mach-1.jpg",
    route: "/lathe",
  },
  {
    name: "Electrical Discharge Machine",
    description:
      "A shaper is a machine tool that uses a single-point cutting tool moving linearly to machine flat surfaces, keyways, and slots. It's ideal for producing internal and external geometries on small to medium-sized workpieces.",
    image: "/assets/mach-2.jpg",
    route: "/milling",
  },
  {
    name: "3D-Printing Machine",
    description:
      "A 3D printer builds parts layer-by-layer using materials like plastic or metal, based on a CAD model, employing techniques such as FDM or SLS. It's revolutionizing prototyping and manufacturing with design flexibility and minimal material waste.",
    image: "/assets/mach-3.jpg",
    route: "/drilling",
  },
  {
    name: "Shaper Machine",
    description:
      "EDM removes material from conductive workpieces using electrical sparks between a tool and the workpiece, ideal for hard or complex shapes. It's widely used for die-making, precision molds, and intricate cavities.",
    image: "/assets/mach-4.jpg",
    route: "/drilling",
  },
  // Add more machines as needed
];

const Machines = () => {
  const navigate = useNavigate();

  return (
    <div className="machines-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Home
      </button>

      {machinesData.map((machine, index) => (
        <section key={index} className="machine-section">
          <div className="machine-text">
            <h2>{machine.name}</h2>
            <p>{machine.description}</p>
            <button
              className="explore-button"
              onClick={() => navigate(machine.route)}
            >
              Explore →
            </button>
          </div>
          <div className="machine-image">
            <img src={machine.image} alt={machine.name} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Machines;
