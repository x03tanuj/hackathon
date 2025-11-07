// routes/notifyRoutes.js
import express from "express";
import { notifyCandidate } from "../controllers/notifyController.js";
const router = express.Router();
router.post("/", notifyCandidate);
export default router;
