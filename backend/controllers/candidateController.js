import Candidate from "../models/candidate.js";
// resumeParser.js is not provided, but assuming it works
// import { extractSkills } from "../utils/resumeParser.js"; 

export const addCandidate = async (req, res) => {
  try {
    const { name, email, jobId, resumeText } = req.body;
    
    // Mocking extractSkills if resumeParser.js is missing
    const skills = resumeText ? resumeText.toLowerCase().split(' ') : [];
    // const skills = extractSkills(resumeText); // Use your real function
    
    const candidate = new Candidate({ name, email, jobId, resumeText, skills });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    console.error("Error adding candidate:", err);
    res.status(500).json({ message: "Error adding candidate" });
  }
};

export const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().populate("jobId");
    res.json(candidates);
  } catch (err) {
    console.error("Error fetching candidates:", err);
    res.status(500).json({ message: "Error fetching candidates" });
  }
};