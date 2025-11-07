import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  resumeText: String,
  skills: [String],
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
}, { timestamps: true });

export default mongoose.model("Candidate", candidateSchema);
