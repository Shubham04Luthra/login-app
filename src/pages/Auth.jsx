import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  console.log("hey hey");
  // useEffect(() => {
  //   if (
  //     JSON.parse(localStorage.getItem("userData")).username ||
  //     localStorage.getItem("authToken")
  //   ) {
  //     navigate("/home");
  //   } else {
  //     navigate("/auth/login");
  //   }
  // }, []);
};

export default Auth;
