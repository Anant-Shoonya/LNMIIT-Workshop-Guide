import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";
import "../styles/Home.css";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user || "User");

    const windows = document.querySelectorAll(".image-window");

    windows.forEach((window) => {
      let isScrolling = false;

      const scrollHandler = (e) => {
        e.preventDefault();
        if (isScrolling) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        const scrollAmount = window.clientHeight;

        isScrolling = true;

        window.scrollBy({
          top: direction * scrollAmount,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrolling = false;
        }, 500); // debounce time
      };

      window.addEventListener("wheel", scrollHandler, { passive: false });

      return () => {
        window.removeEventListener("wheel", scrollHandler);
      };
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    handleSuccess("User Logged Out!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("profileImage", reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header ">
        <div className="header-left">
          <label htmlFor="profile-upload">
            <img
              src={profileImage || "https://via.placeholder.com/50"}
              alt="User Avatar"
              className="avatar"
            />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfileImageChange}
          />
          <h2 className="text-lg">Welcome, {loggedInUser}!</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-links justify-between items-center space-x-10 text-lg">
          <a href="#machines">Machines</a>
          <a href="#scanner">Scanner</a>
          <a href="#studyMat">Study Material</a>
          <a href="#entreWorld">Entrepreneurial World</a>
          <a href="#about">About MME</a>
        </nav>

        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="home-content">
        <div className="section first-section">
          <h1>LNMIIT Mechanical & Mechatronics Engineering Workshop Guide</h1>
        </div>

        <div id="machines" className="section second-section">
          <div className="machines-content">
            {/* Title and Description */}
            <div className="machines-text">
              <h1>Machines in MME Workshop</h1>
              <p>
                Explore the different types of machines available in the
                Mechanical and Mechatronics Engineering workshop. Learn about
                their functions, operations, and safety measures.
              </p>
            </div>

            {/* Image Windows */}
            <div className="machines-right">
              {/* Window 1 */}
              <div className="image-window">
                <img src="/assets/mach-1.jpg" alt="Machine 1" />
                <img src="/assets/mach-2.jpg" alt="Machine 2" />
                <img src="/assets/mach-3.jpg" alt="Machine 3" />
              </div>
              {/* Window 2 */}
              <div className="image-window">
                <img src="/assets/mach-4.jpg" alt="Machine 4" />
                <img src="/assets/mach-5.jpg" alt="Machine 5" />
                <img src="/assets/mach-6.jpg" alt="Machine 6" />
              </div>
              {/* Window 3 */}
              <div className="image-window">
                <img src="/assets/mach-7.jpg" alt="Machine 7" />
                <img src="/assets/mach-8.jpg" alt="Machine 8" />
                <img src="/assets/mach-9.jpg" alt="Machine 9" />
              </div>
            </div>

            {/* Button */}
            <div className="machines-button">
              <button onClick={() => navigate("/machines")}>Get Started</button>
            </div>
          </div>
        </div>

        <div
          id="scanner"
          className="section flex-col justify-between items-center space-y-6 third-section "
        >
          <div
            className="bg-white p-9 rounded-3xl shadow-2xl max-w-[1000px] mx-auto text-center space-y-7"
            style={{ boxShadow: "0px 0px 500px rgba(0, 0, 0, 0.9)" }}
          >
            <h2 className=" font-extrabold text-3xl text-neutral-700 ">
              Scanner
            </h2>
            <p className="text-xl mt-2 text-black ">
              Our scanner tool allows you to identify machine parts, retrieve
              specifications, and understand their applications. Get a hands-on
              experience in identifying workshop tools.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              <Link to="/scanner">Get Started</Link>
            </button>
          </div>
        </div>

        <div
          id="studyMat"
          className="section flex-col justify-between items-center space-y-6 fourth-section "
        >
          <div
            className="bg-white p-9 rounded-3xl shadow-2xl max-w-[1000px] mx-auto text-center space-y-7"
            style={{ boxShadow: "0px 0px 500px rgba(0, 0, 0, 0.9)" }}
          >
            <h2 className=" font-extrabold text-3xl text-neutral-700 ">
              Study Material
            </h2>
            <p className="text-xl mt-2 text-black ">
              Access a curated collection of study materials, including PDFs,
              videos, and manuals, to enhance your learning experience in the
              MME workshop.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              <Link to="/studyMat">Get Started</Link>
            </button>
          </div>
        </div>

        <div
          id="entreWorld"
          className="section flex-col justify-between items-center space-y-6 fifth-section"
        >
          <div
            className="bg-white p-9 rounded-3xl shadow-2xl max-w-[1000px] mx-auto text-center space-y-7"
            style={{ boxShadow: "0px 0px 500px rgba(0, 0, 0, 0.9)" }}
          >
            <h2 className=" font-extrabold text-3xl text-neutral-700 ">
              Entrepreneurial World
            </h2>
            <p className="text-xl mt-2 text-black ">
              Learn about the entrepreneurial aspects of mechanical engineering.
              Get insights on innovation, product development, and launching
              your own startup in the engineering field.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              onClick={() => navigate("/entreWorld")}
            >
              Get Started{" "}
            </button>
          </div>
        </div>

        <div
          id="about"
          className="section flex-col justify-between items-center space-y-6"
        >
          <div
            className="bg-white p-9 rounded-3xl shadow-2xl max-w-[1000px] mx-auto text-center space-y-7"
            style={{ boxShadow: "0px 0px 500px rgba(0, 0, 0, 0.9)" }}
          >
            <h2 className=" font-extrabold text-3xl text-neutral-700 ">
              About MME
            </h2>
            <p className="text-xl mt-2 text-black ">
              Discover the Mechanical and Mechatronics Engineering department,
              its history, faculty, and the various learning opportunities
              available for students.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              <Link to="/about">Get Started</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-container">
        <button
          className="chatbot-button"
          onClick={() => setChatOpen(!chatOpen)}
        >
          💬
        </button>
        {chatOpen && (
          <div className="chat-window">
            <p>Chatbot will be here!</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer text-white ">
        <p>© 2025 Your Website. All Rights Reserved.</p>
      </footer>

      <ToastContainer />
    </div>
  );
};

export default Home;
