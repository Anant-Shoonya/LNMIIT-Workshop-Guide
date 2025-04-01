import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';
import '../styles/Home.css';
import homeImage from '../assets/home.jpg';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || 'User');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('token');
    handleSuccess('User Logged Out!');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('profileImage', reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <label htmlFor="profile-upload">
            <img
              src={profileImage || 'https://via.placeholder.com/50'}
              alt="User Avatar"
              className="avatar"
            />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleProfileImageChange}
          />
          <h2>Welcome, {loggedInUser}!</h2>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="home-content">
        <div className="section first-section">
          {/* <h1>Welcome to LNMIIT Mechanical and Mechatronics Department Workshop Guide</h1> */}
        </div>
        <div className="section">Machines in MME Workshop<button><Link to="/machines">Get Started</Link></button></div>
        <div className="section">Scanner</div>
        <div className="section">Study Material<button><Link to="/studyMat">Get Started</Link></button></div>
        <div className="section">Entrepreneurial World<button><Link to="/entreWorld">Get Started</Link></button></div>
        <div className="section">About MME<button><Link to="/about">Get Started</Link></button></div>
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-container">
        <button className="chatbot-button" onClick={() => setChatOpen(!chatOpen)}>
          💬
        </button>
        {chatOpen && (
          <div className="chat-window">
            <p>Chatbot will be here!</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Website. All Rights Reserved.</p>
      </footer>

      <ToastContainer />
    </div>
  );
};

export default Home;
