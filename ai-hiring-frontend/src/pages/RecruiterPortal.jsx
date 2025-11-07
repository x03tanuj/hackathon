import React from 'react';
import { Link } from 'react-router-dom';
import JobForm from '../components/JobForm';

const RecruiterPortal = () => {
  return (
    <main className="container mt-8">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
        <p className="muted">Manage your job postings and candidate pool.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Job</h2>
          <JobForm />
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Management Links</h2>
          <ul className="space-y-3">
            <li>
              <Link to="/jobs" className="text-blue-600 hover:underline font-medium">
                &rarr; View All Job Postings
              </Link>
            </li>
            <li>
              <Link to="/candidates" className="text-blue-600 hover:underline font-medium">
                &rarr; View All Candidates
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default RecruiterPortal;