import mongoose from "mongoose";

const vitalSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  heartRate: Number,
  bp: String,
  temperature: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Vital", vitalSchema);
