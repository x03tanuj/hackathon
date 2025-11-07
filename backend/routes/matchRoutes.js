// routes/matchRoutes.js
import express from "express";
import { matchCandidates } from "../controllers/matchController.js";
const router = express.Router();
router.get("/:jobId", matchCandidates);
export default router;
