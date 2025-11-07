import React from 'react';
import CandidateForm from '../components/CandidateForm';

// You would likely create a <JobList /> component to fetch and display open jobs
// import JobList from '../components/JobList'; 

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
          <p className_="text-sm mb-4 muted">
            Submit your resume and we'll match you with relevant jobs.
          </p>
          <CandidateForm />
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          {/* <JobList /> */}
          <p className="muted">
            (Your component to list available jobs would go here.)
          </p>
        </div>
      </div>
    </main>
  );
};

export default ApplicantPortal;