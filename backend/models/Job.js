import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requiredSkills: [String],
  salaryRange: String,
  experience: Number,
  location: String,
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
