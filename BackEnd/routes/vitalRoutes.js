import express from "express";
import { addVital, getVitals } from "../controllers/vitalController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", auth, addVital);
router.get("/all", auth, getVitals);

export default router;
