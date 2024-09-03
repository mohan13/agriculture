import React from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "../ProfileAvatar";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between  px-24 text-white h-16 bg-[#05202A] bg-opacity-80 sticky top-0 z-10">
      <div className="flex flex-row items-center space-x-24">
        <div className="text-lg">Rice Leaf Diseases Detection</div>
        <div className="space-x-10">
          <Link to="/">Home</Link>
          <Link to="/agriculture-news">AgroNews</Link>
          <Link to="/calender">Calendar</Link>
          {/* <Link to="/calculator">FertilizerCalculator</Link> */}
        </div>
      </div>
      {/* <ProfileAvatar /> */}
    </nav>
  );
};

export default NavBar;
