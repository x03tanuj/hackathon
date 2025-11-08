// In ai-hiring-frontend/src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // NavLink will add an 'active' class to the link that matches the current URL
  const getLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white' // Use accent color for active link
        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
    }`;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div 
              className="logo bg-blue-600 w-10 h-10 rounded-full" 
              aria-hidden 
              // Simple logo placeholder
            />
            <div>
              <div className="text-lg font-bold text-gray-900">AI Hiring</div>
              <div className="text-sm text-gray-500">Smart Matching</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav>
            <div className="flex items-center space-x-4">
              <NavLink className={getLinkClass} to="/applicant">
                Applicant
              </NavLink>
              <NavLink className={getLinkClass} to="/recruiter">
                Recruiter
              </NavLink>
              
              {/* Separator */}
              <div className="w-px h-6 bg-gray-300" />
              
              <NavLink className={getLinkClass} to="/users">
                User Setup
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;