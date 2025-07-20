// server/routes/complaintRoutes.js
const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// Submit complaint
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    const saved = await complaint.save();
    res.json({ id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to save complaint" });
  }
});

// Track complaint
router.get("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) return res.status(404).json({ error: "Not found" });
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ error: "Error fetching complaint" });
  }
});

// Admin view all
router.get("/", async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json(complaints);
});

// Admin update status
router.put("/:id", async (req, res) => {
  try {
    await Complaint.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
});

module.exports = router;
