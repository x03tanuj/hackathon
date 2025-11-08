// ai-hiring-frontend/src/pages/Jobs.jsx (Refactored)

import React from "react";
import JobList from "../components/JobList"; // Import the reusable component

const Jobs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
      
      {/* All the logic is now inside JobList.
        This page is just a simple wrapper.
      */}
      <JobList />

    </div>
  );
};

export default Jobs;