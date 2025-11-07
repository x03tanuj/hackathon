const KNOWN_SKILLS = [
  "javascript", "react", "node", "express", "mongodb",
  "python", "java", "aws", "docker", "next.js"
];

export const extractSkills = (resumeText) => {
  const text = resumeText.toLowerCase();
  return KNOWN_SKILLS.filter(skill => text.includes(skill));
};