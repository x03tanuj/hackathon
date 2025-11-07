import React, { useState } from "react";
import { createJob } from "../api";

const JobForm = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requiredSkills: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillsArray = job.requiredSkills.split(",").map(s => s.trim());
    await createJob({ ...job, requiredSkills: skillsArray });
    alert("Job posted successfully!");
    setJob({ title: "", description: "", requiredSkills: "", location: "" });
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Required Skills (comma separated)"
          value={job.requiredSkills}
          onChange={(e) => setJob({ ...job, requiredSkills: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <button className="bg-blue-600 text-white p-2 w-full rounded">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
