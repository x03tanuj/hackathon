import Candidate from "../models/candidate.js";
import Job from "../models/job.js";
import { generateCalendarLink } from "../utils/calendarLink.js";
import { selectionEmail } from "../utils/emailTemplate.js";
import { sendMail } from "../config/mailer.js";

export const notifyCandidate = async (req, res) => {
  const { candidateId, jobId, startTime, endTime } = req.body;
  const candidate = await Candidate.findById(candidateId);
  const job = await Job.findById(jobId);

  const link = generateCalendarLink(
    `Interview: ${job.title}`,
    startTime,
    endTime,
    `Interview with ${process.env.COMPANY_NAME}`
  );

  const html = selectionEmail(candidate, job, link);
  await sendMail(candidate.email, `You're shortlisted for ${job.title}`, html);

  res.json({ message: "Interview invite sent", link });
};
