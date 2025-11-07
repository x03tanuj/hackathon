import React, { useEffect, useState } from "react";
import { getCandidates } from "../api";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    try {
      const { data } = await getCandidates();
      setCandidates(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="container mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Candidates</h2>
        {candidates.length === 0 ? (
          <p className="muted">No candidates yet.</p>
        ) : (
          <ul className="list">
            {candidates.map((c) => (
              <li key={c._id} className="list-item">
                <div className="font-bold">{c.name}</div>
                <div className="muted text-sm">
                  {c.email} — applied for: {c.jobId?.title || c.jobId}
                </div>
                <div className="text-sm">
                  Skills: {(c.skills || []).join(", ")}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Candidates;
