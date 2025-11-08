// In ai-hiring-frontend/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import UserSetup from "./pages/UserSetup";
// Import the new portals
import RecruiterPortal from "./pages/RecruiterPortal";
import ApplicantPortal from "./pages/ApplicantPortal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Add a main container for consistent padding and width */}
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* New Portal Routes */}
          <Route path="/recruiter" element={<RecruiterPortal />} />
          <Route path="/applicant" element={<ApplicantPortal />} />

          {/* Keep these as recruiter-specific pages */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          
          <Route path="/users" element={<UserSetup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;