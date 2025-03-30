import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import * as THREE from "three";
import "../styles/Login.css";

function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("All fields are required!");
    }
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      if (result.success) {
        handleSuccess(result.message);
        localStorage.setItem("token", result.jwtToken);
        localStorage.setItem("loggedInUser", result.name);
        setTimeout(() => navigate("/home"), 1000);
      } else {
        handleError(result.message || result.error.details[0]?.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 50;

    const cubeGroup = new THREE.Group();
    const cubeCount = 1000;
    const cubeRange = 200;

    const createCube = () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0xffffff : 0x000000,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * cubeRange,
        (Math.random() - 0.5) * cubeRange,
        (Math.random() - 0.5) * cubeRange
      );
      return cube;
    };

    const initializeCubes = () => {
      for (let i = 0; i < cubeCount; i++) {
        cubeGroup.add(createCube());
      }
    };

    const maintainDensity = () => {
      while (cubeGroup.children.length < cubeCount) {
        const newCube = createCube();
        newCube.position.z =
          Math.random() > 0.5
            ? camera.position.z - cubeRange
            : camera.position.z + cubeRange;
        cubeGroup.add(newCube);
      }
    };

    initializeCubes();
    scene.add(cubeGroup);

    let scrollPosition = 0;
    window.addEventListener("wheel", (event) => {
      scrollPosition += event.deltaY * 0.5;
    });

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      cubeGroup.position.z += (scrollPosition - cubeGroup.position.z) * 0.1;

      cubeGroup.rotation.x += (mouseY - cubeGroup.rotation.x) * 0.05;
      cubeGroup.rotation.y += (mouseX - cubeGroup.rotation.y) * 0.05;

      cubeGroup.children.forEach((cube) => {
        if (
          cube.position.z < camera.position.z - cubeRange ||
          cube.position.z > camera.position.z + cubeRange
        ) {
          cubeGroup.remove(cube);
        }
      });

      maintainDensity();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="login-container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <div className="signup-form">
        <div className="signup-header">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        <p className="login-redirect">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
