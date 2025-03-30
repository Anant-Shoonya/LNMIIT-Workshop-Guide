import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';
import '../styles/Home.css';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user || 'User');

    // Background animation (Three.js)
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 50;

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animateParticles = () => {
      particles.rotation.y += 0.001;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
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
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="home-content">
        <label htmlFor="profile-upload">
          <img
            src={profileImage || 'https://via.placeholder.com/100'}
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
        <h1 className="welcome-text">Welcome, {loggedInUser}!</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
