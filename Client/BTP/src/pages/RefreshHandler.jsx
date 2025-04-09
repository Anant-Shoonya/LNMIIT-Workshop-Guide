import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (location.pathname === "/entreWorld") {
        navigate("/entreWorld", { replace: true });
      } else if (location.pathname === "/about") {
        navigate("/about", { replace: true });
      } else if (location.pathname === "/machines") {
        navigate("/machines", { replace: true });
      } else if (location.pathname === "/studyMat") {
        navigate("/studyMat", { replace: true });
      } else if (location.pathname === "/studyMat/labs") {
        navigate("/studyMat/labs", { replace: true });
      } else if (location.pathname !== "/home") {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
