// ai-hiring-frontend/src/components/JobList.jsx

import React, { useState, useEffect } from "react";
import { getJobs } from "../api"; // This path is correct from the components folder

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data } = await getJobs();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return <p className="text-center muted">Loading jobs...</p>;
  }

  if (error) {
    return (
      <div className="message-box message-error max-w-lg mx-auto">
        {error}
      </div>
    );
  }

  if (jobs.length === 0) {
    return <p className="text-center muted">No jobs posted yet.</p>;
  }

  // This is the main job list JSX, copied from your Jobs.jsx page
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Note: I changed lg:grid-cols-3 to md:grid-cols-2 to better fit the portal layout */}
      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-white shadow rounded-lg p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600 text-sm mt-2">{job.location}</p>
          <p className="text-gray-700 my-4 text-sm flex-grow">
            {job.description}
          </p>
          <div>
            <h4 className="font-semibold text-sm">Skills:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;