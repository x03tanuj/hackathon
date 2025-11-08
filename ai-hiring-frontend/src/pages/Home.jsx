// In ai-hiring-frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="container mt-20 text-center">
    <div className="bg-white shadow rounded-lg p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Welcome to the AI Hiring Platform</h1>
      <p className="text-lg text-gray-600 mt-2 mb-8">
        Smart candidate matching to find the perfect fit.
      </p>
      
      <div className="flex justify-center gap-6">
        <Link 
          to="/applicant" 
          className="btn bg-blue-600 font-bold py-3 px-6"
        >
          I'm an Applicant
        </Link>
        <Link 
          to="/recruiter" 
          className="btn bg-green-600 font-bold py-3 px-6"
        >
          I'm a Recruiter
        </Link>
      </div>
    </div>
  </main>
);

export default Home;