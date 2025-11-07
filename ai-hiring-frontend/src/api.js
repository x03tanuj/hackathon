import axios from "axios";

// Provide a sensible fallback if VITE_API_BASE is not set in env
const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";
const API = axios.create({ baseURL: BASE });

export const getJobs = () => API.get("/jobs");
export const createJob = (data) => API.post("/jobs", data);
export const getCandidates = () => API.get("/candidates");
export const addCandidate = (data) => API.post("/candidates", data);
export const getMatch = (jobId) => API.get(`/match/${jobId}`);
export const notifyCandidate = (data) => API.post("/notify", data);

// helper to allow dynamic base during dev/debug
export default API;
