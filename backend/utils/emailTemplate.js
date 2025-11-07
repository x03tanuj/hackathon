export const selectionEmail = (candidate, job, link) => `
  <h3>Hi ${candidate.name},</h3>
  <p>Congratulations! You've been shortlisted for the <b>${job.title}</b> role.</p>
  <p>Please <a href="${link}">click here</a> to schedule your interview.</p>
  <p>Best,<br/>${process.env.COMPANY_NAME} Hiring Team</p>
`;
