// ai-hiring-frontend/src/pages/ApplicantPortal.jsx

import React from 'react';
import CandidateForm from '../components/CandidateForm';
import JobList from '../components/JobList'; // 1. Import the new component

const ApplicantPortal = () => {
  return (
    <main className="container mt-8">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold">Applicant Portal</h1>
        <p className="muted">Find your next role and apply.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
          <p className="text-sm mb-4 muted">
            Submit your resume and we'll match you with relevant jobs.
          </p>
          <CandidateForm />
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          
          {/* 2. Replace the placeholder <p> tag with your new component */}
          <JobList />

        </div>
      </div>
    </main>
  );
};

export default ApplicantPortal;