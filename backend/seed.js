import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Job from './models/job.js';
import Candidate from './models/candidate.js';

dotenv.config();

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    description:
      'Build and maintain our user-facing applications. Must be proficient in React, TypeScript, and modern CSS.',
    requiredSkills: ['React', 'TypeScript', 'CSS', 'Node.js'],
    location: 'Remote',
  },
  {
    title: 'Product Marketing Manager',
    description:
      'Responsible for developing effective marketing strategies and plans to communicate the features and benefits of new products to customers.',
    requiredSkills: ['Marketing', 'Product Management', 'Analytics', 'Go-to-market'],
    location: 'New York, NY',
  },
  {
    title: 'Data Scientist',
    description:
      'Analyze large amounts of raw information to find patterns that will help improve our company. We rely on data scientists to build data products to extract valuable business insights.',
    requiredSkills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics'],
    location: 'San Francisco, CA',
  },
];

const candidates = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    jobId: null, // Will be set after jobs are created
    resumeText:
      'Alice Johnson - Senior Frontend Engineer with 8 years of experience. Expert in React, Redux, and TypeScript. Proven track record of leading teams to deliver high-quality web applications. Passionate about user experience and performance optimization. Experience with Node.js backends.',
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    jobId: null, // Will be set after jobs are created
    resumeText:
      'Bob Smith - Data Scientist. 5 years experience in data analysis, machine learning, and statistical modeling. Proficient in Python (Pandas, Scikit-learn) and R. Strong SQL skills. M.S. in Data Science.',
  },
  {
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    jobId: null, // Will be set after jobs are created
    resumeText:
      'Charlie Brown - Marketing professional with 4 years of experience in product marketing and campaign management. Skilled in analytics, SEO, and go-to-market strategy. Eager to bring my skills to a growing team.',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    console.log('Database connected...');

    // Clear existing data
    await Job.deleteMany({});
    await Candidate.deleteMany({});
    console.log('Cleared existing data.');

    // Insert new jobs
    const createdJobs = await Job.insertMany(jobs);
    console.log(`${createdJobs.length} jobs inserted.`);

    // Assign Job IDs to candidates
    candidates[0].jobId = createdJobs[0]._id; // Alice for Frontend Engineer
    candidates[1].jobId = createdJobs[2]._id; // Bob for Data Scientist
    candidates[2].jobId = createdJobs[1]._id; // Charlie for Marketing

    // Insert new candidates
    const createdCandidates = await Candidate.insertMany(candidates);
    console.log(`${createdCandidates.length} candidates inserted.`);

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    mongoose.disconnect();
    console.log('Database disconnected.');
  }
};

seedDatabase();