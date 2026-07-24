import Vital from "../models/Vital.js";

export const addVital = async (req, res) => {
  try {
    const { heartRate, bp, temperature } = req.body;

    const vital = await Vital.create({
      patientId: req.user.id,
      heartRate,
      bp,
      temperature
    });

    // Emit real-time update
    req.io.emit("vital_update", vital);

    res.json({ message: "Vital saved", vital });
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const getVitals = async (req, res) => {
  try {
    const vitals = await Vital.find({ patientId: req.user.id }).sort({
      createdAt: -1
    });

    res.json(vitals);
  } catch (err) {
    res.json({ error: err.message });
  }
};
