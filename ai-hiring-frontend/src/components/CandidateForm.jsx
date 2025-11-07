import React, { useState, useEffect } from "react";
import { addCandidate, getJobs } from "../api";

const CandidateForm = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    jobId: "",
    resumeText: "",
  });
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      try {
        const { data } = await getJobs();
        setJobs(data);
      } catch (err) {
        console.error("Failed to load jobs", err);
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCandidate(candidate);
      alert("Candidate uploaded successfully!");
      setCandidate({ name: "", email: "", jobId: "", resumeText: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to upload candidate. Check console.");
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="form-input"
          placeholder="Name"
          value={candidate.name}
          onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
          required
        />
        <input
          className="form-input"
          placeholder="Email"
          type="email"
          value={candidate.email}
          onChange={(e) =>
            setCandidate({ ...candidate, email: e.target.value })
          }
          required
        />

        {loadingJobs ? (
          <div className="muted">Loading jobs…</div>
        ) : (
          <select
            className="form-input"
            value={candidate.jobId}
            onChange={(e) =>
              setCandidate({ ...candidate, jobId: e.target.value })
            }
            required
          >
            <option value="">Select Job</option>
            {jobs.map((j) => (
              <option key={j._id} value={j._id}>
                {j.title} — {j.location}
              </option>
            ))}
          </select>
        )}

        <textarea
          className="form-textarea"
          placeholder="Paste Resume Text"
          rows="6"
          value={candidate.resumeText}
          onChange={(e) =>
            setCandidate({ ...candidate, resumeText: e.target.value })
          }
          required
        />

        <button className="btn bg-green-600 w-full" type="submit">
          Submit Resume
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
