import React, { useState, useEffect } from "react";

const UserSetup = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "recruiter",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("userProfile");
      if (stored) setProfile(JSON.parse(stored));
    } catch (err) {
      // ignore
    }
  }, []);

  const save = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile saved locally.");
  };

  return (
    <div className="container mt-8">
      <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">User Setup</h2>
        <div className="space-y-3">
          <input
            className="form-input"
            placeholder="Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            className="form-input"
            placeholder="Email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="form-input"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
            <option value="hiring_manager">Hiring Manager</option>
          </select>
          <button className="btn bg-blue-600" onClick={save}>
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSetup;
