import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router";
import { Navigate } from "react-router";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 border-b border-b-emerald-400">
      {/* Logo */}
      <div className="">
        <img src={assets.logo} alt="" className="w-44 " />
      </div>
      {/* Menu */}
      <div className="hidden md:flex items-start justify-between text-md font-medium text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="px-2 py-1">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/alldoctors" className="flex flex-col items-center gap-1 ">
          <p className="px-2 py-1">All DOCTORS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="px-2 py-1">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="px-2 py-1">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </div>
      {/* Login Button */}
      <div className="flex items-center gap-5">
        {token ? (
          <div className="flex justify-between group relative ">
            <img
              src={assets.profile}
              className="rounded-full w-10 h-10 cursor-pointer"
            />
            <div className="absolute hidden  right-0 top-14 text-right w-35 group-hover:block  ">
              <div className=" bg-stone-100 rounded-2xl flex flex-col ">
                <p className="text-sm mt-1">MY PROFILE</p>
                <p className="text-sm  mt-1">MY APPOINTMENTS</p>
                <p className="text-sm  mt-1">LOG OUT</p>
              </div>
            </div>
          </div>
        ) : (
          <button className="rounded-full bg-emerald-600 text-white px-6 py-3 font-light hidden md:block">
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
