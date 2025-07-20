 Project Report: Complaint Management System (MERN Stack)
🧾 Project Title:
Complaint Management System

👨‍💻 Developed By:
Ankit Chaubey
B.Tech - Computer Science and Engineering
Final Year Student

🧰 Tech Stack Used:
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Other Tools: Axios, React Router, Mongoose, dotenv

🎯 Objective:
To create a centralized web-based platform where users can lodge complaints and check their status, while the admin can view and update complaint statuses. The system ensures transparency, traceability, and timely resolution.

🏗️ System Architecture (MERN Stack):
M - MongoDB stores user complaints and status.

E - Express.js handles API endpoints.

R - React.js provides interactive UI for users and admin.

N - Node.js runs the server backend logic.

👨‍🏫 Project Modules:
1. User Panel
Users can:

Submit complaints.

Track complaint status using Complaint ID.

2. Admin Panel
Admin can:

View all submitted complaints.

Update complaint statuses (Received, In Progress, Resolved).

Restricted access with a security check.

3. Authentication/Authorization
Basic admin access protection using email check (for now).

Can be extended to full login system using JWT.

🧪 Key Functionalities:
Feature	Description
Complaint Form	Users can submit a complaint by filling in category and description.
Status Checker	Users can track their complaint using a Complaint ID.
Admin Dashboard	Admin can view all complaints and update their statuses.
Protected Admin Route	Only authorized admin can access dashboard.

🖼️ Screenshots:
Home Page

Complaint Submission Page

Complaint Status Checker

Admin Dashboard

(📌 Add actual screenshots here if submitting a visual report)

🗂️ Folder Structure Overview (Client & Server):
bash
Copy
Edit
/client
  ├── src
  │   ├── components
  │   │   ├── ComplaintForm.jsx
  │   │   ├── StatusCheck.jsx
  │   │   ├── AdminDashboard.jsx
  │   └── App.jsx

/server
  ├── models
  │   └── Complaint.js
  ├── routes
  │   └── complaints.js
  ├── server.js
🧪 Testing:
Used Postman for API testing.

Used browser console and network tab to debug frontend.

Successfully tested CRUD operations.

📌 Future Enhancements:
Implement full authentication (JWT, bcrypt).

Add user roles and login system.

Provide email or SMS notifications on status update.

Add file uploads with complaints (images/documents).

Deploy to platforms like Render or Vercel + MongoDB Atlas.

🏁 Conclusion:
This project helps in understanding full-stack development using the MERN stack and focuses on real-world problem solving by building a simple yet functional complaint tracking system.

It promotes:

Transparency

Admin accountability

User convenience

✅ Status:
✔️ Completed and Tested Successfully.
