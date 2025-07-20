
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import CreateComplaint from './components/CreateComplaint';
// import CheckStatus from './components/CheckStatus';
import AdminDashboard from './components/AdminDashboard';
// import UpdateComplaint from './components/UpdateComplaint';
import StatusCheck from './components/StatusCheck';
import ComplaintForm from './components/ComplaintForm';
import Confirmation from './components/Confirmation';
import AdminLogin from "./components/AdminLogin";


const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Anonymous Complaint System</h1>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
          <Link to="/">Submit Complaint</Link>
          <Link to="/status">Check Status</Link>
          <Link to="/admin">Admin Panel</Link>
          <Link to="/admin-login">Adminlogin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ComplaintForm />} />
          <Route path="/status" element={<StatusCheck />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* <Route path="/update/:id" element={<UpdateComplaint />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
