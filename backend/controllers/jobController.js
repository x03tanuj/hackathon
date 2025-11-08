// backend/controllers/jobController.js
import Job from "../models/job.js";

export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error("Error creating job:", err.message);
    res.status(500).json({ message: "Failed to create job" });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    // This will catch the database error!
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};