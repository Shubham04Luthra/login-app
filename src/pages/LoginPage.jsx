import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import {
  googleAuthProvider,
  facebookAuthProvider,
  auth,
} from "../firebaseAuth/firebase";
import { signInWithPopup } from "firebase/auth";

function LoginPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let result;

  const formRef = useRef(null);
  const [showErrorMessage, setShowErrorMessage] = useState("false");

  const error = {};

  const [errorMessage, setErrorMessage] = useState();

  const googleLogin = async () => {
    try {
      const userInfo = await signInWithPopup(auth, googleAuthProvider);

      const jsonUserData = JSON.stringify({
        email: userInfo.user.email,
        username: userInfo.user.displayName,
      });

      {
        localStorage.setItem("userData", jsonUserData);

        userInfo && navigate("/home");
      }
    } catch (error) {
      console.log("Google Login error", error);
    }
  };

  const facebookLogin = async () => {
    try {
      const userInfo = await signInWithPopup(auth, facebookAuthProvider);

      {
        userInfo && navigate("/home");
      }
    } catch (error) {
      console.log("Google Login error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Username validation
    if (!userData.username) {
      error.username = "Username is required";
    } else if (userData.username !== "emilys") {
      error.username = 'Username must be "emilys"';
    }

    // Email validation
    if (!userData.email) {
      error.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)
    ) {
      error.email = "Invalid email address";
    }
    // Password validation

    if (!userData.password) {
      error.password = "Password is required";
    } else if (userData.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }
    // Validating because the given API is working only with 'emilyspass' password.
    else if (userData.password !== "emilyspass") {
      console.log(
        "Password error displayed as API '/auth/login' only accepts 'emilyspass'.  "
      );
      error.password = "Password must be 'emilyspass'.";
    }

    setErrorMessage(error);

    if (Object.keys(error).length === 0) {
      console.log("errors........", error);

      try {
        result = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userData.username,
            password: userData.password,
          }),
        });
        const finalResult = await result.json();

        localStorage.setItem("authToken", finalResult.accessToken);
        localStorage.setItem("userData", JSON.stringify(userData));

        finalResult?.accessToken && navigate("/home");
      } catch (error) {
        console.log(error);
      }

      formRef.current.reset();
    } else {
      setShowErrorMessage("true");
      formRef.current.reset();
    }
  };

  return (
    <div className=" w-full  p-18.5 mobile:p-6  flex tablet:flex tablet:flex-col mobile:flex mobile:flex-col  ">
      <div className="w-1/2 self-center  mobile:w-full  tablet:w-full  flex justify-center items-center">
        <img
          className="w-135 h-135 mobile:object-contain  "
          src="/Illustration.jpg"
          alt="image"
        />
      </div>

      <div className="w-1/2 border mobile:w-full tablet:w-full tablet:mt-8  flex flex-col gap-8 p-10 border-customGray rounded-5 ">
        <div className=" flex flex-col w-54.5 h-28.5">
          <span className="text-darkPurple font-poppins font-medium text-4xl leading-12.19">
            Welcome to
          </span>
          <span className="text-indigo font-poppins font-black text-46 leading-15.58">
            Unstop
          </span>
        </div>
        <div className="  flex flex-col gap-4  ">
          {" "}
          <Button
            onClick={googleLogin}
            className="flex h-19.5 text-base shadow-custom  w-full gap-2.5 border border-customGray py-5.25 font-medium "
            bgColor="bg-white"
            textColor="bg-darkPurple"
          >
            {" "}
            <img
              className="h-8 w-8"
              src="/google_icon.png"
              alt="goggle icon"
            />{" "}
            <span> Login with Google</span>
          </Button>
          <Button
            onClick={facebookLogin}
            className="flex text-base  h-19.5 shadow-custom  w-full gap-2.5 border border-customGray py-5.25 font-medium "
            bgColor="bg-white"
            textColor="bg-darkPurple"
          >
            {" "}
            <img className="h-8 w-8" src="/fb_icon.png" alt="fb icon" />{" "}
            <span>Login with Facebook</span>
          </Button>
        </div>
        <div className="flex items-center my-8 h-5.5">
          <div className="flex-grow border-t border-lightGray"></div>
          <span className="mx-4  font-poppins leading-5.42 text-base font-normal text-darkPurple">
            OR
          </span>
          <div className="flex-grow border-t border-lightGray"></div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="gap-2.5   flex flex-col">
            {showErrorMessage
              ? errorMessage?.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errorMessage?.username}
                  </p>
                )
              : null}
            <Input
              type="text"
              placeholder="Enter your name"
              label="User Name"
              image="account_circle.png"
              value={userData.username}
              onChange={(value) =>
                setUserData({ ...userData, username: value })
              }
            />
            {errorMessage?.email && (
              <p className="text-red-500 text-sm mt-1">{errorMessage?.email}</p>
            )}
            <Input
              type="email"
              placeholder="Enter your email address"
              label="Email"
              image="mail.png"
              value={userData.email}
              onChange={(value) => setUserData({ ...userData, email: value })}
            />
            {errorMessage?.password && (
              <p className="text-red-500 text-sm mt-1">
                {errorMessage?.password}
              </p>
            )}
            <Input
              type="password"
              placeholder="Enter your Password"
              label="Password"
              image="key.png"
              value={userData.password}
              onChange={(value) =>
                setUserData({ ...userData, password: value })
              }
            />
          </div>
          <div className="flex justify-between mobile:justify-evenly ">
            <div className="gap-2 flex  ml-1.5 ">
              <input
                className=" border-gray bg-customGray rounded border w-4.5 h-4.5"
                type="checkbox"
              />
              <span className="text-darkPurple   font-poppins font-normal text-base leading-5.42">
                Remember me
              </span>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className=" font-poppins font-normal  mobile:text-right text-lg leading-5.42 text-indigo"
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            <Button
              type="submit"
              className=" w-full py-6.75 flex h-19.25 text-base font-semibold "
            >
              Login
            </Button>
          </div>
        </form>
        <div className="font-poppins text-base leading-5.42 font-normal flex justify-center items-center">
          <span>
            Don’t have an account?{" "}
            <Link
              to=""
              style={{ textDecoration: "none" }}
              className="text-indigo"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
