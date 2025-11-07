// In ai-hiring-frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container mt-20 text-center">
    <div className="bg-white shadow rounded-lg p-12">
      <h1 className="text-3xl font-bold">Welcome to the AI Hiring Platform</h1>
      <p className="text-lg muted mt-2 mb-8">
        Smart candidate matching to find the perfect fit.
      </p>
      
      <div className="flex justify-center gap-6">
        <Link 
          to="/applicant" 
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          I'm an Applicant
        </Link>
        <Link 
          to="/recruiter" 
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          I'm a Recruiter
        </Link>
      </div>
    </div>
  </main>
);

export default Home;