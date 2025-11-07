import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="header">
    <div className="container flex justify-between">
      <div className="brand">
        <div className="logo" aria-hidden />
        <div>
          <div className="text-lg font-bold">AI Hiring Platform</div>
          <div className="text-sm muted">Smart candidate matching</div>
        </div>
      </div>

      <nav>
        <div className="space-x-4">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/jobs">
            Jobs
          </Link>
          <Link className="nav-link" to="/candidates">
            Candidates
          </Link>
          <Link className="nav-link" to="/users">
            User
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
