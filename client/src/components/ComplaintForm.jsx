// client/src/components/ComplaintForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
  const [form, setForm] = useState({ category: "", description: "" });
  const [responseId, setResponseId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/complaints", form);
    setResponseId(res.data.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Anonymous Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Category:</label><br />
        <select name="category" onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="Harassment">Harassment</option>
          <option value="Ragging">Ragging</option>
          <option value="Mental Health">Mental Health</option>
        </select><br /><br />

        <label>Description:</label><br />
        <textarea
          name="description"
          rows="4"
          cols="50"
          onChange={handleChange}
          required
        ></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>

      {responseId && (
        <p>Your complaint was submitted. Tracking ID: <strong>{responseId}</strong></p>
      )}
    </div>
  );
};

export default ComplaintForm;
