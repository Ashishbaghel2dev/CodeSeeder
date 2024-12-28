import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Utility function for NavLink active styles
  const getNavLinkClass = ({ isActive }) =>
    `px-3 py-2 hover:border-white/10 border-b-2 ${
      isActive ? "border-white/10 pb-1" : "border-transparent pb-1"
    }`;

  return (
    <div className="bg-slate-950 fixed top-0 border-gray-100/10 border-b-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full px-10 py-6 text-white z-30">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/myQB1bD/Screenshot-2024-12-26-at-6-53-51-PM-1.png"
              alt="CodeSeeder Logo"
              className="w-4"
            />
            <p className="text-3xl">CodeSeeder</p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="m-0 p-0 flex gap-4 text-sm">
              <li>
                <NavLink to="/" className={getNavLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs" className={getNavLinkClass}>
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink to="/components" className={getNavLinkClass}>
                  Components
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={getNavLinkClass}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* External Button */}
        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline cursor-pointer text-sm px-4 py-2 border border-white rounded-md"
            aria-label="Visit GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
