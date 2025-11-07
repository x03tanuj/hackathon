import Job from "../models/job.js";
import Candidate from "../models/candidate.js";
import { geminiModel } from "../config/gemini.js";

export const matchCandidates = async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  const candidates = await Candidate.find({ jobId: job._id });
  if (!candidates.length) return res.status(404).json({ message: "No candidates found" });

  let best = null, bestScore = 0;

  for (const c of candidates) {
    const prompt = `
      Job Skills: ${job.requiredSkills.join(", ")}
      Candidate Skills: ${c.skills.join(", ")}
      Rate candidate from 0–100 and explain.
      Return JSON: {"score": number, "reason": string}
    `;
    try {
      const result = await geminiModel.generateContent(prompt);
      const data = JSON.parse(result.response.text());
      if (data.score > bestScore) {
        best = { ...c._doc, score: data.score, reason: data.reason };
        bestScore = data.score;
      }
    } catch (err) {
      console.error(err);
    }
  }

  res.json(best);
};
