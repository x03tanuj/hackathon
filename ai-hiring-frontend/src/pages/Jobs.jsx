import React, { useEffect, useState } from "react";
import JobForm from "../components/JobForm";
import { getJobs } from "../api";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const { data } = await getJobs();
      setJobs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container mt-8">
      <div className="grid">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
          <JobForm />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Open Jobs</h2>
          {jobs.length === 0 ? (
            <p className="muted">No jobs yet — create one using the form.</p>
          ) : (
            <ul className="list">
              {jobs.map((j) => (
                <li key={j._id} className="list-item">
                  <div className="font-bold">{j.title}</div>
                  <div className="muted text-sm">{j.location}</div>
                  <div className="text-sm">{j.description}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
