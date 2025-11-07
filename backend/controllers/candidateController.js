import Candidate from "../models/candidate.js";
import { extractSkills } from "../utils/resumeParser.js";

export const addCandidate = async (req, res) => {
  const { name, email, jobId, resumeText } = req.body;
  const skills = extractSkills(resumeText);
  const candidate = new Candidate({ name, email, jobId, resumeText, skills });
  await candidate.save();
  res.status(201).json(candidate);
};

export const getCandidates = async (req, res) => {
  const candidates = await Candidate.find().populate("jobId");
  res.json(candidates);
};
