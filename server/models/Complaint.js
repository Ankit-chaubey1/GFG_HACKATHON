// server/models/Complaint.js
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  category: String,
  description: String,
  fileUrl: String,
  status: { type: String, default: "Received" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", complaintSchema);
