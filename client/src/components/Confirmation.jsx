import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { complaintId } = location.state || {};

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Complaint Submitted Successfully!</h2>
      {complaintId ? (
        <>
          <p>Your complaint ID is: <strong>{complaintId}</strong></p>
          <p>Please keep this ID to check the status later.</p>
        </>
      ) : (
        <p>No complaint ID found.</p>
      )}
      <Link to="/">Submit Another Complaint</Link>
    </div>
  );
};

export default Confirmation;
