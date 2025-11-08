import React, { useState } from "react";
import { createJob } from "../api";

const JobForm = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requiredSkills: "",
    location: "",
  });
  const [message, setMessage] = useState(null);

  const clearMessage = () => setMessage(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearMessage();
    try {
      const skillsArray = job.requiredSkills.split(",").map((s) => s.trim());
      await createJob({ ...job, requiredSkills: skillsArray });
      setMessage({ type: "success", text: "Job posted successfully!" });
      setJob({ title: "", description: "", requiredSkills: "", location: "" });
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to post job. Please try again." });
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
      
      {message && (
        <div className={`message-box message-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="form-input"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => {
            setJob({ ...job, title: e.target.value });
            clearMessage();
          }}
        />
        <textarea
          className="form-textarea"
          placeholder="Description"
          rows="5"
          value={job.description}
          onChange={(e) => {
            setJob({ ...job, description: e.target.value });
            clearMessage();
          }}
        />
        <input
          className="form-input"
          placeholder="Required Skills (comma separated)"
          value={job.requiredSkills}
          onChange={(e) => {
            setJob({ ...job, requiredSkills: e.target.value });
            clearMessage();
          }}
        />
        <input
          className="form-input"
          placeholder="Location"
          value={job.location}
          onChange={(e) => {
            setJob({ ...job, location: e.target.value });
            clearMessage();
          }}
        />
        <button className="btn bg-blue-600 w-full" type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;