import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/auth/login");
  };
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col   justify-between w-66.75 h-135">
        <div className=" flex flex-col w-54.5   self-center  ">
          <span className="text-darkPurple font-poppins font-medium text-4xl leading-12.19">
            Welcome to
          </span>
          <span className="text-indigo font-poppins font-black text-46 leading-15.58">
            Unstop
          </span>
        </div>
        <div className="  w-full rounded-5 border border-customGray shadow-custom ">
          <div className="flex flex-col p-5 items-center justify-center    gap-5 ">
            <img
              src="/profile_img.png"
              alt="profile_image"
              className="w-30 h-30   rounded-full border border-customGray"
            />
            <div className="flex flex-col gap-2.5 ">
              <span className=" font-bold text-base text-center text-indigo leading-4.8">
                {JSON.parse(localStorage.getItem("userData"))?.username}
              </span>
              <div className=" flex flex-col gap-1 text-xs text-center font-medium text-darkGray">
                <span>
                  {JSON.parse(localStorage.getItem("userData"))?.email}
                </span>
                <span>Female</span>
              </div>
            </div>
            <Button
              onClick={logout}
              className=" w-34.25 h-12 font-bold border border-white"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
