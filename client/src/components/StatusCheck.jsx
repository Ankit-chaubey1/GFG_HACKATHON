// client/src/components/StatusCheck.jsx
import React, { useState } from "react";
import axios from "axios";

const StatusCheck = () => {
  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/complaints/${complaintId}`);
      setComplaint(res.data);
      setError("");
    } catch (err) {
      setComplaint(null);
      setError("Complaint not found or invalid ID.");
    }
  };

  return (
    <div style={{ padding: "20px", marginTop: "40px" }}>
      <h2>Check Complaint Status</h2>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
        style={{ width: "300px" }}
      />
      <button onClick={handleCheck} style={{ marginLeft: "10px" }}>Check</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {complaint && (
        <div style={{ marginTop: "20px", border: "1px solid gray", padding: "10px" }}>
          <p><strong>Category:</strong> {complaint.category}</p>
          <p><strong>Description:</strong> {complaint.description}</p>
          <p><strong>Status:</strong> {complaint.status}</p>
          <p><strong>Created At:</strong> {new Date(complaint.createdAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default StatusCheck;
