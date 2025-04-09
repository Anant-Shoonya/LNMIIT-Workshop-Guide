import React, { useState } from "react";
import "../styles/Lab.css";

const Labs = () => {
    const labData = [
        {
          name: "Engineering Graphics Lab",
          semester: "2nd Semester",
          documents: [
            { title: "CAD Lab Manual", url: "https://drive.google.com/file/d/13r_VBreLn022tS-vbSBAYcqqPnXiwbUh/view?usp=sharing" },
            { title: "ND Bhatt Book", url: "https://drive.google.com/file/d/1oGznlS0uDsfr2c86TkWi436ff8H5u5w7/view?usp=sharing" },
            { title: "ORTOGRAPHIC AND ISOMETRIC PROJECTION", url: "https://docs.google.com/presentation/d/12Z0QNjtCKGbYZS59lwwmtb_xclZM81w4/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "PROJECTION OF PLANES", url: "https://docs.google.com/presentation/d/11XTH6sCq1d4U2wLtnFIh9OBk6i9gAf6z/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "PROJECTION OF POINTS-LINES", url: "https://docs.google.com/presentation/d/1_eLzS-muAQC57WVPQs21uJtvJ2EWpfhr/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "PROJECTION OF SOLIDS", url: "https://docs.google.com/presentation/d/1DvzgSCfM4srgCosHJrFkfrAmPtKi_EWu/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "SECTION OF SOLID", url: "https://docs.google.com/presentation/d/1WQpd1wJfnzGWdO78-zpvIgsy5k1P6-U8/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
            //{ title: "SECTION OF SOLID", url: "https://docs.google.com/presentation/d/1WQpd1wJfnzGWdO78-zpvIgsy5k1P6-U8/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
        {
          name: "MOS Lab",
          semester: "3rd Semester",
          documents: [
            { title: "BRINELL HARDNESS TESTER", url: "https://docs.google.com/document/d/124D77QFg-TBjdtvylzcE8OXE1VwbDzya/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "BRINELL HARDNESS TESTING MACHINE", url: "https://drive.google.com/file/d/1tzQs_YZU-NkJUxiNMT7f_k-pZMTZcMUR/view?usp=sharing" },
            { title: "Erichsen Sheet Metal Testing", url: "" },
            { title: "erichsen sheet metal testing machine", url: "https://drive.google.com/file/d/1yy8JIzvRfrr2jffcnIhbJF8fdd60529g/view?usp=sharing" },
            { title: "impact testing machine", url: "https://docs.google.com/document/d/1GZ0so-3sY1YLBdMKP0ZcwZdGy-Mg-evb/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Rockwell Hardness Tester", url: "https://drive.google.com/file/d/1K4wa6Bmzv7vrDEa64aWAbwPEyRj3x-nK/view?usp=sharing" },
            { title: "Rockwell Hardness Tester P-2", url: "https://docs.google.com/document/d/1-_q5umXGWR9PTVkpOAAFGvi1vOIGHsmh/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "wear testing machine ", url: "https://docs.google.com/document/d/1Tbo0i5eA_XOyP-6pkzJUTtdjrcTsS8V9/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Universal testing machine", url: "https://docs.google.com/document/d/1eIqXWUcewXbJke4vPHpCSxfKHDt7AoEs/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
        {
          name: "MT-1 Lab",
          semester: "3rd Semester",
          documents: [
            { title: "10 Rules of Castings", url: "https://docs.google.com/document/d/11mOwrGzPEYT1PfXeN4Nrj5B8F6ICr32U/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Casting of Metals Popular Processes", url: "https://docs.google.com/document/d/12e1JPehZXgQrmyyJfQ9cwTtLMXXeqyfq/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Fitting Shop", url: "https://docs.google.com/document/d/19QwM1-w8T2koNUyDG8gwAika3Kpxe4ny/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Foundry Shop", url: "https://docs.google.com/document/d/12JiXvwB9ECmjUR0HEsE_5ol_qolE_xzp/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Gas Welding", url: "https://docs.google.com/document/d/1MEbA9r2pxehD6GTccqroNz9lJaMWrDxi/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Lap & Butt Joint welding shop", url: "https://docs.google.com/document/d/1Q8EyL4vWyaj_oWRzVnrTRkVHhRpBTFeP/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Machining shop", url: "https://docs.google.com/document/d/10zv-GsWHvmE-L8j55lQXM2grZSUCsfBZ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Milling Machine", url: "https://docs.google.com/document/d/1VL4EYfzWh9fF-1nv7MouKNRgihSOAPhU/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Submerged arc welding", url: "https://docs.google.com/document/d/1uLuWmmxF5hO3z4rugWmZ1yQGVm4fUpi3/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Sheet Metal Shop", url: "https://docs.google.com/document/d/1U0FvdPU3cX8OQF6KxbTBb6dYnypj_O1a/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Surface Grinder", url: "https://docs.google.com/document/d/1AaBbe0DXWodJDy7U_PyqWlphQf4uDh_b/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
          ],
        },
        {
          name: "FMM Lab",
          semester: "4th Semester",
          documents: [
            { title: "Bernoulli's Theorm", url: "https://drive.google.com/file/d/1v7zBDoHScVgEcE_7SMjp0xhnSKX62ULA/view?usp=sharing" },
            { title: "flowmeter apparatus", url: "https://drive.google.com/file/d/1TXgFpk4KTM8fFTZFMeNlK54qNOKdl_mO/view?usp=sharing" },
            { title: "Francis Turbine", url: "https://docs.google.com/document/d/1BSc9xVwbmrxhEO65rWYXH2nr3QrdsZiT/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Kaplan Turbine", url: "https://docs.google.com/document/d/1fYQEYGr0kB652eyKZ1elx_bwzcr3I98B/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Pipe Friction Apparatus", url: "https://drive.google.com/file/d/1VrPMAE8v775-VDyD9te0E9jzPDGkvKf9/view?usp=sharing" },
            { title: "CENTRIFUGAL PUMP TEST RIG", url: "https://drive.google.com/file/d/1ijrxNW6hlvEYcMzh9mvEelg2dRqGgt03/view?usp=sharing" },
            { title: "Orifice Mouthpiece Appratus", url: "https://drive.google.com/file/d/1ijrxNW6hlvEYcMzh9mvEelg2dRqGgt03/view?usp=sharing" },
            { title: "Metacentric Height Experiment", url: "https://drive.google.com/file/d/1BsW0ewHEEZYnuwpj0Sb5Qjt8M9NxHqNi/view?usp=sharing" },
            { title: "PELTON WHEEL TURBINE TEST RIG", url: "https://drive.google.com/file/d/1GcY5S06F5blcB9JZSGH5Go8q2KIGzNDW/view?usp=sharing" }
          ],
        },
        {
          name: "KOM Lab",
          semester: "4th Semester",
          documents: [
            { title: "Bi-Filar Suspension", url: "https://docs.google.com/document/d/1H7tp-w2wXPxzuhRs3d0iqhqMCRkC2h_I/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Cam Analysis Appratus", url: "https://docs.google.com/document/d/11brgAdYwBScSqjmSAaK_mtMGqI4qNR4p/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Compound Pendulum", url: "https://docs.google.com/document/d/1FT4xWEzrQTTMc9jDLsnsW9gSc8OngTzE/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Double slider crank mechanism", url: "https://docs.google.com/document/d/1rQTTBSCic-GLHLBi4_Gwmfi31dSM6Y7x/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Four Bar Mechanism in MSC Adams", url: "https://docs.google.com/document/d/1f7H63L1R4QCzQfDMD_ZLn7N6k4YpgWUS/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Longtudinal Vibration of Helical Spring", url: "https://docs.google.com/document/d/1c0mQJ8dRhJV4XLC4Sn_yBq5p8Aq3stKY/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Moment of Inertia of Flywheel", url: "https://docs.google.com/document/d/1fuKTVTozH2ANAuDtgzUJELMQDJYPmT0s/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Motorized Gyroscope", url: "https://docs.google.com/document/d/1DK-_-aQixbsCB2MBJipawDXoaMqF21Fm/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Quarter Car Model in Mat Lab", url: "https://docs.google.com/document/d/1uus9j8w4xRTnQsBmI0aktvLAipOvR02n/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Single slider crank mechanism and its inversions", url: "https://docs.google.com/document/d/1t1KGQpQU_rQCHatyH7D4VLikEOh1w-Qv/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Spring Mass Damper System in Mat lab", url: "https://docs.google.com/document/d/1uLyptotB37Klu4YZft5fvdaX-tuYqueu/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Static and Dynamic balancing apparatus", url: "https://docs.google.com/document/d/1Eky58hXEoL23L2duLy3kuCmR7hr7L3QR/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
        {
          name: "Metic Lab",
          semester: "4th Semester",
          documents: [
            { title: "Air Track manual", url: "https://drive.google.com/file/d/1qinOWD2YNPi3NyBpifLrISmH9t7StUA5/view?usp=sharing" },
            { title: "Force Measurement Manual", url: "https://drive.google.com/file/d/1EAIuQqMI_kdmQ0F_5oRKP2kuc76ip4e5/view?usp=sharing" },
            { title: "lm35", url: "https://drive.google.com/file/d/1jRUjA6i1_5KrOL69iEyfNhcatK7N80GO/view?usp=sharing" },
            { title: "Temperature Measurement", url: "https://docs.google.com/document/d/1ubgq6Oh1vBKHzvDju90ATwgfVFZbU2av/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Load Measurement", url: "https://docs.google.com/document/d/1koOO0IjgdrfxhWz2LhtI6umKRhmfvX5I/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Torque Measurement", url: "https://docs.google.com/document/d/1tQE_Ur2wEIyyDRW-DXs5q77DOt2Q_IDJ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Linear Dimensions Measurement", url: "https://docs.google.com/document/d/1xdbNzzN4-iYz3HiFejgCwlUmcAXTn-5E/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Profile projector", url: "https://docs.google.com/document/d/1VpiPDup2CdVliDevlRQVX4qsl98uvGxM/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Angle measurement", url: "https://docs.google.com/document/d/17pZVdi7myWgLmol02xl040ObbVMlRSwJ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Gauges", url: "https://docs.google.com/document/d/14voa_QRo0KyMIy3pzPuRsu27FiH2lR57/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "COORDINATE MEASURING MACHINE", url: "https://docs.google.com/document/d/1BT3xgKRF4xLrP2bQ4v2V4W85W5TkBZn3/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Gear tooth callipers", url: "https://docs.google.com/document/d/1b4bTCAy2EmzHfdaHklVQl7yVfPjGE995/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Surface Roughness Testing", url: "https://docs.google.com/document/d/1SOCY5tZqDS6buHG2R5UqnGihsr6hoMNH/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Non contact tachometers, stroscope", url: "https://docs.google.com/document/d/1g2sA59754XWwsvXXHm7vfcj9g-3I0zCv/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Sinebar", url: "https://docs.google.com/document/d/1OK0t09hTjk8o8w2bEsp3HZyL5sfo7pwZ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Temparature Measurement Manual", url: "https://drive.google.com/file/d/1h5N0o48pXuxHuN24n3RjGm-5gsq50iJL/view?usp=sharing" },
            { title: "Torque Manual", url: "https://drive.google.com/file/d/1zAqcM6BHLD5u94uC55RmIhUd3DCDC5tN/view?usp=sharing" }
          ],
        },
        {
          name: "CAD/CAM Lab",
          semester: "5th Semester",
          documents: [
            { title: "3D Printer manual", url: "https://docs.google.com/document/d/1hujnhmpy8NlbUJ74_Om0IVRg1HnvT-uu/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "AutoCAD practice drawings", url: "https://docs.google.com/document/d/1ia8LV_83boDDk8tdXmCCae1WEJeaa7uu/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "EDM manual", url: "https://docs.google.com/document/d/1qH2gJZcPIivSL-Ii7fc92nJP-rcWY1mQ/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Learning-AutoCAD", url: "https://drive.google.com/file/d/17UCzo660QgY2UWuc6Uk-v_BdNkmSyvBk/view?usp=sharing" },
            { title: "PLASMA Cutting machine manual", url: "https://docs.google.com/document/d/1GSUCmnZAXW9k3xRdxQSSEcbhzpowF0wG/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "VMC manual", url: "https://docs.google.com/document/d/1mymP281I_BJr6u_wg9lkV1L4vlkJXFZk/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "ACAD Basic Commands", url: "https://drive.google.com/file/d/1b7nrvoEw-Mcr8q-LC44ge899tFWT_cvl/view?usp=sharing" }
          ],
        },
        {
          name: "Heat Transfer Lab",
          semester: "5th Semester",
          documents: [
            { title: "Heat Transfer Notes", url: "https://example.com/heat-transfer-notes" },
            { title: "Practical Examples", url: "https://example.com/practical-examples" },
          ],
        },
        {
          name: "MD-2 Lab",
          semester: "5th Semester",
          documents: [
            { title: "Machine Design Basics", url: "https://example.com/machine-design" },
            { title: "Lab Problems", url: "https://example.com/lab-problems" },
          ],
        },
        {
          name: "IC Engine Lab",
          semester: "6th Semester",
          documents: [
            { title: "Bomb Calorimeter", url: "https://docs.google.com/document/d/1ujJDr3pazlgng-Am2twP0GngEm1Jd_xk/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "Bomb Calorimeter P-2", url: "https://docs.google.com/document/d/1LBsXYjDPgtEkVELEnnSkavrb-JPWKM1-/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "CRDI VCR Disel engine", url: "https://drive.google.com/file/d/12DtqsyApdGOAkZjyNH14sW3RY-5x3lCb/view?usp=sharing" },
            { title: "diesel engine test", url: "https://drive.google.com/file/d/1tDi0SKp_tB_6RZB7KjK5Qo7WQI6hdN2J/view?usp=sharing" },
            { title: "MULTI CYLINDER PETROL ENGINE WITH EDDY CURRENT DYNAMOMETER", url: "https://drive.google.com/file/d/1HdtRerwAg_zAp3HjT4hWjkiLcNM4N8wf/view?usp=sharing" },
            { title: "pycnometer", url: "https://drive.google.com/file/d/1Ax9_N7XR6-0h5pxTIsLqBT_wevozghTl/view?usp=sharing" },
            { title: "Red Wood Viscometer", url: "https://docs.google.com/document/d/18zVIH13_b5AuzmEOWh8kB6YwiDec-BSl/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" },
            { title: "VCR Diesel Engine", url: "https://docs.google.com/document/d/1inW66Oyg1c1ZPv59IEc1zgMTijSA_Zvv/edit?usp=sharing&ouid=108101547279956901268&rtpof=true&sd=true" }
          ],
        },
      ];
      

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);

  const openModal = (lab) => {
    setSelectedLab(lab);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLab(null);
  };

  return (
    <div className="labs-container">
      <h1 className="labs-header">Labs</h1>
      <div className="labs-grid">
        {labData.map((lab, index) => (
          <div
            key={index}
            className="lab-card"
            onClick={() => openModal(lab)}
          >
            <h2 className="lab-title">{lab.name}</h2>
            <p className="lab-semester">{lab.semester}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modal-header uppercase ">{selectedLab.name}</h2>
            <div className="modal-content">
              <ul className="modal-list">
                {selectedLab.documents.map((doc, index) => (
                  <li key={index} className="modal-list-item">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labs;
