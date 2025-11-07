import React from "react";
import JobForm from "../components/JobForm";
import CandidateForm from "../components/CandidateForm";
import MatchResult from "../components/MatchResult";

const Home = () => (
  <main className="container mt-8">
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-xl font-semibold">
        Welcome to the AI Hiring Platform
      </h1>
      <p className="muted">
        Use the forms below or the navigation to manage jobs and candidates.
      </p>
    </div>

    <div className="grid mt-6">
      <div>
        <JobForm />
      </div>
      <div>
        <CandidateForm />
      </div>
    </div>

    <div className="mt-6">
      <MatchResult />
    </div>
  </main>
);

export default Home;
