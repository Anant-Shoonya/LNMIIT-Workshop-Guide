import React from "react";
import "../styles/Machines.css";
import { useNavigate } from "react-router-dom";

const machinesData = [
  {
    name: "Lathe Machine",
    description:
      "Used for shaping metal or wood, the lathe is a fundamental tool in every mechanical workshop. It rotates the workpiece against cutting tools to perform operations like cutting, sanding, knurling, drilling, etc.",
    image: "/assets/mach-1.jpg",
    route: "/lathe",
  },
  {
    name: "Milling Machine",
    description:
      "Milling machines are used to remove material from a workpiece by feeding it against a rotating multipoint cutter. It's used for gear cutting, slotting, and more.",
    image: "/assets/mach-2.jpg",
    route: "/milling",
  },
  {
    name: "Drilling Machine",
    description:
      "This machine is used for creating round holes in solid materials. The drill bit rotates to cut away material, and there are different types for different applications.",
    image: "/assets/mach-3.jpg",
    route: "/drilling",
  },
  {
    name: "Drilling Machine",
    description:
      "This machine is used for creating round holes in solid materials. The drill bit rotates to cut away material, and there are different types for different applications.",
    image: "/assets/mach-3.jpg",
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
