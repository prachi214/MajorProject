import React from "react";
import { NavLink } from "react-router-dom";
import { IconBikeFilled } from "@tabler/icons-react";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <header className=" pn:hidden sm:hidden lg:flex">
        <nav>
          <div>
            <ul
              className="min-h-full w-full flex flex-row justify-evenly font-medium text-xl gap-10 p-6 
              sm:justify-center text-white"
            >
              <IconBikeFilled
                className="z-40"
                size={68}
                color="#64FFDA"
                stroke={1.25}
              />
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Services
                </NavLink>
              </li>

              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/pages"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
               Page
                </NavLink>
              </li>
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Login
                </NavLink>
              </li>
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="hover:bg-yellow-300 px-4 py-4 rounded-xl">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-black" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
