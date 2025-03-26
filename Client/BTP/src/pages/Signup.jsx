import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import * as THREE from 'three';
import '../styles/Signup.css';

function Signup() {
  const [signupInfo, setsignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
  
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 50;
  
    // Cube properties
    const cubeGroup = new THREE.Group();
    const cubeCount = 1000; // Target density
    const cubeRange = 200; // Cube placement range
  
    // Function to create a cube
    const createCube = () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0xffffff : 0x000000, // Black and white
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * cubeRange,
        (Math.random() - 0.5) * cubeRange,
        (Math.random() - 0.5) * cubeRange
      );
      return cube;
    };
  
    // Function to initialize cubes
    const initializeCubes = () => {
      for (let i = 0; i < cubeCount; i++) {
        cubeGroup.add(createCube());
      }
    };
  
    // Maintain density dynamically
    const maintainDensity = () => {
      // Ensure a constant number of cubes in the scene
      while (cubeGroup.children.length < cubeCount) {
        const newCube = createCube();
  
        // Place the new cube slightly ahead or behind the camera along the z-axis
        newCube.position.z =
          Math.random() > 0.5
            ? camera.position.z - cubeRange
            : camera.position.z + cubeRange;
  
        cubeGroup.add(newCube);
      }
    };
  
    // Initialize and add cubes to the scene
    initializeCubes();
    scene.add(cubeGroup);
  
    // Scroll-based motion
    let scrollPosition = 0;
    window.addEventListener("wheel", (event) => {
      scrollPosition += event.deltaY * 0.5; // Adjust scroll sensitivity
    });
  
    // Mouse-based rotation
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
  
      // Smooth scroll-based movement
      cubeGroup.position.z += (scrollPosition - cubeGroup.position.z) * 0.1;
  
      // Smooth mouse-based rotation
      cubeGroup.rotation.x += (mouseY - cubeGroup.rotation.x) * 0.05;
      cubeGroup.rotation.y += (mouseX - cubeGroup.rotation.y) * 0.05;
  
      // Maintain cube density
      cubeGroup.children.forEach((cube) => {
        if (
          cube.position.z < camera.position.z - cubeRange ||
          cube.position.z > camera.position.z + cubeRange
        ) {
          cubeGroup.remove(cube); // Remove cubes that are too far out of range
        }
      });
  
      maintainDensity(); // Add new cubes dynamically
      renderer.render(scene, camera);
    };
  
    animate();
  
    // Cleanup
    return () => {
      window.removeEventListener("wheel", null);
      window.removeEventListener("mousemove", null);
      renderer.dispose();
    };
  }, []);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copysignupInfo = { ...signupInfo };
    copysignupInfo[name] = value;
    setsignupInfo(copysignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('All fields are required!');
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || 'Something went wrong!');
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="signup-form">
        <div className="signup-header">
          <h1>Welcome!</h1>
          <p>Create your account to get started</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              value={signupInfo.name}
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={signupInfo.email}
            />
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={signupInfo.password}
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-redirect">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
