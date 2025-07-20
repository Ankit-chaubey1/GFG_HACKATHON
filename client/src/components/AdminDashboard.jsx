// // client/src/components/AdminDashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [updateStatus, setUpdateStatus] = useState({});

//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   const fetchComplaints = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/complaints");
//       setComplaints(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Failed to load complaints");
//     }
//   };

//   const handleStatusChange = (id, newStatus) => {
//     setUpdateStatus({ ...updateStatus, [id]: newStatus });
//   };

//   const submitStatusUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/complaints/${id}`, {
//         status: updateStatus[id],
//       });
//       fetchComplaints(); // Refresh data
//     } catch (err) {
//       console.error("Failed to update status");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", marginTop: "40px" }}>
//       <h2>Admin Dashboard</h2>
//       {loading ? (
//         <p>Loading complaints...</p>
//       ) : complaints.length === 0 ? (
//         <p>No complaints submitted yet.</p>
//       ) : (
//         complaints.map((c) => (
//           <div key={c._id} style={{ border: "1px solid gray", marginBottom: "15px", padding: "10px" }}>
//             <p><strong>ID:</strong> {c._id}</p>
//             <p><strong>Category:</strong> {c.category}</p>
//             <p><strong>Description:</strong> {c.description}</p>
//             <p><strong>Status:</strong> {c.status}</p>
//             <p><strong>Submitted:</strong> {new Date(c.createdAt).toLocaleString()}</p>

//             <select
//               value={updateStatus[c._id] || c.status}
//               onChange={(e) => handleStatusChange(c._id, e.target.value)}
//             >
//               <option value="Received">Received</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Resolved">Resolved</option>
//             </select>

//             <button onClick={() => submitStatusUpdate(c._id)} style={{ marginLeft: "10px" }}>
//               Update
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


// client/src/components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateStatus, setUpdateStatus] = useState({});
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin"); // You can also validate token or role here
    if (isAdmin === "true") {
      setAuthorized(true);
      fetchComplaints();
    } else {
      alert("Access denied. Admins only.");
      navigate("/login");
    }
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load complaints");
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setUpdateStatus({ ...updateStatus, [id]: newStatus });
  };

  const submitStatusUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, {
        status: updateStatus[id],
      });
      fetchComplaints();
    } catch (err) {
      console.error("Failed to update status");
    }
  };

  if (!authorized) return null;

  return (
    <div style={{ padding: "20px", marginTop: "40px" }}>
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading complaints...</p>
      ) : complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        complaints.map((c) => (
          <div
            key={c._id}
            style={{ border: "1px solid gray", marginBottom: "15px", padding: "10px" }}
          >
            <p>
              <strong>ID:</strong> {c._id}
            </p>
            <p>
              <strong>Category:</strong> {c.category}
            </p>
            <p>
              <strong>Description:</strong> {c.description}
            </p>
            <p>
              <strong>Status:</strong> {c.status}
            </p>
            <p>
              <strong>Submitted:</strong> {new Date(c.createdAt).toLocaleString()}
            </p>

            <select
              value={updateStatus[c._id] || c.status}
              onChange={(e) => handleStatusChange(c._id, e.target.value)}
            >
              <option value="Received">Received</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <button
              onClick={() => submitStatusUpdate(c._id)}
              style={{ marginLeft: "10px" }}
            >
              Update
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
