import React, { useState, useEffect } from "react";
import { getJobs } from "../api";

const Jobs = () => {
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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
      
      {loading && <p className="text-center muted">Loading jobs...</p>}
      
      {error && (
        <div className="message-box message-error max-w-lg mx-auto">
          {error}
        </div>
      )}

      {!loading && !error && jobs.length === 0 && (
         <p className="text-center muted">No jobs posted yet.</p>
      )}

      <div className="grid grid-cols-md-2 grid-cols-lg-3 gap-6">
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
    </div>
  );
};

export default Jobs;