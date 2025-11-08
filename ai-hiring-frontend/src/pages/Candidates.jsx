import React, { useState, useEffect } from "react";
import { getCandidates, getJobs } from "../api";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState(new Map()); // Use a Map for easy lookup
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch both candidates and jobs in parallel
        const [candidatesRes, jobsRes] = await Promise.all([
          getCandidates(),
          getJobs(),
        ]);

        // Create a Map for quick job title lookup by ID
        const jobsMap = new Map(jobsRes.data.map((job) => [job._id, job.title]));

        setCandidates(candidatesRes.data);
        setJobs(jobsMap);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Candidates</h1>

      {loading && <p className="text-center muted">Loading candidates...</p>}

      {error && (
        <div className="message-box message-error max-w-lg mx-auto">
          {error}
        </div>
      )}

      {!loading && !error && candidates.length === 0 && (
         <p className="text-center muted">No candidates have applied yet.</p>
      )}

      <div className="grid grid-cols-md-2 grid-cols-lg-3 gap-6">
        {candidates.map((candidate) => (
          <div key={candidate._id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold">{candidate.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{candidate.email}</p>
            <p className="text-gray-900 mt-4">
              <span className="font-semibold">Applying for:</span>{" "}
              {jobs.get(candidate.jobId) || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;