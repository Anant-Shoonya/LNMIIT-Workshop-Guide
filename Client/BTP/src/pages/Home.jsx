import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import '../styles/Home.css'; // Add a new CSS file for Home styles

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || 'User'); // Fallback if no name is found
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    handleSuccess('User Logged Out!');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="welcome-section">
          <img
            src="https://via.placeholder.com/40" // Replace this with user's profile photo URL if available
            alt="User Avatar"
            className="avatar"
          />
          <span className="welcome-text">Welcome, {loggedInUser}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <h1 className="home-title">Explore Features</h1>
      <div className="cards-container">
        <div className="card" onClick={() => navigateToPage('/machines')}>
          Machines in MME Workshop
        </div>
        <div className="card" onClick={() => navigateToPage('/chatbot')}>
          ChatBot
        </div>
        <div className="card" onClick={() => navigateToPage('/scanner')}>
          Scanner
        </div>
        <div className="card" onClick={() => navigateToPage('/study-material')}>
          Study Material
        </div>
        <div className="card" onClick={() => navigateToPage('/about-mme')}>
          About MME
        </div>
        <div className="card" onClick={() => navigateToPage('/notice-board')}>
          Notice Board
        </div>
      </div>

      {/* ChatBot Button */}
      <button className="chatbot-button" onClick={() => navigateToPage('/chatbot')}>
        ChatBot
      </button>

      <ToastContainer />
    </div>
  );
};

export default Home;
