import React, { useState } from "react";
import { getMatch, notifyCandidate } from "../api";

const MatchResult = () => {
  const [jobId, setJobId] = useState("");
  const [result, setResult] = useState(null);

  const handleMatch = async () => {
    const { data } = await getMatch(jobId);
    setResult(data);
  };

  const handleNotify = async () => {
    const payload = {
      candidateId: result._id,
      jobId,
      startTime: new Date().toISOString(),
      endTime: new Date(Date.now() + 30 * 60000).toISOString(),
    };
    await notifyCandidate(payload);
    alert("Candidate notified!");
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">AI Match Result</h2>
      <input
        className="border p-2 w-full"
        placeholder="Enter Job ID"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
      />
      <button
        onClick={handleMatch}
        className="bg-indigo-600 text-white p-2 w-full rounded mt-3"
      >
        Find Best Candidate
      </button>

      {result && (
        <div className="mt-6 border-t pt-4">
          <h3 className="font-bold">Top Candidate: {result.name}</h3>
          <p>Email: {result.email}</p>
          <p>Score: {result.score}</p>
          <button
            onClick={handleNotify}
            className="bg-green-600 text-white p-2 mt-3 w-full rounded"
          >
            Send Interview Email
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchResult;
