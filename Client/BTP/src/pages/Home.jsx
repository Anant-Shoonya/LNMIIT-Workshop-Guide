import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import '../styles/Home.css';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');

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

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <label htmlFor="profile-upload">
            <img
              src={profileImage || 'https://via.placeholder.com/40'}
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
          <span className="welcome-text">Welcome, {loggedInUser}!</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Main Content */}
      <h1 className="home-title">Explore Features</h1>
      <div className="cards-container">
        <div className="card" onClick={() => navigateToPage('/machines')}>
          Machines in MME Workshop
        </div>
        <div className="card" onClick={() => navigateToPage('/chatbot')}>
          Entrepreneurship
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
